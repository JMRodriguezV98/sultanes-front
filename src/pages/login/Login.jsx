import { useForm } from 'react-hook-form' 
import { useNavigate } from 'react-router-dom'
import styles from './Login.module.css'
import logo  from '../../assets/logoLanding.svg'

export const Login = () => {

  const dataLocal = {
    email: 'jmauricio.rodriguezv@gmail.com',
    password: '123456'
  }

  const { register,handleSubmit,formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if( data.email === dataLocal.email && data.password === dataLocal.password ){
      navigate('/home');
    }
  };

  return (
    <div className={ `${styles.backgroundPrincipal} w-screen h-screen bg-zinc-900 text-slate-50 flex justify-center items-center` }>
        <div className={ `${ styles.containerLogo } w-1/2 h-full flex justify-center` } >
          <img className={ styles.logo } src={ logo } alt="logo Sultanes RC" />
        </div>
        <div className={ `${ styles.containerForm } w-1/2 h-full flex flex-col justify-center items-center` } >
          <h3 className={ `${ styles.titleForm } w-full flex justify-center items-center text-2xl` } >LOGIN</h3>
          <button className={ `w-72 h-12 bg-white rounded-3xl text-black-principal mt-8` }>Login with google</button>
          <div className={ `w-1/2 flex justify-center items-center mt-6 text-yellow-principal` }>
            <hr className={ `border-yellow-principal mx-4` }/> O <hr className={ `border-yellow-principal mx-4` }/>
          </div>
          <form className={ `w-3/5 h-1/4 flex flex-col items-center mt-8` } onSubmit={ handleSubmit( onSubmit ) } >
            <div className={ `w-4/5 flex flex-col` } >
              <label className={ `italic text-l font-light` } htmlFor="">Correo:</label>
              <input 
                className={ `rounded-xl h-9 pl-2 text-black-principal` } 
                type="email" 
                { ...register( "email",{ required: true,maxLength: 50 } ) }
                aria-invalid={errors.email ? "true" : "false"}
              />
              { errors.email?.type === 'required' && <p className={ `italic text-sm mt-1 font-light text-yellow-principal` } role={ `alert` }>Email is required</p> }
            </div>
            <div className={ `w-4/5 flex flex-col mt-8` }>
              <label className={ `italic text-l font-light` } htmlFor="">Password</label>
              <input 
                className={ `rounded-xl h-9 pl-2 text-black-principal` } 
                type="password" 
                { ...register( "password",{ required: true,maxLength: 30 } ) }
                aria-invalid={errors.password ? "true" : "false"} 
              />
              { errors.password?.type === 'required' && <p className={ `italic text-sm mt-1 font-light text-yellow-principal` } role={ `alert` }>Password is required</p> }
            </div>
            <button type={ `submit` } className={ `w-4/5 h-7 text-black-principal font-regular text-l bg-yellow-principal rounded-xl mt-14` }>Login</button>
          </form>
        </div>
    </div>
  )
}
