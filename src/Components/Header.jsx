import React, { useEffect, useState } from 'react'
import Content from './Content'
import gsap from 'gsap'

const Header = () => {

    const API_KEY = 'b0fb31a2c71af89ebe4191d968e4a34a'

    const [city, setCity] = useState('salem')
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(false)
    const [errMsg, setErrMsg] = useState('')

    function cityHandler(e){
      let inputEl = document.querySelector('input').value
      setCity(inputEl)
    }

    function enterKeyHandler(e){
      if(e.code === 'Enter'){
        setCity(e.target.value)
      }
    }

    function retryHandler(){
        setCity('salem')
        setLoading(true)
        setErr(false)
        setErrMsg('')
    }

    useEffect(()=>{
        try{
            async function getData(){
                let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
                if(!res.ok){
                    setErr(true)
                    setErrMsg(`Wrong Data! status: ${res.status} Page Not Found`)
                    setLoading(false)
                }
                let resData = await res.json()
                setData(resData)
                setLoading(false)
              }
              getData()
        }
        catch(e){
            console.log(e.message);   
        }
        finally{
            console.log(' finally Executed'); 
        }

      
    }, [city])

    useEffect(()=>{

        gsap.set('.card',{
          opacity : 0,
        })
  
        gsap.to('.card',{
          opacity : 1,
          duration : 1,
          ease: 'linear'
        })
      },[city])

    if(loading){
        return (
            <>
                <div className='d-flex justify-content-center align-items-center' style={{height : '100vh', width : '100vw'}}>
                    <span className="spinner-border"></span>
                    <span className='ms-2'>Loading Please Wait</span>
                </div>
            </>
        )
    }

    if(err){
        return (
            <>
                <div className='d-flex flex-column justify-content-center align-items-center' style={{height : '100vh', width : '100vw'}}>
                    <h3 className='bg-danger'>{errMsg}</h3>
                    <button className='btn btn-success' onClick={retryHandler}>Retry</button>
                </div>
            </>
        )
    }

    return (
      <>
          {data && <Content 
            temp={data.main.temp}
            name={data.name}
            country={data.sys.country}
            lat={data.coord.lat}
            lon={data.coord.lon}
            humidity={data.main.humidity}
            wind={data.wind.speed}
            ch={cityHandler}
            kh={enterKeyHandler}
          />}
      </>
    )
}

export default Header


