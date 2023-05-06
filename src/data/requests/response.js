export const STATUS_SUCCESS = 'success';
export const STATUS_ERROR = 'error';

export const successResponse = (data) => ({
  status: STATUS_SUCCESS,
  data: data
});

export const errorResponse = (message) => ({
  status: STATUS_ERROR,
  message: message
});