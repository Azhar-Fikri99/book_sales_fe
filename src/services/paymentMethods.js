import API from "../api";

// export const getDatas = async () => {
  // kita ganti menjadi getBooks
export const getPaymentMethods = async () => {
  // untuk get Data.
  // kita sudah definisikan di atas tadi axios nya
  // tinggal panggil pakai nama varaiable api

                      // object di laravel nanti ada books, genres
  //  return await api.get('/objects');

  // books kita tau nya dari backed yaitu : Laravel nya
  //  return await API.get('/books');

  // kita mau destructoring
  const {data} = await API.get('/payment_methods')
   return data.data;
   
 } 
 export const createPaymentMethod = async(data) =>
  {
 
     try{
       const response  = await API.post('/payment_methods', data)  // endpoint
       return response.data;
     }catch(error) {
       console.log(error);
       throw error
     }
  }  
 