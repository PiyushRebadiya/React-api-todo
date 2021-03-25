import React from 'react'
import {
    Redirect
  } from "react-router-dom";

function LogOut() {
    localStorage.clear()
    return <Redirect to='/login' />
}

export default LogOut
