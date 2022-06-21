import { useState } from 'react';
import axios from 'axios';

const getResponse = async (url) => {
  try {
    const response = await axios.get(url);
    console.log(url);
    return response;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

const useFetchData = (options) => {
  const [fetchedData, setFetchedData] = useState(options.initialData);

  const updateData = async (parameterValue) => {
    const { url } = options;
    const { parameterName } = options;
    const urlParameters = '/?' + parameterName + '=' + parameterValue;
    const urlWithParameters = url + urlParameters;
    const response = await getResponse(urlWithParameters);
    const { data } = response;
    console.log(data);
    setFetchedData(data);
  };

  return [fetchedData, updateData];
};

export default useFetchData;
