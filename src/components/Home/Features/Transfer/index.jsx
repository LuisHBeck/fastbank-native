import React, { useState } from 'react'
import { Container, Title, Form, Field, Label, Input, Button, ButtonText } from "./styled";
import * as api from "../../../../services/api"
import { Alert } from 'react-native';

const Transfer = ( ) => {
  const [amount, setAmount] = useState(0.0)
  const [installmentAmount, setInstallmentAmount] = useState(0)
  const [observation, setObservation] = useState("")

  const { jwt, account } = api.useAuth();

  const requestLoan = async () => {
    const response = await api.createLoan(account, amount, installmentAmount, observation, jwt)
    Alert.alert("Loan Requested", `${response.data}`)
  }

  return (
    <Container>
      <Title>Loan</Title>
      <Form>
        <Field>
          <Label>Amount</Label>
          <Input placeholder={"R$2.500"} keyboardType='number-pad' onChangeText={(value) => setAmount(value)}/>
        </Field>
        <Field>
          <Label>Installments</Label>
          <Input placeholder={"2"} keyboardType='number-pad' onChangeText={(value) => setInstallmentAmount(value)}></Input>
        </Field>
        <Field>
          <Label>Observation</Label>
          <Input placeholder={"For personal use"} onChangeText={(value) => setObservation(value)}></Input>
        </Field>
        <Button onPress={requestLoan}>
          <ButtonText>Request</ButtonText>
        </Button>
      </Form>
    </Container>
  )
}
export default Transfer;
