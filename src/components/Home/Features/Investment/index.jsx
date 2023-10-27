import { View, Text, Dimensions, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Container, Title } from "./styled";
import InvestmentItem from "./InvestmentItem";
import * as api from "../../../../services/api"

const width = Dimensions.get("window").width;

const InvestmentList = () => {
	const renderItem = ({ item }) => <InvestmentItem investment={item} key={item.id} />;

	const [investments, setInvestments] = useState([]);

	const { jwt } = api.useAuth();

	useEffect(() => {
		const fetchInvestmentData = async (jwt) => {
			try {
				const investmentData = await api.getInvestments(jwt);
				setInvestments(investmentData);
			} catch (err) {
				console.error(err);
			}
		};
		fetchInvestmentData(jwt);
	}, []);

	return (
		<Container>
			<Title>Available Investments</Title>
			<FlatList
				data={investments}
				keyExtractor={(item) => item.id}
				renderItem={renderItem}
				showsHorizontalScrollIndicator={false}
				snapToAlignment={"start"}
				scrollEventThrottle={16}
				decelerationRate={"fast"}
				snapToOffsets={[...Array(investments.length)].map(
					(x, i) => i * (width * 0.9 - 40) + (i - 1) * 40
				)}
			/>
		</Container>
	);
};

export default InvestmentList;
