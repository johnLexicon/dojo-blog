import axios from 'axios';
import { API } from './config.js';
import { useState, useEffect } from 'react';

const useFetch = (api) => {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  const getAll = async (api) => {
    try {
      const response = await axios.get(api);
      if (response.status !== 200) {
        throw new Error('Error while retrieving data');
      }
      setData(response.data);
    } catch (err) {
      console.log(err);
      setError(err.message);
      setData([]);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    getAll(api);
  }, [api]);

  return { data, isFetching, error };
};

const remove = async (id) => {
  try {
    const response = await axios.delete(API + '/' + id);
    return response.status === 200;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const postsDataService = {
  useFetch,
  remove,
};
