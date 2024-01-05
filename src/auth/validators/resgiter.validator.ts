import { body } from 'express-validator';

export const registerValidator = [
  body('name', 'Please enter name')
    .isString()
    .bail()
    .trim()
    .isLength({ max: 150 })
    .withMessage('Please enter name with less than 150 characters'),
  body('email', 'Please enter email').isString().bail().trim().isEmail().withMessage('Please enter valid email'),
  body('password', 'Please enter password')
    .isString()
    .bail()
    .trim()
    .isLength({ min: 6 })
    .withMessage('Please enter valid password of minimum length 6'),
];
