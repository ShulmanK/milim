import React from "react"
import classes from "./VerbCard.module.scss"
import formConfigurationMobile from '../../../WordForms/verbCardMobile'
import {values} from './verbExample'
import FormInput from '../../../UI/FormElements/FormInput/FormInput'

console.log('formConfigurationMobile', formConfigurationMobile)
console.log('verbExample', values)
const VerbCard = (props) => {

  const { verb } = props
  const inputs = formConfigurationMobile
  const icons = inputs.filter(input => input.type === 'icon')
  console.log('icons', icons)  
  return (
    <div className={classes.VerbCard}>
      <span className={classes.title}>to go</span>
      <div className={classes.infinitive}>Lalehet</div>
      <div className={classes.grid}>
        {inputs.map((input, index) => {
          const {
            rowStart,
            rowEnd,
            columnStart,
            columnEnd,
            time,
            label,
            placeholder,
            name,
            iconSrc,
            iconAlt,
          } = input
          return (
            <div
              className={classes.gridItem}
              style={{
                gridRow: `${rowStart}/${rowEnd}`,
                gridColumn: `${columnStart}/${columnEnd}`,
              }}
              key={index}
            >
              {/* <FormInput
                key={index}
                name={name}
                inputLabel={label}
                id={name}
                placeholder={placeholder}
                // onChange={this.handleChange(name)}
                value={values[name] || ""} //state
                isValidate={true}
                // isValidate={this.validate}
                // defaultValue={''}
              /> */}
               
              {values[name] || ""}
            </div>
          )
        })}
        {/* {titles.map((title, index) => {
          const { rowStart, rowEnd, columnStart, columnEnd, name } = title
          return (
            <div
              className={[classes.ConjugationTitle, classes.FormGridItem].join(
                " "
              )}
              style={{
                gridRow: `${rowStart}/${rowEnd}`,
                gridColumn: `${columnStart}/${columnEnd}`,
              }}
              key={index}
            >
              {name}
            </div>
          )
        })} */}
        {icons.map((icon, index) => {
          const {
            iconSrc,
            alt,
            rowStart,
            rowEnd,
            columnStart,
            columnEnd,
          } = icon
          return (
            <div
              className={classes.grid}
              style={{
                gridRow: `${rowStart}/${rowEnd}`,
                gridColumn: `${columnStart}/${columnEnd}`,
              }}
              key={index}
            >
              <img
                className={classes.Icon}
                src={iconSrc}
                alt={alt}
                key={index}
              />
            </div>
          )
        })}
      </div>
      </div>
  )
}

export default VerbCard

{
  /* <div className={classes.FormGridItem} style={{
        gridRow: `${rowStart}/${rowEnd}`,
        gridColumn: `${columnStart}/${columnEnd}`
    }}
         key={index}
    > */
}

{
  /* <img className={classes.Icon} src={iconSrc}
                                 alt={alt}
                                 key={index}/> */
}

//  .Icon {
//         width: 15px;
//         height: 15px;
//         display: flex;
//         justify-content: center;
//         align-items: center;

//       }
