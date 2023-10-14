import React, { useState, useCallback } from "react";
import { Input, Button, Text } from "@rneui/themed";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as api from "../../services/api";
import axios from "axios";

const Register = () => {
	const [registerNumber, setRegisterNumber] = useState("");
	const [password, setPassword] = useState("");

	const [name, setName] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [rg, setRg] = useState("");
	const [socialName, setSocialName] = useState("");

	const [fantasyName, setFantasyName] = useState("");
	const [establishmentDate, setEstablishmentDate] = useState("");
	const [municipalRegistration, setMunicipalRegistration] = useState("");
	const [stateRegistration, setStateRegistration] = useState("");
	const [legalNature, setLegalNature] = useState("");

	const handleInputChange = (value, setStateFunction) => {
		setStateFunction(value);
	};

	const [variant, setVariant] = useState("natural");

	const toggleVariant = useCallback(() => {
		setVariant((currentVariant) =>
			currentVariant === "natural" ? "legal" : "natural"
		);
	}, []);

	const navigation = useNavigation();

	const handleNavLogin = () => {
		navigation.navigate("SigIn");
	};

	const { jwt, login } = api.useAuth();

	const registration = async () => {
		const user = await api.createUser(registerNumber, "a", password)
		if(user === 200) {
			await api.createJwt(registerNumber, password, login)
			if (variant === "natural"){
				const response = await api.naturalRegister(registerNumber, name, birthDate, rg, socialName, jwt)
				console.log(response)
			}
		} 
	}

	return (
		<ScrollView style={styles.scrollView}>
			<View style={styles.container}>
				<Image
					style={styles.logo}
					source={require("../../../assets/becks-logo.png")}
				/>
				{variant === "natural" && (
					<>
						<Input
							containerStyle={{ width: "85%", marginTop: 70 }}
							style={{ color: "white" }}
							placeholder="CPF"
							keyboardType="number-pad"
							onChange={(text) => handleInputChange(text, setRegisterNumber)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="Full Name"
							onChange={(text) => handleInputChange(text, setName)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="Birth date"
							onChange={(text) => handleInputChange(text, setBirthDate)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="RG"
							keyboardType="number-pad"
							onChange={(text) => handleInputChange(text, setRg)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="Social Name"
							onChange={(text) => handleInputChange(text, setSocialName)}
						/>
					</>
				)}
				{variant === "legal" && (
					<>
						<Input
							containerStyle={{ width: "85%", marginTop: 70 }}
							style={{ color: "white" }}
							placeholder="CNPJ"
							onChange={(text) => handleInputChange(text, setRegisterNumber)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="Fantasy Name"
							onChange={(text) => handleInputChange(text, setFantasyName)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="Establishment Date"
							onChange={(text) => handleInputChange(text, setEstablishmentDate)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="Municipal Registration"
							keyboardType="number-pad"
							onChange={(text) => handleInputChange(text, setMunicipalRegistration)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="State Registration"
							keyboardType="number-pad"
							onChange={(text) => handleInputChange(text, setStateRegistration)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="Legal Nature"
							onChange={(text) => handleInputChange(text, setLegalNature)}
						/>
					</>
				)}
				<Input
					containerStyle={{ width: "85%" }}
					style={{ color: "white" }}
					placeholder="Password"
					secureTextEntry={true}
					onChange={(text) => handleInputChange(text, setPassword)}
				/>
				<Button
					containerStyle={{ width: 180, marginTop: 70 }}
					buttonStyle={{ borderColor: "FFFFFF" }}
					titleStyle={{ color: "white" }}
					title="REGISTER"
					type="Outline"
					onPress={() => registration()}
				/>
				<Text  onPress={() => toggleVariant()} h4 h4Style={{ color: "white", marginTop: 80 }}>
					{variant === "natural"
						? "Legal Registration"
						: "Natural Registration"}
				</Text>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	scrollView: {
		flex: 1,
	},
	container: {
		flex: 1,
		backgroundColor: "#121212",
		paddingTop: 100,
		paddingBottom: 60,
		alignItems: "center",
	},
	logo: {
		width: 100,
		height: 100,
	},
});

export default Register;
