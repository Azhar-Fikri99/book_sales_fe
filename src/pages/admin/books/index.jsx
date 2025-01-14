import { Link } from "react-router-dom"
import { deleteBook, getBooks } from "../../../services/books"
import { useEffect, useState } from "react"
import { getGenres } from "../../../services/genres";
import { getAuthors } from "../../../services/authors";

export default function Books() {
  const [books, setBooks] = useState([]);  
  //kita tambahkan state
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);



  // handle relation data
  useEffect(() => {  
    const fetchBooks = async () => {  
      const data = await getBooks();  
      setBooks(data)  
    };  

    const fetchGenres = async () => {  
      const data = await getGenres();  
      setGenres(data)  
    };  
  

  
    const fetchAuthors = async () => {  
      const data = await getAuthors();  
      setAuthors(data)
    };  
  
    fetchBooks()  
    fetchGenres()
    fetchAuthors()

    // ini useEffect akan di tampilkan array kosong
  }, []);

  // console.log(books)
  

  // fungsi untuk mendapatkan nama genre berdasarkan genre_id
  const getGenreName = (id) => {
                      // find((g)) adalah alias aja, bisa diganti yang lain
    const genre = genres.find((g)=> g.id === id);
    return genre ? genre.name : "Unkonwn Genre";
  }


  // // pakai if else biasa
  // if(author)
  // {
  //   return author.name;
  // }else{
  //   return "unknwon Author";
  // }


  // ini untuk menampilkan genre id
  // {getGenreName({book.genre_id)}

  // fungsi untuk mendapatkan nama genre berdasarkan author_id
  const getAuthorName = (id) => {
    const author = authors.find((a)=> a.id === id);
    return author ? author.name : "Unkonwn Genre";
  }

  // {getGenreName({book.author_id)}

  const handleDelete = async (id) => {
    // deleteBook dari services jangan lupa di inport
   const confirmDelete =  window.confirm("Apakah Anda yakin ingin Menghapus Data ini ?");

   if(confirmDelete){
      await deleteBook(id)

    // ini kita update pakai setter Books
    setBooks(books.filter(book => book.id !== id))
    }
  }


  return (
    <div
      className="rounded-sm shadow-default dark:bg-boxdark sm:px-7.5 xl:pb-1"
    >
      {/* ini pakai ternary */}

      <Link to ={'/admin/books/create'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 roudner">Tambah BUku</Link>
    
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="border-b bg-gray-50 text-white">
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th
                className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11"
              >
                Title
              </th>
              <th
                className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white"
              >
                Description
              </th>
              <th
                className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white"
              >
                Stock
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
              cover_photo
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
              genre_id
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
              author_id
              </th>
              <th className="px-4 py-4 font-medium text-black dark:text-white">
              Action
              </th>
            </tr>
          </thead>
          <tbody>

  
          {books.length > 0 ?
           books.map((book) => (
            <tr key={book.id} className="hover:bg-gray-50">
              <td
                className="px-4 py-5 pl-9 xl:pl-11"
              >
                {/* <h5 className="font-medium text-black dark:text-white">{book.title}</h5> */}
                <h5 className="font-medium text-black dark:text-white">{book.title}</h5>
                <p className="text-sm">{book.price}</p>
              </td>
              <td className="px-4 py-5">
                <p className="text-black dark:text-white">{book.description}</p>
              </td>
              <td className="px-4 py-5">
                <p className="text-black dark:text-white">{book.stock}</p>
              </td>
              <td className="px-4 py-5">
                {/* <p className="text-black dark:text-white">{book.cover_photo}</p> */}
                {/* <img src="https://cineverse.id/wp-content/uploads/2023/08/timeskip-one-piece-awal-mula-new-world.jpg" alt="gambar"/> */}
                <img src={"http://127.0.0.1:8000/storage/books/" + book.cover_photo} alt="gambar"/>
              </td>
              <td className="px-4 py-5">
                <p className="text-black dark:text-white">{getGenreName(book.genre_id)} </p>
              </td>
              <td className="px-4 py-5">
                <p className="text-black dark:text-white">{getAuthorName(book.author_id)} </p>
              </td>
              <td className="px-4 py-5">
                <div className="flex items-center space-x-3.5">
                  <Link to="/admin/books/create"><i className="fa-solid fa-plus"></i></Link>
                  <Link to={`/admin/books/edit/${book.id}`}><i className="fa-solid fa-pen-to-square"></i></Link>
                  <button onClick={ () =>  handleDelete(book.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>

                )): (
                  <p>Tidak ada data Buku</p>
                )}
          </tbody>
        </table>
      </div>
  
    </div>
  )
}