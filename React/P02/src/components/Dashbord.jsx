import React, { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Dashbord = () => {
    const Data = useContext(UserDataContext)
    console.log(Data);
    
  return (
    <div className='w-100 h-100 bg-white'>Dashbord</div>
  )
}

export default Dashbord