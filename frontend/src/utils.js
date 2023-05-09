export const getError = (error) => {
  // "error.response.data.message" is the value you have entered in server.js "{ message: "Product not found" }"
  return error.response && error.response.data.message
    ? error.response.data.message
    : error.message;
};
