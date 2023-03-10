import React from 'react'
/*  import github from '../../img/github.png'
import linkedin from '../../img/linkedin.png' */
const Footer = () => {
  return (
    <div>
            <div className=' py-5 mt-5 ' style={{width:'100%',backgroundColor:'#222831'}}>
        <div className='d-flex' style={{justifyContent:'center',borderTop:'solid 1px gray',borderBottom:'solid 1px gray'}}>
            <div className='px-3 py-4'>
              <a href="https://github.com/danielfranchi555">

{/*                <img src={github} alt="" style={{width:'20px'}} />
 */}              </a>
              </div>
            <div className='px-3 py-4'>
              <a href="https://www.linkedin.com/in/daniel-franchi-409359238/">
{/*                <img src={linkedin} alt="" style={{width:'20px'}} />
 */}                 </a>  
            
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer