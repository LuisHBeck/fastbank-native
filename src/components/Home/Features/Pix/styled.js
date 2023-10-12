import styled from "styled-components/native";

export const Container = styled.View`
  width: 85%;
  min-height: 220px;
  margin: 0 auto;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Field = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 15px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 25px;
  border: 0px solid #282829;
  border-bottom-width: 1px;
`;

export const Button = styled.TouchableOpacity`
  min-width: 120px;
  min-height: 40px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 15px;
  justify-content: center;
  align-items: center;
  background-color: #282829;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;