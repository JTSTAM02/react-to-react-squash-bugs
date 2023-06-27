import React, { useEffect, useState } from 'react';
import { getData } from '../utils/data';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';


export default function Houses() {
  const ENDPOINT = 'Houses';

  const [Houses, setHouses] = useState([]);
  
  useEffect(() => {
    let data = getLocalStorage(ENDPOINT);
    if (data.length > 0) {
      setHouses(data);
    } else {
      getData(ENDPOINT)
        .then((data) => {
          setHouses(data);
          setLocalStorage(ENDPOINT, data);
        })
    }
  }, []);


  return (
    <main style={{ padding: "1rem 0" }} className="container">
      <div className="row justify-content-center text-center gap-2">
        <h2>Houses</h2>
        {Houses.map((house) => <House key = {house.id} house ={house} />)}
      </div>
    </main>
  );
}


const House = ({ house }) => {
  return (
    <div className='card col-5 p-3'>
      <h2>{House.name}</h2>
      <div>Colors: {house.houseColours}</div>
      <div>Founder: {house.founder}</div>
      <div>Animal: {house.animal}</div>
      <div>Element: {house.element}</div>
      <div>Ghost: {house.ghost}</div>
      <div>Common Room: {house.commonRoom}</div>
    </div>
  )
}