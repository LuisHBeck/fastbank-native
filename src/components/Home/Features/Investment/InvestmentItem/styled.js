import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const Card = styled.View`
  width: ${width * 0.9 - 30}px;
  min-height: ${width / 2}px;
  margin: 10px 10px;
  border-radius: 10px;
  background-color: #282829;
  padding: 15px 25px;
`;

export const FlagContainer = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const FlagImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 50px;
  height: 25px;
  margin-bottom: 10px;
`;

export const ExpirationCvvContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
`;

export const FieldContainer = styled.View``;

export const FieldTitle = styled.Text`
  font-size: 16px;
  color: white;
`;

export const FieldContent = styled.Text`
  font-size: 20px;
  color: white;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  min-width: 120px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.background};
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.color};
`;