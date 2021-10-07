import React, { useState, useEffect, useContext } from 'react'
import { Redirect } from "react-router";
import Layout from '../../components/App/Layout'
import { UserContext } from '../../providers/UserProvider';

const ProfilePage = () => {
  const user = useContext(UserContext)

  return (
    <>
    {!user ? <Redirect to='/login' /> : (<Layout className="profile-page-wrapper">

    </Layout>)
    }
  </>)
}

export default ProfilePage