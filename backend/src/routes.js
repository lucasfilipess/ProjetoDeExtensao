const express = require('express');
const { celebrate } = require('celebrate');
const routes = express.Router();
const auth = require('./middlewares/auth');
const authEmail = require('./middlewares/authEmail');
const authEmailUpdate = require('./middlewares/authEmailUpdate');
const {
  login,
  patient,
  professor,
  student,
  completePatient,
} = require('./middlewares/schemas');

const SessionController = require('./controllers/SessionController');
const PatientController = require('./controllers/PatientController');
const ProfessorController = require('./controllers/ProfessorController');
const StudentController = require('./controllers/StudentController');

routes.post(
  '/login',
  celebrate({
    body: login,
  }),
  SessionController.login
);
routes.post(
  '/admin/login',
  celebrate({
    body: login,
  }),
  SessionController.adminLogin
);

//////////////////////////////////////////////////////////////////////

routes.get('/patient', PatientController.index);

routes.get('/patient/my-data', auth, PatientController.getMyData);

routes.post(
  '/patient',
  authEmail,
  celebrate({
    body: patient,
  }),
  PatientController.create
);

routes.put(
  '/patient',
  auth,
  authEmailUpdate,
  celebrate({
    body: completePatient,
  }),
  PatientController.update
);

routes.put('/patient/delete', auth, PatientController.delete);

//////////////////////////////////////////////////////////////////////

routes.get('/professor', ProfessorController.index);

routes.get('/professor/my-data', auth, ProfessorController.getMyData);

routes.post(
  '/professor',
  authEmail,
  celebrate({
    body: professor,
  }),
  ProfessorController.create
);

routes.put(
  '/professor',
  auth,
  authEmailUpdate,
  celebrate({
    body: professor,
  }),
  ProfessorController.update
);

routes.put('/professor/delete', auth, ProfessorController.delete);

//////////////////////////////////////////////////////////////////////

routes.get('/student', StudentController.index);

routes.get('/student/my-data', auth, StudentController.getMyData);

routes.post(
  '/student',
  authEmail,
  celebrate({
    body: student,
  }),
  StudentController.create
);

routes.put(
  '/student',
  auth,
  authEmailUpdate,
  celebrate({
    body: student,
  }),
  StudentController.update
);

routes.put('/student/delete', auth, StudentController.delete);

module.exports = routes;
