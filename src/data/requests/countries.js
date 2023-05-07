import { MAIN_API_URL } from './constants';
import { successResponse, errorResponse } from './response';

export const fetchAllCountries = async (region) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/countries/${region}`);
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const fetchCountryById = async (region, id) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/countrys/${region}/${id}`);
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const createCountry = async (region, data) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/countrys/${region}`, {
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

export const updateCountry = async (region, id, data) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/countrys/${region}/${id}`, {
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