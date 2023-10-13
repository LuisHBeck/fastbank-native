import styled from "styled-components/native";

export const Container = styled.View`
  background: #000000;
  width: 100%;
  min-height: 95px;
  vertical-align: center;
  align-items: center;
  justify-content: flex-end;
  z-index: -1;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

export const Button = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  border-radius: 45px;
  padding: 10px;
  background-color: #161317;
  justify-content: center;
  align-items: center;
  margin: 0 19px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: white;
  font-weight: bold;
`;