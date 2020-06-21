const { Joi } = require('celebrate');
const { min, max } = require('../database/connection');

module.exports = {
  login: Joi.object().keys({
    email: Joi.string().required().email(),
    senha: Joi.string().required().min(8),
  }),

  patient: Joi.object().keys({
    tipo: Joi.number().integer().required().max(9),
    nome: Joi.string().required().min(5).max(30),
    email: Joi.string().required().email(),
    senha: Joi.string().required().min(8),
  }),

  completePatient: Joi.object().keys({
    tipo: Joi.number().integer().required().max(9),
    nome: Joi.string().required().min(5).max(30),
    cpf: Joi.number().integer().min(10000000000).max(99999999999).required(),
    rg: Joi.string().required().min(11).max(11),
    telefone: Joi.string().length(10),
    celular: Joi.string().length(11),
    email: Joi.string().required().email(),
    cep: Joi.number().integer().min(10000000).max(99999999).required(),
    uf: Joi.string().length(2).required(),
    cidade: Joi.string().required().min(2).max(30),
    bairro: Joi.string().required().min(2).max(30),
    rua: Joi.string().required().min(2).max(30),
    numero: Joi.number().integer().min(1).max(999999).required(),
    complemento: Joi.string().min(1).max(30),
    senha: Joi.string().required().min(8),
  }),

  teacher: Joi.object().keys({
    matricula: Joi.number().integer().required(),
    tipo: Joi.number().integer().required().max(9),
    nome: Joi.string().required().min(5).max(30),
    cpf: Joi.number().integer().min(10000000000).max(99999999999).required(),
    rg: Joi.string().required().min(11).max(11),
    telefone: Joi.string().length(10),
    celular: Joi.string().length(11),
    email: Joi.string().required().email(),
    cep: Joi.number().integer().min(10000000).max(99999999).required(),
    uf: Joi.string().length(2).required(),
    cidade: Joi.string().required().min(2).max(30),
    bairro: Joi.string().required().min(2).max(30),
    rua: Joi.string().required().min(2).max(30),
    numero: Joi.number().integer().min(1).max(999999).required(),
    complemento: Joi.string().min(1).max(30),
    senha: Joi.string().required().min(8),
  }),

  student: Joi.object().keys({
    ra: Joi.number().integer().min(100000000).max(999999999).required(),
    periodo: Joi.number().integer().max(99).required(),
    tipo: Joi.number().integer().required().max(9),
    nome: Joi.string().required().min(5).max(30),
    cpf: Joi.number().integer().min(10000000000).max(99999999999).required(),
    rg: Joi.string().required().min(11).max(11),
    telefone: Joi.string().length(10),
    celular: Joi.string().length(11),
    email: Joi.string().required().email(),
    cep: Joi.number().integer().min(10000000).max(99999999).required(),
    uf: Joi.string().length(2).required(),
    cidade: Joi.string().required().min(2).max(30),
    bairro: Joi.string().required().min(2).max(30),
    rua: Joi.string().required().min(2).max(30),
    numero: Joi.number().integer().min(1).max(999999).required(),
    complemento: Joi.string().min(1).max(30),
    senha: Joi.string().required().min(8),
  }),
};
