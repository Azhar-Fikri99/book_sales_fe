import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAuthor } from "../../../services/authors";

export default function AuthorCreate() {

   // ini kita buat error 
   const[errors, setErrors] = useState({})

   const [authorData, setAuthorData] = useState({
    name: "",
    photo: "",
    bio: ""
    })

const navigate = useNavigate();

// di sini kita kasih Handle
// Handle input change
const handleInputChange = (event) => {
  // ini kita destructoring, name adalah properti di HTML, value tempat ngirim data ke server
  // kalau di Postmane itu nama nya Key
  // value itu di Postman itu value juga
  const {name, value} = event.target
  setAuthorData({...authorData, [name]: value});
}


// Handle file Change
const handleFileChange = (e) => {
  // 0 karena yang di ambil nya 1
  setAuthorData({...authorData,  photo: e.target.files[0]} )
}


// Handle form submit
const  storeAuthor = async (e) => {
  e.preventDefault()

 // ini nama objec nya, bebas, berfungsi untuk menambahkan data
  const formDataToSend = new FormData()

  formDataToSend.append('name', authorData.name)
  formDataToSend.append('photo', authorData.photo)
  formDataToSend.append('bio', authorData.bio)


  // biar lebih bagus kita bisa pakai try catch
  try{
      await createAuthor(formDataToSend);
      navigate('/admin/authors')
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
        <form onSubmit={storeAuthor} action="#" className="py-5">
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
                type="text"
                name="name"
                // bookData itu adalah useState yang di atas
                value={authorData.name}
                onChange={handleInputChange}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              />
            </div>

        
     

            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Attach Photo
              </label>
              {errors.photo && (
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50">
                    <span className="font-medium">{errors.photo[0]}</span>
                </div>
              )}
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
                        // bookData itu adalah useState yang di atas
                        value={authorData.bio}
                        onChange={handleInputChange}
                rows="6"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              ></textarea>
            </div>


            {/* <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Genre
              </label>
              <div
                className="relative z-20 bg-transparent dark:bg-form-input"
              >
                <select
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-indigo-600 active:border-indigo-600 dark:border-form-strokedark dark:bg-form-input dark:focus:border-indigo-600"
                >
                  <option value="" className="text-body">
                    --select genre--
                  </option>
                  <option value="" className="text-body">Genre 1</option>
                  <option value="" className="text-body">Genre 2</option>
                  <option value="" className="text-body">Genre 3</option>
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
            </div> */}

{/*             
            <div className="mb-4.5">
              <label
                className="mb-3 block text-sm font-medium text-black dark:text-white"
              >
                Author
              </label>
              <div
                className="relative z-20 bg-transparent dark:bg-form-input"
              >
                <select
                  className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-indigo-600 active:border-indigo-600 dark:border-form-strokedark dark:bg-form-input dark:focus:border-indigo-600"
                >
                  <option value="" className="text-body">
                    --select author--
                  </option>
                  <option value="" className="text-body">Author 1</option>
                  <option value="" className="text-body">Author 2</option>
                  <option value="" className="text-body">Author 3</option>
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
            </div> */}

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
