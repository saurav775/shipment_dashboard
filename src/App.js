import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'
import { Navbar, CounterValueCards } from './components'
import { Loader } from './UIComponents'
import './App.css'

const App = () => {
  const [ shipments, setShipments ] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.post('https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch',
    { 'email': process.env.REACT_APP_EMAIL },
    { headers: { 'Authorization': `Bearer ${process.env.REACT_APP_BEARER_TOKEN}` } }
    ).then(data => {
      setShipments(data.data)
      setLoading(false)
    })
  }, [setShipments])

  const getCounterData = () => {
    const counterData = {}
    shipments.forEach(e => {
        counterData[e.current_status_code] = counterData[e.current_status_code] + 1 || 1
    });
    return counterData
  }

  return (
    <Fragment>
      <Navbar />
      {
        loading ? (<Loader />) : (
          <div className="container">
            <CounterValueCards counterData={getCounterData()} />
          </div>
        )
      }
    </Fragment>
  )
}

export default App
