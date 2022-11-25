export const getListofcompanydetails = (successCallback) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "http://lunivacare.ddns.net/CarelabDataMetricService_qc/Api/GetAddressOfClientByClientId"
      );
      if (response?.status === 200) {
        successCallback(response?.data?.ReportType);
      } else {
        successCallback([]);
      }
    } catch (error) {}
  };
};
