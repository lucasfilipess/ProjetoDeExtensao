const express = require('express');
const { celebrate } = require('celebrate');
const routes = express.Router();
const auth = require('./middlewares/auth');
const isAdmin = require('./middlewares/isAdmin');
const authEmail = require('./middlewares/authEmail');
const authEmailUpdate = require('./middlewares/authEmailUpdate');
const {
  login_schema,
  person_schema,
  patient_schema,
  accompanied_schema,
  supervisor_update_schema,
  supervisor_schema,
  student_schema,
} = require('./middlewares/schemas');

const session = require('./controllers/SessionController');
const patient = require('./controllers/PatientController');
const supervisor = require('./controllers/SupervisorController');
const admin = require('./controllers/AdminController');
const classCtrl = require('./controllers/ClassController');
const advice = require('./controllers/AdviceController');
const serviceArea = require('./controllers/ServiceAreaController');

routes.post(
  '/login',
  celebrate({
    body: login_schema,
  }),
  session.login
);

//////////////////////////////////////////////////////////////////////

routes.get('/patient', patient.index);

routes.get('/patient/my-data', auth, patient.getMyData);
routes.get('/patient/my-accompanied', auth, patient.getMyAccompanied);

routes.post(
  '/patient',
  authEmail,
  celebrate({
    body: patient_schema,
  }),
  patient.create
);

routes.put(
  '/patient',
  auth,
  authEmailUpdate,
  celebrate({
    body: person_schema,
  }),
  patient.update
);

routes.delete('/patient', auth, patient.delete);

routes.post(
  '/patient/accompanied',
  auth,
  celebrate({
    body: accompanied_schema,
  }),
  patient.createAccompanied
);

routes.put(
  '/patient/accompanied/:id',
  auth,
  celebrate({
    body: accompanied_schema,
  }),
  patient.updateAccompanied
);

routes.delete('/patient/accompanied/:id', auth, patient.deleteAccompanied);

//////////////////////////////////////////////////////////////////////

routes.get('/supervisor', supervisor.index);

routes.get('/supervisor/my-data', auth, supervisor.getMyData);
routes.get('/supervisor/my-appointments', auth, supervisor.getMyAppointments);

routes.put(
  '/supervisor',
  auth,
  authEmailUpdate,
  celebrate({
    body: supervisor_update_schema,
  }),
  supervisor.update
);

// //////////////////////////////////////////////////////////////////////

routes.get('/admin', admin.index);

routes.post(
  '/admin/supervisor',
  isAdmin,
  authEmail,
  celebrate({
    body: supervisor_schema,
  }),
  admin.createSupervisor
);

routes.put(
  '/admin/supervisor/:id',
  isAdmin,
  authEmailUpdate,
  celebrate({
    body: supervisor_schema,
  }),
  admin.updateSupervisor
);

routes.delete('/admin/supervisor/:id', isAdmin, admin.deleteSupervisor);

routes.post(
  '/admin/student',
  isAdmin,
  authEmail,
  celebrate({
    body: student_schema,
  }),
  admin.createStudent
);

routes.put(
  '/admin/student',
  isAdmin,
  authEmail,
  celebrate({
    body: student_schema,
  }),
  admin.updateStudent
);

routes.delete('/admin/student', isAdmin, admin.deleteStudent);

// //////////////////////////////////////////////////////////////////////

routes.get('/advice', advice.index);
routes.get('/class', classCtrl.index);
routes.get('/service-area', serviceArea.index);
routes.post('/class', classCtrl.create);
routes.post('/service-area', serviceArea.create);
routes.put('/service-area/:id', serviceArea.update);
routes.put('/class/:id', classCtrl.update);
routes.delete('/class/:id', classCtrl.delete);
routes.delete('/service-area/:id', serviceArea.delete);

module.exports = routes;
