import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

// export default function PublicLayout({children}) {
//   return (
//     <>
//       <Header/>
//         {children}
//       <Footer/>
//     </>
//   )
// }



// cara mengguaknan outlet : di hapus {children nya}
export default function PublicLayout() {
  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/>
    </>
  )
}
