import React, { useState } from "react";
import { Input, Button, Text } from "@rneui/themed";
import { View, StyleSheet, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import createJwt, { useAuth } from "../../services/api";

const showAlert = () =>
	Alert.alert("Login failed", "Wrong username or password", [
		{
			text: "Ok",
			onPress: () => {},
			style: "cancel",
		},
	]);

const SigIn = () => {
	const [registerNumber, setRegisterNumber] = useState("");
	const [password, setPassword] = useState("");

	const handleInputChange = (value, setStateFunction) => {
		setStateFunction(value);
	};

	const navigation = useNavigation();

	const handleNavRegister = () => {
		navigation.navigate("Register");
	};

	const handleNavHome = () => {
		navigation.navigate("Home");
	};

	const { login } = useAuth();

	const handleLoginFunction = async () => {
		const response = await createJwt(registerNumber, password, login);
		response.status === 200 ? handleNavHome() : showAlert();
	};

	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={require("../../../assets/becks-logo.png")}
			/>
			<Input
				containerStyle={{ width: "85%", marginTop: 90 }}
				style={{ color: "white" }}
				placeholder="CPF / CNPJ"
				keyboardType="number-pad"
				onChangeText={(text) => handleInputChange(text, setRegisterNumber)}
			/>
			<Input
				containerStyle={{ width: "85%" }}
				style={{ color: "white" }}
				placeholder="PASSWORD"
				secureTextEntry={true}
				onChangeText={(text) => handleInputChange(text, setPassword)}
			/>
			<Button
				containerStyle={{ width: 180, marginTop: 70 }}
				buttonStyle={{ borderColor: "FFFFFF" }}
				titleStyle={{ color: "white" }}
				title="LOGIN"
				type="Outline"
				onPress={() => handleLoginFunction()}
			/>
			<Text
				onPress={() => handleNavRegister()}
				h4
				h4Style={{ color: "white", marginTop: 80 }}
			>
				Resgiter
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#121212",
		paddingTop: 120,
		alignItems: "center",
	},
	logo: {
		width: 120,
		height: 120,
	},
});

export default SigIn;
