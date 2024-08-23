import React from 'react'
import { LoginCon, LoginWrap } from './loginStyle'
import naver from '../../assets/naver1.png'
import googling from '../../assets/googling.png'
import talk from '../../assets/talk.png'
import { Link } from 'react-router-dom'

function Login({ onLogin }) {
  return (
    <LoginCon>
    <LoginWrap className='LoginWrap'>
                <h2>Sign in</h2>
                <div className="loginis1">
                    <label>Email</label>
                    <input type="email" placeholder='Your email' />
                </div>
                <div className="loginis1">
                <label>Password</label>
                <input type="email" placeholder='Your password' />
                </div>
                <div className="loginis3">
                     <div className='chackbox1'>
                       <input className='intut' type={'checkbox'}/>
                       <label>Keep mee logged in</label>
                     </div>
                    <h3>Forget your password?</h3>
                </div>
                <Link to={'/motor'}>
                <div className="loginis4">
                    <button onClick={onLogin}>SIGN IN</button>
                </div>
                </Link>
                <div className="loginis5">
                <div className='lang'></div><h4>or </h4><div className='lang'></div>
                    </div>
                <div className="loginis6">
                    <img src={naver} alt="naver-img" />
                    <img src={googling} alt="google-img" />
                    <img src={talk} alt="talk-img" />
                </div> <Link  to={'/loginReg'}
                style={{TextDecoder:'none',color:'black'}}>
                <div className="loginis7">
                    <button>CREATE ACCOUNT</button>
                </div> 
                </Link>
    </LoginWrap>
       
    </LoginCon>
  )
}

export default Login