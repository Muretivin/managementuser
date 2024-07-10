// src/features/users/userApi.ts
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addUser = async (user: any) => {
  const response = await axios.post(API_URL, user);
  return response.data;
};

export const updateUser = async (user: any) => {
  const response = await axios.put(`${API_URL}/${user.id}`, user);
  return response.data;
};

export const deleteUser = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
};
