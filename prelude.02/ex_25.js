module.exports = function isMatch(obj, properties) {
    [property_name, property_value] = Object.entries(properties);
    let filter_obj = Object.entries(obj).filter((elem, key) => {
        const [property, val] = elem;
        return property == property_name && val === property_value;
    })
    return filter_obj.length > 0;
}