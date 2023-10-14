import axios from "axios";
import { useState, createContext, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [jwt, setJwt] = useState(null);

	const login = (token) => {
		setJwt(token);
	};

	const logout = () => {
		setJwt(null);
	};

	return (
		<AuthContext.Provider value={{ jwt, login, logout }}>
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

export default async function createJwt(
	registerNumber,
	password,
	setAuthToken
) {
	try {
		const response = await axiosInstance.post("auth/jwt/create/", {
			register_number: registerNumber,
			password: password,
		});

		setAuthToken(response.data.access);

		return response.status;
	} catch (err) {
		console.log(err);
	}
}
