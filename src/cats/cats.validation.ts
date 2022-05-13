import Joi from 'joi';

export const createCatSchema = Joi.object({
  id: Joi.number(),
  name: Joi.string(),
  age: Joi.number(),
  breed: Joi.string(),
});
