export interface InventoryItem {
  title: string;
  internalName: string | null;
  href: string;
  imgSrc: string;
  imgSrcset: string[];
}

export interface InventoryRow {
  items: (InventoryItem | null)[];
}

export interface InventoryTab {
  name: string;
  iconSrc: string;
  iconSrcset: string[];
  rows: InventoryRow[];
}

export interface InventoryData {
  tabs: InventoryTab[];
}

export const inventoryData: InventoryData = {
  "tabs": [
    {
      "name": "Logistics",
      "iconSrc": "https://wiki.factorio.com/images/thumb/Item-group_logistics.png/64px-Item-group_logistics.png",
      "iconSrcset": [
        "https://wiki.factorio.com/images/thumb/Item-group_logistics.png/96px-Item-group_logistics.png",
        "https://wiki.factorio.com/images/Item-group_logistics.png"
      ],
      "rows": [
        {
          "items": [
            {
              "title": "Wooden chest",
              "internalName": "wooden-chest",
              "href": "https://wiki.factorio.com/Wooden_chest",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Wooden_chest.png/32px-Wooden_chest.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Wooden_chest.png/48px-Wooden_chest.png",
                "https://wiki.factorio.com/images/Wooden_chest.png"
              ]
            },
            {
              "title": "Iron chest",
              "internalName": "iron-chest",
              "href": "https://wiki.factorio.com/Iron_chest",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Iron_chest.png/32px-Iron_chest.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Iron_chest.png/48px-Iron_chest.png",
                "https://wiki.factorio.com/images/Iron_chest.png"
              ]
            },
            {
              "title": "Steel chest",
              "internalName": "steel-chest",
              "href": "https://wiki.factorio.com/Steel_chest",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Steel_chest.png/32px-Steel_chest.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Steel_chest.png/48px-Steel_chest.png",
                "https://wiki.factorio.com/images/Steel_chest.png"
              ]
            },
            {
              "title": "Storage tank",
              "internalName": "storage-tank",
              "href": "https://wiki.factorio.com/Storage_tank",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Storage_tank.png/32px-Storage_tank.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Storage_tank.png/48px-Storage_tank.png",
                "https://wiki.factorio.com/images/Storage_tank.png"
              ]
            },
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Transport belt",
              "internalName": "transport-belt",
              "href": "https://wiki.factorio.com/Transport_belt",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Transport_belt.png/32px-Transport_belt.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Transport_belt.png/48px-Transport_belt.png",
                "https://wiki.factorio.com/images/Transport_belt.png"
              ]
            },
            {
              "title": "Fast transport belt",
              "internalName": "fast-transport-belt",
              "href": "https://wiki.factorio.com/Fast_transport_belt",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fast_transport_belt.png/32px-Fast_transport_belt.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Fast_transport_belt.png/48px-Fast_transport_belt.png",
                "https://wiki.factorio.com/images/Fast_transport_belt.png"
              ]
            },
            {
              "title": "Express transport belt",
              "internalName": "express-transport-belt",
              "href": "https://wiki.factorio.com/Express_transport_belt",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Express_transport_belt.png/32px-Express_transport_belt.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Express_transport_belt.png/48px-Express_transport_belt.png",
                "https://wiki.factorio.com/images/Express_transport_belt.png"
              ]
            },
            {
              "title": "Turbo transport belt",
              "internalName": "turbo-transport-belt",
              "href": "https://wiki.factorio.com/Turbo_transport_belt",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Turbo_transport_belt.png/32px-Turbo_transport_belt.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Turbo_transport_belt.png/48px-Turbo_transport_belt.png",
                "https://wiki.factorio.com/images/Turbo_transport_belt.png"
              ]
            },
            {
              "title": "Underground belt",
              "internalName": "underground-belt",
              "href": "https://wiki.factorio.com/Underground_belt",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Underground_belt.png/32px-Underground_belt.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Underground_belt.png/48px-Underground_belt.png",
                "https://wiki.factorio.com/images/Underground_belt.png"
              ]
            },
            {
              "title": "Fast underground belt",
              "internalName": "fast-underground-belt",
              "href": "https://wiki.factorio.com/Fast_underground_belt",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fast_underground_belt.png/32px-Fast_underground_belt.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Fast_underground_belt.png/48px-Fast_underground_belt.png",
                "https://wiki.factorio.com/images/Fast_underground_belt.png"
              ]
            },
            {
              "title": "Express underground belt",
              "internalName": "express-underground-belt",
              "href": "https://wiki.factorio.com/Express_underground_belt",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Express_underground_belt.png/32px-Express_underground_belt.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Express_underground_belt.png/48px-Express_underground_belt.png",
                "https://wiki.factorio.com/images/Express_underground_belt.png"
              ]
            },
            {
              "title": "Turbo underground belt",
              "internalName": "turbo-underground-belt",
              "href": "https://wiki.factorio.com/Turbo_underground_belt",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Turbo_underground_belt.png/32px-Turbo_underground_belt.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Turbo_underground_belt.png/48px-Turbo_underground_belt.png",
                "https://wiki.factorio.com/images/Turbo_underground_belt.png"
              ]
            },
            {
              "title": "Splitter",
              "internalName": "splitter",
              "href": "https://wiki.factorio.com/Splitter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Splitter.png/32px-Splitter.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Splitter.png/48px-Splitter.png",
                "https://wiki.factorio.com/images/Splitter.png"
              ]
            },
            {
              "title": "Fast splitter",
              "internalName": "fast-splitter",
              "href": "https://wiki.factorio.com/Fast_splitter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fast_splitter.png/32px-Fast_splitter.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Fast_splitter.png/48px-Fast_splitter.png",
                "https://wiki.factorio.com/images/Fast_splitter.png"
              ]
            },
            {
              "title": "Express splitter",
              "internalName": "express-splitter",
              "href": "https://wiki.factorio.com/Express_splitter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Express_splitter.png/32px-Express_splitter.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Express_splitter.png/48px-Express_splitter.png",
                "https://wiki.factorio.com/images/Express_splitter.png"
              ]
            },
            {
              "title": "Turbo splitter",
              "internalName": "turbo-splitter",
              "href": "https://wiki.factorio.com/Turbo_splitter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Turbo_splitter.png/32px-Turbo_splitter.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Turbo_splitter.png/48px-Turbo_splitter.png",
                "https://wiki.factorio.com/images/Turbo_splitter.png"
              ]
            },
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Burner inserter",
              "internalName": "burner-inserter",
              "href": "https://wiki.factorio.com/Burner_inserter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Burner_inserter.png/32px-Burner_inserter.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Burner_inserter.png/48px-Burner_inserter.png",
                "https://wiki.factorio.com/images/Burner_inserter.png"
              ]
            },
            {
              "title": "Inserter",
              "internalName": "inserter",
              "href": "https://wiki.factorio.com/Inserter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Inserter.png/32px-Inserter.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Inserter.png/48px-Inserter.png",
                "https://wiki.factorio.com/images/Inserter.png"
              ]
            },
            {
              "title": "Long-handed inserter",
              "internalName": "long-handed-inserter",
              "href": "https://wiki.factorio.com/Long-handed_inserter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Long-handed_inserter.png/32px-Long-handed_inserter.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Long-handed_inserter.png/48px-Long-handed_inserter.png",
                "https://wiki.factorio.com/images/Long-handed_inserter.png"
              ]
            },
            {
              "title": "Fast inserter",
              "internalName": "fast-inserter",
              "href": "https://wiki.factorio.com/Fast_inserter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fast_inserter.png/32px-Fast_inserter.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Fast_inserter.png/48px-Fast_inserter.png",
                "https://wiki.factorio.com/images/Fast_inserter.png"
              ]
            },
            {
              "title": "Bulk inserter",
              "internalName": "bulk-inserter",
              "href": "https://wiki.factorio.com/Bulk_inserter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Bulk_inserter.png/32px-Bulk_inserter.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Bulk_inserter.png/48px-Bulk_inserter.png",
                "https://wiki.factorio.com/images/Bulk_inserter.png"
              ]
            },
            {
              "title": "Stack inserter",
              "internalName": "stack-inserter",
              "href": "https://wiki.factorio.com/Stack_inserter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Stack_inserter.png/32px-Stack_inserter.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Stack_inserter.png/48px-Stack_inserter.png",
                "https://wiki.factorio.com/images/Stack_inserter.png"
              ]
            },
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Small electric pole",
              "internalName": "small-electric-pole",
              "href": "https://wiki.factorio.com/Small_electric_pole",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Small_electric_pole.png/32px-Small_electric_pole.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Small_electric_pole.png/48px-Small_electric_pole.png",
                "https://wiki.factorio.com/images/Small_electric_pole.png"
              ]
            },
            {
              "title": "Medium electric pole",
              "internalName": "medium-electric-pole",
              "href": "https://wiki.factorio.com/Medium_electric_pole",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Medium_electric_pole.png/32px-Medium_electric_pole.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Medium_electric_pole.png/48px-Medium_electric_pole.png",
                "https://wiki.factorio.com/images/Medium_electric_pole.png"
              ]
            },
            {
              "title": "Big electric pole",
              "internalName": "big-electric-pole",
              "href": "https://wiki.factorio.com/Big_electric_pole",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Big_electric_pole.png/32px-Big_electric_pole.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Big_electric_pole.png/48px-Big_electric_pole.png",
                "https://wiki.factorio.com/images/Big_electric_pole.png"
              ]
            },
            {
              "title": "Substation",
              "internalName": "substation",
              "href": "https://wiki.factorio.com/Substation",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Substation.png/32px-Substation.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Substation.png/48px-Substation.png",
                "https://wiki.factorio.com/images/Substation.png"
              ]
            },
            {
              "title": "Pipe",
              "internalName": "pipe",
              "href": "https://wiki.factorio.com/Pipe",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Pipe.png/32px-Pipe.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Pipe.png/48px-Pipe.png",
                "https://wiki.factorio.com/images/Pipe.png"
              ]
            },
            {
              "title": "Pipe to ground",
              "internalName": "pipe-to-ground",
              "href": "https://wiki.factorio.com/Pipe_to_ground",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Pipe_to_ground.png/32px-Pipe_to_ground.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Pipe_to_ground.png/48px-Pipe_to_ground.png",
                "https://wiki.factorio.com/images/Pipe_to_ground.png"
              ]
            },
            {
              "title": "Pump",
              "internalName": "pump",
              "href": "https://wiki.factorio.com/Pump",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Pump.png/32px-Pump.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Pump.png/48px-Pump.png",
                "https://wiki.factorio.com/images/Pump.png"
              ]
            },
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Rail",
              "internalName": "rail",
              "href": "https://wiki.factorio.com/Rail",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Straight_rail.png/32px-Straight_rail.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Straight_rail.png/48px-Straight_rail.png",
                "https://wiki.factorio.com/images/Straight_rail.png"
              ]
            },
            {
              "title": "Rail ramp",
              "internalName": "rail-ramp",
              "href": "https://wiki.factorio.com/Rail_ramp",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rail_ramp.png/32px-Rail_ramp.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Rail_ramp.png/48px-Rail_ramp.png",
                "https://wiki.factorio.com/images/Rail_ramp.png"
              ]
            },
            {
              "title": "Rail support",
              "internalName": "rail-support",
              "href": "https://wiki.factorio.com/Rail_support",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rail_support.png/32px-Rail_support.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Rail_support.png/48px-Rail_support.png",
                "https://wiki.factorio.com/images/Rail_support.png"
              ]
            },
            {
              "title": "Train stop",
              "internalName": "train-stop",
              "href": "https://wiki.factorio.com/Train_stop",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Train_stop.png/32px-Train_stop.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Train_stop.png/48px-Train_stop.png",
                "https://wiki.factorio.com/images/Train_stop.png"
              ]
            },
            {
              "title": "Rail signal",
              "internalName": "rail-signal",
              "href": "https://wiki.factorio.com/Rail_signal",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rail_signal.png/32px-Rail_signal.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Rail_signal.png/48px-Rail_signal.png",
                "https://wiki.factorio.com/images/Rail_signal.png"
              ]
            },
            {
              "title": "Rail chain signal",
              "internalName": "rail-chain-signal",
              "href": "https://wiki.factorio.com/Rail_chain_signal",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rail_chain_signal.png/32px-Rail_chain_signal.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Rail_chain_signal.png/48px-Rail_chain_signal.png",
                "https://wiki.factorio.com/images/Rail_chain_signal.png"
              ]
            },
            {
              "title": "Locomotive",
              "internalName": "locomotive",
              "href": "https://wiki.factorio.com/Locomotive",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Locomotive.png/32px-Locomotive.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Locomotive.png/48px-Locomotive.png",
                "https://wiki.factorio.com/images/Locomotive.png"
              ]
            },
            {
              "title": "Cargo wagon",
              "internalName": "cargo-wagon",
              "href": "https://wiki.factorio.com/Cargo_wagon",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Cargo_wagon.png/32px-Cargo_wagon.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Cargo_wagon.png/48px-Cargo_wagon.png",
                "https://wiki.factorio.com/images/Cargo_wagon.png"
              ]
            },
            {
              "title": "Fluid wagon",
              "internalName": "fluid-wagon",
              "href": "https://wiki.factorio.com/Fluid_wagon",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fluid_wagon.png/32px-Fluid_wagon.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Fluid_wagon.png/48px-Fluid_wagon.png",
                "https://wiki.factorio.com/images/Fluid_wagon.png"
              ]
            },
            {
              "title": "Artillery wagon",
              "internalName": "artillery-wagon",
              "href": "https://wiki.factorio.com/Artillery_wagon",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Artillery_wagon.png/32px-Artillery_wagon.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Artillery_wagon.png/48px-Artillery_wagon.png",
                "https://wiki.factorio.com/images/Artillery_wagon.png"
              ]
            }
          ]
        },
        {
          "items": [
            {
              "title": "Car",
              "internalName": "car",
              "href": "https://wiki.factorio.com/Car",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Car.png/32px-Car.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Car.png/48px-Car.png",
                "https://wiki.factorio.com/images/Car.png"
              ]
            },
            {
              "title": "Tank",
              "internalName": "tank",
              "href": "https://wiki.factorio.com/Tank",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Tank.png/32px-Tank.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Tank.png/48px-Tank.png",
                "https://wiki.factorio.com/images/Tank.png"
              ]
            },
            {
              "title": "Spidertron",
              "internalName": "spidertron",
              "href": "https://wiki.factorio.com/Spidertron",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Spidertron.png/32px-Spidertron.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Spidertron.png/48px-Spidertron.png",
                "https://wiki.factorio.com/images/Spidertron.png"
              ]
            },
            {
              "title": "Spidertron remote",
              "internalName": "spidertron-remote",
              "href": "https://wiki.factorio.com/Spidertron_remote",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Spidertron_remote.png/32px-Spidertron_remote.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Spidertron_remote.png/48px-Spidertron_remote.png",
                "https://wiki.factorio.com/images/Spidertron_remote.png"
              ]
            },
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Logistic robot",
              "internalName": "logistic-robot",
              "href": "https://wiki.factorio.com/Logistic_robot",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Logistic_robot.png/32px-Logistic_robot.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Logistic_robot.png/48px-Logistic_robot.png",
                "https://wiki.factorio.com/images/Logistic_robot.png"
              ]
            },
            {
              "title": "Construction robot",
              "internalName": "construction-robot",
              "href": "https://wiki.factorio.com/Construction_robot",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Construction_robot.png/32px-Construction_robot.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Construction_robot.png/48px-Construction_robot.png",
                "https://wiki.factorio.com/images/Construction_robot.png"
              ]
            },
            {
              "title": "Active provider chest",
              "internalName": "active-provider-chest",
              "href": "https://wiki.factorio.com/Active_provider_chest",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Active_provider_chest.png/32px-Active_provider_chest.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Active_provider_chest.png/48px-Active_provider_chest.png",
                "https://wiki.factorio.com/images/Active_provider_chest.png"
              ]
            },
            {
              "title": "Passive provider chest",
              "internalName": "passive-provider-chest",
              "href": "https://wiki.factorio.com/Passive_provider_chest",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Passive_provider_chest.png/32px-Passive_provider_chest.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Passive_provider_chest.png/48px-Passive_provider_chest.png",
                "https://wiki.factorio.com/images/Passive_provider_chest.png"
              ]
            },
            {
              "title": "Storage chest",
              "internalName": "storage-chest",
              "href": "https://wiki.factorio.com/Storage_chest",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Storage_chest.png/32px-Storage_chest.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Storage_chest.png/48px-Storage_chest.png",
                "https://wiki.factorio.com/images/Storage_chest.png"
              ]
            },
            {
              "title": "Buffer chest",
              "internalName": "buffer-chest",
              "href": "https://wiki.factorio.com/Buffer_chest",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Buffer_chest.png/32px-Buffer_chest.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Buffer_chest.png/48px-Buffer_chest.png",
                "https://wiki.factorio.com/images/Buffer_chest.png"
              ]
            },
            {
              "title": "Requester chest",
              "internalName": "requester-chest",
              "href": "https://wiki.factorio.com/Requester_chest",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Requester_chest.png/32px-Requester_chest.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Requester_chest.png/48px-Requester_chest.png",
                "https://wiki.factorio.com/images/Requester_chest.png"
              ]
            },
            {
              "title": "Roboport",
              "internalName": "roboport",
              "href": "https://wiki.factorio.com/Roboport",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Roboport.png/32px-Roboport.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Roboport.png/48px-Roboport.png",
                "https://wiki.factorio.com/images/Roboport.png"
              ]
            },
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Lamp",
              "internalName": "small-lamp",
              "href": "https://wiki.factorio.com/Lamp",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lamp.png/32px-Lamp.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Lamp.png/48px-Lamp.png",
                "https://wiki.factorio.com/images/Lamp.png"
              ]
            },
            {
              "title": "Red wire",
              "internalName": "red-wire",
              "href": "https://wiki.factorio.com/Red_wire",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Red_wire.png/32px-Red_wire.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Red_wire.png/48px-Red_wire.png",
                "https://wiki.factorio.com/images/Red_wire.png"
              ]
            },
            {
              "title": "Green wire",
              "internalName": "green-wire",
              "href": "https://wiki.factorio.com/Green_wire",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Green_wire.png/32px-Green_wire.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Green_wire.png/48px-Green_wire.png",
                "https://wiki.factorio.com/images/Green_wire.png"
              ]
            },
            {
              "title": "Arithmetic combinator",
              "internalName": "arithmetic-combinator",
              "href": "https://wiki.factorio.com/Arithmetic_combinator",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Arithmetic_combinator.png/32px-Arithmetic_combinator.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Arithmetic_combinator.png/48px-Arithmetic_combinator.png",
                "https://wiki.factorio.com/images/Arithmetic_combinator.png"
              ]
            },
            {
              "title": "Decider combinator",
              "internalName": "decider-combinator",
              "href": "https://wiki.factorio.com/Decider_combinator",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Decider_combinator.png/32px-Decider_combinator.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Decider_combinator.png/48px-Decider_combinator.png",
                "https://wiki.factorio.com/images/Decider_combinator.png"
              ]
            },
            {
              "title": "Selector combinator",
              "internalName": "selector-combinator",
              "href": "https://wiki.factorio.com/Selector_combinator",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Selector_combinator.png/32px-Selector_combinator.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Selector_combinator.png/48px-Selector_combinator.png",
                "https://wiki.factorio.com/images/Selector_combinator.png"
              ]
            },
            {
              "title": "Constant combinator",
              "internalName": "constant-combinator",
              "href": "https://wiki.factorio.com/Constant_combinator",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Constant_combinator.png/32px-Constant_combinator.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Constant_combinator.png/48px-Constant_combinator.png",
                "https://wiki.factorio.com/images/Constant_combinator.png"
              ]
            },
            {
              "title": "Power switch",
              "internalName": "power-switch",
              "href": "https://wiki.factorio.com/Power_switch",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Power_switch.png/32px-Power_switch.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Power_switch.png/48px-Power_switch.png",
                "https://wiki.factorio.com/images/Power_switch.png"
              ]
            },
            {
              "title": "Programmable speaker",
              "internalName": "programmable-speaker",
              "href": "https://wiki.factorio.com/Programmable_speaker",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Programmable_speaker.png/32px-Programmable_speaker.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Programmable_speaker.png/48px-Programmable_speaker.png",
                "https://wiki.factorio.com/images/Programmable_speaker.png"
              ]
            },
            {
              "title": "Display panel",
              "internalName": "display-panel",
              "href": "https://wiki.factorio.com/Display_panel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Display_panel.png/32px-Display_panel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Display_panel.png/48px-Display_panel.png",
                "https://wiki.factorio.com/images/Display_panel.png"
              ]
            }
          ]
        },
        {
          "items": [
            {
              "title": "Stone brick",
              "internalName": "stone-brick",
              "href": "https://wiki.factorio.com/Stone_brick",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Stone_brick.png/32px-Stone_brick.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Stone_brick.png/48px-Stone_brick.png",
                "https://wiki.factorio.com/images/Stone_brick.png"
              ]
            },
            {
              "title": "Concrete",
              "internalName": "concrete",
              "href": "https://wiki.factorio.com/Concrete",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Concrete.png/32px-Concrete.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Concrete.png/48px-Concrete.png",
                "https://wiki.factorio.com/images/Concrete.png"
              ]
            },
            {
              "title": "Hazard concrete",
              "internalName": "hazard-concrete",
              "href": "https://wiki.factorio.com/Hazard_concrete",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Hazard_concrete.png/32px-Hazard_concrete.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Hazard_concrete.png/48px-Hazard_concrete.png",
                "https://wiki.factorio.com/images/Hazard_concrete.png"
              ]
            },
            {
              "title": "Refined concrete",
              "internalName": "refined-concrete",
              "href": "https://wiki.factorio.com/Refined_concrete",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Refined_concrete.png/32px-Refined_concrete.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Refined_concrete.png/48px-Refined_concrete.png",
                "https://wiki.factorio.com/images/Refined_concrete.png"
              ]
            },
            {
              "title": "Refined hazard concrete",
              "internalName": "refined-hazard-concrete",
              "href": "https://wiki.factorio.com/Refined_hazard_concrete",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Refined_hazard_concrete.png/32px-Refined_hazard_concrete.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Refined_hazard_concrete.png/48px-Refined_hazard_concrete.png",
                "https://wiki.factorio.com/images/Refined_hazard_concrete.png"
              ]
            },
            {
              "title": "Landfill",
              "internalName": "landfill",
              "href": "https://wiki.factorio.com/Landfill",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Landfill.png/32px-Landfill.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Landfill.png/48px-Landfill.png",
                "https://wiki.factorio.com/images/Landfill.png"
              ]
            },
            {
              "title": "Artificial yumako soil",
              "internalName": "artificial-yumako-soil",
              "href": "https://wiki.factorio.com/Artificial_yumako_soil",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Artificial_yumako_soil.png/32px-Artificial_yumako_soil.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Artificial_yumako_soil.png/48px-Artificial_yumako_soil.png",
                "https://wiki.factorio.com/images/Artificial_yumako_soil.png"
              ]
            },
            {
              "title": "Overgrowth yumako soil",
              "internalName": "overgrowth-yumako-soil",
              "href": "https://wiki.factorio.com/Overgrowth_yumako_soil",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Overgrowth_yumako_soil.png/32px-Overgrowth_yumako_soil.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Overgrowth_yumako_soil.png/48px-Overgrowth_yumako_soil.png",
                "https://wiki.factorio.com/images/Overgrowth_yumako_soil.png"
              ]
            },
            {
              "title": "Artificial jellynut soil",
              "internalName": "artificial-jellynut-soil",
              "href": "https://wiki.factorio.com/Artificial_jellynut_soil",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Artificial_jellynut_soil.png/32px-Artificial_jellynut_soil.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Artificial_jellynut_soil.png/48px-Artificial_jellynut_soil.png",
                "https://wiki.factorio.com/images/Artificial_jellynut_soil.png"
              ]
            },
            {
              "title": "Overgrowth jellynut soil",
              "internalName": "overgrowth-jellynut-soil",
              "href": "https://wiki.factorio.com/Overgrowth_jellynut_soil",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Overgrowth_jellynut_soil.png/32px-Overgrowth_jellynut_soil.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Overgrowth_jellynut_soil.png/48px-Overgrowth_jellynut_soil.png",
                "https://wiki.factorio.com/images/Overgrowth_jellynut_soil.png"
              ]
            },
            {
              "title": "Ice platform",
              "internalName": "ice-platform",
              "href": "https://wiki.factorio.com/Ice_platform",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Ice_platform.png/32px-Ice_platform.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Ice_platform.png/48px-Ice_platform.png",
                "https://wiki.factorio.com/images/Ice_platform.png"
              ]
            },
            {
              "title": "Foundation",
              "internalName": "foundation",
              "href": "https://wiki.factorio.com/Foundation",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Foundation.png/32px-Foundation.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Foundation.png/48px-Foundation.png",
                "https://wiki.factorio.com/images/Foundation.png"
              ]
            },
            {
              "title": "Cliff explosives",
              "internalName": "cliff-explosives",
              "href": "https://wiki.factorio.com/Cliff_explosives",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Cliff_explosives.png/32px-Cliff_explosives.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Cliff_explosives.png/48px-Cliff_explosives.png",
                "https://wiki.factorio.com/images/Cliff_explosives.png"
              ]
            },
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        }
      ]
    },
    {
      "name": "Production",
      "iconSrc": "https://wiki.factorio.com/images/thumb/Item-group_production.png/64px-Item-group_production.png",
      "iconSrcset": [
        "https://wiki.factorio.com/images/thumb/Item-group_production.png/96px-Item-group_production.png",
        "https://wiki.factorio.com/images/Item-group_production.png"
      ],
      "rows": [
        {
          "items": [
            {
              "title": "Repair pack",
              "internalName": "repair-pack",
              "href": "https://wiki.factorio.com/Repair_pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Repair_pack.png/32px-Repair_pack.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Repair_pack.png/48px-Repair_pack.png",
                "https://wiki.factorio.com/images/Repair_pack.png"
              ]
            },
            {
              "title": "Blueprint",
              "internalName": "blueprint",
              "href": "https://wiki.factorio.com/Blueprint",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Blueprint.png/32px-Blueprint.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Blueprint.png/48px-Blueprint.png",
                "https://wiki.factorio.com/images/Blueprint.png"
              ]
            },
            {
              "title": "Deconstruction planner",
              "internalName": "deconstruction-planner",
              "href": "https://wiki.factorio.com/Deconstruction_planner",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Deconstruction_planner.png/32px-Deconstruction_planner.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Deconstruction_planner.png/48px-Deconstruction_planner.png",
                "https://wiki.factorio.com/images/Deconstruction_planner.png"
              ]
            },
            {
              "title": "Upgrade planner",
              "internalName": "upgrade-planner",
              "href": "https://wiki.factorio.com/Upgrade_planner",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Upgrade_planner.png/32px-Upgrade_planner.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Upgrade_planner.png/48px-Upgrade_planner.png",
                "https://wiki.factorio.com/images/Upgrade_planner.png"
              ]
            },
            {
              "title": "Blueprint book",
              "internalName": "blueprint-book",
              "href": "https://wiki.factorio.com/Blueprint_book",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Blueprint_book.png/32px-Blueprint_book.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Blueprint_book.png/48px-Blueprint_book.png",
                "https://wiki.factorio.com/images/Blueprint_book.png"
              ]
            },
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Boiler",
              "internalName": "boiler",
              "href": "https://wiki.factorio.com/Boiler",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Boiler.png/32px-Boiler.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Boiler.png/48px-Boiler.png",
                "https://wiki.factorio.com/images/Boiler.png"
              ]
            },
            {
              "title": "Steam engine",
              "internalName": "steam-engine",
              "href": "https://wiki.factorio.com/Steam_engine",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Steam_engine.png/32px-Steam_engine.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Steam_engine.png/48px-Steam_engine.png",
                "https://wiki.factorio.com/images/Steam_engine.png"
              ]
            },
            {
              "title": "Solar panel",
              "internalName": "solar-panel",
              "href": "https://wiki.factorio.com/Solar_panel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Solar_panel.png/32px-Solar_panel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Solar_panel.png/48px-Solar_panel.png",
                "https://wiki.factorio.com/images/Solar_panel.png"
              ]
            },
            {
              "title": "Accumulator",
              "internalName": "accumulator",
              "href": "https://wiki.factorio.com/Accumulator",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Accumulator.png/32px-Accumulator.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Accumulator.png/48px-Accumulator.png",
                "https://wiki.factorio.com/images/Accumulator.png"
              ]
            },
            {
              "title": "Nuclear reactor",
              "internalName": "nuclear-reactor",
              "href": "https://wiki.factorio.com/Nuclear_reactor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Nuclear_reactor.png/32px-Nuclear_reactor.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Nuclear_reactor.png/48px-Nuclear_reactor.png",
                "https://wiki.factorio.com/images/Nuclear_reactor.png"
              ]
            },
            {
              "title": "Heat pipe",
              "internalName": "heat-pipe",
              "href": "https://wiki.factorio.com/Heat_pipe",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Heat_pipe.png/32px-Heat_pipe.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Heat_pipe.png/48px-Heat_pipe.png",
                "https://wiki.factorio.com/images/Heat_pipe.png"
              ]
            },
            {
              "title": "Heat exchanger",
              "internalName": "heat-exchanger",
              "href": "https://wiki.factorio.com/Heat_exchanger",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Heat_exchanger.png/32px-Heat_exchanger.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Heat_exchanger.png/48px-Heat_exchanger.png",
                "https://wiki.factorio.com/images/Heat_exchanger.png"
              ]
            },
            {
              "title": "Steam turbine",
              "internalName": "steam-turbine",
              "href": "https://wiki.factorio.com/Steam_turbine",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Steam_turbine.png/32px-Steam_turbine.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Steam_turbine.png/48px-Steam_turbine.png",
                "https://wiki.factorio.com/images/Steam_turbine.png"
              ]
            },
            {
              "title": "Fusion reactor",
              "internalName": "fusion-reactor",
              "href": "https://wiki.factorio.com/Fusion_reactor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fusion_reactor.png/32px-Fusion_reactor.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Fusion_reactor.png/48px-Fusion_reactor.png",
                "https://wiki.factorio.com/images/Fusion_reactor.png"
              ]
            },
            {
              "title": "Fusion generator",
              "internalName": "fusion-generator",
              "href": "https://wiki.factorio.com/Fusion_generator",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fusion_generator.png/32px-Fusion_generator.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Fusion_generator.png/48px-Fusion_generator.png",
                "https://wiki.factorio.com/images/Fusion_generator.png"
              ]
            }
          ]
        },
        {
          "items": [
            {
              "title": "Burner mining drill",
              "internalName": "burner-mining-drill",
              "href": "https://wiki.factorio.com/Burner_mining_drill",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Burner_mining_drill.png/32px-Burner_mining_drill.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Burner_mining_drill.png/48px-Burner_mining_drill.png",
                "https://wiki.factorio.com/images/Burner_mining_drill.png"
              ]
            },
            {
              "title": "Electric mining drill",
              "internalName": "electric-mining-drill",
              "href": "https://wiki.factorio.com/Electric_mining_drill",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Electric_mining_drill.png/32px-Electric_mining_drill.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Electric_mining_drill.png/48px-Electric_mining_drill.png",
                "https://wiki.factorio.com/images/Electric_mining_drill.png"
              ]
            },
            {
              "title": "Big mining drill",
              "internalName": "big-mining-drill",
              "href": "https://wiki.factorio.com/Big_mining_drill",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Big_mining_drill.png/32px-Big_mining_drill.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Big_mining_drill.png/48px-Big_mining_drill.png",
                "https://wiki.factorio.com/images/Big_mining_drill.png"
              ]
            },
            {
              "title": "Offshore pump",
              "internalName": "offshore-pump",
              "href": "https://wiki.factorio.com/Offshore_pump",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Offshore_pump.png/32px-Offshore_pump.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Offshore_pump.png/48px-Offshore_pump.png",
                "https://wiki.factorio.com/images/Offshore_pump.png"
              ]
            },
            {
              "title": "Pumpjack",
              "internalName": "pumpjack",
              "href": "https://wiki.factorio.com/Pumpjack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Pumpjack.png/32px-Pumpjack.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Pumpjack.png/48px-Pumpjack.png",
                "https://wiki.factorio.com/images/Pumpjack.png"
              ]
            },
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Stone furnace",
              "internalName": "stone-furnace",
              "href": "https://wiki.factorio.com/Stone_furnace",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Stone_furnace.png/32px-Stone_furnace.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Stone_furnace.png/48px-Stone_furnace.png",
                "https://wiki.factorio.com/images/Stone_furnace.png"
              ]
            },
            {
              "title": "Steel furnace",
              "internalName": "steel-furnace",
              "href": "https://wiki.factorio.com/Steel_furnace",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Steel_furnace.png/32px-Steel_furnace.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Steel_furnace.png/48px-Steel_furnace.png",
                "https://wiki.factorio.com/images/Steel_furnace.png"
              ]
            },
            {
              "title": "Electric furnace",
              "internalName": "electric-furnace",
              "href": "https://wiki.factorio.com/Electric_furnace",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Electric_furnace.png/32px-Electric_furnace.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Electric_furnace.png/48px-Electric_furnace.png",
                "https://wiki.factorio.com/images/Electric_furnace.png"
              ]
            },
            {
              "title": "Foundry",
              "internalName": "foundry",
              "href": "https://wiki.factorio.com/Foundry",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Foundry.png/32px-Foundry.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Foundry.png/48px-Foundry.png",
                "https://wiki.factorio.com/images/Foundry.png"
              ]
            },
            {
              "title": "Recycler",
              "internalName": "recycler",
              "href": "https://wiki.factorio.com/Recycler",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Recycler.png/32px-Recycler.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Recycler.png/48px-Recycler.png",
                "https://wiki.factorio.com/images/Recycler.png"
              ]
            },
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Agricultural tower",
              "internalName": "agricultural-tower",
              "href": "https://wiki.factorio.com/Agricultural_tower",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Agricultural_tower.png/32px-Agricultural_tower.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Agricultural_tower.png/48px-Agricultural_tower.png",
                "https://wiki.factorio.com/images/Agricultural_tower.png"
              ]
            },
            {
              "title": "Biochamber",
              "internalName": "biochamber",
              "href": "https://wiki.factorio.com/Biochamber",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Biochamber.png/32px-Biochamber.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Biochamber.png/48px-Biochamber.png",
                "https://wiki.factorio.com/images/Biochamber.png"
              ]
            },
            {
              "title": "Captive biter spawner",
              "internalName": "captive-biter-spawner",
              "href": "https://wiki.factorio.com/Captive_biter_spawner",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Captive_biter_spawner.png/32px-Captive_biter_spawner.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Captive_biter_spawner.png/48px-Captive_biter_spawner.png",
                "https://wiki.factorio.com/images/Captive_biter_spawner.png"
              ]
            },
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Assembling machine 1",
              "internalName": "assembling-machine-1",
              "href": "https://wiki.factorio.com/Assembling_machine_1",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Assembling_machine_1.png/32px-Assembling_machine_1.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Assembling_machine_1.png/48px-Assembling_machine_1.png",
                "https://wiki.factorio.com/images/Assembling_machine_1.png"
              ]
            },
            {
              "title": "Assembling machine 2",
              "internalName": "assembling-machine-2",
              "href": "https://wiki.factorio.com/Assembling_machine_2",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Assembling_machine_2.png/32px-Assembling_machine_2.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Assembling_machine_2.png/48px-Assembling_machine_2.png",
                "https://wiki.factorio.com/images/Assembling_machine_2.png"
              ]
            },
            {
              "title": "Assembling machine 3",
              "internalName": "assembling-machine-3",
              "href": "https://wiki.factorio.com/Assembling_machine_3",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Assembling_machine_3.png/32px-Assembling_machine_3.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Assembling_machine_3.png/48px-Assembling_machine_3.png",
                "https://wiki.factorio.com/images/Assembling_machine_3.png"
              ]
            },
            {
              "title": "Oil refinery",
              "internalName": "oil-refinery",
              "href": "https://wiki.factorio.com/Oil_refinery",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Oil_refinery.png/32px-Oil_refinery.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Oil_refinery.png/48px-Oil_refinery.png",
                "https://wiki.factorio.com/images/Oil_refinery.png"
              ]
            },
            {
              "title": "Chemical plant",
              "internalName": "chemical-plant",
              "href": "https://wiki.factorio.com/Chemical_plant",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Chemical_plant.png/32px-Chemical_plant.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Chemical_plant.png/48px-Chemical_plant.png",
                "https://wiki.factorio.com/images/Chemical_plant.png"
              ]
            },
            {
              "title": "Centrifuge",
              "internalName": "centrifuge",
              "href": "https://wiki.factorio.com/Centrifuge",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Centrifuge.png/32px-Centrifuge.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Centrifuge.png/48px-Centrifuge.png",
                "https://wiki.factorio.com/images/Centrifuge.png"
              ]
            },
            {
              "title": "Electromagnetic plant",
              "internalName": "electromagnetic-plant",
              "href": "https://wiki.factorio.com/Electromagnetic_plant",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Electromagnetic_plant.png/32px-Electromagnetic_plant.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Electromagnetic_plant.png/48px-Electromagnetic_plant.png",
                "https://wiki.factorio.com/images/Electromagnetic_plant.png"
              ]
            },
            {
              "title": "Cryogenic plant",
              "internalName": "cryogenic-plant",
              "href": "https://wiki.factorio.com/Cryogenic_plant",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Cryogenic_plant.png/32px-Cryogenic_plant.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Cryogenic_plant.png/48px-Cryogenic_plant.png",
                "https://wiki.factorio.com/images/Cryogenic_plant.png"
              ]
            },
            {
              "title": "Lab",
              "internalName": "lab",
              "href": "https://wiki.factorio.com/Lab",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lab.png/32px-Lab.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Lab.png/48px-Lab.png",
                "https://wiki.factorio.com/images/Lab.png"
              ]
            },
            {
              "title": "Biolab",
              "internalName": "biolab",
              "href": "https://wiki.factorio.com/Biolab",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Biolab.png/32px-Biolab.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Biolab.png/48px-Biolab.png",
                "https://wiki.factorio.com/images/Biolab.png"
              ]
            }
          ]
        },
        {
          "items": [
            {
              "title": "Lightning rod",
              "internalName": "lightning-rod",
              "href": "https://wiki.factorio.com/Lightning_rod",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lightning_rod.png/32px-Lightning_rod.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Lightning_rod.png/48px-Lightning_rod.png",
                "https://wiki.factorio.com/images/Lightning_rod.png"
              ]
            },
            {
              "title": "Lightning collector",
              "internalName": "lightning-collector",
              "href": "https://wiki.factorio.com/Lightning_collector",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lightning_collector.png/32px-Lightning_collector.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Lightning_collector.png/48px-Lightning_collector.png",
                "https://wiki.factorio.com/images/Lightning_collector.png"
              ]
            },
            {
              "title": "Heating tower",
              "internalName": "heating-tower",
              "href": "https://wiki.factorio.com/Heating_tower",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Heating_tower.png/32px-Heating_tower.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Heating_tower.png/48px-Heating_tower.png",
                "https://wiki.factorio.com/images/Heating_tower.png"
              ]
            },
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Beacon",
              "internalName": "beacon",
              "href": "https://wiki.factorio.com/Beacon",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Beacon.png/32px-Beacon.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Beacon.png/48px-Beacon.png",
                "https://wiki.factorio.com/images/Beacon.png"
              ]
            },
            {
              "title": "Speed module",
              "internalName": "speed-module",
              "href": "https://wiki.factorio.com/Speed_module",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Speed_module.png/32px-Speed_module.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Speed_module.png/48px-Speed_module.png",
                "https://wiki.factorio.com/images/Speed_module.png"
              ]
            },
            {
              "title": "Speed module 2",
              "internalName": "speed-module-2",
              "href": "https://wiki.factorio.com/Speed_module_2",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Speed_module_2.png/32px-Speed_module_2.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Speed_module_2.png/48px-Speed_module_2.png",
                "https://wiki.factorio.com/images/Speed_module_2.png"
              ]
            },
            {
              "title": "Speed module 3",
              "internalName": "speed-module-3",
              "href": "https://wiki.factorio.com/Speed_module_3",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Speed_module_3.png/32px-Speed_module_3.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Speed_module_3.png/48px-Speed_module_3.png",
                "https://wiki.factorio.com/images/Speed_module_3.png"
              ]
            },
            {
              "title": "Efficiency module",
              "internalName": "efficiency-module",
              "href": "https://wiki.factorio.com/Efficiency_module",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Efficiency_module.png/32px-Efficiency_module.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Efficiency_module.png/48px-Efficiency_module.png",
                "https://wiki.factorio.com/images/Efficiency_module.png"
              ]
            },
            {
              "title": "Efficiency module 2",
              "internalName": "efficiency-module-2",
              "href": "https://wiki.factorio.com/Efficiency_module_2",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Efficiency_module_2.png/32px-Efficiency_module_2.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Efficiency_module_2.png/48px-Efficiency_module_2.png",
                "https://wiki.factorio.com/images/Efficiency_module_2.png"
              ]
            },
            {
              "title": "Efficiency module 3",
              "internalName": "efficiency-module-3",
              "href": "https://wiki.factorio.com/Efficiency_module_3",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Efficiency_module_3.png/32px-Efficiency_module_3.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Efficiency_module_3.png/48px-Efficiency_module_3.png",
                "https://wiki.factorio.com/images/Efficiency_module_3.png"
              ]
            },
            {
              "title": "Productivity module",
              "internalName": "productivity-module",
              "href": "https://wiki.factorio.com/Productivity_module",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Productivity_module.png/32px-Productivity_module.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Productivity_module.png/48px-Productivity_module.png",
                "https://wiki.factorio.com/images/Productivity_module.png"
              ]
            },
            {
              "title": "Productivity module 2",
              "internalName": "productivity-module-2",
              "href": "https://wiki.factorio.com/Productivity_module_2",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Productivity_module_2.png/32px-Productivity_module_2.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Productivity_module_2.png/48px-Productivity_module_2.png",
                "https://wiki.factorio.com/images/Productivity_module_2.png"
              ]
            },
            {
              "title": "Productivity module 3",
              "internalName": "productivity-module-3",
              "href": "https://wiki.factorio.com/Productivity_module_3",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Productivity_module_3.png/32px-Productivity_module_3.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Productivity_module_3.png/48px-Productivity_module_3.png",
                "https://wiki.factorio.com/images/Productivity_module_3.png"
              ]
            },
            {
              "title": "Quality module",
              "internalName": "quality-module",
              "href": "https://wiki.factorio.com/Quality_module",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Quality_module.png/32px-Quality_module.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Quality_module.png/48px-Quality_module.png",
                "https://wiki.factorio.com/images/Quality_module.png"
              ]
            },
            {
              "title": "Quality module 2",
              "internalName": "quality-module-2",
              "href": "https://wiki.factorio.com/Quality_module_2",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Quality_module_2.png/32px-Quality_module_2.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Quality_module_2.png/48px-Quality_module_2.png",
                "https://wiki.factorio.com/images/Quality_module_2.png"
              ]
            },
            {
              "title": "Quality module 3",
              "internalName": "quality-module-3",
              "href": "https://wiki.factorio.com/Quality_module_3",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Quality_module_3.png/32px-Quality_module_3.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Quality_module_3.png/48px-Quality_module_3.png",
                "https://wiki.factorio.com/images/Quality_module_3.png"
              ]
            },
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        }
      ]
    },
    {
      "name": "Intermediate products",
      "iconSrc": "https://wiki.factorio.com/images/thumb/Item-group_intermediate_products.png/64px-Item-group_intermediate_products.png",
      "iconSrcset": [
        "https://wiki.factorio.com/images/thumb/Item-group_intermediate_products.png/96px-Item-group_intermediate_products.png",
        "https://wiki.factorio.com/images/Item-group_intermediate_products.png"
      ],
      "rows": [
        {
          "items": [
            {
              "title": "Water",
              "internalName": "water",
              "href": "https://wiki.factorio.com/Water",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Water.png/32px-Water.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Water.png/48px-Water.png",
                "https://wiki.factorio.com/images/Water.png"
              ]
            },
            {
              "title": "Steam",
              "internalName": "steam",
              "href": "https://wiki.factorio.com/Steam",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Steam.png/32px-Steam.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Steam.png/48px-Steam.png",
                "https://wiki.factorio.com/images/Steam.png"
              ]
            },
            {
              "title": "Crude oil",
              "internalName": "crude-oil",
              "href": "https://wiki.factorio.com/Crude_oil",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Crude_oil.png/32px-Crude_oil.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Crude_oil.png/48px-Crude_oil.png",
                "https://wiki.factorio.com/images/Crude_oil.png"
              ]
            },
            {
              "title": "Heavy oil",
              "internalName": "heavy-oil",
              "href": "https://wiki.factorio.com/Heavy_oil",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Heavy_oil.png/32px-Heavy_oil.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Heavy_oil.png/48px-Heavy_oil.png",
                "https://wiki.factorio.com/images/Heavy_oil.png"
              ]
            },
            {
              "title": "Light oil",
              "internalName": "light-oil",
              "href": "https://wiki.factorio.com/Light_oil",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Light_oil.png/32px-Light_oil.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Light_oil.png/48px-Light_oil.png",
                "https://wiki.factorio.com/images/Light_oil.png"
              ]
            },
            {
              "title": "Lubricant",
              "internalName": "lubricant",
              "href": "https://wiki.factorio.com/Lubricant",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lubricant.png/32px-Lubricant.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Lubricant.png/48px-Lubricant.png",
                "https://wiki.factorio.com/images/Lubricant.png"
              ]
            },
            {
              "title": "Petroleum gas",
              "internalName": "petroleum-gas",
              "href": "https://wiki.factorio.com/Petroleum_gas",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Petroleum_gas.png/32px-Petroleum_gas.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Petroleum_gas.png/48px-Petroleum_gas.png",
                "https://wiki.factorio.com/images/Petroleum_gas.png"
              ]
            },
            {
              "title": "Sulfuric acid",
              "internalName": "sulfuric-acid",
              "href": "https://wiki.factorio.com/Sulfuric_acid",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Sulfuric_acid.png/32px-Sulfuric_acid.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Sulfuric_acid.png/48px-Sulfuric_acid.png",
                "https://wiki.factorio.com/images/Sulfuric_acid.png"
              ]
            },
            {
              "title": "Thruster fuel",
              "internalName": "thruster-fuel",
              "href": "https://wiki.factorio.com/Thruster_fuel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Thruster_fuel.png/32px-Thruster_fuel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Thruster_fuel.png/48px-Thruster_fuel.png",
                "https://wiki.factorio.com/images/Thruster_fuel.png"
              ]
            },
            {
              "title": "Thruster oxidizer",
              "internalName": "thruster-oxidizer",
              "href": "https://wiki.factorio.com/Thruster_oxidizer",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Thruster_oxidizer.png/32px-Thruster_oxidizer.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Thruster_oxidizer.png/48px-Thruster_oxidizer.png",
                "https://wiki.factorio.com/images/Thruster_oxidizer.png"
              ]
            },
            {
              "title": "Lava",
              "internalName": "lava",
              "href": "https://wiki.factorio.com/Lava",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lava.png/32px-Lava.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Lava.png/48px-Lava.png",
                "https://wiki.factorio.com/images/Lava.png"
              ]
            },
            {
              "title": "Molten iron",
              "internalName": "molten-iron",
              "href": "https://wiki.factorio.com/Molten_iron",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Molten_iron.png/32px-Molten_iron.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Molten_iron.png/48px-Molten_iron.png",
                "https://wiki.factorio.com/images/Molten_iron.png"
              ]
            },
            {
              "title": "Molten copper",
              "internalName": "molten-copper",
              "href": "https://wiki.factorio.com/Molten_copper",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Molten_copper.png/32px-Molten_copper.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Molten_copper.png/48px-Molten_copper.png",
                "https://wiki.factorio.com/images/Molten_copper.png"
              ]
            },
            {
              "title": "Holmium solution",
              "internalName": "holmium-solution",
              "href": "https://wiki.factorio.com/Holmium_solution",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Holmium_solution.png/32px-Holmium_solution.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Holmium_solution.png/48px-Holmium_solution.png",
                "https://wiki.factorio.com/images/Holmium_solution.png"
              ]
            },
            {
              "title": "Electrolyte",
              "internalName": "electrolyte",
              "href": "https://wiki.factorio.com/Electrolyte",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Electrolyte.png/32px-Electrolyte.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Electrolyte.png/48px-Electrolyte.png",
                "https://wiki.factorio.com/images/Electrolyte.png"
              ]
            },
            {
              "title": "Ammoniacal solution",
              "internalName": "ammoniacal-solution",
              "href": "https://wiki.factorio.com/Ammoniacal_solution",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Ammoniacal_solution.png/32px-Ammoniacal_solution.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Ammoniacal_solution.png/48px-Ammoniacal_solution.png",
                "https://wiki.factorio.com/images/Ammoniacal_solution.png"
              ]
            },
            {
              "title": "Ammonia",
              "internalName": "ammonia",
              "href": "https://wiki.factorio.com/Ammonia",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Ammonia.png/32px-Ammonia.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Ammonia.png/48px-Ammonia.png",
                "https://wiki.factorio.com/images/Ammonia.png"
              ]
            },
            {
              "title": "Fluorine",
              "internalName": "fluorine",
              "href": "https://wiki.factorio.com/Fluorine",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fluorine.png/32px-Fluorine.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Fluorine.png/48px-Fluorine.png",
                "https://wiki.factorio.com/images/Fluorine.png"
              ]
            },
            {
              "title": "Fluoroketone (hot)",
              "internalName": "fluoroketone-hot",
              "href": "https://wiki.factorio.com/Fluoroketone_(hot)",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fluoroketone_%28hot%29.png/32px-Fluoroketone_%28hot%29.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Fluoroketone_%28hot%29.png/48px-Fluoroketone_%28hot%29.png",
                "https://wiki.factorio.com/images/Fluoroketone_%28hot%29.png"
              ]
            },
            {
              "title": "Fluoroketone (cold)",
              "internalName": "fluoroketone-cold",
              "href": "https://wiki.factorio.com/Fluoroketone_(cold)",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fluoroketone_%28cold%29.png/32px-Fluoroketone_%28cold%29.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Fluoroketone_%28cold%29.png/48px-Fluoroketone_%28cold%29.png",
                "https://wiki.factorio.com/images/Fluoroketone_%28cold%29.png"
              ]
            },
            {
              "title": "Lithium brine",
              "internalName": "lithium-brine",
              "href": "https://wiki.factorio.com/Lithium_brine",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lithium_brine.png/32px-Lithium_brine.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Lithium_brine.png/48px-Lithium_brine.png",
                "https://wiki.factorio.com/images/Lithium_brine.png"
              ]
            },
            {
              "title": "Plasma",
              "internalName": "fusion-plasma",
              "href": "https://wiki.factorio.com/Plasma",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Plasma.png/32px-Plasma.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Plasma.png/48px-Plasma.png",
                "https://wiki.factorio.com/images/Plasma.png"
              ]
            },
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Wood",
              "internalName": "wood",
              "href": "https://wiki.factorio.com/Wood",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Wood.png/32px-Wood.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Wood.png/48px-Wood.png",
                "https://wiki.factorio.com/images/Wood.png"
              ]
            },
            {
              "title": "Coal",
              "internalName": "coal",
              "href": "https://wiki.factorio.com/Coal",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Coal.png/32px-Coal.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Coal.png/48px-Coal.png",
                "https://wiki.factorio.com/images/Coal.png"
              ]
            },
            {
              "title": "Stone",
              "internalName": "stone",
              "href": "https://wiki.factorio.com/Stone",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Stone.png/32px-Stone.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Stone.png/48px-Stone.png",
                "https://wiki.factorio.com/images/Stone.png"
              ]
            },
            {
              "title": "Iron ore",
              "internalName": "iron-ore",
              "href": "https://wiki.factorio.com/Iron_ore",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Iron_ore.png/32px-Iron_ore.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Iron_ore.png/48px-Iron_ore.png",
                "https://wiki.factorio.com/images/Iron_ore.png"
              ]
            },
            {
              "title": "Copper ore",
              "internalName": "copper-ore",
              "href": "https://wiki.factorio.com/Copper_ore",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Copper_ore.png/32px-Copper_ore.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Copper_ore.png/48px-Copper_ore.png",
                "https://wiki.factorio.com/images/Copper_ore.png"
              ]
            },
            {
              "title": "Uranium ore",
              "internalName": "uranium-ore",
              "href": "https://wiki.factorio.com/Uranium_ore",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Uranium_ore.png/32px-Uranium_ore.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Uranium_ore.png/48px-Uranium_ore.png",
                "https://wiki.factorio.com/images/Uranium_ore.png"
              ]
            },
            {
              "title": "Raw fish",
              "internalName": "raw-fish",
              "href": "https://wiki.factorio.com/Raw_fish",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Raw_fish.png/32px-Raw_fish.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Raw_fish.png/48px-Raw_fish.png",
                "https://wiki.factorio.com/images/Raw_fish.png"
              ]
            },
            {
              "title": "Ice",
              "internalName": "ice",
              "href": "https://wiki.factorio.com/Ice",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Ice.png/32px-Ice.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Ice.png/48px-Ice.png",
                "https://wiki.factorio.com/images/Ice.png"
              ]
            },
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Iron plate",
              "internalName": "iron-plate",
              "href": "https://wiki.factorio.com/Iron_plate",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Iron_plate.png/32px-Iron_plate.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Iron_plate.png/48px-Iron_plate.png",
                "https://wiki.factorio.com/images/Iron_plate.png"
              ]
            },
            {
              "title": "Copper plate",
              "internalName": "copper-plate",
              "href": "https://wiki.factorio.com/Copper_plate",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Copper_plate.png/32px-Copper_plate.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Copper_plate.png/48px-Copper_plate.png",
                "https://wiki.factorio.com/images/Copper_plate.png"
              ]
            },
            {
              "title": "Steel plate",
              "internalName": "steel-plate",
              "href": "https://wiki.factorio.com/Steel_plate",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Steel_plate.png/32px-Steel_plate.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Steel_plate.png/48px-Steel_plate.png",
                "https://wiki.factorio.com/images/Steel_plate.png"
              ]
            },
            {
              "title": "Solid fuel",
              "internalName": "solid-fuel",
              "href": "https://wiki.factorio.com/Solid_fuel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Solid_fuel.png/32px-Solid_fuel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Solid_fuel.png/48px-Solid_fuel.png",
                "https://wiki.factorio.com/images/Solid_fuel.png"
              ]
            },
            {
              "title": "Plastic bar",
              "internalName": "plastic-bar",
              "href": "https://wiki.factorio.com/Plastic_bar",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Plastic_bar.png/32px-Plastic_bar.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Plastic_bar.png/48px-Plastic_bar.png",
                "https://wiki.factorio.com/images/Plastic_bar.png"
              ]
            },
            {
              "title": "Sulfur",
              "internalName": "sulfur",
              "href": "https://wiki.factorio.com/Sulfur",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Sulfur.png/32px-Sulfur.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Sulfur.png/48px-Sulfur.png",
                "https://wiki.factorio.com/images/Sulfur.png"
              ]
            },
            {
              "title": "Battery",
              "internalName": "battery",
              "href": "https://wiki.factorio.com/Battery",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Battery.png/32px-Battery.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Battery.png/48px-Battery.png",
                "https://wiki.factorio.com/images/Battery.png"
              ]
            },
            {
              "title": "Explosives",
              "internalName": "explosives",
              "href": "https://wiki.factorio.com/Explosives",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Explosives.png/32px-Explosives.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Explosives.png/48px-Explosives.png",
                "https://wiki.factorio.com/images/Explosives.png"
              ]
            },
            {
              "title": "Carbon",
              "internalName": "carbon",
              "href": "https://wiki.factorio.com/Carbon",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Carbon.png/32px-Carbon.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Carbon.png/48px-Carbon.png",
                "https://wiki.factorio.com/images/Carbon.png"
              ]
            },
            {
              "title": "Coal synthesis",
              "internalName": "coal-synthesis",
              "href": "https://wiki.factorio.com/Coal_synthesis",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Coal_synthesis.png/32px-Coal_synthesis.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Coal_synthesis.png/48px-Coal_synthesis.png",
                "https://wiki.factorio.com/images/Coal_synthesis.png"
              ]
            }
          ]
        },
        {
          "items": [
            {
              "title": "Water barrel",
              "internalName": null,
              "href": "https://wiki.factorio.com/Water_barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Water_barrel.png/32px-Water_barrel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Water_barrel.png/48px-Water_barrel.png",
                "https://wiki.factorio.com/images/Water_barrel.png"
              ]
            },
            {
              "title": "Crude oil barrel",
              "internalName": null,
              "href": "https://wiki.factorio.com/Crude_oil_barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Crude_oil_barrel.png/32px-Crude_oil_barrel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Crude_oil_barrel.png/48px-Crude_oil_barrel.png",
                "https://wiki.factorio.com/images/Crude_oil_barrel.png"
              ]
            },
            {
              "title": "Petroleum gas barrel",
              "internalName": null,
              "href": "https://wiki.factorio.com/Petroleum_gas_barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Petroleum_gas_barrel.png/32px-Petroleum_gas_barrel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Petroleum_gas_barrel.png/48px-Petroleum_gas_barrel.png",
                "https://wiki.factorio.com/images/Petroleum_gas_barrel.png"
              ]
            },
            {
              "title": "Light oil barrel",
              "internalName": null,
              "href": "https://wiki.factorio.com/Light_oil_barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Light_oil_barrel.png/32px-Light_oil_barrel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Light_oil_barrel.png/48px-Light_oil_barrel.png",
                "https://wiki.factorio.com/images/Light_oil_barrel.png"
              ]
            },
            {
              "title": "Heavy oil barrel",
              "internalName": null,
              "href": "https://wiki.factorio.com/Heavy_oil_barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Heavy_oil_barrel.png/32px-Heavy_oil_barrel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Heavy_oil_barrel.png/48px-Heavy_oil_barrel.png",
                "https://wiki.factorio.com/images/Heavy_oil_barrel.png"
              ]
            },
            {
              "title": "Lubricant barrel",
              "internalName": null,
              "href": "https://wiki.factorio.com/Lubricant_barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lubricant_barrel.png/32px-Lubricant_barrel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Lubricant_barrel.png/48px-Lubricant_barrel.png",
                "https://wiki.factorio.com/images/Lubricant_barrel.png"
              ]
            },
            {
              "title": "Sulfuric acid barrel",
              "internalName": null,
              "href": "https://wiki.factorio.com/Sulfuric_acid_barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Sulfuric_acid_barrel.png/32px-Sulfuric_acid_barrel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Sulfuric_acid_barrel.png/48px-Sulfuric_acid_barrel.png",
                "https://wiki.factorio.com/images/Sulfuric_acid_barrel.png"
              ]
            },
            {
              "title": "Fluoroketone (hot) barrel",
              "internalName": null,
              "href": "https://wiki.factorio.com/Fluoroketone_(hot)_barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fluoroketone_%28hot%29_barrel.png/32px-Fluoroketone_%28hot%29_barrel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Fluoroketone_%28hot%29_barrel.png/48px-Fluoroketone_%28hot%29_barrel.png",
                "https://wiki.factorio.com/images/Fluoroketone_%28hot%29_barrel.png"
              ]
            },
            {
              "title": "Fluoroketone (cold) barrel",
              "internalName": null,
              "href": "https://wiki.factorio.com/Fluoroketone_(cold)_barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fluoroketone_%28cold%29_barrel.png/32px-Fluoroketone_%28cold%29_barrel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Fluoroketone_%28cold%29_barrel.png/48px-Fluoroketone_%28cold%29_barrel.png",
                "https://wiki.factorio.com/images/Fluoroketone_%28cold%29_barrel.png"
              ]
            },
            null
          ]
        },
        {
          "items": [
            {
              "title": "Iron gear wheel",
              "internalName": "iron-gear-wheel",
              "href": "https://wiki.factorio.com/Iron_gear_wheel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Iron_gear_wheel.png/32px-Iron_gear_wheel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Iron_gear_wheel.png/48px-Iron_gear_wheel.png",
                "https://wiki.factorio.com/images/Iron_gear_wheel.png"
              ]
            },
            {
              "title": "Iron stick",
              "internalName": "iron-stick",
              "href": "https://wiki.factorio.com/Iron_stick",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Iron_stick.png/32px-Iron_stick.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Iron_stick.png/48px-Iron_stick.png",
                "https://wiki.factorio.com/images/Iron_stick.png"
              ]
            },
            {
              "title": "Copper cable",
              "internalName": "copper-cable",
              "href": "https://wiki.factorio.com/Copper_cable",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Copper_cable.png/32px-Copper_cable.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Copper_cable.png/48px-Copper_cable.png",
                "https://wiki.factorio.com/images/Copper_cable.png"
              ]
            },
            {
              "title": "Barrel",
              "internalName": null,
              "href": "https://wiki.factorio.com/Barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Barrel.png/32px-Barrel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Barrel.png/48px-Barrel.png",
                "https://wiki.factorio.com/images/Barrel.png"
              ]
            },
            {
              "title": "Electronic circuit",
              "internalName": "electronic-circuit",
              "href": "https://wiki.factorio.com/Electronic_circuit",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Electronic_circuit.png/32px-Electronic_circuit.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Electronic_circuit.png/48px-Electronic_circuit.png",
                "https://wiki.factorio.com/images/Electronic_circuit.png"
              ]
            },
            {
              "title": "Advanced circuit",
              "internalName": "advanced-circuit",
              "href": "https://wiki.factorio.com/Advanced_circuit",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Advanced_circuit.png/32px-Advanced_circuit.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Advanced_circuit.png/48px-Advanced_circuit.png",
                "https://wiki.factorio.com/images/Advanced_circuit.png"
              ]
            },
            {
              "title": "Processing unit",
              "internalName": "processing-unit",
              "href": "https://wiki.factorio.com/Processing_unit",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Processing_unit.png/32px-Processing_unit.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Processing_unit.png/48px-Processing_unit.png",
                "https://wiki.factorio.com/images/Processing_unit.png"
              ]
            },
            {
              "title": "Engine unit",
              "internalName": "engine-unit",
              "href": "https://wiki.factorio.com/Engine_unit",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Engine_unit.png/32px-Engine_unit.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Engine_unit.png/48px-Engine_unit.png",
                "https://wiki.factorio.com/images/Engine_unit.png"
              ]
            },
            {
              "title": "Electric engine unit",
              "internalName": "electric-engine-unit",
              "href": "https://wiki.factorio.com/Electric_engine_unit",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Electric_engine_unit.png/32px-Electric_engine_unit.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Electric_engine_unit.png/48px-Electric_engine_unit.png",
                "https://wiki.factorio.com/images/Electric_engine_unit.png"
              ]
            },
            {
              "title": "Flying robot frame",
              "internalName": "flying-robot-frame",
              "href": "https://wiki.factorio.com/Flying_robot_frame",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Flying_robot_frame.png/32px-Flying_robot_frame.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Flying_robot_frame.png/48px-Flying_robot_frame.png",
                "https://wiki.factorio.com/images/Flying_robot_frame.png"
              ]
            },
            {
              "title": "Low density structure",
              "internalName": "low-density-structure",
              "href": "https://wiki.factorio.com/Low_density_structure",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Low_density_structure.png/32px-Low_density_structure.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Low_density_structure.png/48px-Low_density_structure.png",
                "https://wiki.factorio.com/images/Low_density_structure.png"
              ]
            },
            {
              "title": "Rocket fuel",
              "internalName": "rocket-fuel",
              "href": "https://wiki.factorio.com/Rocket_fuel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rocket_fuel.png/32px-Rocket_fuel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Rocket_fuel.png/48px-Rocket_fuel.png",
                "https://wiki.factorio.com/images/Rocket_fuel.png"
              ]
            },
            {
              "title": "Rocket part",
              "internalName": "rocket-part",
              "href": "https://wiki.factorio.com/Rocket_part",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rocket_part.png/32px-Rocket_part.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Rocket_part.png/48px-Rocket_part.png",
                "https://wiki.factorio.com/images/Rocket_part.png"
              ]
            },
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Uranium-235",
              "internalName": "uranium-235",
              "href": "https://wiki.factorio.com/Uranium-235",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Uranium-235.png/32px-Uranium-235.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Uranium-235.png/48px-Uranium-235.png",
                "https://wiki.factorio.com/images/Uranium-235.png"
              ]
            },
            {
              "title": "Uranium-238",
              "internalName": "uranium-238",
              "href": "https://wiki.factorio.com/Uranium-238",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Uranium-238.png/32px-Uranium-238.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Uranium-238.png/48px-Uranium-238.png",
                "https://wiki.factorio.com/images/Uranium-238.png"
              ]
            },
            {
              "title": "Uranium fuel cell",
              "internalName": "uranium-fuel-cell",
              "href": "https://wiki.factorio.com/Uranium_fuel_cell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Uranium_fuel_cell.png/32px-Uranium_fuel_cell.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Uranium_fuel_cell.png/48px-Uranium_fuel_cell.png",
                "https://wiki.factorio.com/images/Uranium_fuel_cell.png"
              ]
            },
            {
              "title": "Depleted uranium fuel cell",
              "internalName": "depleted-uranium-fuel-cell",
              "href": "https://wiki.factorio.com/Depleted_uranium_fuel_cell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Depleted_uranium_fuel_cell.png/32px-Depleted_uranium_fuel_cell.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Depleted_uranium_fuel_cell.png/48px-Depleted_uranium_fuel_cell.png",
                "https://wiki.factorio.com/images/Depleted_uranium_fuel_cell.png"
              ]
            },
            {
              "title": "Nuclear fuel",
              "internalName": "nuclear-fuel",
              "href": "https://wiki.factorio.com/Nuclear_fuel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Nuclear_fuel.png/32px-Nuclear_fuel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Nuclear_fuel.png/48px-Nuclear_fuel.png",
                "https://wiki.factorio.com/images/Nuclear_fuel.png"
              ]
            },
            {
              "title": "Uranium processing",
              "internalName": "uranium-processing",
              "href": "https://wiki.factorio.com/Uranium_processing",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Uranium_processing.png/32px-Uranium_processing.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Uranium_processing.png/48px-Uranium_processing.png",
                "https://wiki.factorio.com/images/Uranium_processing.png"
              ]
            },
            {
              "title": "Nuclear fuel reprocessing",
              "internalName": "nuclear-fuel-reprocessing",
              "href": "https://wiki.factorio.com/Nuclear_fuel_reprocessing",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Nuclear_fuel_reprocessing.png/32px-Nuclear_fuel_reprocessing.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Nuclear_fuel_reprocessing.png/48px-Nuclear_fuel_reprocessing.png",
                "https://wiki.factorio.com/images/Nuclear_fuel_reprocessing.png"
              ]
            },
            {
              "title": "Kovarex enrichment process",
              "internalName": "kovarex-enrichment-process",
              "href": "https://wiki.factorio.com/Kovarex_enrichment_process",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Kovarex_enrichment_process.png/32px-Kovarex_enrichment_process.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Kovarex_enrichment_process.png/48px-Kovarex_enrichment_process.png",
                "https://wiki.factorio.com/images/Kovarex_enrichment_process.png"
              ]
            },
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Calcite",
              "internalName": "calcite",
              "href": "https://wiki.factorio.com/Calcite",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Calcite.png/32px-Calcite.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Calcite.png/48px-Calcite.png",
                "https://wiki.factorio.com/images/Calcite.png"
              ]
            },
            {
              "title": "Tungsten ore",
              "internalName": "tungsten-ore",
              "href": "https://wiki.factorio.com/Tungsten_ore",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Tungsten_ore.png/32px-Tungsten_ore.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Tungsten_ore.png/48px-Tungsten_ore.png",
                "https://wiki.factorio.com/images/Tungsten_ore.png"
              ]
            },
            {
              "title": "Tungsten carbide",
              "internalName": "tungsten-carbide",
              "href": "https://wiki.factorio.com/Tungsten_carbide",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Tungsten_carbide.png/32px-Tungsten_carbide.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Tungsten_carbide.png/48px-Tungsten_carbide.png",
                "https://wiki.factorio.com/images/Tungsten_carbide.png"
              ]
            },
            {
              "title": "Tungsten plate",
              "internalName": "tungsten-plate",
              "href": "https://wiki.factorio.com/Tungsten_plate",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Tungsten_plate.png/32px-Tungsten_plate.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Tungsten_plate.png/48px-Tungsten_plate.png",
                "https://wiki.factorio.com/images/Tungsten_plate.png"
              ]
            },
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Scrap",
              "internalName": "scrap",
              "href": "https://wiki.factorio.com/Scrap",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Scrap.png/32px-Scrap.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Scrap.png/48px-Scrap.png",
                "https://wiki.factorio.com/images/Scrap.png"
              ]
            },
            {
              "title": "Holmium ore",
              "internalName": "holmium-ore",
              "href": "https://wiki.factorio.com/Holmium_ore",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Holmium_ore.png/32px-Holmium_ore.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Holmium_ore.png/48px-Holmium_ore.png",
                "https://wiki.factorio.com/images/Holmium_ore.png"
              ]
            },
            {
              "title": "Holmium plate",
              "internalName": "holmium-plate",
              "href": "https://wiki.factorio.com/Holmium_plate",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Holmium_plate.png/32px-Holmium_plate.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Holmium_plate.png/48px-Holmium_plate.png",
                "https://wiki.factorio.com/images/Holmium_plate.png"
              ]
            },
            {
              "title": "Superconductor",
              "internalName": "superconductor",
              "href": "https://wiki.factorio.com/Superconductor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Superconductor.png/32px-Superconductor.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Superconductor.png/48px-Superconductor.png",
                "https://wiki.factorio.com/images/Superconductor.png"
              ]
            },
            {
              "title": "Supercapacitor",
              "internalName": "supercapacitor",
              "href": "https://wiki.factorio.com/Supercapacitor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Supercapacitor.png/32px-Supercapacitor.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Supercapacitor.png/48px-Supercapacitor.png",
                "https://wiki.factorio.com/images/Supercapacitor.png"
              ]
            },
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Yumako seed",
              "internalName": "yumako-seed",
              "href": "https://wiki.factorio.com/Yumako_seed",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Yumako_seed.png/32px-Yumako_seed.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Yumako_seed.png/48px-Yumako_seed.png",
                "https://wiki.factorio.com/images/Yumako_seed.png"
              ]
            },
            {
              "title": "Jellynut seed",
              "internalName": "jellynut-seed",
              "href": "https://wiki.factorio.com/Jellynut_seed",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Jellynut_seed.png/32px-Jellynut_seed.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Jellynut_seed.png/48px-Jellynut_seed.png",
                "https://wiki.factorio.com/images/Jellynut_seed.png"
              ]
            },
            {
              "title": "Tree seed",
              "internalName": "tree-seed",
              "href": "https://wiki.factorio.com/Tree_seed",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Tree_seed.png/32px-Tree_seed.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Tree_seed.png/48px-Tree_seed.png",
                "https://wiki.factorio.com/images/Tree_seed.png"
              ]
            },
            {
              "title": "Yumako",
              "internalName": "yumako",
              "href": "https://wiki.factorio.com/Yumako",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Yumako.png/32px-Yumako.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Yumako.png/48px-Yumako.png",
                "https://wiki.factorio.com/images/Yumako.png"
              ]
            },
            {
              "title": "Jellynut",
              "internalName": "jellynut",
              "href": "https://wiki.factorio.com/Jellynut",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Jellynut.png/32px-Jellynut.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Jellynut.png/48px-Jellynut.png",
                "https://wiki.factorio.com/images/Jellynut.png"
              ]
            },
            {
              "title": "Iron bacteria",
              "internalName": "iron-bacteria",
              "href": "https://wiki.factorio.com/Iron_bacteria",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Iron_bacteria.png/32px-Iron_bacteria.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Iron_bacteria.png/48px-Iron_bacteria.png",
                "https://wiki.factorio.com/images/Iron_bacteria.png"
              ]
            },
            {
              "title": "Copper bacteria",
              "internalName": "copper-bacteria",
              "href": "https://wiki.factorio.com/Copper_bacteria",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Copper_bacteria.png/32px-Copper_bacteria.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Copper_bacteria.png/48px-Copper_bacteria.png",
                "https://wiki.factorio.com/images/Copper_bacteria.png"
              ]
            },
            {
              "title": "Spoilage",
              "internalName": "spoilage",
              "href": "https://wiki.factorio.com/Spoilage",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Spoilage.png/32px-Spoilage.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Spoilage.png/48px-Spoilage.png",
                "https://wiki.factorio.com/images/Spoilage.png"
              ]
            },
            {
              "title": "Nutrients",
              "internalName": "nutrients",
              "href": "https://wiki.factorio.com/Nutrients",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Nutrients.png/32px-Nutrients.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Nutrients.png/48px-Nutrients.png",
                "https://wiki.factorio.com/images/Nutrients.png"
              ]
            },
            null
          ]
        },
        {
          "items": [
            {
              "title": "Bioflux",
              "internalName": "bioflux",
              "href": "https://wiki.factorio.com/Bioflux",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Bioflux.png/32px-Bioflux.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Bioflux.png/48px-Bioflux.png",
                "https://wiki.factorio.com/images/Bioflux.png"
              ]
            },
            {
              "title": "Yumako mash",
              "internalName": "yumako-mash",
              "href": "https://wiki.factorio.com/Yumako_mash",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Yumako_mash.png/32px-Yumako_mash.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Yumako_mash.png/48px-Yumako_mash.png",
                "https://wiki.factorio.com/images/Yumako_mash.png"
              ]
            },
            {
              "title": "Jelly",
              "internalName": "jelly",
              "href": "https://wiki.factorio.com/Jelly",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Jelly.png/32px-Jelly.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Jelly.png/48px-Jelly.png",
                "https://wiki.factorio.com/images/Jelly.png"
              ]
            },
            {
              "title": "Carbon fiber",
              "internalName": "carbon-fiber",
              "href": "https://wiki.factorio.com/Carbon_fiber",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Carbon_fiber.png/32px-Carbon_fiber.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Carbon_fiber.png/48px-Carbon_fiber.png",
                "https://wiki.factorio.com/images/Carbon_fiber.png"
              ]
            },
            {
              "title": "Biter egg",
              "internalName": "biter-egg",
              "href": "https://wiki.factorio.com/Biter_egg",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Biter_egg.png/32px-Biter_egg.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Biter_egg.png/48px-Biter_egg.png",
                "https://wiki.factorio.com/images/Biter_egg.png"
              ]
            },
            {
              "title": "Pentapod egg",
              "internalName": "pentapod-egg",
              "href": "https://wiki.factorio.com/Pentapod_egg",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Pentapod_egg.png/32px-Pentapod_egg.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Pentapod_egg.png/48px-Pentapod_egg.png",
                "https://wiki.factorio.com/images/Pentapod_egg.png"
              ]
            },
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Lithium",
              "internalName": "lithium",
              "href": "https://wiki.factorio.com/Lithium",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lithium.png/32px-Lithium.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Lithium.png/48px-Lithium.png",
                "https://wiki.factorio.com/images/Lithium.png"
              ]
            },
            {
              "title": "Lithium plate",
              "internalName": "lithium-plate",
              "href": "https://wiki.factorio.com/Lithium_plate",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lithium_plate.png/32px-Lithium_plate.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Lithium_plate.png/48px-Lithium_plate.png",
                "https://wiki.factorio.com/images/Lithium_plate.png"
              ]
            },
            {
              "title": "Quantum processor",
              "internalName": "quantum-processor",
              "href": "https://wiki.factorio.com/Quantum_processor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Quantum_processor.png/32px-Quantum_processor.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Quantum_processor.png/48px-Quantum_processor.png",
                "https://wiki.factorio.com/images/Quantum_processor.png"
              ]
            },
            {
              "title": "Fusion power cell",
              "internalName": "fusion-power-cell",
              "href": "https://wiki.factorio.com/Fusion_power_cell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fusion_power_cell.png/32px-Fusion_power_cell.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Fusion_power_cell.png/48px-Fusion_power_cell.png",
                "https://wiki.factorio.com/images/Fusion_power_cell.png"
              ]
            },
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Automation science pack",
              "internalName": "automation-science-pack",
              "href": "https://wiki.factorio.com/Automation_science_pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Automation_science_pack.png/32px-Automation_science_pack.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Automation_science_pack.png/48px-Automation_science_pack.png",
                "https://wiki.factorio.com/images/Automation_science_pack.png"
              ]
            },
            {
              "title": "Logistic science pack",
              "internalName": "logistic-science-pack",
              "href": "https://wiki.factorio.com/Logistic_science_pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Logistic_science_pack.png/32px-Logistic_science_pack.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Logistic_science_pack.png/48px-Logistic_science_pack.png",
                "https://wiki.factorio.com/images/Logistic_science_pack.png"
              ]
            },
            {
              "title": "Military science pack",
              "internalName": "military-science-pack",
              "href": "https://wiki.factorio.com/Military_science_pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Military_science_pack.png/32px-Military_science_pack.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Military_science_pack.png/48px-Military_science_pack.png",
                "https://wiki.factorio.com/images/Military_science_pack.png"
              ]
            },
            {
              "title": "Chemical science pack",
              "internalName": "chemical-science-pack",
              "href": "https://wiki.factorio.com/Chemical_science_pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Chemical_science_pack.png/32px-Chemical_science_pack.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Chemical_science_pack.png/48px-Chemical_science_pack.png",
                "https://wiki.factorio.com/images/Chemical_science_pack.png"
              ]
            },
            {
              "title": "Production science pack",
              "internalName": "production-science-pack",
              "href": "https://wiki.factorio.com/Production_science_pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Production_science_pack.png/32px-Production_science_pack.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Production_science_pack.png/48px-Production_science_pack.png",
                "https://wiki.factorio.com/images/Production_science_pack.png"
              ]
            },
            {
              "title": "Utility science pack",
              "internalName": "utility-science-pack",
              "href": "https://wiki.factorio.com/Utility_science_pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Utility_science_pack.png/32px-Utility_science_pack.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Utility_science_pack.png/48px-Utility_science_pack.png",
                "https://wiki.factorio.com/images/Utility_science_pack.png"
              ]
            },
            {
              "title": "Space science pack",
              "internalName": "space-science-pack",
              "href": "https://wiki.factorio.com/Space_science_pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Space_science_pack.png/32px-Space_science_pack.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Space_science_pack.png/48px-Space_science_pack.png",
                "https://wiki.factorio.com/images/Space_science_pack.png"
              ]
            },
            {
              "title": "Metallurgic science pack",
              "internalName": "metallurgic-science-pack",
              "href": "https://wiki.factorio.com/Metallurgic_science_pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Metallurgic_science_pack.png/32px-Metallurgic_science_pack.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Metallurgic_science_pack.png/48px-Metallurgic_science_pack.png",
                "https://wiki.factorio.com/images/Metallurgic_science_pack.png"
              ]
            },
            {
              "title": "Electromagnetic science pack",
              "internalName": "electromagnetic-science-pack",
              "href": "https://wiki.factorio.com/Electromagnetic_science_pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Electromagnetic_science_pack.png/32px-Electromagnetic_science_pack.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Electromagnetic_science_pack.png/48px-Electromagnetic_science_pack.png",
                "https://wiki.factorio.com/images/Electromagnetic_science_pack.png"
              ]
            },
            {
              "title": "Agricultural science pack",
              "internalName": "agricultural-science-pack",
              "href": "https://wiki.factorio.com/Agricultural_science_pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Agricultural_science_pack.png/32px-Agricultural_science_pack.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Agricultural_science_pack.png/48px-Agricultural_science_pack.png",
                "https://wiki.factorio.com/images/Agricultural_science_pack.png"
              ]
            },
            {
              "title": "Cryogenic science pack",
              "internalName": "cryogenic-science-pack",
              "href": "https://wiki.factorio.com/Cryogenic_science_pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Cryogenic_science_pack.png/32px-Cryogenic_science_pack.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Cryogenic_science_pack.png/48px-Cryogenic_science_pack.png",
                "https://wiki.factorio.com/images/Cryogenic_science_pack.png"
              ]
            },
            {
              "title": "Promethium science pack",
              "internalName": "promethium-science-pack",
              "href": "https://wiki.factorio.com/Promethium_science_pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Promethium_science_pack.png/32px-Promethium_science_pack.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Promethium_science_pack.png/48px-Promethium_science_pack.png",
                "https://wiki.factorio.com/images/Promethium_science_pack.png"
              ]
            },
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        }
      ]
    },
    {
      "name": "Space",
      "iconSrc": "https://wiki.factorio.com/images/thumb/Item-group_space.png/64px-Item-group_space.png",
      "iconSrcset": [
        "https://wiki.factorio.com/images/thumb/Item-group_space.png/96px-Item-group_space.png",
        "https://wiki.factorio.com/images/Item-group_space.png"
      ],
      "rows": [
        {
          "items": [
            {
              "title": "Rocket silo",
              "internalName": "rocket-silo",
              "href": "https://wiki.factorio.com/Rocket_silo",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rocket_silo.png/32px-Rocket_silo.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Rocket_silo.png/48px-Rocket_silo.png",
                "https://wiki.factorio.com/images/Rocket_silo.png"
              ]
            },
            {
              "title": "Cargo landing pad",
              "internalName": "cargo-landing-pad",
              "href": "https://wiki.factorio.com/Cargo_landing_pad",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Cargo_landing_pad.png/32px-Cargo_landing_pad.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Cargo_landing_pad.png/48px-Cargo_landing_pad.png",
                "https://wiki.factorio.com/images/Cargo_landing_pad.png"
              ]
            },
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Space platform foundation",
              "internalName": "space-platform-foundation",
              "href": "https://wiki.factorio.com/Space_platform_foundation",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Space_platform_foundation.png/32px-Space_platform_foundation.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Space_platform_foundation.png/48px-Space_platform_foundation.png",
                "https://wiki.factorio.com/images/Space_platform_foundation.png"
              ]
            },
            {
              "title": "Cargo bay",
              "internalName": "cargo-bay",
              "href": "https://wiki.factorio.com/Cargo_bay",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Cargo_bay.png/32px-Cargo_bay.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Cargo_bay.png/48px-Cargo_bay.png",
                "https://wiki.factorio.com/images/Cargo_bay.png"
              ]
            },
            {
              "title": "Asteroid collector",
              "internalName": "asteroid-collector",
              "href": "https://wiki.factorio.com/Asteroid_collector",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Asteroid_collector.png/32px-Asteroid_collector.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Asteroid_collector.png/48px-Asteroid_collector.png",
                "https://wiki.factorio.com/images/Asteroid_collector.png"
              ]
            },
            {
              "title": "Crusher",
              "internalName": "crusher",
              "href": "https://wiki.factorio.com/Crusher",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Crusher.png/32px-Crusher.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Crusher.png/48px-Crusher.png",
                "https://wiki.factorio.com/images/Crusher.png"
              ]
            },
            {
              "title": "Thruster",
              "internalName": "thruster",
              "href": "https://wiki.factorio.com/Thruster",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Thruster.png/32px-Thruster.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Thruster.png/48px-Thruster.png",
                "https://wiki.factorio.com/images/Thruster.png"
              ]
            },
            {
              "title": "Space platform hub",
              "internalName": "space-platform-hub",
              "href": "https://wiki.factorio.com/Space_platform_hub",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Space_platform_hub.png/32px-Space_platform_hub.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Space_platform_hub.png/48px-Space_platform_hub.png",
                "https://wiki.factorio.com/images/Space_platform_hub.png"
              ]
            },
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Satellite",
              "internalName": "satellite",
              "href": "https://wiki.factorio.com/Satellite",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Satellite.png/32px-Satellite.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Satellite.png/48px-Satellite.png",
                "https://wiki.factorio.com/images/Satellite.png"
              ]
            },
            {
              "title": "Space platform starter pack",
              "internalName": "space-platform-starter-pack",
              "href": "https://wiki.factorio.com/Space_platform_starter_pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Space_platform_hub.png/32px-Space_platform_hub.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Space_platform_hub.png/48px-Space_platform_hub.png",
                "https://wiki.factorio.com/images/Space_platform_hub.png"
              ]
            },
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Metallic asteroid chunk",
              "internalName": "metallic-asteroid-chunk",
              "href": "https://wiki.factorio.com/Metallic_asteroid_chunk",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Metallic_asteroid_chunk.png/32px-Metallic_asteroid_chunk.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Metallic_asteroid_chunk.png/48px-Metallic_asteroid_chunk.png",
                "https://wiki.factorio.com/images/Metallic_asteroid_chunk.png"
              ]
            },
            {
              "title": "Carbonic asteroid chunk",
              "internalName": "carbonic-asteroid-chunk",
              "href": "https://wiki.factorio.com/Carbonic_asteroid_chunk",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Carbonic_asteroid_chunk.png/32px-Carbonic_asteroid_chunk.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Carbonic_asteroid_chunk.png/48px-Carbonic_asteroid_chunk.png",
                "https://wiki.factorio.com/images/Carbonic_asteroid_chunk.png"
              ]
            },
            {
              "title": "Oxide asteroid chunk",
              "internalName": "oxide-asteroid-chunk",
              "href": "https://wiki.factorio.com/Oxide_asteroid_chunk",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Oxide_asteroid_chunk.png/32px-Oxide_asteroid_chunk.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Oxide_asteroid_chunk.png/48px-Oxide_asteroid_chunk.png",
                "https://wiki.factorio.com/images/Oxide_asteroid_chunk.png"
              ]
            },
            {
              "title": "Promethium asteroid chunk",
              "internalName": "promethium-asteroid-chunk",
              "href": "https://wiki.factorio.com/Promethium_asteroid_chunk",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Promethium_asteroid_chunk.png/32px-Promethium_asteroid_chunk.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Promethium_asteroid_chunk.png/48px-Promethium_asteroid_chunk.png",
                "https://wiki.factorio.com/images/Promethium_asteroid_chunk.png"
              ]
            },
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Nauvis",
              "internalName": null,
              "href": "https://wiki.factorio.com/Nauvis",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Nauvis.png/32px-Nauvis.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Nauvis.png/48px-Nauvis.png",
                "https://wiki.factorio.com/images/thumb/Nauvis.png/64px-Nauvis.png"
              ]
            },
            {
              "title": "Vulcanus",
              "internalName": null,
              "href": "https://wiki.factorio.com/Vulcanus",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Vulcanus.png/32px-Vulcanus.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Vulcanus.png/48px-Vulcanus.png",
                "https://wiki.factorio.com/images/thumb/Vulcanus.png/64px-Vulcanus.png"
              ]
            },
            {
              "title": "Gleba",
              "internalName": null,
              "href": "https://wiki.factorio.com/Gleba",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Gleba.png/32px-Gleba.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Gleba.png/48px-Gleba.png",
                "https://wiki.factorio.com/images/thumb/Gleba.png/64px-Gleba.png"
              ]
            },
            {
              "title": "Fulgora",
              "internalName": null,
              "href": "https://wiki.factorio.com/Fulgora",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fulgora.png/32px-Fulgora.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Fulgora.png/48px-Fulgora.png",
                "https://wiki.factorio.com/images/thumb/Fulgora.png/64px-Fulgora.png"
              ]
            },
            {
              "title": "Aquilo",
              "internalName": null,
              "href": "https://wiki.factorio.com/Aquilo",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Aquilo.png/32px-Aquilo.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Aquilo.png/48px-Aquilo.png",
                "https://wiki.factorio.com/images/thumb/Aquilo.png/64px-Aquilo.png"
              ]
            },
            {
              "title": "Solar system edge",
              "internalName": null,
              "href": "https://wiki.factorio.com/Solar_system_edge",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Solar_system_edge.png/32px-Solar_system_edge.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Solar_system_edge.png/48px-Solar_system_edge.png",
                "https://wiki.factorio.com/images/Solar_system_edge.png"
              ]
            },
            {
              "title": "Shattered planet",
              "internalName": null,
              "href": "https://wiki.factorio.com/Shattered_planet",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Shattered_planet.png/32px-Shattered_planet.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Shattered_planet.png/48px-Shattered_planet.png",
                "https://wiki.factorio.com/images/thumb/Shattered_planet.png/64px-Shattered_planet.png"
              ]
            },
            null,
            null,
            null
          ]
        }
      ]
    },
    {
      "name": "Combat",
      "iconSrc": "https://wiki.factorio.com/images/thumb/Item-group_military.png/64px-Item-group_military.png",
      "iconSrcset": [
        "https://wiki.factorio.com/images/thumb/Item-group_military.png/96px-Item-group_military.png",
        "https://wiki.factorio.com/images/Item-group_military.png"
      ],
      "rows": [
        {
          "items": [
            {
              "title": "Pistol",
              "internalName": "pistol",
              "href": "https://wiki.factorio.com/Pistol",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Pistol.png/32px-Pistol.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Pistol.png/48px-Pistol.png",
                "https://wiki.factorio.com/images/Pistol.png"
              ]
            },
            {
              "title": "Submachine gun",
              "internalName": "submachine-gun",
              "href": "https://wiki.factorio.com/Submachine_gun",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Submachine_gun.png/32px-Submachine_gun.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Submachine_gun.png/48px-Submachine_gun.png",
                "https://wiki.factorio.com/images/Submachine_gun.png"
              ]
            },
            {
              "title": "Railgun",
              "internalName": "railgun",
              "href": "https://wiki.factorio.com/Railgun",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Railgun.png/32px-Railgun.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Railgun.png/48px-Railgun.png",
                "https://wiki.factorio.com/images/Railgun.png"
              ]
            },
            {
              "title": "Tesla gun",
              "internalName": "teslagun",
              "href": "https://wiki.factorio.com/Tesla_gun",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Tesla_gun.png/32px-Tesla_gun.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Tesla_gun.png/48px-Tesla_gun.png",
                "https://wiki.factorio.com/images/Tesla_gun.png"
              ]
            },
            {
              "title": "Shotgun",
              "internalName": "shotgun",
              "href": "https://wiki.factorio.com/Shotgun",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Shotgun.png/32px-Shotgun.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Shotgun.png/48px-Shotgun.png",
                "https://wiki.factorio.com/images/Shotgun.png"
              ]
            },
            {
              "title": "Combat shotgun",
              "internalName": "combat-shotgun",
              "href": "https://wiki.factorio.com/Combat_shotgun",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Combat_shotgun.png/32px-Combat_shotgun.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Combat_shotgun.png/48px-Combat_shotgun.png",
                "https://wiki.factorio.com/images/Combat_shotgun.png"
              ]
            },
            {
              "title": "Rocket launcher",
              "internalName": "rocket-launcher",
              "href": "https://wiki.factorio.com/Rocket_launcher",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rocket_launcher.png/32px-Rocket_launcher.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Rocket_launcher.png/48px-Rocket_launcher.png",
                "https://wiki.factorio.com/images/Rocket_launcher.png"
              ]
            },
            {
              "title": "Flamethrower",
              "internalName": "flamethrower",
              "href": "https://wiki.factorio.com/Flamethrower",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Flamethrower.png/32px-Flamethrower.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Flamethrower.png/48px-Flamethrower.png",
                "https://wiki.factorio.com/images/Flamethrower.png"
              ]
            },
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Firearm magazine",
              "internalName": "firearm-magazine",
              "href": "https://wiki.factorio.com/Firearm_magazine",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Firearm_magazine.png/32px-Firearm_magazine.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Firearm_magazine.png/48px-Firearm_magazine.png",
                "https://wiki.factorio.com/images/Firearm_magazine.png"
              ]
            },
            {
              "title": "Piercing rounds magazine",
              "internalName": "piercing-rounds-magazine",
              "href": "https://wiki.factorio.com/Piercing_rounds_magazine",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Piercing_rounds_magazine.png/32px-Piercing_rounds_magazine.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Piercing_rounds_magazine.png/48px-Piercing_rounds_magazine.png",
                "https://wiki.factorio.com/images/Piercing_rounds_magazine.png"
              ]
            },
            {
              "title": "Uranium rounds magazine",
              "internalName": "uranium-rounds-magazine",
              "href": "https://wiki.factorio.com/Uranium_rounds_magazine",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Uranium_rounds_magazine.png/32px-Uranium_rounds_magazine.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Uranium_rounds_magazine.png/48px-Uranium_rounds_magazine.png",
                "https://wiki.factorio.com/images/Uranium_rounds_magazine.png"
              ]
            },
            {
              "title": "Shotgun shells",
              "internalName": "shotgun-shell",
              "href": "https://wiki.factorio.com/Shotgun_shells",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Shotgun_shells.png/32px-Shotgun_shells.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Shotgun_shells.png/48px-Shotgun_shells.png",
                "https://wiki.factorio.com/images/Shotgun_shells.png"
              ]
            },
            {
              "title": "Piercing shotgun shells",
              "internalName": "piercing-shotgun-shell",
              "href": "https://wiki.factorio.com/Piercing_shotgun_shells",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Piercing_shotgun_shells.png/32px-Piercing_shotgun_shells.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Piercing_shotgun_shells.png/48px-Piercing_shotgun_shells.png",
                "https://wiki.factorio.com/images/Piercing_shotgun_shells.png"
              ]
            },
            {
              "title": "Cannon shell",
              "internalName": "cannon-shell",
              "href": "https://wiki.factorio.com/Cannon_shell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Cannon_shell.png/32px-Cannon_shell.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Cannon_shell.png/48px-Cannon_shell.png",
                "https://wiki.factorio.com/images/Cannon_shell.png"
              ]
            },
            {
              "title": "Explosive cannon shell",
              "internalName": "explosive-cannon-shell",
              "href": "https://wiki.factorio.com/Explosive_cannon_shell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Explosive_cannon_shell.png/32px-Explosive_cannon_shell.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Explosive_cannon_shell.png/48px-Explosive_cannon_shell.png",
                "https://wiki.factorio.com/images/Explosive_cannon_shell.png"
              ]
            },
            {
              "title": "Uranium cannon shell",
              "internalName": "uranium-cannon-shell",
              "href": "https://wiki.factorio.com/Uranium_cannon_shell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Uranium_cannon_shell.png/32px-Uranium_cannon_shell.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Uranium_cannon_shell.png/48px-Uranium_cannon_shell.png",
                "https://wiki.factorio.com/images/Uranium_cannon_shell.png"
              ]
            },
            {
              "title": "Explosive uranium cannon shell",
              "internalName": "explosive-uranium-cannon-shell",
              "href": "https://wiki.factorio.com/Explosive_uranium_cannon_shell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Explosive_uranium_cannon_shell.png/32px-Explosive_uranium_cannon_shell.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Explosive_uranium_cannon_shell.png/48px-Explosive_uranium_cannon_shell.png",
                "https://wiki.factorio.com/images/Explosive_uranium_cannon_shell.png"
              ]
            },
            {
              "title": "Artillery shell",
              "internalName": "artillery-shell",
              "href": "https://wiki.factorio.com/Artillery_shell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Artillery_shell.png/32px-Artillery_shell.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Artillery_shell.png/48px-Artillery_shell.png",
                "https://wiki.factorio.com/images/Artillery_shell.png"
              ]
            },
            {
              "title": "Rocket",
              "internalName": "rocket",
              "href": "https://wiki.factorio.com/Rocket",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rocket.png/32px-Rocket.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Rocket.png/48px-Rocket.png",
                "https://wiki.factorio.com/images/Rocket.png"
              ]
            },
            {
              "title": "Explosive rocket",
              "internalName": "explosive-rocket",
              "href": "https://wiki.factorio.com/Explosive_rocket",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Explosive_rocket.png/32px-Explosive_rocket.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Explosive_rocket.png/48px-Explosive_rocket.png",
                "https://wiki.factorio.com/images/Explosive_rocket.png"
              ]
            },
            {
              "title": "Atomic bomb",
              "internalName": "atomic-bomb",
              "href": "https://wiki.factorio.com/Atomic_bomb",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Atomic_bomb.png/32px-Atomic_bomb.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Atomic_bomb.png/48px-Atomic_bomb.png",
                "https://wiki.factorio.com/images/Atomic_bomb.png"
              ]
            },
            {
              "title": "Capture bot rocket",
              "internalName": "capture-robot-rocket",
              "href": "https://wiki.factorio.com/Capture_bot_rocket",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Capture_bot_rocket.png/32px-Capture_bot_rocket.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Capture_bot_rocket.png/48px-Capture_bot_rocket.png",
                "https://wiki.factorio.com/images/Capture_bot_rocket.png"
              ]
            },
            {
              "title": "Flamethrower ammo",
              "internalName": "flamethrower-ammo",
              "href": "https://wiki.factorio.com/Flamethrower_ammo",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Flamethrower_ammo.png/32px-Flamethrower_ammo.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Flamethrower_ammo.png/48px-Flamethrower_ammo.png",
                "https://wiki.factorio.com/images/Flamethrower_ammo.png"
              ]
            },
            {
              "title": "Railgun ammo",
              "internalName": "railgun-ammo",
              "href": "https://wiki.factorio.com/Railgun_ammo",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Railgun_ammo.png/32px-Railgun_ammo.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Railgun_ammo.png/48px-Railgun_ammo.png",
                "https://wiki.factorio.com/images/Railgun_ammo.png"
              ]
            },
            {
              "title": "Tesla ammo",
              "internalName": "tesla-ammo",
              "href": "https://wiki.factorio.com/Tesla_ammo",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Tesla_ammo.png/32px-Tesla_ammo.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Tesla_ammo.png/48px-Tesla_ammo.png",
                "https://wiki.factorio.com/images/Tesla_ammo.png"
              ]
            },
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Grenade",
              "internalName": "grenade",
              "href": "https://wiki.factorio.com/Grenade",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Grenade.png/32px-Grenade.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Grenade.png/48px-Grenade.png",
                "https://wiki.factorio.com/images/Grenade.png"
              ]
            },
            {
              "title": "Cluster grenade",
              "internalName": "cluster-grenade",
              "href": "https://wiki.factorio.com/Cluster_grenade",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Cluster_grenade.png/32px-Cluster_grenade.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Cluster_grenade.png/48px-Cluster_grenade.png",
                "https://wiki.factorio.com/images/Cluster_grenade.png"
              ]
            },
            {
              "title": "Poison capsule",
              "internalName": "poison-capsule",
              "href": "https://wiki.factorio.com/Poison_capsule",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Poison_capsule.png/32px-Poison_capsule.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Poison_capsule.png/48px-Poison_capsule.png",
                "https://wiki.factorio.com/images/Poison_capsule.png"
              ]
            },
            {
              "title": "Slowdown capsule",
              "internalName": "slowdown-capsule",
              "href": "https://wiki.factorio.com/Slowdown_capsule",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Slowdown_capsule.png/32px-Slowdown_capsule.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Slowdown_capsule.png/48px-Slowdown_capsule.png",
                "https://wiki.factorio.com/images/Slowdown_capsule.png"
              ]
            },
            {
              "title": "Defender capsule",
              "internalName": "defender-capsule",
              "href": "https://wiki.factorio.com/Defender_capsule",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Defender_capsule.png/32px-Defender_capsule.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Defender_capsule.png/48px-Defender_capsule.png",
                "https://wiki.factorio.com/images/Defender_capsule.png"
              ]
            },
            {
              "title": "Distractor capsule",
              "internalName": "distractor-capsule",
              "href": "https://wiki.factorio.com/Distractor_capsule",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Distractor_capsule.png/32px-Distractor_capsule.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Distractor_capsule.png/48px-Distractor_capsule.png",
                "https://wiki.factorio.com/images/Distractor_capsule.png"
              ]
            },
            {
              "title": "Destroyer capsule",
              "internalName": "destroyer-capsule",
              "href": "https://wiki.factorio.com/Destroyer_capsule",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Destroyer_capsule.png/32px-Destroyer_capsule.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Destroyer_capsule.png/48px-Destroyer_capsule.png",
                "https://wiki.factorio.com/images/Destroyer_capsule.png"
              ]
            },
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Light armor",
              "internalName": "light-armor",
              "href": "https://wiki.factorio.com/Light_armor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Light_armor.png/32px-Light_armor.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Light_armor.png/48px-Light_armor.png",
                "https://wiki.factorio.com/images/Light_armor.png"
              ]
            },
            {
              "title": "Heavy armor",
              "internalName": "heavy-armor",
              "href": "https://wiki.factorio.com/Heavy_armor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Heavy_armor.png/32px-Heavy_armor.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Heavy_armor.png/48px-Heavy_armor.png",
                "https://wiki.factorio.com/images/Heavy_armor.png"
              ]
            },
            {
              "title": "Modular armor",
              "internalName": "modular-armor",
              "href": "https://wiki.factorio.com/Modular_armor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Modular_armor.png/32px-Modular_armor.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Modular_armor.png/48px-Modular_armor.png",
                "https://wiki.factorio.com/images/Modular_armor.png"
              ]
            },
            {
              "title": "Power armor",
              "internalName": "power-armor",
              "href": "https://wiki.factorio.com/Power_armor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Power_armor.png/32px-Power_armor.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Power_armor.png/48px-Power_armor.png",
                "https://wiki.factorio.com/images/Power_armor.png"
              ]
            },
            {
              "title": "Power armor MK2",
              "internalName": "power-armor-mk2",
              "href": "https://wiki.factorio.com/Power_armor_MK2",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Power_armor_MK2.png/32px-Power_armor_MK2.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Power_armor_MK2.png/48px-Power_armor_MK2.png",
                "https://wiki.factorio.com/images/Power_armor_MK2.png"
              ]
            },
            {
              "title": "Mech armor",
              "internalName": "mech-armor",
              "href": "https://wiki.factorio.com/Mech_armor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Mech_armor.png/32px-Mech_armor.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Mech_armor.png/48px-Mech_armor.png",
                "https://wiki.factorio.com/images/Mech_armor.png"
              ]
            },
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Portable solar panel",
              "internalName": "solar-panel-equipment",
              "href": "https://wiki.factorio.com/Portable_solar_panel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Portable_solar_panel.png/32px-Portable_solar_panel.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Portable_solar_panel.png/48px-Portable_solar_panel.png",
                "https://wiki.factorio.com/images/Portable_solar_panel.png"
              ]
            },
            {
              "title": "Portable fission reactor",
              "internalName": "fission-reactor-equipment",
              "href": "https://wiki.factorio.com/Portable_fission_reactor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Portable_fission_reactor.png/32px-Portable_fission_reactor.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Portable_fission_reactor.png/48px-Portable_fission_reactor.png",
                "https://wiki.factorio.com/images/Portable_fission_reactor.png"
              ]
            },
            {
              "title": "Portable fusion reactor",
              "internalName": "fusion-reactor-equipment",
              "href": "https://wiki.factorio.com/Portable_fusion_reactor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Portable_fusion_reactor.png/32px-Portable_fusion_reactor.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Portable_fusion_reactor.png/48px-Portable_fusion_reactor.png",
                "https://wiki.factorio.com/images/Portable_fusion_reactor.png"
              ]
            },
            {
              "title": "Personal battery",
              "internalName": "battery-equipment",
              "href": "https://wiki.factorio.com/Personal_battery",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Personal_battery.png/32px-Personal_battery.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Personal_battery.png/48px-Personal_battery.png",
                "https://wiki.factorio.com/images/Personal_battery.png"
              ]
            },
            {
              "title": "Personal battery MK2",
              "internalName": "battery-mk2-equipment",
              "href": "https://wiki.factorio.com/Personal_battery_MK2",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Personal_battery_MK2.png/32px-Personal_battery_MK2.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Personal_battery_MK2.png/48px-Personal_battery_MK2.png",
                "https://wiki.factorio.com/images/Personal_battery_MK2.png"
              ]
            },
            {
              "title": "Personal battery MK3",
              "internalName": "battery-mk3-equipment",
              "href": "https://wiki.factorio.com/Personal_battery_MK3",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Personal_battery_MK3.png/32px-Personal_battery_MK3.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Personal_battery_MK3.png/48px-Personal_battery_MK3.png",
                "https://wiki.factorio.com/images/Personal_battery_MK3.png"
              ]
            },
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Belt immunity equipment",
              "internalName": "belt-immunity-equipment",
              "href": "https://wiki.factorio.com/Belt_immunity_equipment",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Belt_immunity_equipment.png/32px-Belt_immunity_equipment.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Belt_immunity_equipment.png/48px-Belt_immunity_equipment.png",
                "https://wiki.factorio.com/images/Belt_immunity_equipment.png"
              ]
            },
            {
              "title": "Exoskeleton",
              "internalName": "exoskeleton-equipment",
              "href": "https://wiki.factorio.com/Exoskeleton",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Exoskeleton.png/32px-Exoskeleton.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Exoskeleton.png/48px-Exoskeleton.png",
                "https://wiki.factorio.com/images/Exoskeleton.png"
              ]
            },
            {
              "title": "Personal roboport",
              "internalName": "personal-roboport-equipment",
              "href": "https://wiki.factorio.com/Personal_roboport",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Personal_roboport.png/32px-Personal_roboport.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Personal_roboport.png/48px-Personal_roboport.png",
                "https://wiki.factorio.com/images/Personal_roboport.png"
              ]
            },
            {
              "title": "Personal roboport MK2",
              "internalName": "personal-roboport-mk2-equipment",
              "href": "https://wiki.factorio.com/Personal_roboport_MK2",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Personal_roboport_MK2.png/32px-Personal_roboport_MK2.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Personal_roboport_MK2.png/48px-Personal_roboport_MK2.png",
                "https://wiki.factorio.com/images/Personal_roboport_MK2.png"
              ]
            },
            {
              "title": "Nightvision",
              "internalName": "night-vision-equipment",
              "href": "https://wiki.factorio.com/Nightvision",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Nightvision.png/32px-Nightvision.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Nightvision.png/48px-Nightvision.png",
                "https://wiki.factorio.com/images/Nightvision.png"
              ]
            },
            {
              "title": "Toolbelt equipment",
              "internalName": "toolbelt-equipment",
              "href": "https://wiki.factorio.com/Toolbelt_equipment",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Toolbelt_equipment.png/32px-Toolbelt_equipment.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Toolbelt_equipment.png/48px-Toolbelt_equipment.png",
                "https://wiki.factorio.com/images/Toolbelt_equipment.png"
              ]
            },
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Energy shield",
              "internalName": "energy-shield-equipment",
              "href": "https://wiki.factorio.com/Energy_shield",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Energy_shield.png/32px-Energy_shield.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Energy_shield.png/48px-Energy_shield.png",
                "https://wiki.factorio.com/images/Energy_shield.png"
              ]
            },
            {
              "title": "Energy shield MK2",
              "internalName": "energy-shield-mk2-equipment",
              "href": "https://wiki.factorio.com/Energy_shield_MK2",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Energy_shield_MK2.png/32px-Energy_shield_MK2.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Energy_shield_MK2.png/48px-Energy_shield_MK2.png",
                "https://wiki.factorio.com/images/Energy_shield_MK2.png"
              ]
            },
            {
              "title": "Personal laser defense",
              "internalName": "personal-laser-defense-equipment",
              "href": "https://wiki.factorio.com/Personal_laser_defense",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Personal_laser_defense.png/32px-Personal_laser_defense.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Personal_laser_defense.png/48px-Personal_laser_defense.png",
                "https://wiki.factorio.com/images/Personal_laser_defense.png"
              ]
            },
            {
              "title": "Discharge defense",
              "internalName": "discharge-defense-equipment",
              "href": "https://wiki.factorio.com/Discharge_defense",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Discharge_defense.png/32px-Discharge_defense.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Discharge_defense.png/48px-Discharge_defense.png",
                "https://wiki.factorio.com/images/Discharge_defense.png"
              ]
            },
            {
              "title": "Discharge defense remote",
              "internalName": "discharge-defense-remote",
              "href": "https://wiki.factorio.com/Discharge_defense_remote",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Discharge_defense_remote.png/32px-Discharge_defense_remote.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Discharge_defense_remote.png/48px-Discharge_defense_remote.png",
                "https://wiki.factorio.com/images/Discharge_defense_remote.png"
              ]
            },
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Wall",
              "internalName": "stone-wall",
              "href": "https://wiki.factorio.com/Wall",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Wall.png/32px-Wall.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Wall.png/48px-Wall.png",
                "https://wiki.factorio.com/images/Wall.png"
              ]
            },
            {
              "title": "Gate",
              "internalName": "gate",
              "href": "https://wiki.factorio.com/Gate",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Gate.png/32px-Gate.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Gate.png/48px-Gate.png",
                "https://wiki.factorio.com/images/Gate.png"
              ]
            },
            {
              "title": "Radar",
              "internalName": "radar",
              "href": "https://wiki.factorio.com/Radar",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Radar.png/32px-Radar.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Radar.png/48px-Radar.png",
                "https://wiki.factorio.com/images/Radar.png"
              ]
            },
            {
              "title": "Land mine",
              "internalName": "land-mine",
              "href": "https://wiki.factorio.com/Land_mine",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Land_mine.png/32px-Land_mine.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Land_mine.png/48px-Land_mine.png",
                "https://wiki.factorio.com/images/Land_mine.png"
              ]
            },
            null,
            null,
            null,
            null,
            null,
            null
          ]
        },
        {
          "items": [
            {
              "title": "Gun turret",
              "internalName": "gun-turret",
              "href": "https://wiki.factorio.com/Gun_turret",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Gun_turret.png/32px-Gun_turret.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Gun_turret.png/48px-Gun_turret.png",
                "https://wiki.factorio.com/images/Gun_turret.png"
              ]
            },
            {
              "title": "Laser turret",
              "internalName": "laser-turret",
              "href": "https://wiki.factorio.com/Laser_turret",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Laser_turret.png/32px-Laser_turret.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Laser_turret.png/48px-Laser_turret.png",
                "https://wiki.factorio.com/images/Laser_turret.png"
              ]
            },
            {
              "title": "Flamethrower turret",
              "internalName": "flamethrower-turret",
              "href": "https://wiki.factorio.com/Flamethrower_turret",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Flamethrower_turret.png/32px-Flamethrower_turret.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Flamethrower_turret.png/48px-Flamethrower_turret.png",
                "https://wiki.factorio.com/images/Flamethrower_turret.png"
              ]
            },
            {
              "title": "Artillery turret",
              "internalName": "artillery-turret",
              "href": "https://wiki.factorio.com/Artillery_turret",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Artillery_turret.png/32px-Artillery_turret.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Artillery_turret.png/48px-Artillery_turret.png",
                "https://wiki.factorio.com/images/Artillery_turret.png"
              ]
            },
            {
              "title": "Artillery targeting remote",
              "internalName": "artillery-targeting-remote",
              "href": "https://wiki.factorio.com/Artillery_targeting_remote",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Artillery_targeting_remote.png/32px-Artillery_targeting_remote.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Artillery_targeting_remote.png/48px-Artillery_targeting_remote.png",
                "https://wiki.factorio.com/images/Artillery_targeting_remote.png"
              ]
            },
            {
              "title": "Rocket turret",
              "internalName": "rocket-turret",
              "href": "https://wiki.factorio.com/Rocket_turret",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rocket_turret.png/32px-Rocket_turret.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Rocket_turret.png/48px-Rocket_turret.png",
                "https://wiki.factorio.com/images/Rocket_turret.png"
              ]
            },
            {
              "title": "Tesla turret",
              "internalName": "tesla-turret",
              "href": "https://wiki.factorio.com/Tesla_turret",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Tesla_turret.png/32px-Tesla_turret.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Tesla_turret.png/48px-Tesla_turret.png",
                "https://wiki.factorio.com/images/Tesla_turret.png"
              ]
            },
            {
              "title": "Railgun turret",
              "internalName": "railgun-turret",
              "href": "https://wiki.factorio.com/Railgun_turret",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Railgun_turret.png/32px-Railgun_turret.png",
              "imgSrcset": [
                "https://wiki.factorio.com/images/thumb/Railgun_turret.png/48px-Railgun_turret.png",
                "https://wiki.factorio.com/images/Railgun_turret.png"
              ]
            },
            null,
            null
          ]
        }
      ]
    }
  ]
};
