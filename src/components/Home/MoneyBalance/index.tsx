import { View, Text } from "react-native";
import React, { useState } from "react";
import { Container, RowContainer, DefaultText } from "./styled";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const MoneyBalance = () => {
	const [accountBalance, setAccountBalance] = useState("500.52");
	const [balanceVisibility, setBalanceVisibility] = useState(false);

	const handleToggleBalanceVisibility = () => {
		setBalanceVisibility(!balanceVisibility);
	};

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
					</RowContainer>) : (
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
            onPress={() => {}}
          />
        </RowContainer>
  	</Container>  
	);
};

export default MoneyBalance;
