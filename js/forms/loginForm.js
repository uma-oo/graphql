export const loginForm = {
    elements: [
        {
            tag: 'input',
            label: 'NickName Or Email:',
            attributes: {
                required: 'true',
                type: 'text',
                id: 'login',
                name: 'login',
                placeholder: "Enter NickName or Email...",
            },
            style: {
                width: '100%'
            }
        },
        {
            tag: 'input',
            label: 'Password:',
            attributes: {
                required: 'true',
                type: 'password',
                id: 'password',
                name: 'password',
                placeholder: "Enter Your Password...",
            },
            style: {
                width: '100%'
            }
        },
    ],
    buttons: [
        {
            type: 'submit',
            content: {
                text: 'Log In',
            },
            style: 'primary-btn'
        },
        {
            type: 'reset',
            content: {
                text: "Reset",
            },
            style: 'secondary-btn'
        }
    ]
}
