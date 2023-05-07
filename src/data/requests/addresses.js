import { MAIN_API_URL } from './constants';
import { successResponse, errorResponse } from './response';

export const fetchAllAddresess = async (region) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/addresess/${region}`);
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const fetchAddressById = async (region, id) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/addresess/${region}/${id}`);
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const createAddress = async (region, data) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/addresess/${region}`, {
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

export const updateAddress = async (region, id, data) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/addresess/${region}/${id}`, {
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