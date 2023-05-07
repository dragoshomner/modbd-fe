import { MAIN_API_URL } from './constants';
import { successResponse, errorResponse } from './response';

export const fetchAllJobs = async (region) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/jobs/${region}`);
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const fetchJobById = async (region, id) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/jobs/${region}/${id}`);
    if (response.ok) {
      const data = await response.json();
      return successResponse(data);
    }
    return errorResponse(response.message);
  } catch (error) {
    return errorResponse(error.message);
  }
};

export const createJob = async (region, data) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/jobs/${region}`, {
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

export const updateJob = async (region, id, data) => {
  try {
    const response = await fetch(`${MAIN_API_URL}/api/jobs/${region}/${id}`, {
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