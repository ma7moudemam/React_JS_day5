import React from "react";
import { Link } from "react-router-dom";
export default class AddStudent extends React.Component {
  state = {
    id: Math.floor(Math.random() * 1000),
    name: "",
    age: "",
    trackName: "",
    birthDate: "",
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
    fetch("http://localhost:8080/students", {
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
      this.setState({ id: e.target.value });
    }
    //
  };
  //Redirect List

  render() {
    console.log("Props of Add", this.props);
    return (
      <>
        <div className="container">
          <div className="box-w-shadow w-mr-40">
            <h3 className="main-title">Add Student Form</h3>
            <form onSubmit={this.AddnewStudent}>
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label form-label-sm">ID</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={this.state.id}
                      onChange={this.validateName}
                      onBlur={this.validateName}
                      disabled
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label form-label-sm">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="name"
                      value={this.state.name}
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label form-label-sm">Age</label>
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      id="Age"
                      value={this.state.age}
                      onChange={(e) => this.setState({ age: e.target.value })}
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label form-label-sm">
                      TrackName
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="trackName"
                      value={this.state.trackName}
                      onChange={(e) =>
                        this.setState({ trackName: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label form-label-sm">
                      Birth Date
                    </label>
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      id="birthDate"
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
