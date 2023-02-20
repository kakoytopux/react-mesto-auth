import React from "react";

export default function InfoTooltip(props) {
  const { signUp } = props;
  return (
    <div className="popup">
      <div className="popup__container">
        <div className={`popup__status-icon ${signUp ? 'popup__status-icon_success' : 'popup__status-icon_error'}`}></div>
        <h2 className="popup__title">{signUp ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}</h2>
      </div>
    </div>
  );
}