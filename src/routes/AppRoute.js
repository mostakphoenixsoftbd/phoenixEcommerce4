import React, {Component,Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import OnBoardPage from "../pages/UserOnboardPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>

                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/onboard" component={OnBoardPage}/>
                </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;