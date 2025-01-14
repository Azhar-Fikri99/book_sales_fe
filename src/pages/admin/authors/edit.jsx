import { useNavigate, useParams } from "react-router-dom";
import { getAuthors, updateAuthor } from "../../../services/authors";
import { useEffect, useState } from "react";

export default function AuthorEdit() {

  // menanpilkan error 
  const [errors, setErrors] = useState({})

    // ini dari masing masing,
    const [image, setImage] = useState("")
    const [name, setName] = useState("")
    const [bio, setBio] = useState("")
    
  // destruct id dari URL
  const {id} = useParams()
  
  const navigate = useNavigate()
  
  // kita coba fetch data buku berdasarkan ID
  const fetchAuthorDetails = async () =>{
    // dari sini kita ambil data nya dari sevices getBooks

    // getBooks ini kita masukan ke dalam variable nama nya data
    const data = await getAuthors();    // getBooks() mengambil semua data buku


    // kita coba, cari data buku berdasarkan id
    const author = data.find(author => author.id === parseInt(id));
    // console.log(book)
    if(author){
      // assign data to state (ini setter function  nya yang di pakai)
      setName(author.name)  // ini format nya object json pakai titik
      setBio(author.bio)
    } 
  }

  useEffect(() =>{
    fetchAuthorDetails()
  },[])

  // kita bikin Handle File Change (ini untuk gambar, karena gak di arahkan ke value)
  const handleFileChange = (e) => {
    setImage(e.target.files[0])
  }




    //update book data
  // ini pakai async karena di service nya pakai async pada update
  // ini untuk ke form
  const updateAuthorDetails =  async (e) =>{
    e.preventDefault()


  // buat FormData
  const authorData = new FormData()
  // title (sebelah kiri) ini sama kaya di database
  // titile (sebelah kanan) ini dari use state
  authorData.append('name', name)
  authorData.append('bio', bio)

  // ini kita tambahkan _method    put
  authorData.append('_method', 'PUT')

  // image ini untuk state
  if(image){
    authorData.append('photo', image)
  }

   // ini updateBook ambil dari service books.js  
    await updateAuthor(id, authorData)
    // jika berhasil kita mau apa, kita pindah pakai navigate
    .then(() =>{
      //berhasil, kita redirect ke halaman index.
      navigate('/admin/authors')
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
      <div
        className="rounded-sm bg-white shadow-default dark:bg-boxdark"
      >
        <div
          className="border-b border-stroke px-6.5 py-4 dark:border-strokedark"
        >
          <h3 className="font-medium text-black dark:text-white">
            Add Data Authors
          </h3>
        </div>
        <form onSubmit={updateAuthorDetails} className="py-5">
          <div className="p-6.5 flex flex-col gap-5">

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Name
              </label>
              {errors.name && (
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50">
                    <span className="font-medium">{errors.name[0]}</span>
                </div>
              )}
              <input
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              />
            </div>

        
     

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Attach Photo
              </label>
              
              <input
                 onChange={handleFileChange}
                type="file"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-indigo-600 file:hover:bg-opacity-10 focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-indigo-600"
              />
            </div>

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                BIO
              </label>
              {errors.bio && (
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50">
                    <span className="font-medium">{errors.bio[0]}</span>
                </div>
              )}
              <textarea
                        name="bio"
                       value={bio}
                       onChange={(e) => setBio(e.target.value)}
                rows="6"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              ></textarea>
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
