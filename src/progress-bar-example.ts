import { Plan } from './lib/blueprints';

export const progressBarExamplePlan: Plan = {
  blueprint: {
    icons: [
      {
        index: 1,
        signal: {
          name: 'display-panel',
        },
      },
      {
        index: 2,
        signal: {
          type: 'item',
          name: 'automation-science-pack',
          quality: 'uncommon',
        },
      },
    ],
    entities: [
      {
        entity_number: 1,
        position: { x: 0, y: 0 },
        name: 'display-panel',
        always_show: true,
        direction: 8,
        control_behavior: {
          parameters: [
            {
              text: '[font=technology-slot-level-font][color=#ff0000][item=automation-science-pack,quality=uncommon]░░░░░░░░░░░░░░░░░░░░░░░░░░⠀[/color][/font]0%',
              icon: { name: 'automation-science-pack', quality: 'uncommon' },
              condition: {
                comparator: '≤',
                constant: 0,
                first_signal: {
                  name: 'automation-science-pack',
                  quality: 'uncommon',
                },
              },
            },
            {
              text: '[font=technology-slot-level-font][color=#ff0000][item=automation-science-pack,quality=uncommon]▎░░░░░░░░░░░░░░░░░░░░░░░░░⠀[/color][/font]1%',
              icon: { name: 'automation-science-pack', quality: 'uncommon' },
              condition: {
                comparator: '≤',
                constant: 1,
                first_signal: {
                  name: 'automation-science-pack',
                  quality: 'uncommon',
                },
              },
            },
            {
              text: '[font=technology-slot-level-font][color=#ff0000][item=automation-science-pack,quality=uncommon]▌░░░░░░░░░░░░░░░░░░░░░░░░░⠀[/color][/font]2%',
              icon: { name: 'automation-science-pack', quality: 'uncommon' },
              condition: {
                comparator: '≤',
                constant: 2,
                first_signal: {
                  name: 'automation-science-pack',
                  quality: 'uncommon',
                },
              },
            },
            {
              text: '[font=technology-slot-level-font][color=#ff0000][item=automation-science-pack,quality=uncommon]▊░░░░░░░░░░░░░░░░░░░░░░░░░⠀[/color][/font]3%',
              icon: { name: 'automation-science-pack', quality: 'uncommon' },
              condition: {
                comparator: '≤',
                constant: 3,
                first_signal: {
                  name: 'automation-science-pack',
                  quality: 'uncommon',
                },
              },
            },
            {
              text: '[font=technology-slot-level-font][color=#ff0000][item=automation-science-pack,quality=uncommon]█░░░░░░░░░░░░░░░░░░░░░░░░░⠀[/color][/font]4%',
              icon: { name: 'automation-science-pack', quality: 'uncommon' },
              condition: {
                comparator: '≤',
                constant: 4,
                first_signal: {
                  name: 'automation-science-pack',
                  quality: 'uncommon',
                },
              },
            },
            {
              text: '[font=technology-slot-level-font][color=#ff0000][item=automation-science-pack,quality=uncommon]█▎░░░░░░░░░░░░░░░░░░░░░░░░⠀[/color][/font]5%',
              icon: { name: 'automation-science-pack', quality: 'uncommon' },
              condition: {
                comparator: '≤',
                constant: 5,
                first_signal: {
                  name: 'automation-science-pack',
                  quality: 'uncommon',
                },
              },
            },
            // etc.
          ],
        },
      },
    ],
    item: 'blueprint',
    version: 0,
  },
};
