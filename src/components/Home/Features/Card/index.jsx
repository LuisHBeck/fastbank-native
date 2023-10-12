import { View, Text, Dimensions, FlatList } from "react-native";
import React from "react";
import { Container, Title } from "./styled";
import CardItem from "./CardItem";
import CardsInfo from "./CardInfo";

const Cards = [
  {
    id: 1,
    number: "0000 0000 0000 0000",
    expirationDate: "04/2025",
    cvv: "000",
    flag: "master",
  },
  {
    id: 2,
    number: "0000 0000 0000 0000",
    expirationDate: "04/2025",
    cvv: "000",
    flag: "visa",
  },
  {
    id: 3,
    number: "0000 0000 0000 0000",
    expirationDate: "04/2025",
    cvv: "000",
    flag: "visa",
  },
  {
    id: 4,
    number: "0000 0000 0000 0000",
    expirationDate: "04/2025",
    cvv: "000",
    flag: "master",
  },
];

const width = Dimensions.get("window").width;

const CardsList = () => {
  const renderItem = ({item}) => <CardItem card={item} key={item.id}/>;

  return (
    <Container>
      <Title>My cards</Title>
      <FlatList 
        data={Cards}
        keyExtrator={(item) => item.id}
        renderItem={renderItem}
        showHorizontalScrollIndicator={false}
        horizontal
        snapToAlignment={"start"}
        scrollEventThottle={16}
        desacelerationRate={"fast"}
        snapToOffsets={[...Array(Cards.length)].map(
          (x,i) => i*(width*0.9-40)+(i-1)*40
        )}
      />
      <CardsInfo />
    </Container>
  )  
}

export default CardsList;
