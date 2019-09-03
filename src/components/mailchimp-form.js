import React, { useState } from "react"
import Button from "./button"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { COLORS, BORDER_RADIUS, GRADIENT } from "../styles/constants"

const MailchimpForm = ({ children }) => {
  const [email, setEmail] = useState("")
  const handleEmailChange = e => {
    setEmail(e.target.value)
  }
  const handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(email, {
      "group[7987][8]": "8",
    })
    console.log(result)
  }
  return (
    <form
      style={{
        textAlign: "center",
      }}
      onSubmit={handleSubmit}
    >
      <input
        style={{
          textAlign: "center",
          padding: ".5rem 2.5rem",
          color: COLORS.lightWhite,
          fontWeight: 650,
          background: GRADIENT,
          borderRadius: BORDER_RADIUS,
          borderWidth: 0,
        }}
        placeholder="Email address"
        name="email"
        type="email"
        onChange={handleEmailChange}
      />
      <Button type="submit"> {children || "Subscribe"}</Button>
    </form>
  )
}
export default MailchimpForm
