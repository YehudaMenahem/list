import Button from "../Button";

export default {
    title: 'Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size: { 
            control: { type: 'select'},
            options: ['small', 'medium', 'large'] 
        },
        backgroundColor: { control: 'color' },
    },
};

export const Small = {
    args: {
        label: 'small Button',
        size: 'small',
    },
}

export const Medium = {
    args: {
        label: 'small Button',
        size: 'medium',
    },
}