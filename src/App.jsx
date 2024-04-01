import React, { useEffect, useState } from 'react'
import './App.css'
import CardImage1 from "./assets/Cards/Card 1.png" ;
import CardImage2 from './assets/Cards/Card 2.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Analyze from './assets/Cards/Analyze';
import axios from 'axios';
const App = () => {
  
  const [toggle, setToggle] = useState(true);
  const [handle, setHandle] = useState(true);

  const handleButton = ()=>{
    setToggle(false)
  }
  const changeComp = ()=>{
    setHandle(false)
  }

  const changeComp2 = ()=>{
    setHandle(true)
    setToggle(true)
  }
   
  // const getApi = async()=>{
  //   try{
  //   const res = await axios.post('https://muhammadasifali.pythonanywhere.com/mutualtopicai');
  //   console.log(res);
  //   }catch(error){
  //     console.log(error.massage);
  //   }
  // }
  useEffect(()=>{
      Aos.init({duration: '2000'})
      // getApi()
  },[])
  return (
    <div>
    {handle ? <div className="container">
    <div className="main">
    <div className="box1" data-aos="zoom-in-right">
    <h1 className='heading'> LinkedIn Synergy Analyzer</h1>
    <p className="para">Enhance your networking with our LinkedIn Synergy Analyzer by discovering 10 shared discussion topics.</p>
    
    {toggle ? <div className="toggle_btn" onClick={handleButton}>
    <button className='btn'> Login to LinkedIn</button>
    </div> :
    <div className="toggle">
    <div className="toggle_btn">
    <button className='btn t_btn'> <a href="">https://www.linkedin.com/in/ayaz </a> </button>
    <button className='btn t_btn'> <a href=""> https://www.linkedin.com/in/ayaz </a></button>
    </div>
    <button className='analyze_btn' onClick={changeComp}> Begin Analyzer</button>
    </div>
  }
    
    
    
    </div>
    <div className="box2" data-aos="flip-down">
          <img src={CardImage1} alt="" width={300} height={400} className='img1' />
          <img src= {CardImage2} alt="" width={350} height={450}  className='img2'/>
    </div>
    </div>
    
    <div className="footer">
    <div className="foot1">
    <p>© convair.co is a courtesy of Videosocials & Upplaud by Practice Marketing, Inc. Thank you for sharing this tool with others!</p>
    </div>
    <div className="foot1">
    <p>Your information is kept private; this tool is for brainstorming purposes only </p>
    <p className='f_para'>Contact us: videosocials@practicemarketinginc.com</p>
    </div>
    </div>
    </div> : <Analyze changeComp2 = {changeComp2}/> }
      
      
    </div>
  )
}

export default App;
