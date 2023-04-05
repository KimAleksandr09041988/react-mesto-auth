import React from "react";

export default function InfoTooltip({ isClose, name, isOpen, title }) {
  return (
    < section className={`popup popup_type_${name} ${isOpen ? 'popup_active' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{`${title}`}</h2>

        <button className="popup__btn-close"
          type="button"
          onClick={isClose} />
      </div>
    </section >
  )
}
