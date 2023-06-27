import React, { useEffect, useState } from 'react';
import { getData } from '../utils/data';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';


export default function Wizards() {
  const ENDPOINT = 'Wizards';

  const [Wizards, setWizards] = useState([]);
  
  useEffect(() => {
    let data = getLocalStorage(ENDPOINT);
    if (data.length > 0) {
      setWizards(data);
    } else {
      getData(ENDPOINT)
        .then((data) => {
          setWizards(data);
          setLocalStorage(ENDPOINT, data);
        })
    }
  }, []);

  return (
      <main style={{ padding: "1rem 0" }}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <h2 className='mb-4'>Wizards</h2>
            <table className="table table-hover" style={{ maxwidth: '600px' }}>
              <thead>
                <tr>
                  <th>Full Name</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                {Wizards.map((wizard) => <Wizard key={wizard.id} wizard={Wizard} />)}
              </tbody>
            </table>
          </div>
        </div>
      </main>
  );
}

const Wizard = () => {
  return (
    <tr>
      <td>{`${Wizard.firstName} ${Wizard.lastName}`}</td>
      <td>{Wizard.firstName}</td>
      <td>{Wizard.lastName}</td>
    </tr>
  )
}