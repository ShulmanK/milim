import React, {Component, Fragment} from 'react';
import Button from "@material-ui/core/Button";

class FormConfirm extends Component {
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
                <h2>FormConfirm</h2>
                <p>Looks like its FormConfirm</p>
                <Button
                    onClick={this.continue}
                    variant="contained"
                    color="primary">Continue</Button>
                <Button
                    onClick={this.back}
                    variant="contained">Back</Button>
            </Fragment>
        )
    }
}

export default FormConfirm;