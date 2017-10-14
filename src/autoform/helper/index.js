function renderContent(children, renderFormGroup, renderFormField) {
    return children.map(({ props, type }, index) => {
        if (props.hasOwnProperty('children')) {
            return renderFormGroup({
                ...props,
                index,
                displayName: type.displayName,
                children: renderContent(props.children, renderFormGroup, renderFormField)
            });
        }

        return renderFormField({ 
            ...props, 
            index,
            displayName: type.displayName
        });
    });
}

 //TODO map schema to data needed
function renderContentLegacy(schema, renderFormGroup, renderFormField) {
    return schema.map((props, index) => {
        if (props.hasOwnProperty('children')) {
            return renderFormGroup({
                ...props,
                index,
                displayName: 'FormGroup',
                children: renderContentLegacy(props.children, renderFormGroup, renderFormField)
            });
        }
        
        return renderFormField({
            ...props,
            index,
            displayName: 'FormField'
        });
    });
}

export default {
    renderContent,
    renderContentLegacy
};
