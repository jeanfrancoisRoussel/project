export const reducer = (state: any, action: any) => {
  // eslint-disable-next-line sonarjs/max-switch-cases, sonarjs/no-small-switch
  switch (action.type) {
    case "SET_CHANGE_REPARTITION":
      return {
        ...state,
        subscriptionProperties: {
          ...state.subscriptionProperties,
          changeRepartition: action.payload,
        },
      }
    default:
      return state
  }
}

export default reducer
