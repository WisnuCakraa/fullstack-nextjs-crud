export const responseSuccess = (action, data) => {
    return {
        ...data,
        callback: action?.payload?.callback,
        error: false
    }
}

export const responseError = (action, data) => {
    return {
        ...data,
        callback: action?.payload?.callback,
        error: true
    }
}