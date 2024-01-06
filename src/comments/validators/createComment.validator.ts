import { body } from 'express-validator';

export const createCommentValidator = [
  body('post_id', 'Please enter post_id')
    .isString()
    .withMessage('Please enter post_id')
    .bail()
    .trim()
    .notEmpty()
    .withMessage('Please enter post_id'),
  body('content', 'Please enter content')
    .isString()
    .bail()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Please enter title with less than 500 characters'),
];
