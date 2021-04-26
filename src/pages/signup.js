import React from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { SignUpContainer, Div } from '../components/loginStyle'
import '../App.css'
const SignUpPage = () => {
  return (
    <SignUpContainer>
      <Div>
        <img />
        <h2>Growing wealth with others</h2>
      </Div>
      <div className="form-container">
        <Tabs>
          <TabList className="tablist">
            <Tab className="tab">Login</Tab>
            <Tab className="tab">Sign up</Tab>
          </TabList>
          <TabPanel>
            <LoginForm />
          </TabPanel>
          <TabPanel>
            <SignUpForm />
          </TabPanel>
        </Tabs>
      </div>
    </SignUpContainer>
  )
}

export default SignUpPage;