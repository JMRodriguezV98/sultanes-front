import React from 'react'
import logo from '../../assets/logoLanding.svg';
import styles from './Landing.module.css';
import { useNavigate } from 'react-router-dom';

export const Landing = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login');
    }

  return (
    <div className={ `flex justify-center items-center flex-col w-screen h-screen ${ styles.fondoLandig }` }>
        <div className='flex my-8'>
            <img src={ logo } alt="logo Sultanes RC" />
        </div>
        <div className='text-white my-8'>
            <h1 className={ styles.title } >Bienvenido</h1>
            <p className={ styles.paragraph }>
                Como miembro del club, te damos la bienvenida a la plataforma propia del club, queremos <br />
                crear un control de la información de los integrantes del club, miembros activos y asi mismo <br />
                brindar información para usted como parte de esta familia. <br />
            </p>
        </div>
        <div className='my-20'>
            <button onClick={ handleLogin } className={`${ styles.buttonLogin } w-80 h-8 rounded-full`} >Entrar</button>
        </div>
    </div>
  )
}
