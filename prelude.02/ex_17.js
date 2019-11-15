module.exports = function omit(obj, ...keys) {
    let obj_clean = {};
    // for the case
    switch (typeof keys[0]) {
        // if parameters keys is string
        case 'string':
            for (const item of Object.entries(obj)) {
                for (const attr of keys[0]) {
                [key, val] = item;
                if (key !== attr)
                    obj_clean[key] = val;
                }
            }
        break;

        // if parameters keys is function
        case 'function':
            const callback = keys[0];
            for (const [key, val] of Object.entries(obj)) {
                callback(val) ? null : obj_clean[key] = val;
            }
            break;

        default:

    }
    return obj_clean;
}