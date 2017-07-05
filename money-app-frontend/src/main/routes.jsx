import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCylce from '../billingCycle/billingCycle'

export default props => (
    <div>
        <Router history={hashHistory}>
            <Route path='/' component={Dashboard}/>
            <Route path='/billingCycles' component={BillingCylce}/>
            <Redirect from='*' to='/'/>
        </Router>
    </div>
)