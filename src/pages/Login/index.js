import React, { useState, useContext } from 'react'
import { Redirect } from "react-router";
import { Toggle } from 'rsuite'
import Layout from '../../components/App/Layout'
import { signInWithGoogle } from "../../services/firebase";
import { UserContext } from '../../providers/UserProvider';
import { gaEvent } from '../../services/GA'

const LoginPage = () => {
  const user = useContext(UserContext)
  const [isRegister, setRegister] = useState(false)

  const onToggleChange = (type) => {
    setRegister(type === 'register')
    gaEvent('signIn', 'toggle button', { label: type })
  }
  return (
    <>
    {user ? <Redirect to='/' /> : (<Layout className="login-page-wrapper">
      <div className="centered-wrap">
        <div className={`card ${isRegister && 'card-flip'}`}>
          <section className="login card-front">
            <h3 className="login-title">Sign In</h3>
            <div className="login-group">
              <input className="login-group-input" type="text" autoComplete="off" onClick={() => gaEvent('signIn', 'Click sign-in username')}/>
              <label className="login-group-label">帳號 Username</label>
            </div>
            <div className="login-group">
              <input className="login-group-input" type="password" autoComplete="off" onClick={() => gaEvent('signIn', 'Click sign-in password')}/>
              <label className="login-group-label">密碼 Password</label>
            </div>
            <button className="login-btn" type="button" onClick={() => gaEvent('signIn', 'click sign-in button')}>登入</button>
            <div className="login-cta">
              <button style={{ visibility: 'hidden' }}>忘記密碼？</button>
              <button onClick={() => {
                gaEvent('signIn', 'click sign-in button', { label: 'google' })
                signInWithGoogle()
              }}>使用 Google 登入</button>
            </div>
            <Toggle size="lg" checkedChildren="登入" unCheckedChildren="註冊" checked={isRegister} onChange={() => onToggleChange('register')} style={{ width: '70px'}}/>
          </section>
          <section className="register card-back">
            <h3 className="register-title">Sign Up</h3>
            <div className="register-group">
              <input className="register-group-input" type="email" autoComplete="off" onClick={() => gaEvent('signIn', 'click sign-up email')}/>
              <label className="register-group-label">註冊信箱 Email</label>
            </div>
            <div className="register-group">
              <input className="register-group-input" type="text" autoComplete="off" onClick={() => gaEvent('signIn', 'click sign-up username')}/>
              <label className="register-group-label">帳號 Username</label>
            </div>
            <div className="register-group">
              <input className="register-group-input" type="password" autoComplete="off" onClick={() => gaEvent('signIn', 'click sign-up password')}/>
              <label className="register-group-label">密碼 Password</label>
            </div>
            <button className="register-btn" type="button" onClick={() => gaEvent('signIn', 'click sign-up button')}>註冊</button>
            <Toggle size="lg" checkedChildren="登入" unCheckedChildren="註冊" checked={isRegister} onChange={() => onToggleChange('login')} style={{ width: '70px'}}/>
          </section>
        </div>
      </div>
    </Layout>)
    }
  </>)
}

export default LoginPage