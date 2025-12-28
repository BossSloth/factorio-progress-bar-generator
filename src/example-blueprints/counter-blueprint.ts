import { Blueprint, decodePlan } from '@/lib/blueprints';
import { Item } from '@/lib/generated/inventory-data';

const counterPlan: Blueprint = decodePlan('0eNrl3c+OokgAx/FXmdRmb9gDFH9N+jovYYxBrJ4mg+Ai9ozpmOxhL/sWm4zhEeDIu8yTbIHdnZkabUV/HKqYdDL+wQI+kkp/tcVnMo83bJVFSU7GzyQK02RNxpNnso4+J0Hc3JYES0bGZMHCaMGyUZgu51ES5GlGdhqJkgX7RsbGTjvykGawPEjy448xd1ONsCSP8ogd1tle2c6SzXLOMj6o9rbuaL2Kg+1oFSQsJhpZpWv+qDRp1sVH0u9sjWzb//nwiyhj4eFeT2u2Ic/SeDZnj8FTxDeAP2QVZHzcnGWH1fJFFm/DPUTZOp/9tivBJk+XQbPQaB1GLAkZ35jwS7M7r3vJ199cWTajN3s6Jj/+3bf7Gx6GPj9Uzr7xYcjkgW/0fc7CxySN08/b0TpO81HMnlg8au6aTkJ+e3b/x6dPOv83nUQ5W96fGFf7axPEnPU+SbNlEE8//Pjvb+zP5GO7OdPJx3bjPuh/kuZwgLEacrB+3/fKaoBVTUlUy15VTbAqlUS16lWVglUtSVTrH9//6U/VAqva8qju+1O1waqOPKplf6oOWNWVR7XqT9UFq3ryqCKnVkHVA6v6UqkWPan66ArQpWIt+8oAeF0ZUrnWfbmi+8owJXMFza+iK7qwDCqba9GLK7qxDEs217IXV3RlGbZsrnUvrujOMhz5XBFTrOiKLi3DldC1wLuiW8vwJHSt8K7o2jJ8CV1rvCu6t0xdStebXyoU3yBA95ZpyOlagF3h72eZcrpWYFd0b5lUTtca7IruLdOS1fW2KVZ0RfeWaUvrWiBd0b1lOtK6VkhXdG+ZrrSuNwWt6IruLdOT2XUPc0X3lunL7FrCXNG9RXWZXSvYnw6he4saMrteP8WKrujeoqbkrnuMK/wvCKnkriXGFd1b1JLctca4onuL2tK7XjXFiq7o3qKO/K4FwBXdW9SV37UEuKJ7i3ryu9YAV3RvUV8F1+5TrOiK7i1LV8K1uPVDBejesgwlXMtbXdG9ZZlKuNa3uqJ7y6KKuHYMWtEV/pktSxXX4iZXdG9Ztiqu1U2u6N6yHFVc65tc0b1lueq4dpliRVd0b1meQq7F9a7o3rJ8hVyr613RvWUbCrl2mArEjxuju8A21XItr3RFd4FN1XKtrnRFd4FtqeV66Wtboiv8bA62cq77a1zRXWA7yrmW17iiu8B2lXOtrnFFd4HtKed60RQruqK7wPZVdC06u6K7wNFVdC07nzAH/T6MY6joWnd2RfeWY6rpem6KFV3RveVQRV2Lbq7o3nIsRV3Lbq7o3nJsRV3rbq7w8+c5yrq+O8WKrujeclx1XYsOrujecjx1XasOrujecnx1XesOrujecnWVXU+/ZiieShPdW66htGtxqSu6t1xTadfqUld0b7lUadf6Uld0b7mW4q4npljRFd1brq26a3GRK7q3XEd11+oiV/gZy13VXY8HreiK7i3XG4Dr/rwrurdcfwCu5XlXdG95+gBcq/Mn2Uf3lmcMwPXIFCu6onvLM4fhuj/jiu4tjw7DtTzjiu4tzxqGa33GFd1bnj0U11+nWNEV3VueMxjX4j1XdG957mBcy/dc4d8R5Q3GtX7PFd1bnj8g15+mWNEV3Vu+PiTX4uTXb6F7yzeG5FqedEX3lm8OybU+6YruLZ8Oy/U1aEVXdG/51sBci+Ou6N7y7YG5Vsdd0b3lOwNzrY+7onvLdwfn2k6xoiu6t3xveK7FEVf4t/L6w3Otjrjiv5dXHx5sfeyLeZvimvLdCeKvwXY9Wz+mX8k4zzas8WZJzrdmlmyWc8aR+C/9Ly6vkiNuOI+S1lAjq3T99ux8I2N6x3872JKxfmfzFSyijIWHew/fMpvkWRrP5uwxeIqap+CZrA8LrH+9PHkmUbJgfEAecw9RnLNMvPXMs6WRF1e+zEGWCM/+fXvDpj00OMd0tzuy+/RtRQsWRguWvbv3Zrd9fxly9naItwo/X5v8fsjn21WzOU9Rlm/anXrZvsMSIxaEj78d97upRtJNvtrkhzE7jtba8CG+8l1qBpgYmqFRjU61idleMvgl+nIbX6453PkY83jDVlnEt0EjT/wJbC1sx/Qt37c9g/q+bu12/wMkw9Et') as Blueprint;

export function getCounterPlan(item: Item): Blueprint['blueprint'] {
  const counterPlanBlueprint = { ...counterPlan.blueprint };
  // Remove existing display panel from blueprint
  counterPlanBlueprint.entities = counterPlanBlueprint.entities?.slice(1, 3);

  const entities = counterPlanBlueprint.entities;
  if (!entities) {
    throw new Error('Entities not found');
  }

  // Set the constant combinator's item to the display panels item
  const constantCombinatorItem = entities[0]?.control_behavior?.sections?.sections[0]?.filters?.[0];
  if (!constantCombinatorItem) {
    throw new Error('Constant combinator item not found');
  }

  constantCombinatorItem.name = item.internalName;
  constantCombinatorItem.quality = item.quality;

  return counterPlanBlueprint;
}
