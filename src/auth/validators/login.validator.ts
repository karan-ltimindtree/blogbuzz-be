import { body } from 'express-validator';

export const loginValidator = [
  body('email', 'Please enter email').isString().bail().trim().isEmail().withMessage('Please enter valid email'),
  body('password', 'Please enter password')
    .isString()
    .bail()
    .trim()
    .isLength({ min: 6 })
    .withMessage('Please enter valid password of minimum length 6'),
];
