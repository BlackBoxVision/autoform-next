import React from 'react';

function renderForm(children, renderFormGroup, renderFormField) {
    let index = 0;

    return React.Children.map(children, ({ props, type: { displayName } }) => {
        const newProps = { ...props, displayName, index: index++ };

        if (newProps.children) {
            const newChildren = renderForm(newProps.children, renderFormGroup, renderFormField);

            return renderFormGroup({
                ...newProps,
                children: newChildren
            });
        }

        return renderFormField(newProps);
    });
}

export default {
    renderForm
};
