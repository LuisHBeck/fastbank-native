import styled from "styled-components/native";

export const Container = styled.View`
	width: 85%;
	margin: 0 auto;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const FeatureBtn = styled.TouchableOpacity.attrs({
	activeOpacity: 0.85,
})`
	min-width: 100px;
	height: 30px;
	padding: 0 10px;
	border: 1px solid #e53d41;
	border-radius: 5px;
	margin: 0 5px;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const FeatureBtnTxt = styled.Text`
	font-size: 16px;
	color: white;
`;
