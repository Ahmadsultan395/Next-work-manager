import { httpAxios } from '../helper/httpHelper'

 export const AddTaskApi = async (task) => {
 const response = await httpAxios.post('/api/tasks', task)
 console.log(response , 'response in api task')
 return response;
}

export const ShowUserTasksApi = async (userId) => {
  try {
    const response = await httpAxios.get(`/api/users/${userId}/tasks`);
    return response;
  } catch (error) {
    console.error("Error fetching user tasks:", error.response?.data || error.message);
    throw error;  // Rethrow to handle it later
  }
};


  
export const DeleteTaskApi = async (taskId) => {
  try {
    const response = await httpAxios.delete(`/api/tasks/${taskId}`);
    return response;
  } catch (error) {
    console.error("Error deleting task:", error.response?.data || error.message);
    throw error;  // Rethrow to handle it later
  }
};