import React from "react";
import { Input, Button, Text } from "@rneui/themed";
import { View, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SigIn = () => {
	const navigation = useNavigation();

	const handleNavRegister = () => {
		navigation.navigate("Register");
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
			/>
			<Input
				containerStyle={{ width: "85%" }}
				style={{ color: "white" }}
				placeholder="PASSWORD"
				secureTextEntry={true}
			/>
			<Button
				containerStyle={{ width: 180, marginTop: 70 }}
				buttonStyle={{ borderColor: "FFFFFF" }}
				titleStyle={{ color: "white" }}
				title="LOGIN"
				type="Outline"
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
