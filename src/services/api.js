import axios from "axios";
import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [jwt, setJwt] = useState(null);
	const [account, setAccount] = useState(null);

	const login = (token) => {
		setJwt(token);
	};

	const logout = () => {
		setJwt(null);
	};

	const setAcc = (accNumber) => {
		setAccount(accNumber);
	};

	return (
		<AuthContext.Provider value={{ jwt, login, logout, setAcc, account }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};

export const axiosInstance = axios.create({
	baseURL: "http://192.168.15.5:8056/api/v1/",
});

// export const axiosInstance = axios.create({
// 	baseURL: "http://10.109.71.6:8056/api/v1/",
// });

export async function createUser(registerNumber, picture, password) {
	try {
		const response = await axiosInstance.post("auth/users/", {
			register_number: registerNumber,
			picture: picture,
			password: password,
		});
		console.log(response);
		return response.status;
	} catch (err) {
		console.log("error on createUser", err);
	}
}

export async function createJwt(registerNumber, password, setAuthToken) {
	try {
		const response = await axiosInstance.post("auth/jwt/create/", {
			register_number: registerNumber,
			password: password,
		});

		setAuthToken(response.data.access);
		return {
			status: response.status,
			jwt: response.data.access,
		};
	} catch (err) {
		console.log("error on createJwt", err);
	}
}

export async function naturalRegister(
	registerNumber,
	name,
	birthDate,
	rg,
	socialName,
	jwt
) {
	try {
		const response = await axiosInstance.post(
			"natural-people/",
			{
				user: registerNumber,
				name: name,
				birth_date: birthDate,
				cpf: registerNumber,
				rg: rg,
				social_name: socialName,
			},
			{
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			}
		);
		console.log(response);
		return response;
	} catch (err) {
		console.log("error on naturalRegister", err);
	}
}

export async function legalRegister(
	registerNumber,
	fantasyName,
	establishmentDate,
	municipalRegistration,
	stateRegistration,
	legalNature,
	jwt
) {
	try {
		const response = await axiosInstance.post(
			"legal-people/",
			{
				user: registerNumber,
				fantasy_name: fantasyName,
				establishment_date: establishmentDate,
				cnpj: registerNumber,
				municipal_registration: municipalRegistration,
				state_registration: stateRegistration,
				legal_nature: legalNature,
			},
			{
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			}
		);
		return response;
	} catch (err) {
		console.log("error on legalRegister", err);
	}
}

export async function getAccount(accountNumber, jwt) {
	try {
		const response = await axiosInstance.get(`accounts/${accountNumber}`, {
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		});
		return {
			user: response.data.user,
			agency: response.data.agency,
			number: response.data.number,
			type: response.data.type,
			balance: response.data.balance,
			creditLimit: response.data.credit_limit,
		};
	} catch (err) {
		console.log("GETACCOUNT", err);
	}
}

export async function getCards(accountNumber, jwt) {
	try {
		const response = await axiosInstance.get(
			`cards/?account=${accountNumber}`,
			{
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			}
		);

		const cardsData = response.data;

		const mappedCards = cardsData.map((card) => ({
			id: card.id,
			number: card.number,
			expirationDate: card.expiration_date,
			cvv: card.verification_code,
			flag: card.flag,
		}));
		return mappedCards;
	} catch (err) {
		console.log("GETCARDS", err);
	}
}

export async function getInstallments(accountNumber, jwt, finalAmount) {
	try {
		const queryParams = finalAmount ? "&final=true" : "";
		const response = await axiosInstance.get(
			`installments/?account=${accountNumber}${queryParams}`,
			{
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			}
		);
		return response.data.installment_amount;
	} catch (err) {
		console.log("getInstallments", err);
	}
}

export async function createPix(
	accountNumber,
	receiverAccountNumber,
	amount,
	jwt
) {
	try {
		const response = await axiosInstance.post(
			"pix/",
			{
				id_account: accountNumber,
				id_receiver_account: receiverAccountNumber,
				amount: amount,
			},
			{
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			}
		);
		console.log("function", response.status);
		return response.status;
	} catch (error) {
		console.log("PIXERROR", error);
	}
}
