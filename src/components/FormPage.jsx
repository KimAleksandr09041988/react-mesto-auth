import React from "react";

export default function FormPage({ title, btnDescription }) {
  return (
    <section className="page-form">
      <h2 className="page-form__title">{title}</h2>
      <form className="page-form__form">
        <fieldset className="page-form__fieldset">
          <input className="page-form__input" name="email" type="email" placeholder="Email" required />
          <input className="page-form__input" name="password" type="password" placeholder="Пароль" required />
          <button className="page-form__btn" type="submit">{btnDescription}</button>
        </fieldset>
      </form>
    </section>
  )
}
