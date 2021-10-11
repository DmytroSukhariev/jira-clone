import { Axios } from "axios";

export const jsonplaceholderClient = new Axios({
  baseURL: process.env.JSONPLACEHOLDER_HOST_URL,
  responseType: "json",
  transformResponse: (res) => JSON.parse(res),
});
