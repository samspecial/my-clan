import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation';
import Cooperative from '../components/Cooperative/Cooperative';
import Thrift from '../components/Thrift/Thrift';
import Support from '../components/Support/Support';
import RegisterCooperative from '../components/Cooperative/RegisterCooperative'
import Notify from '../components/Cooperative/Notification'
import Transaction from '../components/Cooperative/Transaction'
import Category from '../components/Cooperative/category'
import ContactUs from '../components/Thrift/ContactUs';
import Help from '../components/Thrift/Help';
import Apply from '../components/Thrift/Apply';
import Mail from '../components/Support/Mail';

const DashBoard = () => {
  return (

    <div>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path='/dashboard' component={Cooperative} />
          <Route exact path='/dashboard/thrift' component={Thrift} />
          <Route exact path='/dashboard/support' component={Support} />
          <Route path='/dashboard/cooperative/register' component={RegisterCooperative} />
          <Route path='/dashboard/cooperative/notification' component={Notify} />
          <Route path='/dashboard/cooperative/transaction' component={Transaction} />
          <Route path='/dashboard/cooperative/category' component={Category} />
          <Route path='/dashboard/thrift/apply' component={Apply} />
          <Route path='/dashboard/thrift/help' component={Help} />
          <Route path='/dashboard/thrift/contact' component={ContactUs} />
          <Route path='/dashboard/support/mail' component={Mail} />
        </Switch>
      </BrowserRouter>
    </div>

  )
}

export default DashBoard;