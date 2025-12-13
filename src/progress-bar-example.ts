import { Plan } from "./lib/blueprints";

export const progressBarExamplePlan: Plan = {
  blueprint: {
    icons: [
      {
        index: 0,
        signal: {
          name: 'display-panel'
        }
      },
      {
        index: 0,
        signal: {
          type: 'item',
          name: 'military-science-pack'
        }
      }
    ],
    entities: [
      {
        entity_number: 0,
        position: { x: 0, y: 0 },
        name: 'display-panel',
        always_on: true,
        direction: 8,
        control_behavior: {
          // TODO
        }
      }
    ],
    item: 'blueprint',
    version: 0,
  }
}