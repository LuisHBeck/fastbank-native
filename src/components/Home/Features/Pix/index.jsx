import { View, Text } from "react-native"
import React from 'react'
import { Container, Title, Field, Label, Input, Button, ButtonText } from "./styled";

const Pix = ( ) => {
  return (
    <Container>
      <Title>PIX</Title>
      <Field>
        <Label>What is the amount to be sent?</Label>
        <Input placeholder={"R$2500,00"} keyboardType="number-pad"></Input>
      </Field>
      <Field>
        <Label>What is the PIX key?</Label>
        <Input placeholder={"CPF, CNPJ, EMAIL..."}></Input>
      </Field>
      <Button>
        <ButtonText>Send PIX</ButtonText>
      </Button>
    </Container>
  )
}
export default Pix;
