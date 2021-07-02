import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddStudent from "./AddStudent";
import StudentsLists from "./ListStudents";
import EditStudent from "./EditStudent";
import { AddHook } from "./AddHooks";
import Header from "./Header";

import "../../App.css";

export const AppRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Route
          component={(props) => <StudentsLists {...props} />}
          path="/"
          exact
        />
        <Route
          component={(props) => <StudentsLists {...props} />}
          path="/Students/StudentList"
          exact
        />
        <Route
          component={(props) => <AddStudent {...props} />}
          path="/Students/Add"
          exact
        />
        <Route
          component={(props) => <EditStudent {...props} />}
          path="/Students/Edit/:id"
          exact
        />
        <Route
          component={(props) => <AddHook {...props} />}
          path="/Students/AddHook"
          exact
        />
      </Router>
    </>
  );
};
export default AppRouter;
