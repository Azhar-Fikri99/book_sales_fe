import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBooks, updateBook } from "../../../services/books";
import { getGenres } from "../../../services/genres";
import { getAuthors } from "../../../services/authors";

export default function BookEdit() {
  //state untuk menampung data
  const [genres,  setGenres] = useState([])
  const [authors,  setAuthors] = useState([])

  // menanpilkan error 
  const [errors, setErrors] = useState({})

  // ini dari masing masing,
  const [image, setImage] = useState("")
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [genreId, setGenreId] = useState("");
  const [authorId, setAuthorId] = useState("");


  // destruct id dari URL
  const {id} = useParams()
  
  const navigate = useNavigate()


  // kita coba fetch data buku berdasarkan ID
  const fetchBookDetails = async () =>{
    // dari sini kita ambil data nya dari sevices getBooks

    // getBooks ini kita masukan ke dalam variable nama nya data
    const data = await getBooks();    // getBooks() mengambil semua data buku


    // kita coba, cari data buku berdasarkan id
    const book = data.find(book => book.id === parseInt(id));
    // console.log(book)
    if(book){
      // assign data to state (ini setter function  nya yang di pakai)
      setTitle(book.title)  // ini format nya object json pakai titik
      setDescription(book.description)
      setPrice(book.price)
      setStock(book.stock)
      // jadi ini genre_id ambil dari database
      setGenreId(book.genre_id)
      setAuthorId(book.author_id)
      
    } 
  }

  const fetchGenres =  async() =>{
    const data = await getGenres()
    setGenres(data)
  }  

  const fetchAuthors =  async() =>{
    const data = await getAuthors()
    setAuthors(data)
  }  

// untuk menjalakan fetch nya, kayka function biasa
  // fetchBookDetails()

  // lebih baik kita pakai useEffect

  useEffect(() =>{
    fetchBookDetails()
    fetchAuthors()
    fetchGenres()
  },[])


  // kita bikin Handle File Change (ini untuk gambar, karena gak di arahkan ke value)
  const handleFileChange = (e) => {
    setImage(e.target.files[0])
  }
  
  //update book data
  // ini pakai async karena di service nya pakai async pada update
  // ini untuk ke form
  const updateBookDetails =  async (e) =>{
    e.preventDefault()

  // di React untuk menampung data yang di edit, kita menggunakan nama nya FormData
  // bawaan React

  // buat FormData
  const bookData = new FormData()
  
  // ini kita debug 
// console.log(title);

  // title (sebelah kiri) ini sama kaya di database
  // titile (sebelah kanan) ini dari use state
    bookData.append('title', title)
    bookData.append('description', description)
    bookData.append('price', price)
    bookData.append('stock', stock)
    // Genre dan author
    bookData.append('genre_id', genreId)
    bookData.append('author_id', authorId)

    // ini kita tambahkan _method    put
    bookData.append('_method', 'PUT')

    // image ini untuk state
    if(image){
      bookData.append('cover_photo', image)
    }


    //ini untuk melakukan pengecekan
    // bookData.forEach((value, key) => {
    //   console.log(key, value)
    // })

    // ini updateBook ambil dari service books.js  
    await updateBook(id, bookData)
    // jika berhasil kita mau apa, kita pindah pakai navigate
    .then(() =>{
      //berhasil, kita redirect ke halaman index.
      navigate('/admin/books')
      // console.log(bookData)
    } )
    .catch((err) =>{
      // console.log(err)
      // console.log(err.response.data.mesaage)
      setErrors(err.response.data.message)
    })
  }


  return (
    <div className="flex flex-col gap-9">
      <div className="rounded-sm bg-white shadow-default dark:bg-boxdark">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
          <h3 className="font-medium text-black dark:text-white">Add Data</h3>
        </div>
        {/* ini action nya di ganti dengan onSubmit */}
        {/* <form action="#" className="py-5"> */}
        <form onSubmit={updateBookDetails} className="py-5">
          <div className="p-6.5 flex flex-col gap-5">
            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Title
              </label>
              {errors.title && (
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50">
                    <span className="font-medium">{errors.title[0]}</span>
                </div>
              )}
              <input
                type="text"
                value={title}
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Description
              </label>
              {errors.description && (
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50">
                    <span className="font-medium">{errors.description[0]}</span>
                </div>
              )}
              <textarea
              value={description}
              name="description"
              onChange={(e) => setDescription(e.target.value)}
                rows="6"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              ></textarea>
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Price
                </label>
                {errors.price && (
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50">
                    <span className="font-medium">{errors.price[0]}</span>
                </div>
              )}
                <input
                  value={price}
                  name="price"
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  min={1}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Stock
                </label>
                <input
                  value={stock}
                  name="stock"
                  onChange={(e) => setStock(e.target.value)}
                  type="number"
                  min={1}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
                />
              </div>
            </div>

            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Attach file
              </label>
              {/* <img src={http://127.0.0.1:8000/} */}
              <input
                onChange={handleFileChange}
                type="file"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-indigo-600 file:hover:bg-opacity-10 focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-indigo-600"
              />
            </div>

            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Genre
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select 
                name="genre_id"
                value={genreId}
                onChange={ (e) => setGenreId(e.target.value)}
                 className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-indigo-600 active:border-indigo-600 dark:border-form-strokedark dark:bg-form-input dark:focus:border-indigo-600">
                  {/* <option value="" className="text-body"> */}
                    {/* --select genre-- */}
                  {/* </option> */}
                  {/* <option value="" className="text-body">
                    Genre 1
                  </option>
                  <option value="" className="text-body">
                    Genre 2
                  </option>
                  <option value="" className="text-body">
                    Genre 3 */}
                      {/* kita looping di sini, fokus ke bagian use State */}
                  {genres.map((genre)=> ( 
                  <option key={genre.id} value={genre.id} className="text-body">{genre.name}</option>
                  ))}
                  {/* </option> */}
                </select>
                <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                        fill=""
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>
            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Author
              </label>
              <div className="relative z-20 bg-transparent dark:bg-form-input">
                <select
                name="author_id"
                value={authorId}
                onChange={ (e) => setAuthorId(e.target.value)}
                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-indigo-600 active:border-indigo-600 dark:border-form-strokedark dark:bg-form-input dark:focus:border-indigo-600">
                  {/* <option value=""  className="text-body"> */}
                    {/* --select author-- */}
                  {/* </option> */}
                  {/* <option value="" className="text-body">
                    Author 1
                  </option>
                  <option value=""  className="text-body">
                    Author 2
                  </option>
                  <option value=""  className="text-body">
                    Author 3 */}
                    {authors.map((author)=> ( 
                  <option 
                  key={author.id} 
                  value={author.id} 
                  className="text-body">{author.name}
                  </option>
                  ))}
                  {/* </option> */}
                </select>
                <span className="absolute right-4 top-1/2 z-30 -translate-y-1/2">
                  <svg
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                        fill=""
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full justify-center rounded bg-indigo-600 p-3 font-medium text-white hover:bg-opacity-90"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
