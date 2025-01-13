import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { createPaymentMethod } from "../../../services/paymentMethods";

export default function PaymentMethodCreate() {

  
    const[errors, setErrors] = useState({})
  
    const [paymentMethodData, setPaymentMethodData] = useState({
      name: "",
      account_number: "",
      image: ""
    })

    const navigate = useNavigate();
  
  // di sini kita kasih Handle
// Handle input change
const handleInputChange = (event) => {
  // ini kita destructoring, name adalah properti di HTML, value tempat ngirim data ke server
  // kalau di Postmane itu nama nya Key
  // value itu di Postman itu value juga
  const {name, value} = event.target
  setPaymentMethodData({...paymentMethodData, [name]: value});
}

// Handle file Change
const handleFileChange = (e) => {
  // 0 karena yang di ambil nya 1
  setPaymentMethodData({...paymentMethodData,  image: e.target.files[0]} )
}


const storePaymentMethod = async (e) => {
  e.preventDefault()

 const formDataToSend = new FormData()

  formDataToSend.append('name', paymentMethodData.name)
  formDataToSend.append('account_number', paymentMethodData.account_number)
  formDataToSend.append('image', paymentMethodData.image)

  // biar lebih bagus kita bisa pakai try catch
  try{
      await createPaymentMethod(formDataToSend);
      navigate('/admin/payment_methods')
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
            Add Data Payment Methods
          </h3>
        </div>
        <form onSubmit={storePaymentMethod} action="#" className="py-5">
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
                name="name"
                // bookData itu adalah useState yang di atas
                value={paymentMethodData.name}
                onChange={handleInputChange}
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              />
            </div>

            <div className="mb-4.5">
              <label
                className="mb-3 block text-base font-medium text-black dark:text-white"
              >
                Account Naumber
              </label>
              {errors.account_number && (
                <div className="p-2 my-2 text-sm text-red-800 rounded-lg bg-red-50">
                    <span className="font-medium">{errors.account_number[0]}</span>
                </div>
              )}
              <textarea
                name="account_number"
                // bookData itu adalah useState yang di atas
                value={paymentMethodData.account_number}
                onChange={handleInputChange}
                rows="6"
                className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-indigo-600 active:border-indigo-600 disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-indigo-600"
              ></textarea>
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
