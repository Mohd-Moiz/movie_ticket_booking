import React from 'react'
import './FirstPage.css';
import { Link,useNavigate,useLocation} from 'react-router-dom'
import { useEffect } from 'react';
import kantara from "./kantara.jpg"
import movie from "./movie.jpg"
import lovetoday from "./lovetoday.jpg"

export default function FirstPage(props) {
    const navigate = useNavigate();
    const location = useLocation();
  var d1=props.display1;
  var d2=props.display2
  var ob1,ob2,ob3,ob4,ob5,i;
  const moviename=["KANTARA","PUSHPA","KGF2","lovetoday"]
  const movieid=["movie1","movie2","movie3","movie4"]
 
useEffect(()=>
{
    console.log(location.state)
     if(location.state!=null)
     {
         
     var ob2=document.getElementById("user")
     var ob3=document.getElementById("email")
    
     const username=location.state.name;
     const email=location.state.email
     ob2.innerHTML="User Name:"+username 
     ob3.innerHTML="email:"+email
    }
     
},[])
function handleOut(event)
 {
    event.preventDefault()
    var ob4=document.getElementById("user")
    var ob5=document.getElementById("email")
    
    ob4.innerText=""
    ob5.innerHTML=""

  }
  
  function handleSearch(event)
  {
    event.preventDefault()
    ob1=document.getElementById("search").value;

    ob1=ob1.toUpperCase()
    var len=moviename.length
    var username=document.getElementById("user").innerHTML
    for(i=0;i<len;i++)
    {
      
      if(ob1==moviename[i])
      {
        navigate(movieid[i] ,{state : {name: username }})
        //alert(username)
        break;
    }
    if(i==0)
    {
        // alert("no result found ")
    }
    

    }
    
  }
  function handlemovie1()
  {
    var username=document.getElementById("user").innerHTML
    navigate("/movie1" ,{state : {name: username }})
  }

  function handlemovie2()
  {
    var username=document.getElementById("user").innerHTML
    navigate("/movie2" ,{state : {name: username }})
  }

  function handlemovie3()
  {
    var username=document.getElementById("user").innerHTML
    navigate("/movie3" ,{state : {name: username }})
  }
 
 
  return (
    <>
    <nav className="navbar" style={{backgroundColor:"rgb(15, 4, 71)",position: "sticky",
  top: "0"}}>
  <div className="container-fluid" >
    
  
  <img src={movie} alt="Bootstrap"  height="50" style={{padding:"1px 0px  1px 100px "}}/>
        
    <h1 style={{color:"whitesmoke"}}>Movie Ticket</h1> 
      <form className="d-flex" role="search"  >
      <input className="form-control me-2"  id="search"type="search" placeholder="Search for movies" aria-label="Search" style={{width:"400px" }}/>
      <button  onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
    </form>
    <button type="button"  style={{display:d2}}  onClick={(event)=>{handleOut(event)}} id="b2" className="btn btn-primary" >Sign out</button>
    
    <Link to="Sign-in">
    <button type="button"  style={{display:d1}}  id="b1" className="btn btn-primary" >Sign in</button>
    </Link>
    
    
     
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" style={{backgroundColor:"white"}} >
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="offcanvas offcanvas-end"  id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
    <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#" style={{fontWeight:"bold",paddingBottom:"10px"}}>Home</a>
          </li>
          <br/>
          {/* <li className="nav-item">
            <a className="nav-link active" href="#" style={{opacity:"1"}}>Feedback</a>
          </li> */}
          <li>
            <p id="user" style={{fontWeight:"bold"}}></p>
            <p id="email" style={{fontWeight:"bold"}}></p>
          </li>
         
           

    </ul>  
     
    </div>
    </div>

  </div>
  </nav>
   <div style={{backgroundColor:"white"}}>
        
        <h2 style={{textDecoration:"underline",marginTop:"50px",marginBottom:"50px",marginLeft:"20px",color:"black"}}>Recommended Movies</h2>
    
    <div className="recommendm" style={{width:"100%"}}>
        <div className="movie" >
           
        <img src={kantara}  onClick={handlemovie1} alt="no image1"  width="300px" style={{borderRadius:"20px",cursor:"pointer"}}/>
        
        <h3 style={{fontWeight:"bold"}}>Kantara(Kannada)</h3>
        <p style={{color: "rgb(102, 102, 102)"}}>Adventure/Drama/Thriller</p>
        </div>
        <div className="movie">
            <img src="data:image/jpeg;base64,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"  onClick={handlemovie2} alt="no image2" width="300px" style={{borderRadius:"20px",cursor:"pointer"}}/>
            <h3 style={{fontWeight:"bold"}}>PUSHPA</h3>
        <p style={{color: "rgb(102, 102, 102)"}}>Action/Thriller</p>
        </div>
        <div className="movie">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFRUZGRgaHBoeGhocGhocHBoaGhoaGhoYGiMcIS4lHB4rHxoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QGhISGDEhGiExNDE0NDQxMTExND80PzQ0NDE0NDQ0MTExNDQ0MTQxNDQ0NDQxNDQxNDE0NDQxNDE/Mf/AABEIARMAtwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAABAAIDBAUGB//EADoQAAEDAgMFBgUDBAEFAQAAAAEAAhEDIQQSMSJBUWFxBTKBobHwBhORwdEUQuFSYnLxsiMzgqLCFv/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAcEQEBAQADAQEBAAAAAAAAAAAAARECITFBElH/2gAMAwEAAhEDEQA/APH3FDMlEmyc2kTrZAETPsq1Tot3keJP2KmGEYe65p5ZgD63QZ7T1Tp9yrT+znAxp/kC319dE9/ZNYX+U+DvAnn+2yCnmQeU51MizhHIyFG5BboH/pH/AC+yhDlJS/7f/koggObci4800ap06dPsgsRmY0f3KrvV7Cd0TuKo8FFJ2pQEweqc9Fuh6hVDAbhIp8adQk4II7pwN0AnEXQNonbPigSZRojbPikglws5m+PoUkcL3h4+iSCAvA0CIqO3BSho1N45wOl9d2iQqN/0B6u1QNZUfwlXaeMcBtNMf+LvqCPuqvzxx/8Ab8Kzg6t+95z/ACitTDdsUSMrpZrECBqdwsNeC0sBWY0O+RWaZ1aCWg3JIynj4fWYzaYLpGwTuBy3idA5hJMHgpX9lsc4AsDHE2MlhF7zmy+gUVe7QxDKjYfTa1zpgkRJc4kO12gC5xiTu1vONjcDmJcGgBuYd0DZYHu2uYDb2PU6i7W7JxLWlsOcw3LXC457MiTxjeJO5U8LWc0Frpyi7iIloaYDiRIeAbTcAE8UGTWp5AWO1B04dRqDyKiatftDD5yXugTq6d8gl17uJ033371mvpuhogx+3iZ3D6hVMQg3RGiTmQYmTvjSeXHqi0IiRjob4/YqGLpznbJ6j7oN4qKCc1uy7qPRI6myDND1+yqC+wHSU515TBcRyRhAwhGbpQlvQGgNtNIuU6n3006n3vQSYQ7Q8fQooYY7Y8fQpIK5qHdbnv8Aqh8vefP3JUjnCbQ31TRyaSeN0Caxu8nwCmp06Wji/wAA37lMYTvYT4keiv0i060ATzquk7r7VkWIKbKRt857erSR/wCpKf8ALP7cQw8JkfbVaL8ES3ZwtEAjXPUcRGs7SzsR2e9p/wC0BvhpcIHLMSSgt4fGYxlqdTMBuY4O0/tF/JSt+Iy4j59PM8HviA4WDTmBG1sgiCbzBWGHidqRGn9Q6H8rS/VZmgVwHssG1P3Ni8E6zG50+OoCeg5rtlrtknZIgEf2n+kwB6Sk/AOIcZzODTGtjBIAJiSGtcbSVQZSyvblOZpNxv5zHvkugqkBhExY5ASRBe2CZ45ZGmpF7KK5Vqc0pVKZa4tIgi0cN8JgKrKV42fFGnqEx52D1CczVAY4c0oCI0HUoOKAAJwPokOCUlA06eKACfFvqmBAGd5Jou7p9wi0baDDd3+P3CB+G7w8fQopuG748fQooIfmOMwB4D7/AMphqu4n6lSFrncDG7MB9BKaKTtNPfJAzMU9jhwP1KfToAxp4kBXcPSDbhrHHS8P1/tA1RQoU6TxduU6OdLso4OM6cI5W1SPZrZgPtuOUQeY2iY6gLUweIDbPDwJ0ZSDbXkAhk++SZXx+Hacr2YjrnMza8OifEIMipReJbmzcQdbcjobqtmLSQJG4tO/kVfxOKpuOy+qOGYAj/lbwTRiQbPGdt4k3HNp1HRBFhRJBExInl7A97un7SpRRa8atbtR1sQf2z05zuWJg8O0uBYS4DVpsY1g8W2AnmV1jdtoY7absgzlzsBHekkZmxJI5WLlKscFVN5nefO4TSVo43CtaTJkOEggHWSARmjZtw0ImN2fVplri1wgj2D0VZF52D1TmG48Ex3dKdOiB408SgiPykQgMonyhNRcbBABp4lMTzp9U1A4C6jZ+7oplAy8jiQglwo/6jfH/iUksK7bB6+iKCLLu2W9T14JAsFgC49AB6Soy33vKc18ckVM6o7+ljeFgT02pKcPmf1O8DH3CrfOI0t01+uqIZOpRU1Ss5p7xO4hxDvzEKF+Jc7vEnqSf+UpzcOn/IURWJlOYwqyzD3iFfw2D3mPp1TVQYBlxJgzbWdeO5dYKcljXNylsQ+RughhvpPOOa5eo8tIy67unA+CshzmhrxZ3gY4C9jYbrjW82C/8S7GQOkucNt5HeglzWjQGC4zHKdLZ+KwYqUg5klzJi1zTEyD/cHZo45jwCjxfaYeIy5STctADXcJuZPOZVv4dJ+cGHumSTrllhP0g+RQc8Tsok6IVGgZgNASL6wCk46dFWTgbeJRsOaYNPFOlA8FJCUnIFKBSJSIQTftHUqvS73QE+SsRsDr+VDQ/eeUIDhhtD3uKKdhhtN6fYoIKxJ+v1TYT95KaEaS0WCVYDJKbQZAkqzh6ZKhErKEp7cKruEwxO5atPAgXI8llcYjcKRuVunSIby3rTNNugCidhbf75bldXHL9o7Jsbg+HmjnbkzsJa6Yc3UDfe/cN4I6HcTY7awpAnd5rIaS0yD0PFWM31Zq0czczRlAPMibTcC2mhlb3wxRDW1Kj7ZGG5BBEi2u+wAG/O7UTOJSrFu0BOW5O1bqARbxhWn9oAtM5i65DXCBmILZFzYAnSL6ygysR3ndb9d/mmP3dEnNImd9/coP3Ksk028U9RhPBQPHBJyEokoEeCCRck7UoJXdzoSo8ONh/SfNFx2D1TcOdh/Qf8ggkwh2m9P/AJKSbhjtjx9EkFYlT4ajNz4BBuFJvIA5mJUb2Fu8eDgVGmk1kkBaeBoCYKxMJj8vevwK1aHaDIManyUqxtUMQ1umgU78XmHAbydAuWpdohhII4/RU8X2i+oYGh3NkA+G9MXY6z9dTYdp4d0MrXwfbmEc2C6HHcQvM2A3BkRNovbUQd6tUcjXZXhwNtRBuLaciExP06ztemx4OQy0rjHU4cWTobLrezWgjKNDdZWMwwZiDeMrA/8AyIEZeWh+iQqjl+XlOaJniCIMGDz+i06opfLzOEOgmwi+kt3G/wC3l4qD4jviAxpIAayWzbM5uc+blmYyu4y0WAgFsERG4+I8lUNdXc4QdJ4X6fwo3OTGuScVWRBTgmNT2lA4IlMBRQOQJSSIQJzrfVKj3Hf+P3TXmycyzOrvsgkww2x4+hSSww2h73FJAsE4seHZWu12XtzNIjQhSPpw7M1uUTIbMgb4m0idx81LQocVI9g3C6zrWMx4JJJkkmSrvZWEL3BvFO+Vl6lbfwfRBrtad/8ACaSdsntbsx1NzW8RKzGsINpBHNehfFVMGpp3RbouUr4cEyLFJVsUoLjmc6STJkaniRofutKlhS9xc6SXXM3vbx5JuGw5JuPJdFg8MAASlpImwGCyNlYuNoCpjACYa2nLjrAGczutx6LbxWNEQOi4ztHEOLqhabGGnoAAR6+aQqGpijVrufMFzpExoLAHUaABXO1MKflh7S7I4kfujMLloBO4R9QszCPjXS89B7K38H2q1jC3NmbYQ4Oy/u74DS069RGsEzUcy0JOWnin0HXYMhJvBcW+GaXD6rPqsE2cCqyYiCgEQgITpTUiUDiUiU0olA15Uru60dT5qF5Uj93IBBNhHQ4e9xSSw3eb4+hSQajGp5ZF0+kxMxJI39Bw5qNqFapLojTVdF8HMmuMtyIjrKysHiadHN8xhdmEC1hznitf4crtZUNRhsdFKRt9v0SXANEudb35rkMTTdTqOY8Q5u7luXUY/tmmwh7jLtw1M8AsTt3FPxLhWczKQIj+2bTHikWoKFeIVt2M2eSz6RtPFO+XJHvwTCLDnkguKwW0iadQ31H1BkrUxFWGxOh+oFzO+VmUDZ8mCIIgAggnak7oEwb3SJagp0HC8EEQd1gdDfioajgToPACfLVaRrsLSHOeNlrRD9zeIg7jppbULOqZQZaXHhmaB9blVmoSIKRKBQVQ8FOUYTpQOlKU1JA6UpQSQJtyE92pQoDa6IFBZwneHj6FJDB94ePoUkG2x4DZJ4rMf2jclonhO5VqmILhEwPcqueHsqRrVnE4pzwARHTefwmYfFPZOV0A6jdy8VEDJ1AHu6s0sO0wC48dkt8FRE+q55lx0EjcN2nvctbCdvVWMyiCBxuQIPHn1WO9sTca8RKb8yNOfmoa6ajim1DGTLm0jTONRBuJ+6ZjqmS0nfr7t/KxcNiY18Ou7Xw+qvPxGffPW9ieR198UNQ1K0iNdr62iLKzhsIXjI3Zb+7V14IuQNJHpyVegzM4WIvJvYQBDgfC46KWl2m6m0ltjaARII3mTPsIKOKkFzdzSRMQddJ36qm4rW/VnEHLU1A2X728nb3N8ws7E4ZzHFrhBEdCDoQd4PFVKgISRARcLlEAIpAIwgKUIwlCAQnQgi5BLhzDXHfooE+dlMQWMF3x4+hSQwffHj6FJBWLuSkoszG+ij3p9N0FFjZodnMG04x7mdEXNwxjb0/t18lm18US2FAadgePoNSpi63H4aiRsuHgIhU8RggBLYHX7LPzRN7XUj8Q4tDSTG5MNMay0i8RPKVNRa0XJjgdb66eXiqwHn6KVt9NbdPH0VGnQxdRxyh4DXS0mIBkGxyCTPOdb86mPovYGlzCA4DK4d023bpjdYhDBuOcTMZpc3SL3OlrWXedl02upNY8BzCDskbszrOnfv5KW4Sa82pVYIOhG8arqsIWYimGVLC+R++m46HmwnVptvsdcPt7AijWexvdmWzrBuB4aeCrYTEFhkH+QqiXtDs99B+V4vqCLtcOLTvHpvVRdZhsQysw06kFti2T3TxB/aeJ9dFj9p9kupy9suZMTG03k4f/AELHlogzAEQiAkiECkUkkBYEKhTwLKN5ugcRsDqmok7IQCCbCHbHj6FJLC98ePoUkFeUXtgi+6/Lkig4XQGo3REPnXh5Tokw2IPUcimm3v6FFPDdOuvvkkWzog11iPfv8JNcfH2PfVFOf/PrKdRZYmY8Ohj0QG6RYEj72+pSdYm03t4f7QW+z2bQLtDbdytf0XYdnVoBaR3YFiTtSQTy/hcbQDgWtbYiCR/cT5EAb11tFgbAadb79Lxrr/KzV4sL4pZL55DyJXOtK6j4hMvH+P3K5d2pVniX1dwmJLTrC6UYlwpl7G5iWzklwJAsSIFyG6jgDwXJMIgzrFuvO+kStXs7tR7HMIMZbyDBEXkEaFVFJ5Y+7Rkd/Tq0/wCJ3Hl9OCrFbuLosxTX1qcMeDtsgNa6ScrwRZriNRAaTMQSAcY7w6zhaTx4Hgef1RDRp4oAokQPFNCB5conFPJUaCQ6BNBRJsE1BYwh2x4+hSTcIdsePoUkEbvfn+U0m4KLymyi1Jl3/VE8/fD7KamG7QN7W62N/CVE+88dfqQgTL66Tfx3p1g42sJ+sdI1RokB1+YPgZnyKbW49fUx5IA5hEcD7KLQBuSF+QsVawVDOYvv3ad2/O27jCKsYZlw8t1MjhERN1sDEGVGMNstAH5PMqzh8DYlxge9VGow+1qxLo3kfQfysZzVdxVYPe4jQmG/4izffNV6406Kxi1XUpds9ft7Cblsmu3Ii52ZjDReHAAggte06OadWn3YgHctHEsY4jOTkd3Hi7mjg7TPGkfQjRYKvYOvLTTOhMt5GLjofsEVJjsE6lAdDmOux7btcOR9Wm4VE21Wt2bjwwOo1RNN52v7Xfte2d4t4KtXwmRxaQSOWvVvHoiKJKapalOLgyOP2PAqIoJDomJ7tExBNhDtjx9CklhO+PH0KSCbEYVwcRE8PEqnC6PFMk6LGxFAhSVqxCwwQk5ADik46KoWbzTjcD3u/hNaJUrGGYGvDmgDGyQOYg/c8l0WBZDcrdwjqTqT43jcquEwOU373Lct7A0Q0QevvlErNrUi1g8KI52+qqfEr2UKGQXfU2Z4A94/S3itBlaL/jx98lxfb+LNSseDBA9/RJ6vK9IOzcJ814ZmDd8kSBoB5kK32n2I5j2NDw9zyQLZQMuW5km19eSt/DdB2So9rZ0BuBDW7TjfmW/RaVR5c4OY25AaDEHIHSRezTnLh4CbBLbqSSxh9o9hfJZndVBvAGUjMeAvwvylYL9Vp9s4h76rg8ZS0luSZyxqOE2uf9CnisK+mQ17S0lrXAHXK4BzTykEGFZv1m5vSx2Z2W6u6G2aIzPOjZ9TyH8rY/8AypbJ+cBlEnZMwTDTAJsSHX/tVvsqm+lQa5w2JubDacA+NZOzG6FUo47F1Mz2ta5hEwcjQGl5iLtcYcY11dzClt+NSSTtl9rYI03QSHbw4aO4xPORCibXLmgHVtvDcrWOrVq1UMc0ZyYa1vF0EDUjhv3KizDuFT5dpJDbFrhJMWLSQddxVnnbN96dHQ7IBote57WuIBOyTsHTMJ1i86jeq9f4XIGb5gBgEtDScs63m8fZa3ar3spkNbBewBgkXYbaTbZJ14LMwdbEPcwOdlYXta5wZTcRmMWa1pc4xMAAyVmW1uyT4xu1MH8l+TOH2BkAjW8X93VFbfxJQays5oe5xAbmLsuYPIBLDlts2HLTcsVzYW451Lhe+PH0KSWE748fQpIOsr01n1cLqtx7J9681Vr07LDpjnH4M7vBCn2a46rYexPc+0LTOMV2DjT3yWjg6QaZ1efK25DKSVaw1KDOqKu4ahlGZ3eKutgX6fn31Vam5S1XgAT7usqp9oYzK11+K5BzpknUmT43Wt23Wmw3ny1P2WZTa0uaHGGyMxAkhs7RA32Woxa9B7I7LyYVgeBDmCo8k6Nu8yN8NcNdI5Kri8KcOPnuYH5AHZMxAcScjyIF4zuPjKPxL8U4apReygSSRlZLXCAYaYkW2Mw8QjQ+JsNUoMZXqOBNMsePllxzFuVzwRYkyT4rlP17n103jmOGbiJq56jc8uzOExnJMkE3sT6q7jcS7G4kOy5XVCxuUEkCGtZYm8WJutP4N7Tw+H+Y6s4hzsgZDC6wzF1xzLfomds9vMdjGV6YLmU8uUGRmAku5g3InkF127mMZM3W12/gjRwzi6zLBjbAlz8zSdJkNLyBuvxKhwNAjDNIY8B4YTtCcrc4YO7vs7watjE/GmFfTy5njNkkBrgQGuD3Am+uXLI4ngsb4g+LaZa5uHLnOeCHOcCA0E6NDiTm56CBqdOXG8rMsbv591g4PtKjTrfOyVXOGaIqNEFzS0EHIdAbdArHZFGhVqy1lbMNok1GRcxNqfEytb4a7dwtCgxr3PzA5nANdElxnkSBA+irfDva+Ga+tVxD3te+pmADXG20YJHNxEclu25emMnXaz8T4ttN7C+m8OcDDA9uw1tm6ssCXP8AqVQwvxUxlhh3EQ4T80NcC4Rma4MlpALxb+rdCo/F/ajcRiXPpz8sBrWSCDAEmx/uLj4rDV4zqW+lv88T1HtJJAIBJgTMSdJ39VE4pqS0ymwnfHj6FJLCHbHj6FJB2jKnPio6rZ9lV6FUAx9dFZFQTCw6IPlpOpKUOA4e96a9w9++v1WkRUaPvVWhTUDake+ilFUalBI2x9+96q4uujWrLMr1+KJaz8c+X9P9n3yVR5Rc7fxUbyqyaiEEkDkUEUCQRSQAJJJIEkkgSgRRQSQT4Xvt8fQoJYPvjx9Ckg1xU6qdlfis8PRD1GtaZrJPxCzvmJVKqGrZr3RFdZxqpfNUwXKlVZ+Jqyk+oqz3KyIY4phRSVQEkkkBlFNRCApJJIEkkkgBQRKCBFEoFOQS4Tvjx9CkjhO+PH0KSDY/St4eZ/KBoN4eZSSUaJtBvDzKb+nbw8yikgH6VvDzP5QdhWcPM/lBJVDDhW8PM/lAYRk6eZ/KSSIH6Nn9Pmfyh+kZw8z+UkkCGDZw8z+UjhGcPM/lJJAv0bP6fM/lL9Izh5n8pJICcIzh5n8o/pGcPM/lJJAz9Kzh5n8pfpWcPM/lBJAf0rOHmfykMIzh5n8pJIHHBs4eZ/Kb+lZw8z+UEkE2Hwrcwt5ngeaSSSD/2Q==" onClick={handlemovie3} alt="no image3" width="300px" style={{borderRadius:"20px", cursor:"pointer"}}/>
            <h3 style={{fontWeight:"bold"}}>K G F Chapter 2</h3>
        <p style={{color: "rgb(102, 102, 102)"}}>Action/Thriller</p>
        </div>

        <div className="movie">
            <img src={lovetoday} alt="no image4" width="300px" style={{borderRadius:"20px",cursor:"pointer"}}/>
            <h3 style={{fontWeight:"bold"}}>Love Today</h3>
        <p style={{color: "rgb(102, 102, 102)"}}>Drama/Romantic</p>
        </div>

    </div>
    <div style={{width:"100%",height:"200px",backgroundColor:"rgb(153,153,153)" ,fontSize:"30px" ,marginTop:"50px"}}>
        
    <h4 style={{fontWeight:"bold",paddingTop:"20px"}}>For more details contact:</h4>
        
        
        <div style={{textAlign:"center"}}>
        <img src='https://img.icons8.com/ios-glyphs/2x/facebook-new.png' width="70px" style={{padding:"10px"}}></img>
        <img src='https://img.icons8.com/ios-glyphs/2x/twitter.png' width="70px" style={{padding:"10px"}}></img>
        <img src='https://img.icons8.com/ios-glyphs/2x/instagram-new.png' width="70px" style={{padding:"10px"}}></img>
        </div>
    </div>
    </div>
  
    </>
  )
}
