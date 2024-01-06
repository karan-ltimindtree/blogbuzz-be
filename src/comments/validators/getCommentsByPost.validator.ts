import { body, param } from 'express-validator';

export const getCommentsByPostValidator = [
  param('post_id', 'Please enter post_id')
    .isString()
    .bail()
    .trim()
    .notEmpty()
    .withMessage('Please enter valid post_id'),
];
