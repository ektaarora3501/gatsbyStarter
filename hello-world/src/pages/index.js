import React from "react"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <>
      <h1 style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        {data.site.siteMetaData.title}
      </h1>
      <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
        {" "}
        Hey Everyone!!! This is how a cool developer starts working on gatsby{" "}
        {":)"}
      </div>
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetaData {
        title
      }
    }
  }
`
