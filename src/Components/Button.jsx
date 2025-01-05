


export default function Button(props){
    // kita coba lakukan destrutoring (pangggil)
    const {txt} = props

    return (
        // <button>Click Me</button>
      
        <button> {txt} </button>
    )
}

// kita tampilkan button dulu di main