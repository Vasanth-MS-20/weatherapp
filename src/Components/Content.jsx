import React from 'react'
import { FaWater } from "react-icons/fa6";
import { MdWindPower } from "react-icons/md";
import { TbTemperatureCelsius } from "react-icons/tb";
import { VscSearchFuzzy } from "react-icons/vsc";

const Content = React.memo(({temp, name, country, lat, lon, humidity, wind, ch, kh}) => {
  return (
    <>
        <div className="row d-flex align-items-center" style={{height : '100vh'}}>
          <div className="col-sm-3 mx-auto">
            <div className="card w-100" data-bs-theme='dark'>
            <div className="card-body">

              <div className="d-flex align-items-center gap-2">
                <input type="search" className='form-control border border-secondary' placeholder='Search Your City' onKeyDown={kh} />
                <button className="btn btn-outline-secondary text-white" onClick={ch}><VscSearchFuzzy /></button>
              </div>

              <div className='d-flex flex-column align-items-center'>
                <p><img src="https://cdn-icons-png.flaticon.com/512/232/232383.png" className=' img-fluid mt-4' alt="" height={150} width={150} /></p>
                <h2 className='text-light'>{temp}<TbTemperatureCelsius /></h2>
                <h4 className='text-success'>{name}</h4>
                <h4 className='text-danger'>{country}</h4>
              </div>

              <div className='d-flex justify-content-around m-2 mb-4 text-warning'>
                <div className='d-flex flex-column align-items-center h5'>
                  <p>Latitude</p>
                  <span>{lat}</span>
                </div>
                <div className='d-flex flex-column align-items-center h5'>
                  <p>Longitude</p>
                  <span>{lon}</span>
                </div>
              </div>
              <div className="d-flex justify-content-between text-primary">
                <div style={{margin : '0x', padding : '0px', lineHeight : '10px', fontSize: '20px'}} className='d-flex flex-column align-items-center h6'>
                  <p><FaWater /></p>
                  <p>{humidity} %</p>
                  <p>Humidity</p>
                </div>
                <div style={{margin : '0x', padding : '0px', lineHeight : '10px', fontSize : '20px'}} className='d-flex flex-column align-items-center h6'>
                  <p><MdWindPower /></p>
                  <p>{wind} Km/h</p>
                  <p>Wind Speed</p>
                </div>
              </div>

            </div>
            </div>
          </div>
        </div>
    </>
  )
}
)

export default Content