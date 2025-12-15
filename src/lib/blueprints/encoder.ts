import { Buffer } from 'buffer';
import { deflate } from 'pako';
import { Plan } from './plan';

export const encodePlan = (plan: Plan): string => {
  return `0${Buffer.from(deflate(JSON.stringify(plan), { level: 9 })).toString('base64')}`;
};
