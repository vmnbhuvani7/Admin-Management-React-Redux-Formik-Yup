import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './auth/Login';
import AddData from './page/AddData';

const MainRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/appdata" component={AddData} />
                    {/* <Route exact path="/addEmployee" component={AddManager} /> */}
                    {/* <Route exact path="/postList" component={ManagerList} /> */}
                    {/* <Route exact path="/postList" component={() => <ManagerList myProp="Manager"/>} />
                    <Route exact path="/employeeList" component={() => <ManagerList myProp="Employee"/>} /> */}
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MainRouter
