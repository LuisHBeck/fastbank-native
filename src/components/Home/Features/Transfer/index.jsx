import React from 'react'
import { Container, Title, Form, Field, Label, Input, Button, ButtonText } from "./styled";

const Transfer = ( ) => {
  return (
    <Container>
      <Title>Transfer</Title>
      <Form>
        <Field>
          <Label>Person's Name</Label>
          <Input placeholder={"Luís Beck"}></Input>
        </Field>
        <Field>
          <Label>CPF</Label>
          <Input placeholder={"45312469840"} keyboardType='number-pad'></Input>
        </Field>
        <Button>
        <ButtonText>Send Transfer</ButtonText>
      </Button>
      </Form>
    </Container>
  )
}
export default Transfer;
