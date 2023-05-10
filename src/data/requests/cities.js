import { MAIN_API_URL } from './constants';
import { successResponse, errorResponse } from './response';

export const fetchAllCities = async (region) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/cities/${region}`);
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const fetchCityById = async (region, id) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/cities/${region}/${id}`);
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const createCity = async (region, body) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/cities/${region}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    if (response.ok) {
      return successResponse(data);
    }
    return errorResponse(data);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const updateCity = async (region, id, body) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/cities/${region}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    if (response.ok) {
      return successResponse(data);
    }
    return errorResponse(data);
  } catch (error) {
    return errorResponse(error.message);
  }
};