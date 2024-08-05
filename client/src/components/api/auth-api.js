import { get, post } from "./requester";

const baseUrl = 'http://localhost:3030/users';

export const userLogin = (email,password) =>post(`${baseUrl}/login`,{email,password});
export const userRegister = (username,email,password,summary,logoUrl) =>post(`${baseUrl}/register`,{username,email,password,summary,logoUrl});
export const userLogout = () => get(`${baseUrl}/logout`);