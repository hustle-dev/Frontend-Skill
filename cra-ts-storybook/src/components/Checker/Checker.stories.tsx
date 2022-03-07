import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checker from './Chekcer';

export default {
  title: 'Checker',
  component: Checker,
} as ComponentMeta<typeof Checker>;

const Template: ComponentStory<typeof Checker> = (args) => <Checker {...args} />;

export const Default = Template.bind({});

Default.storyName = 'Un Checked';

export const Checked = Template.bind({});

Checked.args = {
  checked: true,
};
