import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from './index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="leo.works" />
    <div className={styles.titleContainer}>
      Leo Jeong
    </div>
    <div>

    </div>
  </Layout>
)

export default IndexPage
