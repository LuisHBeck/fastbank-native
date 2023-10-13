import React from "react";
import { Input, Button, Text } from "@rneui/themed";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Register = () => {
	const navigation = useNavigation();

	const handleNavLogin = () => {
		navigation.navigate("SigIn");
	};

	return (
		<ScrollView style={styles.scrollView}>
		  <View style={styles.container}>
  			<Image
  				style={styles.logo}
  				source={require("../../../assets/becks-logo.png")}
  			/>
  			<Input
  				containerStyle={{ width: "85%", marginTop: 90 }}
  				style={{ color: "white" }}
  				placeholder="Name"
  			/>
  			<Input
  				containerStyle={{ width: "85%" }}
  				style={{ color: "white" }}
  				placeholder="PASSWORD"
  				secureTextEntry={true}
  			/>
  			<Input
  				containerStyle={{ width: "85%" }}
  				style={{ color: "white" }}
  				placeholder="CONFIRM PASSWORD"
  				secureTextEntry={true}
  			/>
  			<Input
  				containerStyle={{ width: "85%" }}
  				style={{ color: "white" }}
  				placeholder="CONFIRM PASSWORD"
  				secureTextEntry={true}
  			/>
  			<Input
  				containerStyle={{ width: "85%" }}
  				style={{ color: "white" }}
  				placeholder="CONFIRM PASSWORD"
  				secureTextEntry={true}
  			/>
  			<Input
  				containerStyle={{ width: "85%" }}
  				style={{ color: "white" }}
  				placeholder="CONFIRM PASSWORD"
  				secureTextEntry={true}
  			/>
  			<Button
  				containerStyle={{ width: 180, marginTop: 70 }}
  				buttonStyle={{ borderColor: "FFFFFF" }}
  				titleStyle={{ color: "white" }}
  				title="REGISTER"
  				type="Outline"
  			/>
  			<Text
  				onPress={() => handleNavLogin()}
  				h4
  				h4Style={{ color: "white", marginTop: 80 }}
  			>
  				Login
  			</Text>
  		</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  },
	container: {
		flex: 1,
		backgroundColor: "#121212",
		paddingTop: 120,
    paddingBottom: 60,
		alignItems: "center",
	},
	logo: {
		width: 120,
		height: 120,
	},
});

export default Register;
