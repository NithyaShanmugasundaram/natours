const Review = require('./../models/reviewModal');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
exports.getAllReviews = catchAsync(async (req, res, next) => {

  const review= await Review.find();
  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    results: review.length,
    data: {
      review
    }
  });
});
exports.createReview = catchAsync(async (req, res, next) => {
    const newReview = await Review.create(req.body);
  
    res.status(201).json({
      status: 'success',
      data: {
        review: newReview
      }
    });
  });
  