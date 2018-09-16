import React, { Component } from "react";
import firebase from "./firebaseCfg";
import { FormControl, FormGroup, Button,Radio } from "react-bootstrap";

var db = firebase.database();

var refNews = db.ref("news");

var refStudent = db.ref("students");
class App extends Component {
  state = {
    header: "",
    body: "",
    studentName: "",
    studentClass: "1/1",
    preFix:""
  };

  handleOnchange = (e, field) => {
    this.setState({ [field]: e });

    console.log(e,[field])
  };

  handleSubmit = async e => {
    e.preventDefault();
    const d = new Date();
    const date = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
    await refNews.push({
      header: this.state.header,
      body: this.state.body,
      date: date.toString(),
    });
  };

  handleSubmitStudent = async e =>{
    e.preventDefault()
    const rnd = Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000
    const rndChar1 = String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97)
    const rndChar2 = String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97)
    await refStudent.push({
      class: this.state.studentClass,
      name: this.state.preFix+" "+this.state.studentName,
      code: rndChar1+rnd+rndChar2,
      teacher:'Dummy teacher'
    });
  }
  render() {
    return (
      <div className="container fluid">
        <h1>NEWS MANAGE</h1>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="header"
              onChange={e => this.handleOnchange(e.target.value, "header")}
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              componentClass="textarea"
              placeholder="body"
              onChange={e => this.handleOnchange(e.target.value, "body")}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>

        <hr />

        <h1>ADD STUDENTS</h1>
        <form onSubmit={this.handleSubmitStudent}>
        <FormGroup>
      <Radio name="radioGroup" inline value="เด็กชาย" onChange={e => this.handleOnchange(e.target.value, "preFix")}  required>
        เด็กชาย
      </Radio>
      <Radio name="radioGroup" inline value="เด็กหญิง" onChange={e => this.handleOnchange(e.target.value, "preFix")} required>
        เด็กหญิง
      </Radio>
    </FormGroup>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="student name"
              onChange={e => this.handleOnchange(e.target.value, "studentName")}
            />
          </FormGroup>
          <FormGroup>
            <FormControl componentClass="select" placeholder="select" onChange={e => this.handleOnchange(e.target.value, "studentClass")}>
              <option value="1/1">1/1</option>
              <option value="1/2">1/2</option>
              <option value="1/3">1/3</option>
              <option value="1/4">1/4</option>
              <option value="1/5">1/5</option>
              <option value="1/6">1/6</option>

              <option value="2/1">2/1</option>
              <option value="2/2">2/2</option>
              <option value="2/3">2/3</option>
              <option value="2/4">2/4</option>
              <option value="2/5">2/5</option>
              <option value="2/6">2/6</option>

              <option value="3/1">3/1</option>
              <option value="3/2">3/2</option>
              <option value="3/3">3/3</option>
              <option value="3/4">3/4</option>
              <option value="3/5">3/5</option>
              <option value="3/6">3/6</option>

              <option value="4/1">4/1</option>
              <option value="4/2">4/2</option>
              <option value="4/3">4/3</option>
              <option value="4/4">4/4</option>
              <option value="4/5">4/5</option>
              <option value="4/6">4/6</option>

              <option value="5/1">5/1</option>
              <option value="5/2">5/2</option>
              <option value="5/3">5/3</option>
              <option value="5/4">5/4</option>
              <option value="5/5">5/5</option>
              <option value="5/6">5/6</option>

              <option value="6/1">6/1</option>
              <option value="6/2">6/2</option>
              <option value="6/3">6/3</option>
              <option value="6/4">6/4</option>
              <option value="6/5">6/5</option>
              <option value="6/6">6/6</option>
            </FormControl>
          </FormGroup>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    );
  }
}

export default App;
