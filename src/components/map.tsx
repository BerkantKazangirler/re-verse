import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export const Mapbox = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    const token = import.meta.env.VITE_MAPBOX_TOKEN;
    if (!token) {
      console.error(
        "Missing VITE_MAPBOX_TOKEN. Mapbox cannot initialize without it.",
      );
      return;
    }

    mapboxgl.accessToken = token;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/standard",
      config: {
        basemap: {
          theme: "monochrome",
          lightPreset: "night",
        },
      },
      center: [-103.5917, 40.6699],
      zoom: 3,
    });

    mapRef.current = map;

    map.on("load", () => {
      map.addSource("earthquakes", {
        type: "geojson",
        generateId: true,
        data: "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson",
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      map.addLayer({
        id: "clusters",
        type: "circle",
        source: "earthquakes",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#51bbd6",
            100,
            "#f1f075",
            750,
            "#f28cb1",
          ],
          "circle-radius": [
            "step",
            ["get", "point_count"],
            20,
            100,
            30,
            750,
            40,
          ],
          "circle-emissive-strength": 1,
        },
      });

      map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "earthquakes",
        filter: ["has", "point_count"],
        layout: {
          "text-field": ["get", "point_count_abbreviated"],
          "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
          "text-size": 12,
        },
      });

      map.addLayer({
        id: "unclustered-point",
        type: "circle",
        source: "earthquakes",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": "#11b4da",
          "circle-radius": 4,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#fff",
          "circle-emissive-strength": 1,
        },
      });

      // When a click event occurs on a cluster,
      // getClusterExpansionZoom grabs the zoomlevel where the cluster expands
      // Then the viewport zooms in to show the expanded cluster
      // Displaying the underlying individual points and/or smaller clusters
      map.addInteraction("click-clusters", {
        type: "click",
        target: { layerId: "clusters" },
        handler: (e) => {
          const features = map.queryRenderedFeatures(e.point, {
            layers: ["clusters"],
          });
          const feature = features[0];
          if (!feature) return;

          const clusterId = (feature.properties as { cluster_id: number })
            .cluster_id;
          const source = map.getSource("earthquakes") as mapboxgl.GeoJSONSource;

          source.getClusterExpansionZoom(clusterId, (err, zoom) => {
            if (err) return;
            if (zoom == null) return;

            const center = (feature.geometry as GeoJSON.Point).coordinates as [
              number,
              number,
            ];

            map.easeTo({
              center,
              zoom,
            });
          });
        },
      });

      // When a click event occurs on a feature in
      // the unclustered-point layer, open a popup at
      // the location of the feature, with
      // description HTML from its properties.
      map.addInteraction("click-unclustered", {
        type: "click",
        target: { layerId: "unclustered-point" },
        handler: (e) => {
          const feature = e.feature;
          if (!feature) return;

          const coordinates = (feature.geometry as GeoJSON.Point)
            .coordinates as [number, number];
          const properties = feature.properties as {
            mag?: number;
            tsunami?: number;
          };
          const mag = properties.mag;
          const tsunami = properties.tsunami === 1 ? "yes" : "no";

          new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(`magnitude: ${mag}<br>Was there a tsunami?: ${tsunami}`)
            .addTo(map);
        },
      });

      // Change the cursor to a pointer when the mouse is over a cluster of POIs.
      map.addInteraction("clustered-mouseenter", {
        type: "mouseenter",
        target: { layerId: "clusters" },
        handler: () => {
          map.getCanvas().style.cursor = "pointer";
        },
      });

      // Change the cursor back to a pointer when it stops hovering over a cluster of POIs.
      map.addInteraction("clustered-mouseleave", {
        type: "mouseleave",
        target: { layerId: "clusters" },
        handler: () => {
          map.getCanvas().style.cursor = "";
        },
      });

      // Change the cursor to a pointer when the mouse is over an individual POI.
      map.addInteraction("unclustered-mouseenter", {
        type: "mouseenter",
        target: { layerId: "unclustered-point" },
        handler: () => {
          map.getCanvas().style.cursor = "pointer";
        },
      });

      // Change the cursor back to a pointer when it stops hovering over an individual POI.
      map.addInteraction("unclustered-mouseleave", {
        type: "mouseleave",
        target: { layerId: "unclustered-point" },
        handler: () => {
          map.getCanvas().style.cursor = "";
        },
      });
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div id="map" ref={mapContainerRef} className="h-full w-full" />;
};
