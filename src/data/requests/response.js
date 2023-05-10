export const STATUS_SUCCESS = 'success';
export const STATUS_ERROR = 'error';

export const successResponse = (data) => ({
  status: STATUS_SUCCESS,
  data: data
});

export const errorResponse = (data) => ({
  status: STATUS_ERROR,
  data
});

export const isSuccessful = (response) => response.status === STATUS_SUCCESS;