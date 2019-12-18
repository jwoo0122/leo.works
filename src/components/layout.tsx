import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import styles from "./layout.module.scss"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <>
      {/* <Header /> */}
      <div className={styles.rootContainer}>
        <main>{children}</main>
        <div className={styles.footerContainer}>
          © Leo jeong, 2020
        </div>
      </div>
    </>
  )
}
