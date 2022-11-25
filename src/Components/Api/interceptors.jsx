import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/todos/1",
  headers: {
    Accept: "application/json",
  },
});
authFetch.interceptors.request.use((request) => {
  console.log(request, "myrrequest");
  request.headers.common["Accept"] = "application/json ";
  return request;
});
authFetch.interceptors.response.use(
  (response) => {
    console.log(response, "myresponse");
    return response;
  },
  (error) => {
    console.log(error.response);
    if (error.response.status === 400) {
      console.log("Not found");
    }
    return Promise.reject(error);
  }
);
export default authFetch;
