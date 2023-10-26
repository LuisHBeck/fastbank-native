import { View, Text, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import {
	Container,
	ButtonText,
	Button,
	InfoContainer,
	InfoTitle,
	InfoContent,
} from "./styled";

import * as api from "../../../../../services/api"

const CardInfo = ({ totalLimit, currentLimit, finalInstallment }) => {
	const { jwt, account } = api.useAuth();

	const requestCard = async () => {
		const response = await api.createCard(account, jwt)
		Alert.alert("Requested", `${response.data}`)
	}	

	const requestAlert = () => {
		Alert.alert("Request a card", "If you press 'Ok' you will request a credit card", [
			{
				text:"Cancel",
				style:"cancel"
			},
			{
				text:"Ok",
				onPress: requestCard
			}
		])
	}

	return (
		<>
			<Container>
				<Button background={"#d8d8d8"} onPress={requestAlert}>
					<ButtonText>REQUEST CARD</ButtonText>
				</Button>
			</Container>
			<Container>
				<Button background={"#d8d8d8"}>
					<ButtonText>PREVIOUS</ButtonText>
				</Button>
				<InfoContainer>
					<InfoTitle>NEXT INSTALLMENTS</InfoTitle>
					<InfoContent color={"#000000"}>R${finalInstallment}</InfoContent>
				</InfoContainer>
			</Container>
			<Container>
				<Button background={"#F5C6C7"}>
					<ButtonText color={"#e53d41"}>SEE INSTALLMENT</ButtonText>
				</Button>
				<InfoContainer>
					<InfoTitle>CURRENT LIMIT</InfoTitle>
					<InfoContent color={"#e53d41"}>R${currentLimit}</InfoContent>
				</InfoContainer>
			</Container>
			<Container>
				<Button background={"#98E9D4"}>
					<ButtonText color={"#00BA80"}>SEE INSTALLMENT</ButtonText>
				</Button>
				<InfoContainer>
					<InfoTitle>TOTAL LIMIT</InfoTitle>
					<InfoContent color={"#00BA80"}>R${totalLimit}</InfoContent>
				</InfoContainer>
			</Container>
		</>
	);
};
export default CardInfo;
