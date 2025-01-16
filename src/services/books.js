import API from "../api";

// export const getDatas = async () => {
  // kita ganti menjadi getBooks
export const getBooks = async () => {
  // untuk get Data.
  // kita sudah definisikan di atas tadi axios nya
  // tinggal panggil pakai nama varaiable api

                      // object di laravel nanti ada books, genres
  //  return await api.get('/objects');

  // books kita tau nya dari backed yaitu : Laravel nya
  //  return await API.get('/books');

  // kita mau destructoring
  const {data} = await API.get('/books')
   return data;
 } 


 export const createBook = async(data) =>
 {

    try{
      // ini mengikuti API laravel
      const response  = await API.post('/books', data)  // endpoint
      return response.data;
    }catch(error) {
      console.log(error);
      throw error
    }
 }  


 // ini untuk hapus data
//  kita pakai try catch

export const deleteBook = async(id) => {
  try{
    await API.delete(`/books/${id}`)      // ini pakai backtick
  }catch (error){
    console.log(error)
    throw error
  }
}


// update, kita butuh id dan data
export const updateBook = async (id, data) =>{
 try { 
    const response = await API.post(`/books/${id}`, data)  // endpoints
    return response.data;
 }catch (err){
    console.log(err)
    throw err
 }
}


//untuk menampilkan 1 buku
export const showBook = async (id) => {
  // di destructoring pakai kurung kurawal
  try{
      const {data} = await API.get(`/books/${id}`) // endpoint
      return data.data
  }catch(err){
    console.log(err)
    throw err
  }
}