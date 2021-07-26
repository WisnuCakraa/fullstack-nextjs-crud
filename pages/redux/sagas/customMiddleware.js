export const sagaMiddlewareWithCallback = store => next => action => {
    if (action?.type?.includes('SUCCESS')) {
        if (action?.payload?.callback) {
            action?.payload?.callback(action.payload, false)
        }
    } else if (action?.type?.includes('ERROR')) {
        if (action?.payload?.callback) {
            action?.payload?.callback(action.payload, true)
        }
    }
    next(action);
}