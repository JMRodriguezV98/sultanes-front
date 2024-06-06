import React from 'react'
import styles from './Login.module.css'
import logo  from '../../assets/logoLanding.svg'

export const Login = () => {
  return (
    <div className={ `${styles.backgroundPrincipal} w-screen h-screen bg-zinc-900 text-slate-50 flex justify-center items-center` }>
        <div className={ `${ styles.containerLogo } w-1/2 h-full flex justify-center` } >
          <img className={ styles.logo } src={ logo } alt="logo Sultanes RC" />
        </div>
        <div className={ `${ styles.containerForm } w-1/2 h-full flex flex-col justify-center items-center` } >
          <h3 className={ `${ styles.titleForm } w-full h-14 bg-red-200 flex justify-center items-center text-2xl` } >LOGIN</h3>
          <button className={ `w-1/4 h-12 bg-slate-200 rounded-3xl` }>Login with google</button>
          <div className='separate'>
            <hr /> O <hr />
          </div>
          <form className='form'>
            <label htmlFor="">Correo:</label>
            <input type="email" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <button>Login</button>
          </form>
        </div>
    </div>
  )
}
