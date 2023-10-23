import React, { useState, useCallback } from "react";
import { Input, Button, Text } from "@rneui/themed";
import { View, StyleSheet, Image, ScrollView, Alert } from "react-native";
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
	// const [variant, setVariant] = useState("natural");
	const [variant, setVariant] = useState("");

	const [finishedFirstSteps, setFinishedFirstSteps] = useState(true);

	const [street, setStreet] = useState("");
	const [number, setNumber] = useState("");
	const [neighborhood, setNeighborhood] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [cep, setCep] = useState("");

	const [email, setEmail] = useState("");

	const [areaCode, setAreaCode] = useState("");
	const [prefixNumber, setPrefixNumber] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const toggleVariant = useCallback(() => {
		setVariant((currentVariant) =>
			currentVariant === "natural" ? "legal" : "natural"
		);
	}, []);

	const navigation = useNavigation();

	const handleNavLogin = () => {
		navigation.navigate("SigIn");
	};

	const showAlert = () => {
		Alert.alert("Successfully register", "Now you can SigIn");
		navigation.navigate("SigIn");
		handleNavLogin();
	};

	const handleFinishFirstSteps = () => {
		setVariant("");
		setFinishedFirstSteps(true);
	};

	const { login } = api.useAuth();

	const registration = async () => {
		const user = await api.createUser(registerNumber, "a", password);
		if (user === 201) {
			const jwt = await api.createJwt(registerNumber, password, login);
			if (variant === "natural") {
				const response = await api.naturalRegister(
					registerNumber,
					name,
					birthDate,
					rg,
					socialName,
					jwt.jwt
				);
				// response.status === 201 ? showAlert() : "";
				response.status === 201 ? handleFinishFirstSteps() : false;
			} else if (variant === "legal") {
				const response = await api.legalRegister(
					registerNumber,
					fantasyName,
					establishmentDate,
					municipalRegistration,
					stateRegistration,
					legalNature,
					jwt.jwt
				);
				// response.status === 201 ? showAlert() : "";
				response.status === 201 ? handleFinishFirstSteps() : false;
			}
		}
		if (finishedFirstSteps) {
		}
	};

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
							value={registerNumber}
							onChangeText={(value) => setRegisterNumber(value)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="Full Name"
							value={name}
							onChangeText={(value) => setName(value)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="Birth date"
							value={birthDate}
							onChangeText={(value) => setBirthDate(value)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="RG"
							keyboardType="number-pad"
							value={rg}
							onChangeText={(value) => setRg(value)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="Social Name"
							value={socialName}
							onChangeText={(value) => setSocialName(value)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="Password"
							secureTextEntry={true}
							value={password}
							onChangeText={(value) => setPassword(value)}
						/>
					</>
				)}
				{variant === "legal" && (
					<>
						<Input
							containerStyle={{ width: "85%", marginTop: 70 }}
							style={{ color: "white" }}
							placeholder="CNPJ"
							value={registerNumber}
							onChangeText={(value) => setRegisterNumber(value)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="Fantasy Name"
							value={fantasyName}
							onChangeText={(value) => setFantasyName(value)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="Establishment Date"
							value={establishmentDate}
							onChangeText={(value) => setEstablishmentDate(value)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="Municipal Registration"
							keyboardType="number-pad"
							value={municipalRegistration}
							onChangeText={(value) => setMunicipalRegistration(value)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="State Registration"
							keyboardType="number-pad"
							value={stateRegistration}
							onChangeText={(value) => setStateRegistration(value)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="Legal Nature"
							value={legalNature}
							onChangeText={(value) => setLegalNature(value)}
						/>
						<Input
							containerStyle={{ width: "85%" }}
							style={{ color: "white" }}
							placeholder="Password"
							secureTextEntry={true}
							value={password}
							onChangeText={(value) => setPassword(value)}
						/>
					</>
				)}
				{finishedFirstSteps && (
					<>
						<Input
							containerStyle={{ width: "85%", marginTop: 70 }}
							style={{ color: "white" }}
							placeholder="Street"
							value={street}
							onChangeText={(value) => setStreet(value)}
						/>
						<Input
							containerStyle={{ width: "85%"}}
							style={{ color: "white" }}
							placeholder="Number"
							value={number}
							onChangeText={(value) => setNumber(value)}
							keyboardType="number-pad"
						/>
						<Input
							containerStyle={{ width: "85%"}}
							style={{ color: "white" }}
							placeholder="Neighborhood"
							value={neighborhood}
							onChangeText={(value) => setNeighborhood(value)}
						/>
						<Input
							containerStyle={{ width: "85%"}}
							style={{ color: "white" }}
							placeholder="City"
							value={city}
							onChangeText={(value) => setCity(value)}
						/>
						<Input
							containerStyle={{ width: "85%"}}
							style={{ color: "white" }}
							placeholder="State"
							value={state}
							onChangeText={(value) => setState(value)}
						/>
						<Input
							containerStyle={{ width: "85%"}}
							style={{ color: "white" }}
							placeholder="CEP"
							value={cep}
							onChangeText={(value) => setCep(value)}
							keyboardType="number-pad"
						/>
						<Input
							containerStyle={{ width: "85%"}}
							style={{ color: "white" }}
							placeholder="E-mail"
							value={email}
							onChangeText={(value) => setEmail(value)}
						/>
						<Input
							containerStyle={{ width: "85%"}}
							style={{ color: "white" }}
							placeholder="Area Code"
							value={areaCode}
							onChangeText={(value) => setAreaCode(value)}
							keyboardType="number-pad"
						/>
						<Input
							containerStyle={{ width: "85%"}}
							style={{ color: "white" }}
							placeholder="Prefix Number"
							value={prefixNumber}
							onChangeText={(value) => setPrefixNumber(value)}
							keyboardType="number-pad"
						/>
						<Input
							containerStyle={{ width: "85%"}}
							style={{ color: "white" }}
							placeholder="Phone Number"
							value={phoneNumber}
							onChangeText={(value) => setPhoneNumber(value)}
							keyboardType="number-pad"
						/>
					</>
				)}
				<Button
					containerStyle={{ width: 180, marginTop: 70 }}
					buttonStyle={{ borderColor: "FFFFFF" }}
					titleStyle={{ color: "white" }}
					title="REGISTER"
					type="Outline"
					onPress={() => registration()}
				/>
				{!finishedFirstSteps && (
				<Text
					onPress={() => toggleVariant()}
					h4
					h4Style={{ color: "white", marginTop: 80 }}
				>
					{variant === "natural"
						? "Legal Registration"
						: "Natural Registration"}
				</Text>)}
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