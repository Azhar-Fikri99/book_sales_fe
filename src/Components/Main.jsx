// export default Main;

// dibagian home, props yang mau kita kirim yaitu : ada 2

import Button from "./Button"
export default function Main(props){
    const{tech, btn} = props
    return(
    <>   
        <main>
            {/* <h1>Halo, saya sedang belajar React</h1> */}
            <h1>Halo, saya sedang belajar {tech} </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, explicabo!</p>
            {/* <button>Read More</button> */}
            
            {/* <button>{props.text}</button> */}

            {/* kita ganti dengna commpoent button */}

            {/* ini txt nya dari BUtton */}
            <Button txt={btn} />
        </main>
  
    </> 
    )
}


// jangan lupa export, bisa kayak gini
// export default Main;

// atau export nya taro di atas juga bisa