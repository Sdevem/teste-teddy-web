import { createContext, useContext, useState, ReactNode } from "react";

interface SelectedClientsContextType {
  selectedIds: number[];
  toggleClient: (id: number) => void;
  clearSelection: () => void;
}

const SelectedClientsContext = createContext<
  SelectedClientsContextType | undefined
>(undefined);

export const SelectedClientsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const toggleClient = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const clearSelection = () => setSelectedIds([]);

  return (
    <SelectedClientsContext.Provider
      value={{ selectedIds, toggleClient, clearSelection }}
    >
      {children}
    </SelectedClientsContext.Provider>
  );
};

export const useSelectedClients = () => {
  const context = useContext(SelectedClientsContext);
  if (!context) {
    throw new Error(
      "useSelectedClients precisa estar dentro de um SelectedClientsProvider"
    );
  }
  return context;
};
