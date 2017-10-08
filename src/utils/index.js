import React from 'react';

function iterateChildren(children, onChildren, onHasChildren ) {
    let index = 0;

    return React.Children.map(children, ({ props, type: { displayName } }) => {
        const newProps = { ...props, displayName, index: index++ };

        if (newProps.children)  {
            if (onHasChildren) {
                onHasChildren(newProps.children, newProps);
            }

            return iterateChildren(newProps.children, onChildren, onHasChildren);
        }

        return onChildren(newProps);
    });
}

export default {
    iterateChildren
}