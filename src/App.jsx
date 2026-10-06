import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import {AuthContext} from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)



  // useEffect(()=>{
  //   const loggedInUser = localStorage.getItem("loggedInUser")
  //   // if(authData){
  //   //   if(loggedInUser){
  //   //     setUser(loggedInUser.role)
  //   //   }
  //   // }
  //   if(loggedInUser){
  //     console.log("Kisi ne login kiya")
  //   }
  // });

  const handleLogin = (email, password) => {
      if(email == 'admin@example.com' && password == 123){
        setUser('admin')
        console.log("Admin tried to login")
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      }else if(authData){
        const employee = authData.employees.find((e)=>e.email == email && e.password == password)
        if(employee){
          console.log("Employee: ",employee)
          setUser('employee')
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
        }
      }else{
        alert("Invalid Credentials")
      }
  }

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : '')}
    </>
  )
}

export default App