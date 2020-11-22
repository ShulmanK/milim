import React, {Component, Fragment} from 'react';
import Button from "@material-ui/core/Button";
import classes from "../FormInfinitive/FormInfinitive.module.css";

class FormFuture extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {values, handleChange} = this.props;
        return (
            <Fragment>
                {this.props.renderForm(["future"], 'mobile')}
                <div className={classes.ButtonSection}>
                    <Button
                        onClick={this.continue}
                        variant="contained"
                        color="primary">Continue</Button>
                    <Button
                        onClick={this.back}
                        variant="contained">Back</Button>
                </div>
            </Fragment>
        )
    }
}

export default FormFuture;