const Component = {
    GROUP: 'FormGroup',
    FIELD: 'FormField',
    SUBMIT: 'FormSubmit'
};

const getChildren = (children, renderGroup, renderField) => children.map((element, index) => {
    const { props, type } = element;

    if (type.hasOwnProperty("displayName")) {
        switch (type.displayName) {
            case Component.GROUP: 
                const groupProps = {
                    ...props,
                    displayName: type.displayName,
                    children: getChildren(props.children, renderGroup, renderField)
                };

                return renderGroup(groupProps, index);
            case Component.FIELD:
            case Component.SUBMIT:
                const fieldProps = {
                    ...props,
                    displayName: type.displayName
                };

                return renderField(fieldProps, index);
            default: 
                return element;
        }
    }

    return element;
});

export default {
    getChildren
};
