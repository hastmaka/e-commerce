import classes from './MessageCard.module.css';
import RatingComponent from "./RatingComponent";

const MessageCard = ({rating, email, message, createdAt}) => {
  const fixedDate = new Date(createdAt).toString().slice(0, 21);
  // debugger
  return (
    <div className={classes['message-card']}>
      <div className={classes['message-card-top']}>
        <RatingComponent
          rating_value={rating}
          readonly={true}
        />
        <div className={classes['fixed-date']}>{fixedDate}</div>
      </div>
      <p>Email: {email}</p>
      <span>{message}</span>
    </div>
  )
}

export default MessageCard;