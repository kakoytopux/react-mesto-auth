import React from "react";

export default function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button type="button" className="close" title="Закрыть" onClick={props.onClose}></button>
        <h2 className="popup__title">{props.title}</h2>
        <form className="form" name={`${props.name}`} noValidate onSubmit={props.onSubmit}>
          {props.children}
          <button type="submit" className={`popup__submit ${props.buttonSelector ? props.buttonSelector : ""}`}>{props.buttonText}</button>
        </form>
      </div>
    </div>
  );
}