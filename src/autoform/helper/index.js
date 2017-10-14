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

export default {
    renderContent
};
