
function endsWith(str='', end, psopt = str.length) {
    const ps_str = str.indexOf(end);
    
    return (ps_str !== -1 && ps_str+end.length === str.length) ? true : false;
}