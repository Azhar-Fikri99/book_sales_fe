import API from "../api";

// export const getDatas = async () => {
  // kita ganti menjadi getBooks
export const getAuthors = async () => {
  // untuk get Data.
  // kita sudah definisikan di atas tadi axios nya
  // tinggal panggil pakai nama varaiable api

                      // object di laravel nanti ada books, genres
  //  return await api.get('/objects');

  // books kita tau nya dari backed yaitu : Laravel nya
  //  return await API.get('/books');

  // kita mau destructoring
  const {data} = await API.get('/authors')
   return data.data;
   
 } 



  
 export const createAuthor = async(data) =>
  {
 
     try{
       const response  = await API.post( `/authors`, data)  // endpoint
       return response.data;
     }catch(error) {
       console.log(error);
       throw error
     }
  }  
 

  
 // ini untuk hapus data
//  kita pakai try catch

export const deleteAuthor = async(id) => {
  try{
    await API.delete(`/authors/${id}`)      // ini pakai backtick
  }catch (error){
    console.log(error)
    throw error
  }
}



// update, kita butuh id dan data
export const updateAuthor = async (id, data) =>{
  try { 
     const response = await API.post(`/authors/${id}`, data)  // endpoints
     return response.data;
  }catch (err){
     console.log(err)
     throw err
  }
 }