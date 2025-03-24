import "./App.css";
import AppRoutes from "./routes";
import { UserProvider } from "./Context/UserContext";
import { SelectedClientsProvider } from "./Context/SelectClientContext";

function App() {
  return (
    <>
      <SelectedClientsProvider>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </SelectedClientsProvider>
    </>
  );
}

export default App;
