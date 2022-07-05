const router = require("express").Router();

const Link = require('./link');
const Product = require('./product');
const Order = require('./order');
const User = require('./users');
const Review = require('./review');

/* links */
router.get('/link', Link.list);
// router.get('/api/link/:id', Link.listId);
// router.get('/api/link/:filters', Li.list);
// router.post('/api/link', Link.create);
// router.put('/api/link/:id', Link.update);
// router.delete('/api/link/:id', Link.delete);

/* products */
router.get('/product/all', Product.productAll);
router.get('/api/product', Product.list);
router.get('/api/product/:id', Product.productId);
/* reviews */
router.post('/api/create-review', Review.create);
router.get('/api/reviews/:product_id', Review.getReviewsByProductId);
router.get('/review-rating-avg/:product_id', Review.getAvg);
/* cart */
router.get('/api/order/:id', Order.orderId);
router.get('/api/order/all/:user_user_id', Order.orderAll);
router.post('/api/order', Order.create);
router.delete('/api/order/:order_id', Order.delete);
/* auth */
router.post('/api/auth/login', User.auth);//api/auth/*
router.post('/api/create', User.create);

// router.get('/api/web/user', User.list);

module.exports = router;