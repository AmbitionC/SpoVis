import Axios from 'axios';

export const urlMap = {
  pic3_1: 'https://g2-v3.antv.vision/zh/examples/data/diamond.json',
}

export async function requestAPI(map) {
  const res = await Axios.get(urlMap[map]);
  const results = res.data;
  return results
}