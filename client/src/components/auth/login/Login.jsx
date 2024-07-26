import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';
import { useLogin } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';

const initialValues = { email: '', password: '' };

const Login = () => {

  const login = useLogin();
  const navigate = useNavigate();

  const loginHandler = async ({email,password}) => {
    try {
      await login(email,password);
      navigate('/');
     
    }catch(err){
      console.log(err.message)
    }

  }

  const { values, changeHandler, submitHandler } = useForm(initialValues,loginHandler);

  return (
    <div className='login-container'>
      <div className='login-form'>
        <div className='logo-login'>
          <Link to='/' className='logo-text'>DEV<span>.</span>INTERNS</Link>
        </div>
        <p id='login-text'>Sign in to your account</p>

        <form onSubmit={submitHandler}>
          <div id='form-group'>
            <label htmlFor='email'>Email Address</label>
            <input type="email" id="email" name="email" placeholder="atanas@gmail.com" value={values.email} onChange={changeHandler}/>
          </div>

          <div id='form-group'>
            <label htmlFor='password'>Password</label>
            <input type="password" id="password" name="password" value={values.password} onChange={changeHandler}/>
          </div>
          <div id='form-group'>
            <input id='btn-login' type="submit" value='Login' />
          </div>

<Link to={'/register'}>Don't have an account?</Link>
        </form>

      </div>
    </div>

  )
}

export default Login