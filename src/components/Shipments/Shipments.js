import React, { useState, useEffect } from 'react'
import Shipment from '../Shipment'
import Timeline from '../Timeline'
import './Shipments.css'

const Shipments = (props) => {
    const { filteredData } = props
    const [currentItem, setCurrentItem] = useState(filteredData[0])

    useEffect(() => {
        setCurrentItem(filteredData[0])
    }, [setCurrentItem, filteredData])

    const handleShipmentClick = (id) => {
        setCurrentItem(filteredData.filter(e => e._id === id)[0])
    }
    return (
        <div className="d-flex flex-space-between align-items-center">
            <div className="timeline-container">
                <Timeline item={currentItem.scan} />
            </div>
            <div className="shipments-container">
                <div className="d-flex table-heading flex-space-between">
                    <div className="table-heading-text bold-font">awb number</div>
                    <div className="table-heading-text bold-font">transporter</div>
                    <div className="table-heading-text bold-font">source</div>
                    <div className="table-heading-text bold-font">destination</div>
                    <div className="table-heading-text bold-font">start date</div>
                    <div className="table-heading-text bold-font">etd</div>
                    <div className="table-heading-text bold-font">status</div>
                </div>
                <div className="shipment-container mt-1">
                    {
                        filteredData.map(f => (
                            <Shipment data={f} key={f._id} onShipmentClick={(id) => handleShipmentClick(id)} currentItem={currentItem} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Shipments
