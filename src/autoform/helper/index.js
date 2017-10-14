import React from 'react';

function renderFormContent(children, renderFormGroup, renderFormField) {
    let index = 0;

    return React.Children.map(children, ({ props, type: { displayName } }) => {
        const newProps = { ...props, displayName, index: index++ };

        if (newProps.children) {
            const newChildren = renderFormContent(newProps.children, renderFormGroup, renderFormField);

            return renderFormGroup({
                ...newProps,
                children: newChildren
            });
        }

        return renderFormField(newProps);
    });
}

function renderFormContentLegacy(schema, renderFormGroup, renderFormField) {
    let index = 0;

    return React.Children.map(schema, ({ props, type: { displayName } }) => {
        const newProps = { ...props, displayName, index: index++ };

        if (newProps.children) {
            const newChildren = renderFormContentLegacy(newProps.children, renderFormGroup, renderFormField);

            return renderFormGroup({
                ...newProps,
                children: newChildren
            });
        }

        return renderFormField(newProps);
    });
}

export default {
    renderFormContent,
    renderFormContentLegacy
};
