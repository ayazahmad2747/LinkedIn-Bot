import React, { useEffect } from 'react'
import './Analysis.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import API from '../../API';
const Analyze = (props) => {
    useEffect(()=>{
        Aos.init({duration : '2000'})
    },[])
  return (
    <div className='container'>
    <button className='analyze_btn' onClick={props.changeComp2} data-aos="zoom-in">Restart Analysis</button>
        <div className="main_2" data-aos="zoom-in">
        <div className="topics">
        <h1 className='top_heading'>Common Topics of Interest</h1>
        <button className='copy'>Copy All</button>
        </div>
        
        {API.map((Elm, index)=>{
        return(
          <div className="lists" key={index}>
        <label htmlFor="" className='lable'>
        <input type="checkbox" />
        <h2 className='sprint'>{Elm.common_topic}</h2>
        </label>
        <p className='translator'>{Elm.description} </p>
        </div>
        )
        })}
        

        




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
    </div>
  )
}

export default Analyze;
