import { useState } from 'react'

const NavBar = (props) => {

    const [newtheme, setNewTheme] = useState('')

   
  return (
    <nav className='w-full p-5 flex items-center justify-between bg-white rounded'>
        <h1 className='font-bold text-xl italic'>Hello.</h1>
            <form onSubmit={(e) => {
                e.preventDefault()
                props.theme(newtheme)
                setNewTheme('')
            }}>
                <input className='border-2 p-2 ' value={newtheme} onChange={(det) => {
                    setNewTheme(det.target.value)


                }} type="text" />
                <button className='bg-blue-700 p-2 rounded-md mx-5 text-white pointer active:Scale-95'>Apply</button>
            </form>
        <div className="menu flex gap-5 pointer">
            <h2>Home</h2>
            <h2>Courses</h2>
            <h2>About</h2>
            <h2>Contact</h2>
           
        </div>

    </nav>
  )
}

export default NavBar