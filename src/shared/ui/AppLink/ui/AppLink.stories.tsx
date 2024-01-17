import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {

    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = { theme: AppLinkTheme.PRIMARY, children: 'AppLink', to: '/' };

export const Secondary = Template.bind({});
Secondary.args = { theme: AppLinkTheme.SECONDARY, children: 'AppLink', to: '/' };

export const PrimaryDark = Template.bind({});
PrimaryDark.args = { theme: AppLinkTheme.PRIMARY, children: 'AppLink', to: '/' };
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = { theme: AppLinkTheme.SECONDARY, children: 'AppLink', to: '/' };
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
