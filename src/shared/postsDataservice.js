import axios from 'axios';
import { API } from './config.js';

const getAll = async () => {
  try {
    const response = await axios.get(API);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
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
  getAll,
  remove,
};
