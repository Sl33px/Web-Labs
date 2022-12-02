import React from 'react';
import axios from "axios";

const http = axios.create({baseURL: 'http://localhost:3000/'});
export const getHotels = async async => {
    const response = await http.get('carts');
    return response.data;
}

export const getHotelById = async(id) => {
    const response = await http.get(`carts/${id}`)
    return response.data
}