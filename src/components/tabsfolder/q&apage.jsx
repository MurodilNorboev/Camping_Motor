import React from 'react'
import { Contagpage } from './tabsStyle'

const Q_apage = () => {
  return (
     <div>
            <Contagpage>

              <div className="leftquestion">
 <div className="question_wrap">
     <h6>Name</h6>
     <h4>Question Lorem ipsum dolor sit amet ?</h4>
 </div>
 <div className="question_wrap">
     <h6>Name</h6>
     <h4>Question Lorem ipsum dolor sit amet ?</h4>
 </div>
 <div className="question_wrap">
     <h6>Name</h6>
     <h4>Question Lorem ipsum dolor sit amet ?</h4>
 </div>
 <div className="question_wrap">
     <h6>Name</h6>
     <h4>Question Lorem ipsum dolor sit amet ?</h4>
 </div>
 <div className="question_wrap">
     <h6>Name</h6>
     <h4>Question Lorem ipsum dolor sit amet ?</h4>
 </div>
              </div>

              <div className="rightquestion">
 <h2>Send a question</h2>
 <input type="text" className="name_text" placeholder='your name' />
 <input type="text" className="email_text" placeholder='Your email' />
 <input type="text" className="question_text" placeholder='Your question' />
 <div className='btn_wrap_send'><button>Your question</button></div>
              </div> 
              
            </Contagpage>
     </div>
  )
}

export default Q_apage