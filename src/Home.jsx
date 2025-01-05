import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";


// function Header(){
//     return (
//         <>
//         <header>
//             <nav>
//                 <ul>
//                     <li>Home</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     </>
//     );
// }

// function Main(props){
//     return(
//     <>   
//         <main>
//             {/* <h1>Halo, saya sedang belajar React</h1> */}
//             <h1>Halo, saya sedang belajar {props.tech} </h1>
//             <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, explicabo!</p>
//             {/* <button>Read More</button> */}
//             <button>{props.text}</button>
//         </main>
//     </> 
//     );
// }

// function Footer()
// {
//     // bisa const dan let juga
//     // let name = "Fikri";
//     const name = "Fikri";
//     return (
//         <div>
//             <footer>
//                 <h2>
//                     Copyrigh &copy; Azhar Fikri
//                     Nama {name}
//                 </h2>
//             </footer>

//         </div>
//     );
// }

function Home(){
    return(
        <>
            <Header/>
            <Main tech="React" btn="Belajar React"/>

            {/* ini kalau dibuat gini ada 2 pemanggilan function */}
            {/* <Main tech="React"/>
            <Main text="Belajar React"/> */}

            <Footer/>
     
        </>
    );
}

// export default Header;
// export default Main;
// export default Footer;
export default Home;


// kita tinggal import, taro di atas

// ini yang disebut, jsx module, import export

// KALAU tanpa home, nanti export nya seperti ini
// export {Header, Main, Footer};