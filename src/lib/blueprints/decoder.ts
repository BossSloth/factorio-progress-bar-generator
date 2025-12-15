import { Buffer } from 'buffer';
import { inflate } from 'pako';
import { Plan } from './plan';

export const decodePlan = (str: string): Plan => {
  if (!str.startsWith('0')) throw new Error('wrong blueprint string format (can only handle version 0)');
  try {
    return JSON.parse(inflate(Buffer.from(str.slice(1), 'base64'), { to: 'string' })) as Plan;
  } catch (e) {
    throw new Error(e as string, { cause: e });
  }
};
