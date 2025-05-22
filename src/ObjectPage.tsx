import React from 'react';
import { useNavigate, useNavigation, useParams } from 'react-router';
import { objects } from './Constants';

import { Map } from "@pbe/react-yandex-maps"

const ObjectPage = () => {
  const { id } = useParams();


  if (id === undefined || id === null || objects.filter(e => e.id === Number.parseInt(id) ).length  === 0){
    return (
         <div>
            <h2>Такой объект не найден</h2>
        </div>
    )
  }


  let obj = objects.filter(e => e.id === Number.parseInt(id))[0]

  return (
    <div className='col'>
        <div className='row align-items-center'>
            <div className='col-md-4 col-sm-12'>
                <img width={"100%"} style={{borderRadius: "20px"}} src={`./img/${obj.id}.png`}/>
            </div>
            <div className='col-md-8 col-sm-12' >
                <h2>{obj.title}</h2>
                <p>{obj.description}</p>
            </div>
        </div>
        <div style={{height:"450px"}}>
            <Map style={{width: "100%", height: "100%"}} defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
        </div>
    </div>
    
  );
};

export default ObjectPage;