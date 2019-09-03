import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Minimal Features"
      description="Don't spend time worring about a thousand features your company wont use!"
    />
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>What you need to be successful</h3>
        <p style={{ color: COLORS.gray }}>
          Pool Master gives your company the tools you need. No matter if you
          are solo or have a large number of employees. Pick the features you
          need and the ones you don't.
        </p>
        <ul style={{ color: COLORS.gray }}>
          <li>Track clients chem levels and stats </li>
          <li>
            Communicate through the app so clients don't get your technictions
            personal information
          </li>
          <li>Clients get notified when their pool is cleaned with a report</li>
          <li>More to come!</li>
        </ul>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
