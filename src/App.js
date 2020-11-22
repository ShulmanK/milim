import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from "./hoc/Layout/Layout";
import FormAddWord from "./containers/FormAddWord/FormAddWord";

class App extends Component {
    render() {
        return (
            <Layout>
                <Switch>
                    <Route path={'/edit'} component={FormAddWord}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;

