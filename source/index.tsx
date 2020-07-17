import * as React from "react"
import * as ReactDOM from "react-dom"

import { App } from "./components"

ReactDOM.render(
  <App
    image={{
      url: "./images/copyleft.png",
      heightPx: 40
    }}
    message="Hello, React!"
  />,
  document.getElementById("root")
)
