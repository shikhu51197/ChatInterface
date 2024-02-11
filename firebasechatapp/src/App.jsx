import Navbar from "./Components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <MainRoute />
    </AuthProvider>
  );
}

export default App;
