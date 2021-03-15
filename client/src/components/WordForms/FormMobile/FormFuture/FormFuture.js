import React, { Component, Fragment } from "react"
import Button from "@material-ui/core/Button"
import SaveIcon from "@material-ui/icons/Save"
import classes from "../../FormInfinitive.module.scss"
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore"

class FormFuture extends Component {
  continue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }

  back = (e) => {
    e.preventDefault()
    this.props.prevStep()
  }

  render() {
    const { values, handleChange, createVerb } = this.props
    return (
      <Fragment>
        {this.props.renderForm(["future"], "mobile")}
        <div className={classes.ButtonSection}>
          <Button
            onClick={this.back}
            variant="contained"
            startIcon={<NavigateBeforeIcon />}
          >
            Back
          </Button>
          <Button
            onClick={createVerb}
            variant="contained"
            color="primary"
            endIcon={<SaveIcon />}
          >
            Save
          </Button>
        </div>
      </Fragment>
    )
  }
}

export default FormFuture
