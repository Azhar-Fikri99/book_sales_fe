import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { showBook } from "../../../services/books";
import { getGenres } from "../../../services/genres";
import { createOrder } from "../../../services/orders";

export default function BookDetail() {
  // useParams
  // useState
  // useEffect

    //useState, bikin 2
  // untuk mengambil data
  const[book, setBook] = useState([]);
  const[genre, setGenre] = useState([]);
  const[quantity, setQuantity] = useState(1);
  

    
  const navigate = useNavigate()

  // useParams
  // destruct id dari URL, supaya mengambil id dari URL
  // useParams untuk mengambil parameter
  const {id} = useParams()



  //useEffect
  useEffect(()=>{
    const fetchData = async () => {
      // ini teknik penulisan singular
      // ini buku nya hanya 1
      const[bookData, genreData] = await Promise.all([showBook(id), getGenres()])

      setBook(bookData);
      setGenre(genreData);

    }
    fetchData();
  }, [id]);

const genreName = genre.find(g => g.id === book.genre_id)

// console.log(book)     
// console.log(book.data)     

const handleInput = (e) =>{
  setQuantity(e.target.value);
}

const handleSubmit = async (e) => {
  e.preventDefault()

// untuk tambah data, kita bisa contek di create book
// ini cara panjang
// const formDataToSend = new FormData()

//   formDataToSend.append('title', bookData.title)
//   formDataToSend.append('description', bookData.description)
//   formDataToSend.append('price', bookData.price)
//   formDataToSend.append('stock', bookData.stock)
//   formDataToSend.append('cover_photo', bookData.cover_photo)
//   formDataToSend.append('genre_id', bookData.genre_id)
//   formDataToSend.append('author_id', bookData.author_id)

    const data = {
      book_id: book.id,
      quantity: quantity
    }

    try{
      await createOrder(data)
      alert("Order Berhasil")
      return navigate('/books')
    }catch(err){
      console.log(err)
    }

}

 
console.log("jumlah nya : " , quantity);
console.log("id ke : ", book.id);





// tugas : tombol buy di cegah
const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const handleBlockButton = () => {
    alert("Harap Login Dulu")
    return navigate("/login");
  };



  
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img title={book.title} alt="Gambar ecommerce nya" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" 
          src={"http://127.0.0.1:8000/storage/books/" + book.cover_photo } />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">{genreName ? genreName.name : ""}</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{book.title}</h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
            </div>
            {/* <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p> */}
            <p className="leading-relaxed">{book.description}.</p>

            <form onSubmit={handleSubmit} action="">
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center">
                  <span className="mr-3">quantity </span>
                  <input 
                        value={quantity}
                        name="quantity"
                        onChange={handleInput}
                        max={book.stock}
                        
                  type="number" min="1" className="rounded border appearance-none border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base" />
                </div>
              </div>
              {!userInfo && (
              <div className="flex flex-col gap-5">
                <span className="title-font font-medium text-2xl text-gray-900">{book.price}</span>
                
                <button 
                onClick={handleBlockButton}
                className="inline text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy</button>
              </div>
                )}

            </form>
          
          </div>
        </div>
      </div>
    </section>
  )
}
