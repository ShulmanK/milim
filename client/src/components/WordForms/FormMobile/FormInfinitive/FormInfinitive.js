import React, {Component, Fragment} from 'react';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import classes from '../../FormInfinitive.module.scss';

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
                    onClick={this.continue}
                    endIcon={<NavigateNextIcon/>}
                >Next</Button></div>
            </Fragment>
        );
    }
}

export default FormInfinitive;

