import {} from "react-native";
import React from "react";
import { Container, FeatureBtn, FeatureBtnTxt } from "./styled";

import FeatherIcon from 'react-native-vector-icons/Feather'

const SelectFeatures = ({ setFeature }) => {
	return (
		<Container>
			<FeatureBtn
				onPress={() => {
					setFeature("Cards");
				}}
			>
				<FeatureBtnTxt>
					<FeatherIcon name="credit-card" size={20} color="#e53d41" />{" "}
					Cards
				</FeatureBtnTxt>
			</FeatureBtn>
			<FeatureBtn
				onPress={() => {
					setFeature("Transfer");
				}}
			>
				<FeatureBtnTxt>
					<FeatherIcon name={'triangle'} size={20} color={'#E52144'} />{" "}
					Loan
				</FeatureBtnTxt>
			</FeatureBtn>
			<FeatureBtn
				onPress={() => {
					setFeature("Pix");
				}}
			>
				<FeatureBtnTxt>
					<FeatherIcon name={'slack'} size={20} color={'#E52144'} />{" "}
					Pix
				</FeatureBtnTxt>
			</FeatureBtn>
		</Container>
	);
};

export default SelectFeatures;
