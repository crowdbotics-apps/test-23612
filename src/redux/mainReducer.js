import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp16189232Reducer from '../features/SignUp16189232/redux/reducers'
import SignIn47189231Reducer from '../features/SignIn47189231/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp16189232: SignUp16189232Reducer,
SignIn47189231: SignIn47189231Reducer,

});