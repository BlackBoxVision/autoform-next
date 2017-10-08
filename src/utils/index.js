import React from 'react';

export default function iterateChildren(children, onChildren, onHasChildren ) {
    return React.Children.map(children, ({ props, type: { displayName } }) => {
        const newProps = { ...props, displayName };

        if (newProps.children)  {
            if (onHasChildren) {
                onHasChildren(newProps.children, newProps);
            }

            return iterateChildren(newProps.children, onChildren, onHasChildren);
        }

        return onChildren(newProps);
    });
};