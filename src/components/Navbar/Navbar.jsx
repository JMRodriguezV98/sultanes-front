import React from 'react'
import logo from '../../assets/logoLanding.svg'

export const Navbar = () => {
  return (
    <>
        <nav className={ `w-full h-20 flex justify-between items-center text-white` }>
            <div className={ `h-full w-1/6 flex justify-center items-center` }>
                <img className={ `h-5/6` } src={ logo } alt="Logo Sultanes RC" />
            </div>
            <div className={ `w-1/5 h-full flex justify-around items-center` }>
                <span>HOME</span>
                <span>PERFIL</span>
            </div>
        </nav>
    </>
  )
}
