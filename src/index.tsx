import React from "react"
import ReactDOM from "react-dom"
import "./styles"

function App() {
  return (
    <div className="flex justify-center pt-10">
      Hello, World!
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
)