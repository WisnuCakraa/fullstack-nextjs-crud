export const cleanObject = (object) => {
    Object
        .entries(object)
        .forEach(([k, v]) => {
            if (v && typeof v === 'object' && !Object.keys(v).length
                || v === null
                || v === undefined
                || v === ''
            ) {
                if (Array.isArray(object)) {
                    object.splice(k, 1);
                } else {
                    delete object[k];
                }
            }
        });
    return object;
}