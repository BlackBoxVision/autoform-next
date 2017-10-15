export default class CompatHelper {
    //TODO Add functionality, and append submit to schema
    //Call outside of mapToChildren 
    static asReactChildren = schema => {
        return CompatHelper._toChildren(schema);
    };

    static _toChildren(schema) {
        return schema.map(props => {
            if (props.hasOwnProperty('children')) {
                return {
                    props: {
                        ...props,
                        children: CompatHelper._toChildren(props.children)
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
    }
}
