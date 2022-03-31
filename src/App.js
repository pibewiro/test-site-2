import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';


function App() {

  const [cars, setCars] = useState(null)
  const getCars = async () => {
    const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/cars`)
    setCars(data)
  }

  useEffect(()=>{
    getCars()
  }, [])

  return (
    <div className="">
      <h1 className="header">Cars</h1>
      {cars && cars.map(x=>(
        <div className="car__container">
          <p>Make: {x.make}</p>
          <p>Model: {x.model}</p>
          <p>Price: {x.price}</p>
          <p>Year: {x.year}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
