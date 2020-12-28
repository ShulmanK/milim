import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from "./hoc/Layout/Layout";
import FormAddVerb from "./containers/FormAddWord/FormAddVerb";

class App extends Component {
    render() {
        return (
            <Layout >
                <Switch>
                    <Route path={'/edit'} component={FormAddVerb}/>
                </Switch>
            </Layout>
        );
    }
}

export default App;
