import { MAIN_API_URL } from './constants';
import { successResponse, errorResponse } from './response';

export const fetchAllClients = async (region) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/clients/${region}`);
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const fetchClientById = async (region, id) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/clients/${region}/${id}`);
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const createClient = async (region, body) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/clients/${region}`, {
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

export const updateClient = async (region, id, body) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/clients/${region}/${id}`, {
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