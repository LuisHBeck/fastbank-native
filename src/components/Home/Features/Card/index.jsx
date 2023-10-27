import { View, Text, Dimensions, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Container, Title } from "./styled";
import CardItem from "./CardItem";
import CardsInfo from "./CardInfo";
import {
	useAuth,
	getAccount,
	getCards,
	getInstallments,
} from "../../../../services/api";

const width = Dimensions.get("window").width;

const CardsList = () => {
	const renderItem = ({ item }) => <CardItem card={item} key={item.id} />;

	const [cardLimit, setCardLimit] = useState(0.0);
	const [currentLimit, setCurrentLimit] = useState(0.0);
	const [finalInstallment, setFinalInstallment] = useState(0.0);
	const [cards, setCards] = useState([]);

	const { jwt, account } = useAuth();

	useEffect(() => {
		const fetchAccountData = async (accountNumber, jwt) => {
			try {
				const account = await getAccount(accountNumber, jwt);
				setCardLimit(account.creditLimit);

				const cardsData = await getCards(accountNumber, jwt);
				setCards(cardsData);

				const installments = await getInstallments(accountNumber, jwt, true);
				setFinalInstallment(installments);
				const limit = parseFloat(cardLimit) - installments;
				const limitedLimit = parseFloat(limit.toFixed(2));
				setCurrentLimit(limitedLimit);
			} catch (err) {
				console.error(err);
			}
		};
		fetchAccountData(account, jwt);
	}, []);

	return (
		<Container>
			<Title>My cards</Title>
			<FlatList
				data={cards}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				showsHorizontalScrollIndicator={false}
				horizontal
				snapToAlignment={"start"}
				scrollEventThrottle={16}
				decelerationRate={"fast"}
				snapToOffsets={[...Array(cards.length)].map(
					(x, i) => i * (width * 0.9 - 40) + (i - 1) * 40
				)}
			/>
			<CardsInfo
				totalLimit={cardLimit}
				currentLimit={currentLimit}
				finalInstallment={finalInstallment}
			/>
		</Container>
	);
};

export default CardsList;
