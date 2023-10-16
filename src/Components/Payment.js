import React from 'react'
import { useNavigate } from 'react-router-dom';

// import { useLocation } from 'react-router-dom'

export default function Payment() {
  const navigate = useNavigate()
    // const location = useLocation()
    function handlepayment()
    {
        var movie="1";
        // var json_data="Jayanagar";
        var json_data = {
          data:"Jayanagar"
        }
        json_data = JSON.stringify(json_data);
        console.log("hello",json_data)
        var url="http://localhost:8080/ticket/"+movie;
        console.log(url);
        fetch(url,
          {method:"PUT",
          headers:{"Content-type":"application/json"},
          body:json_data})
          .then(() => {
              navigate('/')
          })
    }
  return (
    
    <div>
    <button type="Submit" onClick={handlepayment}>pay now</button>
    </div>
  )
}
