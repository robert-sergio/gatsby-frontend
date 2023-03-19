import * as React from "react"
import About from "./about"
import Python from "./projects/python"
import Iot from "./projects/iot"

const IndexPage = () => {
  return (
    <section>
      <About />
      <Python />
      <Iot />
    </section>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
