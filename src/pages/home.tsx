import { DashboardFooter, Mapbox } from "@/components";

export const Home = () => {
  return (
    <div className="h-full bg-[#080B12] flex flex-col min-h-0 w-full">
      <Mapbox />
      <DashboardFooter />
    </div>
  );
};
