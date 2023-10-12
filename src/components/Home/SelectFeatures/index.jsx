import {} from "react-native";
import React from "react";
import { Container, FeatureBtn, FeatureBtnTxt } from "./styled";

import CardsList from "../Features/Card";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const SelectFeatures = ({ setFeature }) => {
	return (
		<Container>
			<FeatureBtn
				onPress={() => {
					setFeature("Cards");
				}}
			>
				<FeatureBtnTxt>
					<MaterialIcons name="credit-card" size={20} color="#e53d41" />Cards
				</FeatureBtnTxt>
			</FeatureBtn>
			<FeatureBtn
				onPress={() => {
					setFeature("Transfer");
				}}
			>
				<FeatureBtnTxt>
					<MaterialIcons name="bank-transfer" size={20} color="#e53d41" />{" "}
					Transfer
				</FeatureBtnTxt>
			</FeatureBtn>
			<FeatureBtn
				onPress={() => {
					setFeature("Pix");
				}}
			>
				<FeatureBtnTxt>
					<MaterialIcons name="bank-transfer-out" size={20} color="#e53d41" />{" "}
					Pix
				</FeatureBtnTxt>
			</FeatureBtn>
		</Container>
	);
};

export default SelectFeatures;
