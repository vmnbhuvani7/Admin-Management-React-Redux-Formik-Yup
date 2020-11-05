import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './auth/Login';
import AddData from './page/AddData';
import ManagerList from './page/ManagerList';

const MainRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/appdata" component={AddData} />
                    <Route exact path="/maganerlist" component={ManagerList} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default MainRouter
