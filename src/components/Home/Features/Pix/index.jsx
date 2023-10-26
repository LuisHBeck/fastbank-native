import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import {
	Container,
	Title,
	Field,
	Label,
	Input,
	Button,
	ButtonText,
} from "./styled";
import * as api from "../../../../services/api";

const Pix = () => {
	const [receiverAcc, setReceiverAcc] = useState(0);
	const [amount, setAmount] = useState(0.0);

  const { account, jwt } = api.useAuth();

  const sendPix = async () => {
    const response = await api.createPix(account, receiverAcc, amount, jwt)
    response === 201 ? Alert.alert("Successfully sent", `R$${amount} to ${receiverAcc}`) :
    Alert.alert("Failed to send", "Review the data provided and try again")
  }

	return (
		<Container>
			<Title>PIX</Title>
			<Field>
				<Label>What is the amount to be sent?</Label>
				<Input
					placeholder={"R$2500,00"}
					keyboardType="number-pad"
					onChangeText={(value) => setAmount(parseFloat(value))}
				/>
			</Field>
			<Field>
				<Label>What is the PIX key?</Label>
				<Input
					placeholder={"1111"}
					onChangeText={(value) => setReceiverAcc(value)}
				/>
			</Field>
			<Button>
				<ButtonText onPress={() => sendPix()} >Send PIX</ButtonText>
			</Button>
		</Container>
	);
};
export default Pix;
