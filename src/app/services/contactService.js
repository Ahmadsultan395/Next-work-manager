import { httpAxios } from "../helper/httpHelper"


export const contactServiceApi = async (data) => {
 const response = await httpAxios.post('/api/contact', data);
 return response;
}
