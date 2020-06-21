const express = require('express');
const { celebrate } = require('celebrate');
const routes = express.Router();
const auth = require('./middlewares/auth');
const authEmail = require('./middlewares/authEmail');
const {
  login,
  patient,
  teacher,
  student,
  completePatient,
} = require('./middlewares/schemas');

const SessionController = require('./controllers/SessionController');
const PatientController = require('./controllers/PatientController');
const TeacherController = require('./controllers/TeacherController');
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
  // authEmail, depois validar o email quando o usuário for atualizar
  celebrate({
    body: completePatient,
  }),
  PatientController.update
);

//////////////////////////////////////////////////////////////////////

routes.get('/teacher', TeacherController.index);

routes.get('/teacher/my-data', auth, TeacherController.getMyData);

routes.post(
  '/teacher',
  authEmail,
  celebrate({
    body: teacher,
  }),
  TeacherController.create
);

routes.put(
  '/teacher',
  auth,
  // authEmail, depois validar o email quando o usuário for atualizar
  celebrate({
    body: teacher,
  }),
  TeacherController.update
);

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
  // authEmail, depois validar o email quando o usuário for atualizar
  celebrate({
    body: student,
  }),
  StudentController.update
);

module.exports = routes;
