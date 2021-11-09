import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { LaunchComponent } from './launch.component';

export default {
  title: 'LaunchComponent',
  component: LaunchComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<LaunchComponent>;

const Template: Story<LaunchComponent> = (args: LaunchComponent) => ({
  component: LaunchComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}