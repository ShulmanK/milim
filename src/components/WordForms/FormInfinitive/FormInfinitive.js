import React, {Component, Fragment} from 'react';
import {ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles'
import CustomInput from "../FormElements/CustomInput/CustomInput";
import Button from '@material-ui/core/Button';
import classes from './FormInfinitive.module.css';

class FormInfinitive extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };


    render() {

        return (
            <Fragment>
                {this.props.renderForm(["infinitive", "present", "imperative"], 'mobile')}
                <div className={classes.ButtonSection}><Button
                    variant="contained"
                    color="primary"
                    onClick={this.continue}>Continue</Button></div>
            </Fragment>
        );
    }
}

export default FormInfinitive;

