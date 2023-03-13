import { NextFunction, Request, Response } from "express";

const response500 = (
  key: String = "",
  res: Response,
  custom_message: String | null = null
) => {
  res.statusCode = 500;
  res.setHeader("Content-Type", "application/json");
  return res.json({
    error: custom_message
      ? custom_message
      : `We failed to add this ${key} into the system.`,
  });
};

const response401 = (error: Object, res: Response) => {
  res.statusCode = 401;
  res.setHeader("Content-Type", "application/json");
  return res.json({
    error,
  });
};

const response404 = (
  key: String = "",
  res: Response,
  custom_message: String | null = null
) => {
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  return res.json({
    error: custom_message
      ? custom_message
      : `This ${key} is not found in the system.`,
  });
};

const response403 = (
  operation: String = "",
  route: String = "",
  res: Response
) => {
  res.statusCode = 403;
  return res.end(`${operation} operation not supported on ${route}`);
};

const response200 = (data: Object, res: Response) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  return res.json(data);
};

module.exports = {
  response500,
  response401,
  response404,
  response403,
  response200,
};
