import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './auth/Login';
import AddData from './page/AddData';
import ManagerList from './page/ManagerList';
import PrivteRouter from './auth/priveteRouter'

const MainRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <PrivteRouter exact path="/adddata" component={AddData} ></PrivteRouter>
                    <PrivteRouter exact path="/maganerlist" component={ManagerList} ></PrivteRouter>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MainRouter
