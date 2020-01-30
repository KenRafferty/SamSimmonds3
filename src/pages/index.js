import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      <Image />
    <h1>Sam Simmonds History</h1>
    <p>After education at Sherborne School in Dorset he studied at Pembroke College, Cambridge, and St Thomas's Hospital London. From 1939 to 1941 he worked with W. Rowley Bristow at St Nicholas's Hospital Pyrford (subsequently renamed Rowley Bristow Hospital Pyrford), and when Rowley Bristow became Brigadier in charge of orthopaedic services of the British Army, he recruited Simmonds into the Royal Army Medical Corps. Lt Col Simmonds commanded base hospitals in North Africa, Sicily, France and the Far East. After the war he returned to Pyrford and worked there and at The Royal Surrey County Hospital Guildford until his retirement in 1975. His simple but effective test for rupture of the Achilles tendon was developed in 1956/57 and is still widely used today.</p>
    <p></p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
