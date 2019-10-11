module.exports = function isObject(arg) {
    return (typeof arg === 'object') && !Array.isArray(arg);
}