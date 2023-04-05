import React from "react";
import FormPage from "./FormPage";
import { useNavigate } from "react-router-dom";
import auth from '../utils/Auth'

export default function Login({ handleLogin }) {
  const [formValue, setFormValue] = React.useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const { email, password } = formValue;
    auth.avtorization(email, password)
      .then(res => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          setFormValue({
            email: '',
            password: ''
          })
          handleLogin();
          navigate('/main', { replace: true });
        }
      })
  }

  return (
    <main>
      <FormPage
        title='Вход'
        btnDescription='Войти'
        email={formValue.email}
        password={formValue.password}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </main>
  )
}
