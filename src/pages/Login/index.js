import React, { useState, useContext } from 'react'
import { Redirect } from "react-router";
import { Toggle } from 'rsuite'
import Layout from '../../components/App/Layout'
import { signInWithGoogle } from "../../services/firebase";
import { UserContext } from '../../providers/UserProvider';

const LoginPage = () => {
  const user = useContext(UserContext)
  const [isRegister, setRegister] = useState(false)

  return (
    <>
    {user ? <Redirect to='/' /> : (<Layout className="login-page-wrapper">
      <div className="centered-wrap">
        <div className={`card ${isRegister && 'card-flip'}`}>
          <section className="login card-front">
            <h3 className="login-title">Sign In</h3>
            <div className="login-group">
              <input className="login-group-input" type="text" required="true"/>
              <label className="login-group-label">帳號 Username</label>
            </div>
            <div className="login-group">
              <input className="login-group-input" type="password" required="true" />
              <label className="login-group-label">密碼 Password</label>
            </div>
            <button className="login-btn" type="button">登入</button>
            <div className="login-cta"><button>忘記密碼？</button><button onClick={signInWithGoogle}>使用 Google 登入</button></div>
            <Toggle size="lg" checkedChildren="登入" unCheckedChildren="註冊" checked={isRegister} onChange={() => setRegister(true)} style={{ width: '70px'}}/>
          </section>
          <section className="register card-back">
            <h3 className="register-title">Sign Up</h3>
            <div className="register-group">
              <input className="register-group-input" type="email" required="true"/>
              <label className="register-group-label">註冊信箱 Email</label>
            </div>
            <div className="register-group">
              <input className="register-group-input" type="text" required="true"/>
              <label className="register-group-label">帳號 Username</label>
            </div>
            <div className="register-group">
              <input className="register-group-input" type="password" required="true" />
              <label className="register-group-label">密碼 Password</label>
            </div>
            <button className="register-btn" type="button">註冊</button>
            <Toggle size="lg" checkedChildren="登入" unCheckedChildren="註冊" checked={isRegister} onChange={() => setRegister(false)} style={{ width: '70px'}}/>
          </section>
        </div>
      </div>
    </Layout>)
    }
  </>)
}

export default LoginPage