import API from "../api";

export const createOrder = async(data) =>
  {
 
    
     try{
      // ini mengikuti API laravel
       const response  = await API.post('/orders', data, {
        headers: {
        "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`
        }
       })  // endpoint
       return response.data;
     }catch(error) {
       console.log(error);
       throw error
     }
  }  
 