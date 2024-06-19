import React from 'react'
import Dashboard from '../dashboard/Dashboard'

function DashboardElem({add}) {


  return (
  
    <div className="card d-inline-flex  mb-3" style={{"width": "18rem"}}>
    <div className="card-body ">
      <h5 className="card-title">Prekė</h5>
      <img src={add.image} style={{"width": "12rem"}} alt="" />
      <p className="card-text">Aprašymas: {add.description}</p>
      <p className="card-text">Kaina:  {add.price}</p>
      
      
      <a href="#" className="card-link">Perziureti</a>
    </div>
  </div>
  )
}

export default DashboardElem