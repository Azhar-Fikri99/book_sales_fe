import { useEffect, useState } from "react";
import ProductList from "../../../components/shared/ProductList";
import { getBooks } from "../../../services/books";
import { getGenres } from "../../../services/genres";

export default function Books() {
  const [books, setBooks] = useState([]);

  // genre
  const[genres, setGenres] = useState([]);

  //useState

  //useEffect
  // di bawah nanti fetchGenre nya yang dulu di load
//   useEffect( ()=>{
//     //fetach : data yang mau kita ambil
//     const fetchBooks = async () => {
//       // untuk variable ini bebas
//       const data = await getBooks()
//       setBooks(data)
//     }
//     fetchBooks()
//     //kita kasih depedency,
//     // kita kasih [] biar di browser nya jalan sekali



//   //useEffect

//     const fetchGenres = async () => {
//       const data_genre = await getGenres()
//       setGenres(data_genre)
//     }
//     fetchGenres();
//     fetchBooks();
// }, [])

// kita buat useEffecet nampil bareng bareng
useEffect(() => {
  // kode akan ditunggu sampai selesai semua, lalu memperbaharui state
  const fetchData =  async () => {
    const[booksData, genresData] = await Promise.all([getBooks(), getGenres()])
    setBooks(booksData);
    setGenres(genresData);
  };
  fetchData();
}, []);


  // fungsi untuk mendapatkan nama genre berdasarkan genre_id
  // nama function nya adalah bookGenre
  const bookGenre = books?.map((book) => {
    return {
      ...book,
      genre: genres.find((genre) => genre.id === book.genre_id),
    }
  })

  return (
    // <ProductList />

    // kita kalau mau mengirimkan data bisa pakai props
  // mau menampilkan data di route kita bisa pakai outlet

  // cara bikin prop,
  // yaitu : nama props nya
  // datas biar jamak
  // books yang di sini di ambil dari state
    // <ProductList datas={books}/>
    <ProductList datas={bookGenre}/>

    //setelah dibuatkan props kita buat looping ke productlist
  )

  //info : untuk return : kita bisa pakai return
}
