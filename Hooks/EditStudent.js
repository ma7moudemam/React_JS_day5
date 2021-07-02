import React from "react";
import { Link } from "react-router-dom";
export default class EditStudent extends React.Component {
  state = {
    // id: this.props.match.params.id,
    id: this.props.location.CurrentStudent.id,
    name: this.props.location.CurrentStudent.name,
    age: this.props.location.CurrentStudent.age,
    trackName: this.props.location.CurrentStudent.trackName,
    birthDate: this.props.location.CurrentStudent.birthDate,
  };

  AddnewStudent = () => {
    //My own Valiation Functions
    let newStudentObject = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      trackName: this.state.trackName,
      birthDate: this.state.birthDate,
    };
    //Callling APi Request For Adding
    fetch(`http://localhost:8080/students/${this.state.id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudentObject),
    })
      .then((response) => response.json())
      .then((red) => console.log("Saving"))
      .catch((Error) => console.log("Error"));
    this.props.history.push("/Students/StudentList");
  };
  validateName = (e) => {
    if (e.target.value == "") {
      alert("Name Required");
    } else {
      this.setState({ name: e.target.value });
    }
    //
  };
  //Redirect List

  render() {
    console.log("Props of Edit", this.props);
    return (
      <>
        <div className="container">
          <div className="box-w-shadow w-mr-40">
            <h3 className="main-title">Edit Student Form from API</h3>
            <form onSubmit={this.AddnewStudent}>
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">ID</label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.id}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Name"
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                      onChange={this.validateName}
                      onBlur={this.validateName}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Age</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Age"
                      value={this.state.age}
                      onChange={(e) => this.setState({ age: e.target.value })}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">trackName</label>
                    <input
                      type="text"
                      className="form-control"
                      id="Address"
                      value={this.state.trackName}
                      onChange={(e) =>
                        this.setState({ trackName: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">BirthDate</label>
                    <input
                      type="text"
                      className="form-control"
                      id="DOB"
                      value={this.state.birthDate}
                      onChange={(e) =>
                        this.setState({ birthDate: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
            <Link to="/Students/StudentList">Back To List</Link>
          </div>
        </div>
      </>
    );
  }
}
