import { StatusBar } from "expo-status-bar";
import Home from "./src/screens/Home";
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	return (
    <>
      <StatusBar style="light" />
      <Routes />
    </>
	);
}
