import { Link } from "react-router-dom";

// export default function ProductList( props) {
export default function ProductList( {datas}) {
// cara singkat nya, kita destructioring dengan pakai kurung kuarawal { di paramter nya}

  //kita tangkap props nya
  // props.datas ->datas adalah data yang di kirim
  // console.log("PRODUCTLIST", props.datas)

  
  // console.log("PRODUCTLIST", datas)
  // const book = props.book;

  // ini yang kita looping
  // title, description, price, stock, cover_photo dan genre

  const currencyFormat = (price) =>{
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    }).format(price)
  }

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Best Seller</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Pilih semua yang kamu suka!</p>
        </div>

        <div className="flex flex-wrap -m-4">
        
        {/* props.datas adalah data kita */}
          {/* {props.datas.map((book) => ( */}
          {datas.map((book) => (
          <div  key={book.id}  className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link to={`/books/${book.id}`} className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" 
              src="https://dummyimage.com/420x260" />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{book.genre.name}</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">{book.title}</h2>
              <p className="mt-1">{currencyFormat(book.price)}</p>
            </div>
          </div>
          ))}
             
              

        </div>
        
      </div>

    </section>
  )
}
