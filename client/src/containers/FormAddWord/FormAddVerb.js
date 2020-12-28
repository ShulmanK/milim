import React, {Component, Fragment} from 'react';
import FormInfinitive from '../../components/WordForms/FormMobile/FormInfinitive/FormInfinitive';
import FormPast from '../../components/WordForms/FormMobile/FormPast/FormPast';
import FormFuture from '../../components/WordForms/FormMobile/FormFuture/FormFuture';
import classes from '../../components/WordForms/FormInfinitive.module.scss';
import formConfigMobile from "../../components/WordForms/formConfigurationMobile";
import formConfigDesktop from "../../components/WordForms/formConfigurationDesktop";
import FormDesktop from "../../components/WordForms/FormDesktop/FormDesktop";
import CustomInput from "../../components/WordForms/FormElements/CustomInput/CustomInput";

class FormAddVerb extends Component {
    state = {
        step: 1,
        infinitive: '',
        imperative_man_singular: '',
        imperative_man_plural: '',
        imperative_woman_singular: '',
        imperative_woman_plural: '',
        present_man_singular: '',
        present_man_plural: '',
        present_woman_singular: '',
        present_woman_plural: '',
        past_man_1st: '',
        past_man_plural_1st: '',
        past_man_plural_1st_transcription: '',
        past_woman_1st: '',
        past_man_singular_2nd: '',
        past_man_plural_2nd: '',
        past_woman_singular_2nd: '',
        past_woman_plural_2nd: '',
        past_man_singular_3nd: '',
        past_woman_singular_3nd: '',
        past_plural_3nd: '',
        future_man_1st: '',
        future_man_plural_1st: '',
        future_man_plural_1st_transcription: '',
        future_woman_1st: '',
        future_man_singular_2nd: '',
        future_man_plural_2nd: '',
        future_woman_singular_2nd: '',
        future_woman_plural_2nd: '',
        future_man_singular_3nd: '',
        future_man_plural_3nd: '',
        future_woman_singular_3nd: '',
        future_woman_plural_3nd: ''
    };
    getInputs = () => {
        const {
            infinitive,
            imperative_man_singular,
            imperative_man_plural,
            imperative_woman_singular,
            imperative_woman_plural,
            present_man_singular,
            present_man_plural,
            present_woman_singular,
            present_woman_plural,
            past_man_1st,
            past_man_plural_1st,
            past_man_plural_1st_transcription,
            past_woman_1st,
            past_man_singular_2nd,
            past_man_plural_2nd,
            past_woman_singular_2nd,
            past_woman_plural_2nd,
            past_man_singular_3nd,
            past_woman_singular_3nd,
            past_plural_3nd,
            future_man_1st,
            future_man_plural_1st,
            future_man_plural_1st_transcription,
            future_woman_1st,
            future_man_singular_2nd,
            future_man_plural_2nd,
            future_woman_singular_2nd,
            future_woman_plural_2nd,
            future_man_singular_3nd,
            future_man_plural_3nd,
            future_woman_singular_3nd,
            future_woman_plural_3nd,
            infinitive_transcription,
            imperative_man_singular_transcription,
            imperative_man_plural_transcription,
            imperative_woman_singular_transcription,
            imperative_woman_plural_transcription,
            present_man_singular_transcription,
            present_man_plural_transcription,
            present_woman_singular_transcription,
            present_woman_plural_transcription,
            past_man_1st_transcription,
            past_woman_1st_transcription,
            past_man_singular_2nd_transcription,
            past_man_plural_2nd_transcription,
            past_woman_singular_2nd_transcription,
            past_woman_plural_2nd_transcription,
            past_man_singular_3nd_transcription,
            past_woman_singular_3nd_transcription,
            past_plural_3nd_transcription,
            future_man_1st_transcription,
            future_woman_1st_transcription,
            future_man_singular_2nd_transcription,
            future_man_plural_2nd_transcription,
            future_woman_singular_2nd_transcription,
            future_woman_plural_2nd_transcription,
            future_man_singular_3nd_transcription,
            future_man_plural_3nd_transcription,
            future_woman_singular_3nd_transcription,
            future_woman_plural_3nd_transcription
        } = this.state;
        const values = {
            infinitive,
            imperative_man_singular,
            imperative_man_plural,
            imperative_woman_singular,
            imperative_woman_plural,
            present_man_singular,
            present_man_plural,
            present_woman_singular,
            present_woman_plural,
            past_man_1st,
            past_man_plural_1st,
            past_man_plural_1st_transcription,
            past_woman_1st,
            past_man_singular_2nd,
            past_man_plural_2nd,
            past_woman_singular_2nd,
            past_woman_plural_2nd,
            past_man_singular_3nd,
            past_woman_singular_3nd,
            past_plural_3nd,
            future_man_1st,
            future_man_plural_1st,
            future_man_plural_1st_transcription,
            future_woman_1st,
            future_man_singular_2nd,
            future_man_plural_2nd,
            future_woman_singular_2nd,
            future_woman_plural_2nd,
            future_man_singular_3nd,
            future_man_plural_3nd,
            future_woman_singular_3nd,
            future_woman_plural_3nd,
            infinitive_transcription,
            imperative_man_singular_transcription,
            imperative_man_plural_transcription,
            imperative_woman_singular_transcription,
            imperative_woman_plural_transcription,
            present_man_singular_transcription,
            present_man_plural_transcription,
            present_woman_singular_transcription,
            present_woman_plural_transcription,
            past_man_1st_transcription,
            past_woman_1st_transcription,
            past_man_singular_2nd_transcription,
            past_man_plural_2nd_transcription,
            past_woman_singular_2nd_transcription,
            past_woman_plural_2nd_transcription,
            past_man_singular_3nd_transcription,
            past_woman_singular_3nd_transcription,
            past_plural_3nd_transcription,
            future_man_1st_transcription,
            future_woman_1st_transcription,
            future_man_singular_2nd_transcription,
            future_man_plural_2nd_transcription,
            future_woman_singular_2nd_transcription,
            future_woman_plural_2nd_transcription,
            future_man_singular_3nd_transcription,
            future_man_plural_3nd_transcription,
            future_woman_singular_3nd_transcription,
            future_woman_plural_3nd_transcription
        }
        return values;
    }
    nextStep = () => {
        const {step} = this.state;
        this.setState({step: step + 1})
        window.scrollTo(0, 0)
    }
    prevStep = () => {
        const {step} = this.state;
        this.setState({step: step - 1})
        window.scrollTo(0, 0)
    }
    handleChange = input => e => {
        const value = e.target.value
        this.setState({[input]: value})
    }
    validate = value => {
        if (value) {
            const regex = /[`0-9~&<>;@/[\]|{}=`]/
            return !regex.test(value)
        }
        return true
    }

    createVerb = () => {
        const state = this.state
        console.log('state', state)
    }
    renderForm = (timeTitles, type) => {
        let values = this.getInputs();
        let inputs = [];
        let titles = [];
        let icons = [];
        let config = type === 'mobile' ? formConfigMobile : formConfigDesktop;
        timeTitles.map(timeTitle => {
            let timeInputs = config.filter(input => input.time === timeTitle && input.type === 'input');
            let timeTitles = config.filter(title => title.time === timeTitle && title.type === 'title');
            let timeIcons = config.filter(icon => icon.type === 'icon');
            timeInputs.map(input => inputs.push(input));
            timeTitles.map(title => titles.push(title));
            timeIcons.map(icon => {
                let arrayIcons = icon.time[timeTitle];
                if (arrayIcons) {
                    arrayIcons.map(icon => icons.push(icon));
                }
            })
        })
        return (
            <div className={classes.FormGrid}>
                {inputs.map((input, index) => {
                    const {rowStart, rowEnd, columnStart, columnEnd, time, label, placeholder, name, iconSrc, iconAlt} = input;
                    return (
                        <div className={classes.FormGridItem} style={{
                            gridRow: `${rowStart}/${rowEnd}`,
                            gridColumn: `${columnStart}/${columnEnd}`
                        }}
                             key={index}
                        >
                            <CustomInput
                                key={index}
                                name={name}
                                inputLabel={label}
                                id={name}
                                placeholder={placeholder}
                                onChange={this.handleChange(name)}
                                value={values[name] || ''}  //state
                                isValidate={this.validate(values[name])}
                                // isValidate={this.validate}
                                // defaultValue={''}
                            />
                        </div>
                    )
                })}
                {titles.map((title, index) => {
                    const {rowStart, rowEnd, columnStart, columnEnd, name,} = title;
                    return (
                        <div className={[classes.ConjugationTitle, classes.FormGridItem].join(' ')} style={{
                            gridRow: `${rowStart}/${rowEnd}`,
                            gridColumn: `${columnStart}/${columnEnd}`
                        }}
                             key={index}
                        >{name}</div>
                    )
                })}
                {icons.map((icon, index) => {
                    const {iconSrc, alt, rowStart, rowEnd, columnStart, columnEnd} = icon;
                    return (
                        <div className={classes.FormGridItem} style={{
                            gridRow: `${rowStart}/${rowEnd}`,
                            gridColumn: `${columnStart}/${columnEnd}`
                        }}
                             key={index}
                        >
                            <img className={classes.Icon} src={iconSrc}
                                 alt={alt}
                                 key={index}/>
                        </div>
                    )
                })}
            </div>
        )

    }
    getFormMobile = () => {
        const {step} = this.state;
        switch (step) {
            case 1:
                return (
                    <FormInfinitive
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        renderForm={this.renderForm}
                    />
                );
            case 2:
                return (
                    <FormPast
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        renderForm={this.renderForm}
                    />
                );
            case 3:
                return (
                    <FormFuture
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        renderForm={this.renderForm}
                    />
                );
        }
    };
    getFormDesktop = () => {
        return (
            <FormDesktop
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                renderForm={this.renderForm}
                createVerb={this.createVerb}
                state = {this.state}
            />
        );

    };

    render() {
        let width = window.innerWidth;
        if (width < 500) {
            return (
                <Fragment>
                    <div className={classes.FormMobileContainer}>
                        <div className={classes.FormTitle}>Add Verb</div>
                        {this.getFormMobile()}
                    </div>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <div className={classes.FormContainer}>
                        {this.getFormDesktop()}
                    </div>
                </Fragment>
            )
        }

    }
}

export default FormAddVerb;