import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './auth/Login';
import AddData from './page/AddData';
import ManagerList from './page/ManagerList';
import PrivteRouter from './auth/priveteRouter'
import NotFound from './auth/NotFound';
import { isAuthenticated } from './auth';

const MainRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    {isAuthenticated() ? <Route exact path="/" component={AddData} /> : <Route exact path="/" component={Login} />}
                    <PrivteRouter exact path="/adddata" component={AddData} ></PrivteRouter>
                    <PrivteRouter exact path="/maganerlist" component={ManagerList} ></PrivteRouter>
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MainRouter
