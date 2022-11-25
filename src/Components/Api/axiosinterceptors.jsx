export const AxiosInterceptor = () => {
  const header = {
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
  };
  const intercep = axios.create({
    baseUrl: "http://localhost:3000/users",
    headers: header,
  });
  intercep.interceptors.request.use((request) => {
    console.log(request, "myrrequest");
    request.headers.pagename = "aashma ";
    return request;
  });
  intercep.interceptors.response.use((response) => {
    console.log(response, "myresponse");
    return response;
  });
};
