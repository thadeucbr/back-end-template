import AppError from './AppError';
import { NextFunction, Request, Response } from 'express';
import status from '@utils/StatusCode';
export default (err: Error, _request: Request, response: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: status[err.statusCode] || 400,
      message: err.message,
    });
  }
  console.log('\x1b[31m%s\x1b[0m', '************* ⚠️  ERRO ⚠️ *************')
  console.error(err);
  console.log('\x1b[31m%s\x1b[0m', '*************************************')
  return response.status(500).json({
    status: status[500],
    message: 'Internal server error',
  });
};