import React from "react";
import { Link } from "react-router-dom";
// import MyImage from '../../1.jpg'
import editIcon from "../../images/edit.png";
import DeleteIcon from "../../images/delete.png";

export default class studentsLists extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor and props studentComp value new ==>", props);
  }
  //Life Cycle
  state = {
    students: null,
  };
  //Get Data From Api
  componentDidMount() {
    //Calling API
    const promise = fetch("http://localhost:8080/students");
    const res = promise.then((res) => res.json());
    res.then((data) => {
      console.log(data);
      this.setState({
        students: data,
      });
    });
  }

  DeleteStudent = (id) => {
    console.log("id of selected item ==> ", id);
    //Calling Delete API function(id)
    fetch(`http://localhost:8080/students/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((data) => {
        // const newStudents = this.state.students.filter((s) => s.id !== id.id);
        console.log("Data after deleted", data);
        this.setState({
          students: data,
        });
      });
  };

  render() {
    if (this.state.students == null) {
      return <div>Loading Data from serverzzz </div>;
    } else {
      const { students } = this.state;
      console.log("student comp after  => ", students);
      return (
        <>
          <div className="container">
            <div className="box-w-shadow w-mr-40 student-wrapper mr-5">
              <div className="d-flex align-items-center justify-content-between">
                <h3 className="main-title">All student Data From API</h3>
                <Link to="/students/Add" className="btn btn-outline-primary">
                  Add new students
                </Link>
              </div>

              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">Serial</th>
                      <th scope="col">Name</th>
                      <th scope="col">Age</th>
                      <th scope="col">TrackName</th>
                      <th scope="col">Birth Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student, index) => (
                      <tr key={student.id} index={index + 1}>
                        <th scope="row">{index + 1}</th>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.trackName}</td>
                        <td>{student.birthDate}</td>
                        <td className="action">
                          <Link
                            className="btn btn-primary"
                            to={{
                              pathname: `/Students/Edit/${student.id}`,
                              CurrentStudent: student,
                            }}
                          >
                            <span>
                              <img src={editIcon} alt="edit" />
                            </span>
                          </Link>
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => this.DeleteStudent(student.id)}
                          >
                            <img src={DeleteIcon} alt="delete" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <Link to="/students/AddHook" className="btn btn-danger">
                  Add Hooks students
                </Link>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
