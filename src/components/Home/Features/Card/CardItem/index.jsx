import { View, Text } from "react-native";
import React from "react";
import {
	Card,
	FlagContainer,
	FlagImage,
	FieldContainer,
	FieldTitle,
	FieldContent,
	ExpirationCvvContainer,
} from "./styled";

const CardItem = ({ card }) => {
	return (
		<Card>
			<FlagContainer>
				{card.flag == "visa" ? (
					<FlagImage source={require("../../../../../../assets/visa.png")} />
				) : (
					<FlagImage source={require("../../../../../../assets/master.png")} />
				)}
			</FlagContainer>
			<FieldContainer>
				<FieldTitle>Card Number</FieldTitle>
				<FieldContent>{card.number}</FieldContent>
			</FieldContainer>
			<ExpirationCvvContainer>
				<FieldContainer>
					<FieldTitle>Expires</FieldTitle>
					<FieldContent>{card.expirationDate}</FieldContent>
				</FieldContainer>
				<FieldContainer>
					<FieldTitle>CVV</FieldTitle>
					<FieldContent>{card.cvv}</FieldContent>
				</FieldContainer>
			</ExpirationCvvContainer>
		</Card>
	);
};
export default CardItem;
