import { StatusBar } from "expo-status-bar";
import Routes from "./src/routes";
import { AuthProvider } from "./src/services/api"

export default function App() {
	return (
    <AuthProvider>
      <StatusBar style="light" />
      <Routes />
    </AuthProvider>
	);
}
