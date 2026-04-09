import { SystemStatus } from "@/types";
import { Building2, List, Map, Package, Radio } from "lucide-react";
import { createContext, useContext, useState } from "react";

type DataContextType = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  systemStatus: SystemStatus;
  setSystemStatus: React.Dispatch<React.SetStateAction<SystemStatus>>;
  dashboardTabs: {
    id: string;
    text: string;
    icon: React.ElementType;
  }[];
};

const DataContext = createContext<DataContextType>({
  activeTab: "",
  setActiveTab: () => {},
  systemStatus: SystemStatus.ONLINE,
  setSystemStatus: () => {},
  dashboardTabs: [],
});

export const useDataContext = () => useContext(DataContext);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<string>("interactive-map");
  const [systemStatus, setSystemStatus] = useState<SystemStatus>(
    SystemStatus.ONLINE,
  );
  const dashboardTabs = [
    {
      id: "interactive-map",
      text: "Interactive Map",
      icon: Map,
    },
    {
      id: "triage-list",
      text: "Triage List",
      icon: List,
    },
    {
      id: "building-map",
      text: "Building Map",
      icon: Building2,
    },
    {
      id: "logistic-map",
      text: "Logistic Map",
      icon: Package,
    },
    {
      id: "emergency-signals",
      text: "E. Signals",
      icon: Radio,
    },
  ];

  return (
    <DataContext.Provider
      value={{
        activeTab,
        setActiveTab,
        systemStatus,
        setSystemStatus,
        dashboardTabs,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
