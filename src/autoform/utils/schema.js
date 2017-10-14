import Utils from '../utils';

function canonizeSchema(schema) {
    if (!schema) {
        throw Error(`'schema' should be truthy`);
    }
    
    if(!schema.hasOwnProperty('entities')) {
        return canonizeSchema({
            entities: [{
                name: 'default',
                fields: schema
            }]
        });
    }
    
    return _canonizeAsArray({ ...schema }, ['entities', 'layouts', 'groups']);
}
    
function _canonizeAsArray(array, keys, id = 0) {
    array[keys[id]] = _canonizeArray(array[keys[id]]);
        
    if (array[keys[id]]) {
        array[keys[id]].forEach(elem => {
            elem.fields = _canonizeArray(elem.fields);
                
            if (id + 1 < keys.length) {
                _canonizeAsArray(elem, keys, id + 1);
            }
        })
    }

    return array;
}
    
function _canonizeArray(obj) {
    if (!obj) {
        return obj;
    }
     
    if (Array.isArray(obj)) {
        return obj;
    }
        
    // let's create an array
    return Utils.objectToArray(obj, property => {
        let isObject = obj[property] && typeof obj[property] === "object";
                    
        if (!isObject) {
            throw Error('cannot generate canonical array. Every field should be an object');
        }
            
        return {
            ...obj[property],
            name: property 
        };
    });
}

export default {
    canonizeSchema
};