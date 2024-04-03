import React from 'react'

import { Consumer } from './consumer'

/* @ts-expect-error TS7006 */
const withContext = WrappedComponent => props => (
  <Consumer>
    {values => <WrappedComponent {...props} context={values} />}
  </Consumer>
)

export default withContext
