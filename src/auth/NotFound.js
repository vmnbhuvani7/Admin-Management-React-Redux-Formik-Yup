import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const NotFound = () => (
    <div>
        <Redirect to={{
            pathname: "/",
        }} />
    </div>
);

export default NotFound;