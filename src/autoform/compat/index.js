const mapToChildren = schema => schema.map(props => {
    if (props.hasOwnProperty('children')) {
        return {
            props: {
                ...props,
                children: mapToChildren(props.children)
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
    mapToChildren
};