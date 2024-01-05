import { body } from 'express-validator';

export const createPostValidator = [
  body('title', 'Please enter title')
    .isString()
    .bail()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Please enter title with less than 200 characters'),
  body('content', 'Please enter content')
    .isString()
    .bail()
    .trim()
    .isLength({ max: 2000 })
    .withMessage('Please enter content with less than 2000 characters'),
  body('category', 'Please enter category').isString().bail().trim(),
];
