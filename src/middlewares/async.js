export default function({ dispatch }) {
  return next => action => {
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    
    action.payload
      .then(response => {
        // Creates a new action and dispatch the action to the top again.
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      });
  }; 
}