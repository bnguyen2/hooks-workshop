import React, { Fragment } from "react"
import VisuallyHidden from "@reach/visually-hidden"
import TabsButton from "app/TabsButton"
import { FaDumbbell } from "react-icons/fa"
import { DateFields, MonthField, DayField, YearField } from "app/DateFields"

const TextInput = ({ id, label, type = "text" }) => {
  return (
    <Fragment>
      <VisuallyHidden>
        <label htmlFor={id}>{label}</label>
      </VisuallyHidden>
      <input className="inputField" id={id} type={type} placeholder={label} />
    </Fragment>
  )
}

export default function SignupForm() {
  return (
    <form className="SignupForm">
      <TextInput label="Display name" id="displayName" />
      <TextInput label="Photo URL" id="photoURL" />
      <TextInput label="Email" id="email" />
      <TextInput label="password" id="password" type="password" />
      <p>
        <span aria-hidden="true">Start:</span>{" "}
        <DateFields value={new Date()}>
          <MonthField aria-label="Start Month" /> /{" "}
          <DayField aria-label="Start Day" /> /{" "}
          <YearField start={2018} end={2019} aria-label="Start year" />
        </DateFields>
      </p>
      <TabsButton>
        <FaDumbbell />
        <span>Sign Up</span>
      </TabsButton>
    </form>
  )
}
