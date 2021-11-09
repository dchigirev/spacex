import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { CrewComponent } from './crew.component';

export default {
  title: 'CrewComponent',
  component: CrewComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<CrewComponent>;

const Template: Story<CrewComponent> = (args: CrewComponent) => ({
  component: CrewComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}