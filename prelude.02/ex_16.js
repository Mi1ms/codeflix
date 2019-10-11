module.exports = function pick(obj, ...keys) {
    let obj_clean = {};
    switch (typeof keys[0]) {
        case 'string':
            console.log('str')
            for (const item of keys) {
                console.log(keys)
                if (obj.hasOwnProperty(item) )
                    obj_clean[item] = keys[item]
            }
            break;

        case 'function':
            const callback = keys[0];
            console.log()
            for (const [key, val] of Object.entries(obj)) {
                callback(val) ? obj_clean[key] = val : null;
            }
            break;

        default:

    }
    return obj_clean;
}