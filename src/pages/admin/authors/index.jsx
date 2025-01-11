// import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getAuthors } from "../../../services/authors";
import { Link } from "react-router-dom";

export default function Authors() {
  const [authors, setAuthors] = useState([]);  
  
  useEffect(() => {  
    const fetchAuthors = async () => {  
      const data = await getAuthors();  
      setAuthors(data);  
    };  
  
    fetchAuthors();  
  }, []);

  console.log(authors)
  
  return (
    <div
      className="rounded-sm shadow-default dark:bg-boxdark sm:px-7.5 xl:pb-1"
    >
      {/* ini pakai ternary */}
    
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead className="border-b bg-gray-50 text-white">
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th
                className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11"
              >
                name
              </th>
              <th
                className="min-w-[150px] px-4 py-4 font-medium text-black dark:text-white"
              >
                photo
              </th>
              <th
                className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white"
              >
                bio
              </th>

              <th
                className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white"
              >
                Action
              </th>
            
            </tr>
          </thead>
          <tbody>

  
          {authors.length > 0 ?
           authors.map((author) => (
            <tr key={author.id} className="hover:bg-gray-50">
            <td
              className="px-4 py-5 pl-9 xl:pl-11"
            >
              <h5 className="font-medium text-black dark:text-white">{author.name}</h5>
         
            </td>
            <td className="px-4 py-5">
              {/* <p className="text-black dark:text-white">Jan 13,2023</p> */}
              <img src="https://www.femalefirst.co.uk/image-library/partners/bang/land/1000/a/ari-aster-b84d4f0f425daa14d46910946d5ac94675a5fc7d.jpg"  />
            </td>

            <td className="px-4 py-5">
              <p className="text-black dark:text-white">{author.bio}</p>
            </td>

            <td className="px-4 py-5">
              <div className="flex items-center space-x-3.5">
                <Link to="/admin/Authors/create"><i className="fa-solid fa-plus"></i></Link>
                <Link to="/admin/Authors/edit"><i className="fa-solid fa-pen-to-square"></i></Link>
                <button>
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