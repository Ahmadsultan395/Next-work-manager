import { httpAxios } from "../helper/httpHelper"

export const SignUpUserApi = async (data) =>{
 const response =  await httpAxios.post('/api/users', data).then((res)=> res.data);
 console.log(response);
 return response;
}


export const LoginApi = async (data) => {
  const response = await httpAxios.post('/api/login', data).then((res)=> res.data);

  return response;
}
