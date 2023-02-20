import React, {useRef} from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  const fieldAvatarRef = useRef();
  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateAvatar({
      avatar: fieldAvatarRef.current.value
    });
  }
  return (
    <PopupWithForm title="Обновить аватар" name="edit-avatar" children={
      <>
        <input ref={fieldAvatarRef} type="url" id="avatar-input" className="popup__field" placeholder="Ссылка на картинку" required name="edit" />
        <span className="popup__error avatar-input-error"></span>
      </>
    } isOpen={props.isOpen}
    onClose={props.onClose}
    buttonText='Сохранить' onSubmit={handleSubmit} />
  );
}