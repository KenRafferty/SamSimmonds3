import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SponsorPage = () => (
    <Layout>
      <SEO title="Sponsor" />
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <h1>Thank you to our sponsors</h1>
      <p>this could not happen except for out great sponsors.</p>
      <h2>Welcome to the Annual Sam Simonds meeting hosted by Kingston hospital NHS trust at the Kia Oval.</h2>
      <p> The below is rough outline of day</p>
        <li>Registration 9:00</li>
        <li>Free papers 9:30 -10:45</li>
        <li>Coffee and breakout session 10:45 – 11:30.</li>
        <li>Free papers   11:30 -13:00</li>
        <li>Lunch 13:00 – 14:00 with breakout session</li>
        <li>Guest lecture  14:00- 14:30</li>
        <li>Guest lecture  14:30 -15:00</li>
        <li>Update from Programme director and research 15:00 :1530.</li>
        <li>Coffee 15:30-1600</li>
        <li>Consultant meeting 16:00-17:00   and registrar quiz.</li>
        <li>Dinner 19:00</li>
    </Layout>
  )
  
  export default SponsorPage