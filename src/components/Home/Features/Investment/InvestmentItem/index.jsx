import { View, Text, Alert } from "react-native";
import React from "react";
import {
	Investment,
	FlagContainer,
	FlagImage,
	FieldContainer,
	FieldTitle,
	FieldContent,
	ExpirationCvvContainer,
	Button,
	ButtonText
} from "./styled";
import * as api from "../../../../../services/api"

const InvestmentItem = ({ investment }) => {
	const { jwt, account } = api.useAuth();

	const invest = async () => {
		const response  = await api.createAccInvestment(account, investment.id, jwt)
		response === 201 ? Alert.alert("Investment", "Successfully invested") : "" 
	}

	const requestAlert = () => {
		Alert.alert("Investment", "If you press 'Ok' you will invest your money on this stock exchange", [
			{
				text:"Cancel",
				style:"cancel"
			},
			{
				text:"Ok",
				onPress: invest
			}
		])
	}

	return (
		<Investment>
			<FlagContainer>
				<Button background={"#98E9D4"} onPress={requestAlert}>
					<ButtonText>Invest</ButtonText>
				</Button>
			</FlagContainer>
			<FieldContainer>
				<FieldTitle>Contribution</FieldTitle>
				<FieldContent>R${investment.contribution}</FieldContent>
			</FieldContainer>
			<ExpirationCvvContainer>
				<FieldContainer>
					<FieldTitle>Expires</FieldTitle>
					<FieldContent>{investment.period}</FieldContent>
				</FieldContainer>
				<FieldContainer>
					<FieldTitle>Profitability</FieldTitle>
					<FieldContent>{investment.profitability}%</FieldContent>
				</FieldContainer>
				
			</ExpirationCvvContainer>
		</Investment>
	);
};
export default InvestmentItem;