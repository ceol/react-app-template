import * as React from "react"
import * as ReactDOM from "react-dom"
import Layout from "./layout"
import "./styles"

function App() {
  return (
    <Layout>
      Hello, World!
    </Layout>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)