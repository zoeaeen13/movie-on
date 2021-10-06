import React, { useState, useEffect } from 'react'
import Layout from '../../components/App/Layout'

const LoginPage = () => {
  return (
    <Layout className="login-page-wrapper">
      <div className="login">
        <h3 className="login-title">Sign In</h3>
        <div className="login-group">
          <input className="login-group-input" type="text" required="true"/>
          <label className="login-group-label">Username</label>
        </div>
        <div className="login-group">
          <input className="login-group-input" type="password" required="true" />
          <label className="login-group-label">Password</label>
        </div>
        <button className="login-btn" type="button">Sign In</button>
        <div className="login-cta"><a href="#">Remember me</a><a href="#">Need help?</a></div>
      </div>
    </Layout>
  )
}

export default LoginPage