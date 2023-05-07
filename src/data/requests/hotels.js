import { MAIN_API_URL } from './constants';
import { successResponse, errorResponse } from './response';

export const fetchAllHotels = async (region) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/hotels/${region}`);
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const fetchHotelById = async (region, id) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/hotels/${region}/${id}`);
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const createHotel = async (region, data) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/hotels/${region}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const updateHotel = async (region, id, data) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/hotels/${region}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};