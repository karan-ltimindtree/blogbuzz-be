import { body, param } from 'express-validator';

export const getSinglePostValidator = [
  param('id', 'Please enter id').isString().bail().trim().notEmpty().withMessage('Please enter valid id'),
];
