import { useState } from "react";

const initAutomotive = [
  { car: "Toyota" },
  { car: "Audi" },
  { car: "Tesla" }
]

function Home() {
  const [car, setCars] = useState('')
  const [automotive, setAutomotive] = useState(initAutomotive)

  const handleChange = (event) => {
    setCars(event.target.value) // memperbarui state car ketika input berubah
  }
  
  const handleSubmit = (event) => {
    event.preventDefault() // mencegah reload halaman
    if (car.trim() !== '') { // pastikan input tidak kosong
      setAutomotive([...automotive, { car }]) // menambah data ke state automotive
      setCars('') // kosongkan input ketika submit telah berhasil
    }
  }
  console.log(car)
  console.log(automotive)

  return (
    <>
      {/* // Tampilkan data */}
      <ul className="w-1/2 mx-auto py-12 my-12 border">
        <h2>Data Nama:</h2>
        {automotive.map((automobile, index) => (
          <li key={index}>{automobile.car}</li>
        ))}
      </ul>

      {/* // Bikin form */}
      <div className="w-1/2 mx-auto py-12 my-12 border">
        <h1>Masukan Nama Anda!</h1>
        <form onSubmit={handleSubmit}>
          <input value={car} onChange={handleChange} name="car" type="text" className="border" />
          <br />
          <button type="submit" className="border">Kirim</button>
        </form>
      </div>
    </>
  )
}

export default Home;