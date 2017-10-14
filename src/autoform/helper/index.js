function getChildren(children, renderFormGroup, renderFormField) {
    return children.map((element, index) => {
        const { props, type } = element;

        if (type.hasOwnProperty("displayName")) {
            switch (type.displayName) {
                case "FormGroup": 
                    const formGroupProps = {
                        ...props,
                        displayName: type.displayName,
                        children: getChildren(props.children, renderFormGroup, renderFormField)
                    };

                    return renderFormGroup(formGroupProps, index);
                case "FormField":
                case "FormSubmit":
                    const formFieldProps = {
                        ...props,
                        displayName: type.displayName
                    };

                    return renderFormField(formFieldProps, index);
                default: 
                    return element;
            }
        }

        return element;
    });
}

export default {
    getChildren
};
