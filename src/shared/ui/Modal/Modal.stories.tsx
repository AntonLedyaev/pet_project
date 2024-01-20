import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
    isOpen: true,
    children: 'bibaibaibiabiab iaibaibiabia ibaibaibaibaiba ibiaib iabiiab iaibaibaiab iiabiabiabib',
};
