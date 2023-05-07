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
    const response = await fetch(`${MAIN_API_URL}/api/citys/${region}/${id}`);
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const createCity = async (region, data) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/citys/${region}`, {
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

export const updateCity = async (region, id, data) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/citys/${region}/${id}`, {
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