import { post } from "./requester";

const baseUrl = 'http://localhost:3030/users';

export const userLogin = (email,password) =>post(`${baseUrl}/login`,{email,password});