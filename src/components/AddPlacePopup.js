import React, {useRef} from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup(props) {
  const fieldCardNameRef = useRef();
  const fieldCardLinkRef = useRef();
  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddPlace({
      name: fieldCardNameRef.current.value,
      link: fieldCardLinkRef.current.value
    })
  }
  return (
    <PopupWithForm title="Новое место" name="add" children={
      <>
        <input ref={fieldCardNameRef} type="text" id="name-input" className="popup__field" placeholder="Название" required minLength="2" maxLength="30" name="name" />
        <span className="popup__error name-input-error"></span>
        <input ref={fieldCardLinkRef} type="url" id="link-input" className="popup__field" placeholder="Ссылка на картинку" required name="link" />
        <span className="popup__error link-input-error"></span>
      </>
    } isOpen={props.isOpen} 
    onClose={props.onClose}
    buttonText='Создать' onSubmit={handleSubmit} />
  )
}