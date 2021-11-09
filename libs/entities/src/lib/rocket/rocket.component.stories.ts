import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { RocketComponent } from './rocket.component';

export default {
  title: 'RocketComponent',
  component: RocketComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<RocketComponent>;

const Template: Story<RocketComponent> = (args: RocketComponent) => ({
  component: RocketComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}