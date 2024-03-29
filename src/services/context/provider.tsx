"use client"

import { Component } from "react"

import { Context } from "./context"
import { initialState } from "./initialState"
import { reducer } from "./reducers"

type ProviderProps = {
  children: React.ReactNode
}

export class Provider extends Component<ProviderProps> {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    ...initialState,
    /* @ts-expect-error TS7006 */
    // eslint-disable-next-line
    dispatch: action => {
      this.setState(state => reducer(state, action))
    },
  }

  render() {
    const { children } = this.props
    return <Context.Provider value={this.state}>{children}</Context.Provider>
  }
}

export default Provider
