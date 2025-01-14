import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPaymentMethods, updatePaymentMethod } from "../../../services/paymentMethods";

export default function PaymentMethodEdit() {
  
  // menanpilkan error 
  const [errors, setErrors] = useState({})

  // ini dari masing masing,
  const [image, setImage] = useState("")
  const [name, setName] = useState("");
  const [account_number, setAccountNumber] = useState("");



  // destruct id dari URL
  const {id} = useParams()
  
  const navigate = useNavigate()


  // kita coba fetch data buku berdasarkan ID
  const fetchPayMethDetails = async () =>{
    // dari sini kita ambil data nya dari sevices getBooks

    // getBooks ini kita masukan ke dalam variable nama nya data
    const data = await getPaymentMethods();    // getBooks() mengambil semua data buku


    // kita coba, cari data buku berdasarkan id
    const payment_method = data.find(payment_method => payment_method.id === parseInt(id));
    // console.log(book)
    if(payment_method){
      // assign data to state (ini setter function  nya yang di pakai)
      setName(payment_method.name)  // ini format nya object json pakai titik
      setAccountNumber(payment_method.account_number)
   
      
    } 
  }


  useEffect(() =>{
    fetchPayMethDetails()
 
  },[])


  // kita bikin Handle File Change (ini untuk gambar, karena gak di arahkan ke value)
  const handleFileChange = (e) => {
    setImage(e.target.files[0])
  }
  
  //update book data
  // ini pakai async karena di service nya pakai async pada update
  // ini untuk ke form
  const updatePaymentMethodDetails =  async (e) =>{
    e.preventDefault()

  // di React untuk menampung data yang di edit, kita menggunakan nama nya FormData
  // bawaan React

  // buat FormData
  const paymentMethodData = new FormData()
  
  // ini kita debug 
// console.log(title);

  // title (sebelah kiri) ini sama kaya di database
  // titile (sebelah kanan) ini dari use state
    paymentMethodData.append('name', name)
    paymentMethodData.append('account_number', account_number)
 
  // ini kita tambahkan _method    put
  paymentMethodData.append('_method', 'PUT')


    // image ini untuk state
    if(image){
      paymentMethodData.append('image', image)
    }


    //ini untuk melakukan pengecekan
    // bookData.forEach((value, key) => {
    //   console.log(key, value)
    // })

    // ini updateBook ambil dari service books.js  
    await updatePaymentMethod(id, paymentMethodData)
    // jika berhasil kita mau apa, kita pindah pakai navigate
    .then(() =>{
      //berhasil, kita redirect ke halaman index.
      navigate('/admin/payment_methods')
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
            Edit Genres
          </h3>
        </div>
        <form onSubmit={updatePaymentMethodDetails} className="py-5">
          <div className="p-6.5 flex flex-col gap-5">
            
            <div className="mb-4.5">
              <label
                className="mb-3 block text-base font-medium text-black dark:text-white"
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
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              />
            </div>

            <div className="mb-4.5">
              <label
                className="mb-3 block text-base font-medium text-black dark:text-white"
              >
                Account Number
              </label>
              {errors.account_number && (
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50">
                    <span className="font-medium">{errors.account_number[0]}</span>
                </div>
              )}
              <textarea
                    value={account_number}
                    name="account_number"
                    onChange={(e) => setAccountNumber(e.target.value)}
                rows="6"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              ></textarea>
            </div>

            <div className="mb-4.5">
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
               Gambar
              </label>
              {/* <img src={http://127.0.0.1:8000/} */}
              <input
                onChange={handleFileChange}
                type="file"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-normal outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-indigo-600 file:hover:bg-opacity-10 focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-indigo-600"
              />
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
