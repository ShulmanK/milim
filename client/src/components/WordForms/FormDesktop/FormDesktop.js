import React, {Component, Fragment} from 'react';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import classes from '../FormInfinitive.module.scss';

class FormDesktop extends Component {
    constructor(props) {
        super(props)
    }

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

                {this.props.renderForm(['infinitive', 'imperative', 'present', 'past', 'future'], 'desktop')}
                <div className={classes.ButtonSection}>
                    <Button
                        onClick={this.props.createVerb}
                        variant="outlined"
                        color="primary"
                        startIcon={<SaveIcon/>}
                    >Save</Button>

                </div>


            </Fragment>
        )
    }
}

export default FormDesktop;