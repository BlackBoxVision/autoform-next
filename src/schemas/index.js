const contactSchema = [
    {
        name: 'awesome-group.0',
        component: 'Group',
        children: [
            {
                name: 'someInput.0',
                label: 'someInput',
                placeholder: 'Some Input',
                col: 12
            }
        ]
    },
    {
        name: 'awesome-group.1',
        component: 'Group',
        children: [
            {
                name: 'someInput.1',
                label: 'someInput',
                placeholder: 'Some Input',
                component: 'TextInput',
                col: 12
            }
        ]
    },
    {
        name: 'someInput.2',
        label: 'someInput',
        placeholder: 'Some Input',
        component: 'TextInput'
    }
];