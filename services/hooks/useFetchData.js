import { useState } from 'react';
import axios from 'axios';

const useFetchData = (options) => {
  const [fetchedData, setFetchedData] = useState(options.initialData);

  const updateData = async (parameterValue) => {
    const { url } = options;
    const { parameterName } = options;
    const urlParameters = '/?' + parameterName + '=' + parameterValue;
    const urlWithParameters = url + urlParameters;
    const response = await axios.get(urlWithParameters);
    const { data } = response;
    setFetchedData(data);
  };
  return [fetchedData, updateData];
};

export default useFetchData;
