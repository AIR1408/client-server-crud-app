import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


import Container from 'react-bootstrap/Container';

import Header from './Shared/header';
import SubjectList from './Subjects';
import EditSubject from './Subjects/edit'
import CreateSubject from './Subjects/create';
import DeleteSubject from './Subjects/delete';

import TeacherList from './Teachers';
import EditTeacher from './Teachers/edit'
import CreateTeacher from './Teachers/create';
import DeleteTeacher from './Teachers/delete';

import GradeList from './Grades';
import EditGrade from './Grades/edit'
import CreateGrade from './Grades/create';
import DeleteGrade from './Grades/delete';

import PupilList from './Pupils';
import EditPupil from './Pupils/edit'
import CreatePupil from './Pupils/create';
import DeletePupil from './Pupils/delete';


// const apiBase = "https://localhost:7064"
const apiBase = "http://localhost:5094"
// const apiBase = "https://8e5c-91-107-103-246.eu.ngrok.io"
const apiSubject = apiBase + "/api/subject/"
const apiTeacher = apiBase + "/api/teacher/"
const apiGrade = apiBase + "/api/grade/"
const apiPupil = apiBase + "/api/pupil/"

fetch(apiSubject, {
  method: "get",
  headers: new Headers({
    "ngrok-skip-browser-warning": "69420",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

const router = createBrowserRouter([
  {
    path: "/",
    element: <SubjectList apiUrl={apiSubject} />
  },
  {
    path: "/subject",
    element: <SubjectList apiUrl={apiSubject} />
  },
  {
    path: "/subject/create",
    element: <CreateSubject apiUrl={apiSubject}/>
  },
  {
    path: "/subject/edit",
    element: <EditSubject apiUrl={apiSubject}/>
  },
  {
    path: "/subject/delete",
    element: <DeleteSubject apiUrl={apiSubject}/>
  },

  
  {
    path: "/teacher",
    element: <TeacherList apiUrl={apiTeacher} />
  },
  {
    path: "/teacher/create",
    element: <CreateTeacher apiUrl={apiTeacher}/>
  },
  {
    path: "/teacher/edit",
    element: <EditTeacher apiUrl={apiTeacher}/>
  },
  {
    path: "/teacher/delete",
    element: <DeleteTeacher apiUrl={apiTeacher}/>
  },

  {
    path: "/grade",
    element: <GradeList apiUrl={apiGrade} />
  },
  {
    path: "/grade/create",
    element: <CreateGrade apiUrl={apiGrade}/>
  },
  {
    path: "/grade/edit",
    element: <EditGrade apiUrl={apiGrade}/>
  },
  {
    path: "/grade/delete",
    element: <DeleteGrade apiUrl={apiGrade}/>
  },

  {
    path: "/Pupil",
    element: <PupilList apiUrl={apiPupil} />
  },
  {
    path: "/Pupil/create",
    element: <CreatePupil apiUrl={apiPupil}/>
  },
  {
    path: "/Pupil/edit",
    element: <EditPupil apiUrl={apiPupil}/>
  },
  {
    path: "/Pupil/delete",
    element: <DeletePupil apiUrl={apiPupil}/>
  },
])

function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </div>
  );
}

export default App;
