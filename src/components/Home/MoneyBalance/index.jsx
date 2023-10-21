import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { Container, RowContainer, DefaultText } from "./styled";
import { useNavigation } from "@react-navigation/native";
import * as api from "../../../services/api"

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const MoneyBalance = () => {
	const [accountBalance, setAccountBalance] = useState("0.00");
	const [balanceVisibility, setBalanceVisibility] = useState(false);

	const handleToggleBalanceVisibility = () => {
		setBalanceVisibility(!balanceVisibility);
	};

	const navigation = useNavigation();

	const { logout, jwt, account } = api.useAuth();

	const handleNavLogin = () => {
		logout();
		navigation.navigate("SigIn");
	};

	useEffect(() => {
		const fetchAccountData = async (accountNumber, jwt) => {
			try {
				const account = await api.getAccount(accountNumber, jwt);
				setAccountBalance(account.balance)
			} catch (err) {
				console.error(err);
			}
		};
		fetchAccountData(account, jwt);
	}, []);

	return (
		<Container>
			<View>
				<DefaultText>Current Balance</DefaultText>
				{!balanceVisibility ? (
					<RowContainer>
						<DefaultText>*****</DefaultText>
						<Ionicons
							name="eye-off-outline"
							size={24}
							color="#e53d41"
							style={{ marginLeft: 10 }}
							onPress={handleToggleBalanceVisibility}
						/>
					</RowContainer>
				) : (
					<>
						<RowContainer>
							<DefaultText>R${accountBalance} </DefaultText>
							<Ionicons
								name="eye-outline"
								size={24}
								color="#e53d41"
								style={{ marginLeft: 10 }}
								onPress={handleToggleBalanceVisibility}
							/>
						</RowContainer>
					</>
				)}
			</View>
			<RowContainer>
				<DefaultText>See details</DefaultText>
				<MaterialIcons
					name="keyboard-arrow-right"
					size={22}
					color="#e53d41"
					style={{ marginLeft: 5 }}
					onPress={() => handleNavLogin()}
				/>
			</RowContainer>
		</Container>
	);
};

export default MoneyBalance;
