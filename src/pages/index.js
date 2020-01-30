import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> <Image /></div>
    <h1>Sam Simmonds History</h1>
    <p>After education at Sherborne School in Dorset he studied at Pembroke College, Cambridge, and St Thomas's Hospital London. From 1939 to 1941 he worked with W. Rowley Bristow at St Nicholas's Hospital Pyrford (subsequently renamed Rowley Bristow Hospital Pyrford), and when Rowley Bristow became Brigadier in charge of orthopaedic services of the British Army, he recruited Simmonds into the Royal Army Medical Corps. Lt Col Simmonds commanded base hospitals in North Africa, Sicily, France and the Far East. After the war he returned to Pyrford and worked there and at The Royal Surrey County Hospital Guildford until his retirement in 1975. His simple but effective test for rupture of the Achilles tendon was developed in 1956/57 and is still widely used today.</p>
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

export default IndexPage
