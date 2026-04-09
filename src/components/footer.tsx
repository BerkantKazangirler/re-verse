export const DashboardFooter = () => {
  return (
    <div className="w-full font-inter font-medium text-2xs py-2 text-[#4f5c6e] flex flex-row justify-between px-4">
      <div className="flex flex-row gap-1">
        <span>RE-VERSE Geospatial Intelligence</span>
        <span>•</span>
        <span>İstanbul Metropolitan Area</span>
      </div>
      <div className="flex flex-row gap-3">
        <span>Coord: 41.0082° N, 28.9784° E</span>
        <span>Scale 1:15,000</span>
      </div>
    </div>
  );
};
