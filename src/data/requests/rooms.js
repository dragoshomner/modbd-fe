import { MAIN_API_URL } from './constants';
import { successResponse, errorResponse } from './response';

export const fetchAllRooms = async (region) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/rooms/${region}`);
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const fetchRoomById = async (region, id) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/rooms/${region}/${id}`);
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const createRoom = async (region, data) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/rooms/${region}`, {
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

export const updateRoom = async (region, id, data) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/rooms/${region}/${id}`, {
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