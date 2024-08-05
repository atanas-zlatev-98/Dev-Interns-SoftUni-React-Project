import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useRegister } from '../../hooks/useAuth';
import {useForm} from '../../hooks/useForm';
import './Register.scss';

const initialValues = {username:'',email: '', password: '', rePassword: '', summary: '', logoUrl: '' };

export const Register = () => {

  const register = useRegister();
  const navigate = useNavigate();

  const registerHandler = async (values) => {
    if (values.password !== values.rePassword) {
      return alert('Password do not match!');
    }

    try{
      await register(values.username,values.email,values.password,values.summary,values.logoUrl);
      navigate('/');
    }catch(err){
      console.log(err.message);
    }
  }

  const { values, changeHandler, submitHandler } = useForm(initialValues, registerHandler);

  return (
    <div className='register-conteiner'>

      <div className='register-form'>

        <div className='logo-register'>
          <Link to='/' className='logo-text'>DEV<span>.</span>INTERNS</Link>
        </div>

        <p id='register-text'>Create Account</p>
        <form onSubmit={submitHandler}>
        <div id='form-group'>
            <label htmlFor='username'>Username</label>
            <input type="text" id="username" name="username" placeholder="Username..."value={values.username} onChange={changeHandler} />
          </div>

          <div id='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input type="email" id="email" name="email" placeholder="Email..."value={values.email} onChange={changeHandler} />
          </div>

          <div id='form-group'>
            <label htmlFor='password'>Password</label>
            <input type="password" id="password" name="password" placeholder='Password...' value={values.password} onChange={changeHandler}/>
          </div>

          <div id='form-group'>
            <label htmlFor='rePassword'>Repeat Password</label>
            <input type="password" id="password" name="rePassword" placeholder='Repeat password...' value={values.rePassword} onChange={changeHandler}/>
          </div>

          <div id='form-group'>
            <label htmlFor='summary'>Summary</label>
            <textarea type="text" id="summary" name="summary" rows={5} placeholder='Short Summary...' value={values.summary} onChange={changeHandler}></textarea>
          </div>

          <div id='form-group'>
            <label htmlFor='logo'>Logo</label>
            <input type="text" id="logo" name="logoUrl" rows={5} placeholder='Image Url...' value={values.logoUrl} onChange={changeHandler}/>
          </div>

          <div id='form-group'>
            <input id='btn-register' type="submit" value='Register' />
          </div>

          <Link to={'/login'}>Already have an account?</Link>

        </form>
      </div>

    </div>
  )
}
