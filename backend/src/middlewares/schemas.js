const { Joi } = require('celebrate');

module.exports = {
  login_schema: Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  }),

  patient_schema: Joi.object().keys({
    type: Joi.string().required(),
    name: Joi.string().required().min(5).max(30),
    surname: Joi.string().required().min(5).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),

  person_schema: Joi.object().keys({
    type: Joi.string().required(),
    name: Joi.string().required().min(5).max(30),
    surname: Joi.string().required().min(5).max(30),
    birth_date: Joi.string().required().length(10),
    cpf: Joi.string().length(14).required(),
    rg: Joi.string().length(13).required(),
    telephone: Joi.string().length(14).required(),
    cellPhone: Joi.string().length(16).required(),
    email: Joi.string().email().required(),
    cep: Joi.string().length(9).required(),
    uf: Joi.string().length(2).required(),
    city: Joi.string().min(2).max(100).required(),
    neighborhood: Joi.string().min(2).max(100).required(),
    street: Joi.string().min(2).max(100).required(),
    number: Joi.number().integer().min(1).max(999999).required(),
    complement: Joi.string().min(1).max(30),
    password: Joi.string().min(8).required(),
  }),

  accompanied_schema: Joi.object().keys({
    type: Joi.string().required(),
    name: Joi.string().required().min(5).max(30),
    surname: Joi.string().required().min(5).max(30),
    birth_date: Joi.string().required().length(10),
    cpf: Joi.string().length(14).required(),
    rg: Joi.string().length(13).required(),
    cep: Joi.string().length(9).required(),
    uf: Joi.string().length(2).required(),
    city: Joi.string().min(2).max(100).required(),
    neighborhood: Joi.string().min(2).max(100).required(),
    street: Joi.string().min(2).max(100).required(),
    number: Joi.number().integer().min(1).max(999999).required(),
    complement: Joi.string().min(1).max(30),
  }),

  supervisor_update_schema: Joi.object().keys({
    id_advice: Joi.number().integer().required(),
    registration: Joi.number().integer().required(),
    name: Joi.string().required().min(5).max(30),
    surname: Joi.string().required().min(5).max(30),
    birth_date: Joi.string().required().length(10),
    cpf: Joi.string().length(14).required(),
    rg: Joi.string().length(13).required(),
    telephone: Joi.string().length(14).required(),
    cellPhone: Joi.string().length(16).required(),
    email: Joi.string().email().required(),
    cep: Joi.string().length(9).required(),
    uf: Joi.string().length(2).required(),
    city: Joi.string().min(2).max(100).required(),
    neighborhood: Joi.string().min(2).max(100).required(),
    street: Joi.string().min(2).max(100).required(),
    number: Joi.number().integer().min(1).max(999999).required(),
    complement: Joi.string().min(1).max(30),
    password: Joi.string().min(8).required(),
  }),

  supervisor_schema: Joi.object().keys({
    id_advice: Joi.number().integer().required(),
    id_class: Joi.number().integer().required(),
    registration: Joi.number().integer().required(),
    type: Joi.string().required(),
    name: Joi.string().required().min(5).max(30),
    surname: Joi.string().required().min(5).max(30),
    birth_date: Joi.string().required().length(10),
    cpf: Joi.string().length(14).required(),
    rg: Joi.string().length(13).required(),
    telephone: Joi.string().length(14).required(),
    cellPhone: Joi.string().length(16).required(),
    email: Joi.string().email().required(),
    cep: Joi.string().length(9).required(),
    uf: Joi.string().length(2).required(),
    city: Joi.string().min(2).max(100).required(),
    neighborhood: Joi.string().min(2).max(100).required(),
    street: Joi.string().min(2).max(100).required(),
    number: Joi.number().integer().min(1).max(999999).required(),
    complement: Joi.string().min(1).max(30),
    password: Joi.string().min(8).required(),
  }),

  student_schema: Joi.object().keys({
    id_class: Joi.number().integer().required(),
    ra: Joi.number().integer().min(100000000).max(999999999).required(),
    period: Joi.number().integer().min(1).max(99).required(),
    type: Joi.string().required(),
    name: Joi.string().required().min(5).max(30),
    surname: Joi.string().required().min(5).max(30),
    cpf: Joi.string().length(14).required(),
    rg: Joi.string().length(13).required(),
    telephone: Joi.string().length(14).required(),
    cellPhone: Joi.string().length(16).required(),
    email: Joi.string().email().required(),
    cep: Joi.string().length(9).required(),
    uf: Joi.string().length(2).required(),
    city: Joi.string().min(2).max(100).required(),
    neighborhood: Joi.string().min(2).max(100).required(),
    street: Joi.string().min(2).max(100).required(),
    number: Joi.number().integer().min(1).max(999999).required(),
    complement: Joi.string().min(1).max(30),
    password: Joi.string().min(8).required(),
  }),
};
