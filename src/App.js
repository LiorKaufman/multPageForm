import React,{ Component } from 'react';
import UserForm from "./components/UserForm";
import FormPersonalDetails from "./components/FormPersonalDetails";
import FormUserDetails from "./components/FormUserDetails";
import './App.css'

class App extends Component {
  render() {
    return (
        <div className="App">
          <UserForm />
        </div>
    );
  }
}

export default App;
