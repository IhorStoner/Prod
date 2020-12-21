import { createAsyncThunk,createAction  } from "@reduxjs/toolkit";
import axios from 'axios'
import config from '../../config/deafult.json'

export const fetchAds = createAsyncThunk('ads/fetchAds', async () => {
  const data = axios.get(`${config.serverUrl}/api/ads`).then(
    res => res.data)
  return data;
});

