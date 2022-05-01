import {Rating} from 'react-simple-star-rating';
import {memo} from "react";
import classes from './RatingComponent.module.css';

const RatingComponent = ({rating_value, readonly, onClick, average, totalReviews}) => {
  const tooltipArray = [
    'Terrible',
    'Terrible+',
    'Bad',
    'Bad+',
    'Average',
    'Average+',
    'Great',
    'Great+',
    'Awesome',
    'Awesome+'
  ]
  const fillColorArray = [
    '#dc2f02',
    '#dc2f02',
    '#de4f02',
    '#e0670d',
    '#e27c1c',
    '#e4902d',
    '#e5a240',
    '#e7b354',
    '#e9c46a',
    '#e9c46a'
  ]

  const handleRating = (rate) => {
    onClick(rate)
  }

  return (
    <div className={classes['rating-component-container']}>
      <Rating
        onClick={handleRating}
        ratingValue={rating_value}
        size={24}
        transition
        allowHalfIcon
        readonly={readonly}
        showTooltip
        tooltipArray={tooltipArray}
        fillColorArray={fillColorArray}
      />
      {average !== undefined &&
        <span className={classes['average-component']}>
          {`(${average.toFixed(0)} of ${totalReviews})`}
        </span>}
    </div>
  )
}

export default memo(RatingComponent);