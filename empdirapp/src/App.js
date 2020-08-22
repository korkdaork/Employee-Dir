import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json";
import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard"


class App extends Component {

  //setting this.state.employees to the employees json array
  state = {
    employees
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const employees = this.state.employees.filter(employee => employee.id !== id);

    // Set this.state.friends equal to the new friends array
    this.setState({ employees });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee Directory</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeEmployee={this.removeEmployee}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.image}
            email={employee.email}
            phone={employee.phone}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;