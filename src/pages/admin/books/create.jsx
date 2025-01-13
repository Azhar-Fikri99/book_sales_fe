import { useEffect, useState } from "react"
import { getGenres } from "../../../services/genres"
import { getAuthors } from "../../../services/authors"
import { createBook } from "../../../services/books"
import { useNavigate } from "react-router-dom"

export default function BookCreate() {
   // ini kita buat error 
   const[errors, setErrors] = useState({})

  
   // ini kita looping, tapi ini looping nya di option
   const [genres, setGenres] = useState([])
   const [authors, setAuthors] = useState([])

  // di sini kita  buat const
  // tapi kita gak pakai cara ini
  // const [description, setDescription] = useState("");
  // const [price, setPrice] = useState("");
  // const [stock, setStock] = useState("");

  const [bookData, setBookData] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    cover_photo: "",
    genre_id: "",
    author_id: "",
  })

  
  const navigate = useNavigate();

  // handle relation data
   const fetchGenres = async () => {
    const data = await getGenres()
    setGenres(data)
   }

   const fetchAuthors = async () => {
    const data = await getAuthors();
    setAuthors(data);
   }

   // jangan lupa kalau kita usdah fetach, biar data nya ke isi jangan lupa kita useEffect
   useEffect(() => {
    fetchGenres()
    fetchAuthors()
   }, [])

// di sini kita kasih Handle
// Handle input change
const handleInputChange = (event) => {
  // ini kita destructoring, name adalah properti di HTML, value tempat ngirim data ke server
  // kalau di Postmane itu nama nya Key
  // value itu di Postman itu value juga
  const {name, value} = event.target
  setBookData({...bookData, [name]: value});
}


// Handle file Change
const handleFileChange = (e) => {
                                          // 0 karena yang di ambil nya 1
  setBookData({...bookData,  cover_photo: e.target.files[0]} )
}

// Handle form submit
const  storeBook = async (e) => {
  e.preventDefault()


  // ini nama objec nya, bebas, berfungsi untuk menambahkan data
  const formDataToSend = new FormData()

  formDataToSend.append('title', bookData.title)
  formDataToSend.append('description', bookData.description)
  formDataToSend.append('price', bookData.price)
  formDataToSend.append('stock', bookData.stock)
  formDataToSend.append('cover_photo', bookData.cover_photo)
  formDataToSend.append('genre_id', bookData.genre_id)
  formDataToSend.append('author_id', bookData.author_id)

  // biar lebih bagus kita bisa pakai try catch
  try{
      await createBook(formDataToSend);
      navigate('/admin/books')
  }catch(error){
    // catch(err){ bisa di singkat menjadi err
    // console.log(err)
    
    // console.log(error)
    // setErrors(error)

    // kalau kita mau tau error, kita bisa di lihat console. kemudian axios, ada info tentang error, kayak repsonse
    // kita kalau kita mau menampilkan erro untuk title, tinggal tambahkan .title
    // console.log(error.response.data.message)
    setErrors(error.response.data.message)
  }
}


  //  jangan lupa di looping, cara looping nya, 
  // fokus ke bagian select option
  return (       

    <div className="flex flex-col gap-9">
      <div
        className="rounded-sm bg-white shadow-default dark:bg-boxdark"
      >
        <div
          className="border-b border-stroke px-6.5 py-4 dark:border-strokedark"
        >
          <h3 className="font-medium text-black dark:text-white">
            Add Data
          </h3>
        </div>
        <form onSubmit={storeBook} action="#" className="py-5">
          <div className="p-6.5 flex flex-col gap-5">

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Title
              </label>
              {errors.title && (
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50">
                    <span className="font-medium">{errors.title[0]}</span>
                </div>
              )}
              <input
                type="text"
                name="title"
                // bookData itu adalah useState yang di atas
                value={bookData.title}
                onChange={handleInputChange}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              />
            </div>

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Description
              </label>
              {errors.description && (
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50">
                    <span className="font-medium">{errors.description[0]}</span>
                </div>
              )}
              <textarea
                name="description"
                   // bookData itu adalah useState yang di atas
                value={bookData.description}
                onChange={handleInputChange}
                rows="6"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              ></textarea>
            </div>

            <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
              <div className="w-full xl:w-1/2">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                >
                  Price
                </label>
                {errors.price && (
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50">
                    <span className="font-medium">{errors.price[0]}</span>
                </div>
              )}
                <input
                  name="price"
                  // bookData itu adalah useState yang di atas
                  value={bookData.price}
                  onChange={handleInputChange}
                  type="number"
                  min={1}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
                />
              </div>

              <div className="w-full xl:w-1/2">
                <label
                  className="mb-3 block text-sm font-medium text-black dark:text-white"
                >
                  Stock
                </label>
                {errors.stock && (
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50">
                    <span className="font-medium">{errors.stock[0]}</span>
                </div>
              )}
                <input
                                  name="stock"
                                  // bookData itu adalah useState yang di atas
                                  value={bookData.stock}
                                  onChange={handleInputChange}
                  type="number"
                  min={1}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
                />
              </div>
            </div>

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Attach file
              </label>
              {errors.cover_photo && (
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50">
                    <span className="font-medium">{errors.cover_photo[0]}</span>
                </div>
              )}
              <input
                              // bookData itu adalah useState yang di atas

                              onChange={handleFileChange}
                type="file"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-indigo-600 file:hover:bg-opacity-10 focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-indigo-600"
              />
            </div>

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Genre
              </label>
              {errors.genre_id && (
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50">
                    <span className="font-medium">{errors.genre_id[0]}</span>
                </div>
              )}
              <div
                className="relative z-20 bg-transparent dark:bg-form-input"
              >
                <select
                                  name="genre_id"
                                  // bookData itu adalah useState yang di atas
                                  value={bookData.genre_id}
                                  onChange={handleInputChange}
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-indigo-600 active:border-indigo-600 dark:border-form-strokedark dark:bg-form-input dark:focus:border-indigo-600"
                >
                  <option value="" className="text-body">
                    --select genre--
                  </option>
                  {/* kita looping di sini, fokus ke bagian use State */}
                  {genres.map((genre)=> ( 
                    // value nya tanpa petik, nanti pengaruh ke pemanggilan database
                  <option key={genre.id} value={genre.id} className="text-body">{genre.name}</option>
                  ))}
                  {/* kita gak pakai Genre 2 dan 3 */}
                  {/* <option value="" className="text-body">Genre 2</option>
                  <option value="" className="text-body">Genre 3</option> */}
                </select>
                <span
                  className="absolute right-4 top-1/2 z-30 -translate-y-1/2"
                >
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
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Author
              </label>
              {errors.author_id && (
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50">
                    <span className="font-medium">{errors.author_id[0]}</span>
                </div>
              )}
              <div
                className="relative z-20 bg-transparent dark:bg-form-input"
              >
                <select
                                                name="author_id"
                                                // bookData itu adalah useState yang di atas
                                                value={bookData.author_id}
                                                onChange={handleInputChange}
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-indigo-600 active:border-indigo-600 dark:border-form-strokedark dark:bg-form-input dark:focus:border-indigo-600"
                >
                  <option value="" className="text-body">
                    --select author--
                  </option>
                  {authors.map((author) =>(
                    // value nya tanpa petik, nanti pengaruh ke pemanggilan database
                  <option key={author.id} value={author.id} className="text-body">{author.name}</option>
                  ))}
                  {/* <option value="" className="text-body">Author 2</option>
                  <option value="" className="text-body">Author 3</option> */}
                </select>
                <span
                  className="absolute right-4 top-1/2 z-30 -translate-y-1/2"
                >
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
  )
}
