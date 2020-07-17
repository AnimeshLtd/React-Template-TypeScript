// @flow

import * as React from "react"

import "./app.css"

type Props = {
  image: {
    heightPx: number,
    /** Either absolute or relative to the `<project_root>/public` directory */
    url: string
  },
  message: string
}

export default class App extends React.Component<Props> {
  render() {
    return (
      <div className="App">
        <h1>{this.props.message}</h1>
        <img src={this.props.image.url} height={this.props.image.heightPx + "px"}></img>
      </div>
    )
  }
}
