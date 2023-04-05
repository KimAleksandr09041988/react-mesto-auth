import React from "react";
import FormPage from "./FormPage";
import { useNavigate } from "react-router-dom";
import auth from '../utils/Auth'

export default function Register() {
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
    auth.registration(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <main>
      <FormPage
        title='Регистрация'
        btnDescription='Зарегистрироваться'
        email={formValue.email}
        password={formValue.password}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </main>
  )
}
