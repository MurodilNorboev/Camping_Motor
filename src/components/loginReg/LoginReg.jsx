import React from 'react'
import { LoginRegCon, LoginWrap } from './LoginRegstyle'
import { Link } from 'react-router-dom'



const LoginReg = () => {
  return (
    <LoginRegCon>
        <LoginWrap className='LoginWrap'>
                <h2>Registrate</h2>
                <div className="loginis1">
                    <label>Email</label>
                    <input type="email" placeholder='Your email' />
                </div>
                <div className="loginis1">
                <label>Password</label>
                <input type="email" placeholder='Your password' />
                </div>
                <div className="loginis1">
                <label>Repeat Your Password</label>
                <input type="email" placeholder='Your password' />
                </div>
                <div className="loginis3">
                <div className='chackbox1'>
                       <input className='intut' type={'checkbox'}/>
                       <label>Keep mee logged in</label></div>
                </div>
                <Link to={'/login'}>
                <div className="loginis8">
                    <button>REGISTRATE</button>
                </div>
                </Link>
        </LoginWrap>
    </LoginRegCon>
  )
}

export default LoginReg