import { createContext, useContext, useState } from "react";

type DataContextType = {
  serverName: string;
  setServerName: React.Dispatch<React.SetStateAction<string>>;
};

const DataContext = createContext<DataContextType>({
  serverName: "",
  setServerName: () => {},
});

export const useDataContext = () => useContext(DataContext);

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [serverName, setServerName] = useState<string>("KAVUN");

  return (
    <DataContext.Provider
      value={{
        serverName,
        setServerName,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
