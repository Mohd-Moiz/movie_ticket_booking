import React from 'react'
import './poster.css';
import movie3 from './Kgf2.mp4'
import { useLocation,useNavigate } from 'react-router-dom';

 export default function Moviedetail() {
  const location = useLocation();
  const navigate = useNavigate();
  function handleClick()
  {
    if(location.state.name==="")
    {
      navigate("/Sign-in")
    }
    else
    {
      navigate("/ticket" ,{state:{id:3,name:"KGF2"}})
    }
  }
  return (<>
    <div>
      <div>
        <div style={{float:"left",paddingLeft:"15px",paddingTop:"50px"}}>
        <video src={movie3} poster="https://th.bing.com/th/id/OIP.zvch79j-A0WXKMtzB0vzWgHaLK?pid=ImgDet&rs=1" width="440" height="480" style={{borderRadius:"20px",borderBottom:"28px solid black",borderLeft:"5px solid black",borderTop:"5px solid black",borderRight:"5px solid black"}} controls />
        <div style={{color:"whitesmoke",position:"absolute",top:"80.6%",left:"11.9%"}}><strong>In cinemas now</strong></div>
        </div>
        <div style={{float:"left",lineHeight:"0.4",paddingTop:"50px"}}>
        <h1 style={{paddingLeft:"20px",paddingTop:"35px"}}>K. G. F. Chapter 2</h1>
        <div style={{paddingLeft:"23px"}}>
        <svg height="35" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 210">
                <polygon points="100,10 40,198 190,78 10,78 160,198"
              style={{fill:"gold",fillRule:"nonzero"}} />
        </svg>
        <div style={{position:"absolute",left:"34.2%",top:"18.4%"}}><h2>9.3/10 <h6 style={{display:"inline"}}>923.7K ratings</h6></h2></div>
        </div>
        <div style={{paddingLeft:"25px",lineHeight:"3"}}>
          <bold style={{border:"0px solid black",paddingLeft:"4px",paddingRight:"4px",paddingBottom:"2px",backgroundColor:"#E0E0E0",marginRight:"5px",color:"black"}}><strong>IMAX 2D</strong></bold>
          <bold style={{border:"0px solid black",paddingLeft:"4px",paddingRight:"4px",paddingBottom:"2px",color:"black",backgroundColor:"#E0E0E0"}}><strong>KANNADA</strong></bold>
        </div>
        <div style={{lineHeight:"1.3",paddingLeft:"25px"}}>
          <strong style={{lineHeight:"1.3"}}>2hr 48m - Action, Drama, Period - U/A - 14 Apr, 2022</strong>
        </div>
        <div style={{paddingLeft:"23px",lineHeight:"1"}}>
          <p>The blood-soaked land of Kolar Gold Fields (KGF) has a new overload now-Rocky, whose<br/>name strikes a fear in the heart of his foes. His allies look up to Rocky as their saviour, the<br/>government sees him as a threat to law and order; enemies are clamouring for revenge and<br/>conspiring for his downfall. Bloodier battles and darker days await as Rocky continues on his quest<br/>for unchallenged supremacy</p>
        </div><br/>
        <div style={{paddingLeft:"23px",lineHeight:"20px"}}>
          <strong>Cast and crew</strong>
          <ul style={{lineHeight:"1.3"}}>
            <li><strong>Directed by : </strong>Prashanth Neel</li>
            <li><strong>Written by : </strong>Prashanth Neel</li>
            <li><strong>Produced by : </strong>Vijay Kiragandur</li>
            <li><strong>Starring : </strong>Yash, Sanjay Dutt, Raveena Tandon, Srinidhi Shetty, Prakash Rai, Archana Jois, Malavika Avinash, Vasishta N. Simha</li>
            <li><strong>Music by : </strong>Ravi Basrur</li>
            <li><strong>Cinematography : </strong>Bhuvan Gowda</li>
          </ul>
        </div>
        <div style={{paddingLeft:"23px"}}>
        <button id="book" type="submit"  /*onClick={handleClick}*/ onMouseOver={()=>{document.getElementById("book").style.backgroundColor="#C51162"}} onMouseOut={()=>{document.getElementById("book").style.backgroundColor="#F50057"}} style={{position:"absolute",top:"65.6%",width:"20%",height:"32px",fontSize:"23px",backgroundColor:"#F50057",border:"0px solid #0288D1",color:"whitesmoke",borderRadius:"9px",paddingTop:"5px",paddingBottom:"5px"}}>Book tickets</button>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}