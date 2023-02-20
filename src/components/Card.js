import React, {useContext} from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const ownCard = currentUser._id === props.card.owner._id;
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  return (
    <article className="card">
      <img src={props.card.link} alt={props.card.name} className="card__image" onClick={handleClick} />
      {ownCard && <button type="button" className="card__delete button-hover" title="Удалить" onClick={handleDeleteClick}></button>}
      <div className="card__block">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-container">
          <button type="button" className={`card__like ${isLiked && 'card__like_active'}`} title="Нравится" onClick={handleLikeClick}></button>
          <p className="card__like-quantity">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
  function handleClick() {
    props.onCardClick(props.card);
  }
  function handleLikeClick() {
    props.onCardLike(props.card);
  }
  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }
}