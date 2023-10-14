import axios from "axios";
import { useState } from "react";

export const axiosInstance = axios.create({
	baseURL: "http://192.168.15.5:8056/api/v1/",
});

export default async function login(registerNumber, password) {
	try {
		const response = await axiosInstance.post("auth/jwt/create/", {
			register_number: registerNumber,
			password: password,
		});
		return {
			status: response.status,
			jwt: response.data.access,
		};
	} catch (err) {
		console.log(err);
	}
}

