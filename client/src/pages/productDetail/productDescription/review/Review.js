import {useForm} from 'react-hook-form';
import global from "../../../login/Login.module.css";
import classes from './Review.module.css';
import MessageCard from "./MessageCard";
import RatingComponent from "./RatingComponent";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {detailProductSliceActions} from "../../DetailProduct-slice";
import {fetchData} from "../../../../helper/Api";
import {useNavigate} from "react-router-dom";

const Review = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reviews = useSelector(store => store.detailProduct.reviews);
  const product = useSelector(store => store.detailProduct.detailData);
  const loginStore = useSelector(store => store.login);
  const userIsLoggedIn = !!loginStore.token;
  const [ratingDefault, setRatingDefault] = useState(0);
  const {register, reset, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      email: '',
      message: ''
    }
  });

  // debugger

  const onSubmit = ({message}) => {
    if (userIsLoggedIn) {
      if (!ratingDefault) {
        return alert('Please submit some Start')
      }
      dispatch(fetchData('api/create-review', detailProductSliceActions.setReviews, 'POST', {
        product_product_id: product.product_id,
        user_user_id: loginStore.user.user_id,
        review_comment: message,
        review_rating: ratingDefault
      }));
    } else {
      alert('Please Log in First to submit a review. Thanks');
      navigate('/login');
    }
    reset();
    setRatingDefault(0)
  }

  const handleClick = (stars) => {
    setRatingDefault(stars)
  }

  return (
    <div className={classes['review-general-container']}>
      <div className={classes['review-message-container']}>
        {reviews.map(review =>
          <MessageCard
            key={review.review_id}
            rating={review.review_rating}
            email={review.user.user_email}
            message={review.review_comment}
            createdAt={review.created_at}
          />
        )}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={classes['review-form']}>
        <h1>Leave You Review</h1>
        <RatingComponent
          onClick={handleClick}
          rating_value={ratingDefault}
          readonly={false}
        />
        <div className={global['login-form-fields']}>
          <textarea
            placeholder='Messages'
            {...register('message', {
              required: 'Field Required'
            })}
          />
          {errors.message && <span role='alert'>{errors.message.message}</span>}
        </div>
        <div className={`${global['login-form-btn']} ${classes['submit-btn-container']}`}>
          <button
            type='submit'
            className={global['login-btn']}>Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Review;