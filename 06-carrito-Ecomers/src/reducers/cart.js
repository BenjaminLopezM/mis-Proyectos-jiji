export const cartInitialState = []

export const cartReducer = (state, action) => {
    const { type: actionType, payload:actionPayLoad } = action

switch (actionType){
    case 'ADD_TO_CART': {
        const { id } = actionPayLoad
        const productInCartIndex = state.findIndex(item => item.id === id)

        if(productInCartIndex >= 0) {
            const newState = structuredClone(state)
            newState[productInCartIndex].quantity +=  1
            
            return newState
        }

        return [
            ...state,
            {
                ...actionPayLoad,
                quantity: 1
            }
        ]

    }
    case 'REMOVE_FROM_CART': {
        const { id } = actionPayLoad
        return state.filter(item => item.id !== id)
    }

    case 'CLEAR_CART': {
        return initialState
    }
  }
    
  return state

}




