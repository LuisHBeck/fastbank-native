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

const InvestmentItem = ({ investment }) => {
	return (
		<Card>
			<FlagContainer>
				{/* {investment.flag == "visa" ? (
					<FlagImage source={require("../../../../../../assets/visa.png")} />
				) : (
					<FlagImage source={require("../../../../../../assets/master.png")} />
				)} */}
			</FlagContainer>
			<FieldContainer>
				<FieldTitle>Contribution</FieldTitle>
				<FieldContent>{investment.contribution}</FieldContent>
			</FieldContainer>
			<ExpirationCvvContainer>
				<FieldContainer>
					<FieldTitle>Expires</FieldTitle>
					<FieldContent>{investment.period}</FieldContent>
				</FieldContainer>
				<FieldContainer>
					<FieldTitle>Profitability</FieldTitle>
					<FieldContent>{investment.profitability}</FieldContent>
				</FieldContainer>
			</ExpirationCvvContainer>
		</Card>
	);
};
export default InvestmentItem;