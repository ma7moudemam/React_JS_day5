import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// export const AddHook = (props) => {
export const AddHook = ({ history, location }) => {
  console.log("Props for Hooks Add", history);

  let [id, setID] = useState(0);
  let [name, setName] = useState("");

  let [age, setAge] = useState("");
  let [trackName, setTrackName] = useState("");

  let [birthDate, setBirthDate] = useState("");

  let AddnewStudent = () => {
    //My own Valiation Functions
    let newStudentObject = {
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      trackName: this.state.trackName,
      birthDate: this.state.birthDate,
    };
    //Calling APi Request For Adding
    fetch("http://localhost:8080/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStudentObject),
    })
      .then((response) => response.json())
      .then((red) => console.log("Saving"))
      .catch((Error) => console.log("Error"));
    history.push("/Students/StudentList");
  };
  useEffect(() => {
    // Similar to componentDidMount and componentDidUpdate:
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <div className="container">
        <div className="box-w-shadow w-mr-40">
          <h3 className="main-title">Add Student Form By Hooks</h3>
          <form onSubmit={AddnewStudent}>
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label">ID</label>
                  <input
                    type="number"
                    className="form-control"
                    value={id}
                    onChange={(e) => setID(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label">Age</label>
                  <input
                    type="text"
                    className="form-control"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label">TrackName</label>
                  <input
                    type="text"
                    className="form-control"
                    id="trackName"
                    value={trackName}
                    onChange={(e) => setTrackName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-group">
                  <label className="form-label">BirthDate</label>
                  <input
                    type="text"
                    className="form-control"
                    id="birthDate"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
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
};
