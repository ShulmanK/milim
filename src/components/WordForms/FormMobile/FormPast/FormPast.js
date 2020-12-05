import React, {Component, Fragment} from 'react';
import Button from "@material-ui/core/Button";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import classes from '../../FormInfinitive.module.scss';

class FormPast extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        return (
            <Fragment>

                {this.props.renderForm(["past"], 'mobile')}
                <div className={classes.ButtonSection}>
                    <Button
                        onClick={this.back}
                        variant="contained"
                        startIcon={<NavigateBeforeIcon/>}>
                        Back
                    </Button>
                    <Button
                        onClick={this.continue}
                        variant="contained"
                        color="primary"
                        endIcon={<NavigateNextIcon/>}>
                        Next
                    </Button>

                </div>


            </Fragment>
        )
    }
}

export default FormPast;