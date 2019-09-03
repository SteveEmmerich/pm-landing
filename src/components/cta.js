import React from "react"

import MailchimpForm from "../components/mailchimp-form"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Stay Updated"
      description="Join our mailing list to find out more and get early access for free!!"
    />
    <MailchimpForm>Get Early Access</MailchimpForm>
  </div>
)

export default CallToAction
