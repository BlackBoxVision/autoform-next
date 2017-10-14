function renderContent(children, renderFormGroup, renderFormField) {
    return children.map((element, index) => {
        const { props, type } = element;

        if (props.hasOwnProperty('children')) {
            const formGroupProps = {
                ...props,
                displayName: type.displayName,
                children: renderContent(props.children, renderFormGroup, renderFormField)
            };

            return renderFormGroup(formGroupProps, index);
        } else {
            const formFieldProps = {
                ...props,
                displayName: type.displayName
            };

            return renderFormField(formFieldProps, index);
        }
    });
}

function renderContentLegacy(schema, renderFormGroup, renderFormField) {
    //TODO map schema to data needed
    const children = mapOldSchemaToChildren(schema);

    return children.map((props, index) => {
        if (props.hasOwnProperty('children')) {
            const formGroupProps = {
                ...props,
                displayName: 'FormGroup',
                children: renderContentLegacy(props.children, renderFormGroup, renderFormField)
            };

            return renderFormGroup(formGroupProps, index);
        } else {
            const formFieldProps = {
                ...props,
                displayName: 'FormField'
            };
            
            return renderFormField(formFieldProps, index);
        }
    });
}

//TODO 
const mapOldSchemaToChildren = schema => schema;

export default {
    renderContent,
    renderContentLegacy
};
