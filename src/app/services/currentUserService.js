import { httpAxios } from "../helper/httpHelper"

export const CurrentUserApi = () => {
  const response = httpAxios.get('/api/current').then((res) => res.data);
  return response;
}
