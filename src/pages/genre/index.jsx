import { useRef } from "react";
import genres from "../../utils/constants/genres";

export default function Genre() {
  //data awal gak boleh di otak atik
  let genreList = [...genres]; // salin data array constants/authors

  //useRef(null) ini di ambil dari from react
  const genreContainerRef = useRef(null); // membuat container author
console.log(genreList);

  const handleClick = () => {
    const newGenre = {
      name: "Petualangan",
      description: "Cerita Lokal"
    }

    genreList.push(newGenre);
    
    // current itu sekarang,
    // useRef nya kita bungkus di authorContainerRef
    if (genreContainerRef.current) {
      const newGenreElement = document.createElement("div");
      newGenreElement.className = "p-2 lg:w-1/4 md:w-1/2 w-full";
      newGenreElement.innerHTML = `
        <h2>${newGenre.name}</h2>
        <p>${newGenre.description}</p>
      `;
  
      genreContainerRef.current.appendChild(newGenreElement);
      
    }
    
  console.log(genreList);
  alert("Data berhasil ditambahkan")
  }

  


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Authors</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        <div ref={genreContainerRef} className="flex flex-wrap -m-2">
          {genreList.map((genre, index) => (
            <div key={index} className="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                {/* <img src={author.imageUrl} className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" /> */}
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">{genre.name}</h2>
                  <p className="text-gray-500">{genre.role}</p>
                  <p>{genre.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button onClick={handleClick} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Send</button>

      </div>
    </section>
  )
}
