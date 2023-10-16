import { View, Text, Dimensions, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Container, Title } from "./styled";
import CardItem from "./CardItem";
import CardsInfo from "./CardInfo";
import { useAuth, getAccount, getCards } from "../../../../services/api";

// const Cards = [
// 	{
// 		id: 1,
// 		number: "0000 0000 0000 0000",
// 		expirationDate: "04/2025",
// 		cvv: "000",
// 		flag: "master",
// 	},
// 	{
// 		id: 2,
// 		number: "0000 0000 0000 0000",
// 		expirationDate: "04/2025",
// 		cvv: "000",
// 		flag: "visa",
// 	},
// 	{
// 		id: 3,
// 		number: "0000 0000 0000 0000",
// 		expirationDate: "04/2025",
// 		cvv: "000",
// 		flag: "visa",
// 	},
// 	{
// 		id: 4,
// 		number: "0000 0000 0000 0000",
// 		expirationDate: "04/2025",
// 		cvv: "000",
// 		flag: "master",
// 	},
// ];

const width = Dimensions.get("window").width;

const CardsList = () => {
	const renderItem = ({ item }) => <CardItem card={item} key={item.id} />;

	const [cardLimit, setCardLimit] = useState("0.00");
	const [cards, setCards] = useState([]);

	const { jwt } = useAuth();

	useEffect(() => {
		const fetchAccountData = async (accountNumber, jwt) => {
			try {
				const account = await getAccount(accountNumber, jwt);
				setCardLimit(account.creditLimit);
        const cardsData = await getCards(accountNumber, jwt)
        setCards(cardsData)
			} catch (err) {
				console.error(err);
			}
		};
		fetchAccountData(1111, jwt);
	}, []);

	return (
		<Container>
			<Title>My cards</Title>
			<FlatList
				data={cards}
				keyExtrator={(item) => item.id}
				renderItem={renderItem}
				showHorizontalScrollIndicator={false}
				horizontal
				snapToAlignment={"start"}
				scrollEventThottle={16}
				desacelerationRate={"fast"}
				snapToOffsets={[...Array(cards.length)].map(
					(x, i) => i * (width * 0.9 - 40) + (i - 1) * 40
				)}
			/>
			<CardsInfo totalLimit={cardLimit} />
		</Container>
	);
};

export default CardsList;
