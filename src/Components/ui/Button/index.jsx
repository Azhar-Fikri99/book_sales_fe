

// ini aku komentari
// export default function Button(props){
//     // kita coba lakukan destrutoring (pangggil)
//     const {txt} = props

//     return (
//         // <button>Click Me</button>
      
//         <button> {txt} </button>
//     )
// }


// kita tampilkan button dulu di main

//CSS ini JS
// bikin variable const styles = {
// const styles= {
//     backgroundColor: 'lightskyblue',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px'
// }


// Button() adalah Compoenent
export default function Button(props){
    return (
      
        // <button> Hello </button>
        // pakai css inline
        // <button style={styles}>Hello </button>
        <button className="flex mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">{props.txt} </button>
    )
}
