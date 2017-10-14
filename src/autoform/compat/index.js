//TODO Add functionality, and append submit to schema
//Call outside of mapToChildren 
const mapSchemaAsChildren = schema => {
    return toChildren(schema);
};

const toChildren = schema => schema.map(props => {
    if (props.hasOwnProperty('children')) {
        return {
            props: {
                ...props,
                children: toChildren(props.children)
            },
            type: {
                displayName: 'FormGroup'
            }
        };
    } else {
        return {
            props,
            type: {
                displayName: 'FormField'
            }
        };
    }
});

export default {
    mapSchemaAsChildren
};