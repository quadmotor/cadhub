export const IdeReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CODE':
      return { ...state, currCode: action.payload }
    case 'SET_CAD_PACKAGE':
      return { ...state, currCadPackage: action.payload }
  }
}