import styled from "styled-components/native";

export const Container = styled.View`
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

export const InfoContainer = styled.View`
  align-items: flex-end;
`;

export const InfoTitle = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export const InfoContent = styled.Text`
  font-size: 12px;
  color: ${(props) => props.color};
`;