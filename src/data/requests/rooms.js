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