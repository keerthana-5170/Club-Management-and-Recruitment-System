import React from 'react';
import '../assets/styles/RegistrationForm.css'
function RegistrationForm() {
  return (
  <div className="main">
      <div className='desc'>
          <div className='inner-desc container' > 
            <h1>NAME OF THE EVENT</h1>
            <h2>Date of Event:30/01/2022</h2>
          </div>
      </div><br/>
      <div className='container'>
        <h2>GLAD YOU SHOWED INTEREST TOWARDS THE EVENT!!</h2>
        <h3>Please fill the below Registraion Form</h3>
      </div>
      <div className='container'>
    <form action='#' method='post'>
    <div class="form-group">
        <label for="email">College Email address</label>
        <input type="email" class="form-control" id="email"  placeholder="Enter college email"/>
    </div>
    <div class="form-group">
        <label for="Name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
    </div><br/>
    <div class="form-group">
        <label for="Name">Name</label>
        <input type="text" class="form-control" id="name" placeholder="Enter your name"/>
    </div><br/>
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">Select Branch</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01">
            <option value="cse">CSE</option>
            <option value="eee">EEE</option>
            <option value="ece">ECE</option>
            <option value="it">IT</option>
            <option value="mec">MEC</option>
            <option value="bt">BT</option>
        </select> 
    </div>
    <button type="submit" class="btn btn-primary">REGISTER</button>
    </form>
    </div>
  </div>
  );
}

export default RegistrationForm;
