import { httpAxios } from '../helper/httpHelper'

 export const LogOutApi = async () => {
 const response = await httpAxios.post('/api/logout')
 return response;
}

