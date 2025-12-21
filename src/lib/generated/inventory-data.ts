import { Quality } from "../blueprints/quality";

export interface InventoryItem {
  title: string;
  internalName: string;
  imgSrc: string;
}

export interface Item extends InventoryItem {
  quality: Quality;
}

export interface InventoryRow {
  items: (InventoryItem | null)[];
}

export interface InventoryTab {
  name: string;
  iconSrc: string;
  rows: InventoryRow[];
}

export interface InventoryData {
  tabs: InventoryTab[];
}

export const inventoryData: InventoryData = {
  "tabs": [
    {
      "name": "Logistics",
      "iconSrc": "https://wiki.factorio.com/images/Item-group_logistics.png",
      "rows": [
        {
          "items": [
            {
              "title": "Wooden chest",
              "internalName": "wooden-chest",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Wooden_chest.png/48px-Wooden_chest.png"
            },
            {
              "title": "Iron chest",
              "internalName": "iron-chest",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Iron_chest.png/48px-Iron_chest.png"
            },
            {
              "title": "Steel chest",
              "internalName": "steel-chest",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Steel_chest.png/48px-Steel_chest.png"
            },
            {
              "title": "Storage tank",
              "internalName": "storage-tank",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Storage_tank.png/48px-Storage_tank.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Transport_belt.png/48px-Transport_belt.png"
            },
            {
              "title": "Fast transport belt",
              "internalName": "fast-transport-belt",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fast_transport_belt.png/48px-Fast_transport_belt.png"
            },
            {
              "title": "Express transport belt",
              "internalName": "express-transport-belt",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Express_transport_belt.png/48px-Express_transport_belt.png"
            },
            {
              "title": "Turbo transport belt",
              "internalName": "turbo-transport-belt",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Turbo_transport_belt.png/48px-Turbo_transport_belt.png"
            },
            {
              "title": "Underground belt",
              "internalName": "underground-belt",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Underground_belt.png/48px-Underground_belt.png"
            },
            {
              "title": "Fast underground belt",
              "internalName": "fast-underground-belt",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fast_underground_belt.png/48px-Fast_underground_belt.png"
            },
            {
              "title": "Express underground belt",
              "internalName": "express-underground-belt",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Express_underground_belt.png/48px-Express_underground_belt.png"
            },
            {
              "title": "Turbo underground belt",
              "internalName": "turbo-underground-belt",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Turbo_underground_belt.png/48px-Turbo_underground_belt.png"
            },
            {
              "title": "Splitter",
              "internalName": "splitter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Splitter.png/48px-Splitter.png"
            },
            {
              "title": "Fast splitter",
              "internalName": "fast-splitter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fast_splitter.png/48px-Fast_splitter.png"
            },
            {
              "title": "Express splitter",
              "internalName": "express-splitter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Express_splitter.png/48px-Express_splitter.png"
            },
            {
              "title": "Turbo splitter",
              "internalName": "turbo-splitter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Turbo_splitter.png/48px-Turbo_splitter.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Burner_inserter.png/48px-Burner_inserter.png"
            },
            {
              "title": "Inserter",
              "internalName": "inserter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Inserter.png/48px-Inserter.png"
            },
            {
              "title": "Long-handed inserter",
              "internalName": "long-handed-inserter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Long-handed_inserter.png/48px-Long-handed_inserter.png"
            },
            {
              "title": "Fast inserter",
              "internalName": "fast-inserter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fast_inserter.png/48px-Fast_inserter.png"
            },
            {
              "title": "Bulk inserter",
              "internalName": "bulk-inserter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Bulk_inserter.png/48px-Bulk_inserter.png"
            },
            {
              "title": "Stack inserter",
              "internalName": "stack-inserter",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Stack_inserter.png/48px-Stack_inserter.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Small_electric_pole.png/48px-Small_electric_pole.png"
            },
            {
              "title": "Medium electric pole",
              "internalName": "medium-electric-pole",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Medium_electric_pole.png/48px-Medium_electric_pole.png"
            },
            {
              "title": "Big electric pole",
              "internalName": "big-electric-pole",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Big_electric_pole.png/48px-Big_electric_pole.png"
            },
            {
              "title": "Substation",
              "internalName": "substation",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Substation.png/48px-Substation.png"
            },
            {
              "title": "Pipe",
              "internalName": "pipe",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Pipe.png/48px-Pipe.png"
            },
            {
              "title": "Pipe to ground",
              "internalName": "pipe-to-ground",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Pipe_to_ground.png/48px-Pipe_to_ground.png"
            },
            {
              "title": "Pump",
              "internalName": "pump",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Pump.png/48px-Pump.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Straight_rail.png/48px-Straight_rail.png"
            },
            {
              "title": "Rail ramp",
              "internalName": "rail-ramp",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rail_ramp.png/48px-Rail_ramp.png"
            },
            {
              "title": "Rail support",
              "internalName": "rail-support",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rail_support.png/48px-Rail_support.png"
            },
            {
              "title": "Train stop",
              "internalName": "train-stop",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Train_stop.png/48px-Train_stop.png"
            },
            {
              "title": "Rail signal",
              "internalName": "rail-signal",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rail_signal.png/48px-Rail_signal.png"
            },
            {
              "title": "Rail chain signal",
              "internalName": "rail-chain-signal",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rail_chain_signal.png/48px-Rail_chain_signal.png"
            },
            {
              "title": "Locomotive",
              "internalName": "locomotive",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Locomotive.png/48px-Locomotive.png"
            },
            {
              "title": "Cargo wagon",
              "internalName": "cargo-wagon",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Cargo_wagon.png/48px-Cargo_wagon.png"
            },
            {
              "title": "Fluid wagon",
              "internalName": "fluid-wagon",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fluid_wagon.png/48px-Fluid_wagon.png"
            },
            {
              "title": "Artillery wagon",
              "internalName": "artillery-wagon",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Artillery_wagon.png/48px-Artillery_wagon.png"
            }
          ]
        },
        {
          "items": [
            {
              "title": "Car",
              "internalName": "car",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Car.png/48px-Car.png"
            },
            {
              "title": "Tank",
              "internalName": "tank",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Tank.png/48px-Tank.png"
            },
            {
              "title": "Spidertron",
              "internalName": "spidertron",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Spidertron.png/48px-Spidertron.png"
            },
            {
              "title": "Spidertron remote",
              "internalName": "spidertron-remote",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Spidertron_remote.png/48px-Spidertron_remote.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Logistic_robot.png/48px-Logistic_robot.png"
            },
            {
              "title": "Construction robot",
              "internalName": "construction-robot",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Construction_robot.png/48px-Construction_robot.png"
            },
            {
              "title": "Active provider chest",
              "internalName": "active-provider-chest",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Active_provider_chest.png/48px-Active_provider_chest.png"
            },
            {
              "title": "Passive provider chest",
              "internalName": "passive-provider-chest",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Passive_provider_chest.png/48px-Passive_provider_chest.png"
            },
            {
              "title": "Storage chest",
              "internalName": "storage-chest",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Storage_chest.png/48px-Storage_chest.png"
            },
            {
              "title": "Buffer chest",
              "internalName": "buffer-chest",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Buffer_chest.png/48px-Buffer_chest.png"
            },
            {
              "title": "Requester chest",
              "internalName": "requester-chest",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Requester_chest.png/48px-Requester_chest.png"
            },
            {
              "title": "Roboport",
              "internalName": "roboport",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Roboport.png/48px-Roboport.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lamp.png/48px-Lamp.png"
            },
            {
              "title": "Red wire",
              "internalName": "red-wire",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Red_wire.png/48px-Red_wire.png"
            },
            {
              "title": "Green wire",
              "internalName": "green-wire",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Green_wire.png/48px-Green_wire.png"
            },
            {
              "title": "Arithmetic combinator",
              "internalName": "arithmetic-combinator",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Arithmetic_combinator.png/48px-Arithmetic_combinator.png"
            },
            {
              "title": "Decider combinator",
              "internalName": "decider-combinator",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Decider_combinator.png/48px-Decider_combinator.png"
            },
            {
              "title": "Selector combinator",
              "internalName": "selector-combinator",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Selector_combinator.png/48px-Selector_combinator.png"
            },
            {
              "title": "Constant combinator",
              "internalName": "constant-combinator",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Constant_combinator.png/48px-Constant_combinator.png"
            },
            {
              "title": "Power switch",
              "internalName": "power-switch",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Power_switch.png/48px-Power_switch.png"
            },
            {
              "title": "Programmable speaker",
              "internalName": "programmable-speaker",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Programmable_speaker.png/48px-Programmable_speaker.png"
            },
            {
              "title": "Display panel",
              "internalName": "display-panel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Display_panel.png/48px-Display_panel.png"
            }
          ]
        },
        {
          "items": [
            {
              "title": "Stone brick",
              "internalName": "stone-brick",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Stone_brick.png/48px-Stone_brick.png"
            },
            {
              "title": "Concrete",
              "internalName": "concrete",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Concrete.png/48px-Concrete.png"
            },
            {
              "title": "Hazard concrete",
              "internalName": "hazard-concrete",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Hazard_concrete.png/48px-Hazard_concrete.png"
            },
            {
              "title": "Refined concrete",
              "internalName": "refined-concrete",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Refined_concrete.png/48px-Refined_concrete.png"
            },
            {
              "title": "Refined hazard concrete",
              "internalName": "refined-hazard-concrete",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Refined_hazard_concrete.png/48px-Refined_hazard_concrete.png"
            },
            {
              "title": "Landfill",
              "internalName": "landfill",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Landfill.png/48px-Landfill.png"
            },
            {
              "title": "Artificial yumako soil",
              "internalName": "artificial-yumako-soil",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Artificial_yumako_soil.png/48px-Artificial_yumako_soil.png"
            },
            {
              "title": "Overgrowth yumako soil",
              "internalName": "overgrowth-yumako-soil",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Overgrowth_yumako_soil.png/48px-Overgrowth_yumako_soil.png"
            },
            {
              "title": "Artificial jellynut soil",
              "internalName": "artificial-jellynut-soil",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Artificial_jellynut_soil.png/48px-Artificial_jellynut_soil.png"
            },
            {
              "title": "Overgrowth jellynut soil",
              "internalName": "overgrowth-jellynut-soil",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Overgrowth_jellynut_soil.png/48px-Overgrowth_jellynut_soil.png"
            },
            {
              "title": "Ice platform",
              "internalName": "ice-platform",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Ice_platform.png/48px-Ice_platform.png"
            },
            {
              "title": "Foundation",
              "internalName": "foundation",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Foundation.png/48px-Foundation.png"
            },
            {
              "title": "Cliff explosives",
              "internalName": "cliff-explosives",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Cliff_explosives.png/48px-Cliff_explosives.png"
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
      "iconSrc": "https://wiki.factorio.com/images/Item-group_production.png",
      "rows": [
        {
          "items": [
            {
              "title": "Repair pack",
              "internalName": "repair-pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Repair_pack.png/48px-Repair_pack.png"
            },
            {
              "title": "Blueprint",
              "internalName": "blueprint",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Blueprint.png/48px-Blueprint.png"
            },
            {
              "title": "Deconstruction planner",
              "internalName": "deconstruction-planner",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Deconstruction_planner.png/48px-Deconstruction_planner.png"
            },
            {
              "title": "Upgrade planner",
              "internalName": "upgrade-planner",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Upgrade_planner.png/48px-Upgrade_planner.png"
            },
            {
              "title": "Blueprint book",
              "internalName": "blueprint-book",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Blueprint_book.png/48px-Blueprint_book.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Boiler.png/48px-Boiler.png"
            },
            {
              "title": "Steam engine",
              "internalName": "steam-engine",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Steam_engine.png/48px-Steam_engine.png"
            },
            {
              "title": "Solar panel",
              "internalName": "solar-panel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Solar_panel.png/48px-Solar_panel.png"
            },
            {
              "title": "Accumulator",
              "internalName": "accumulator",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Accumulator.png/48px-Accumulator.png"
            },
            {
              "title": "Nuclear reactor",
              "internalName": "nuclear-reactor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Nuclear_reactor.png/48px-Nuclear_reactor.png"
            },
            {
              "title": "Heat pipe",
              "internalName": "heat-pipe",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Heat_pipe.png/48px-Heat_pipe.png"
            },
            {
              "title": "Heat exchanger",
              "internalName": "heat-exchanger",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Heat_exchanger.png/48px-Heat_exchanger.png"
            },
            {
              "title": "Steam turbine",
              "internalName": "steam-turbine",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Steam_turbine.png/48px-Steam_turbine.png"
            },
            {
              "title": "Fusion reactor",
              "internalName": "fusion-reactor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fusion_reactor.png/48px-Fusion_reactor.png"
            },
            {
              "title": "Fusion generator",
              "internalName": "fusion-generator",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fusion_generator.png/48px-Fusion_generator.png"
            }
          ]
        },
        {
          "items": [
            {
              "title": "Burner mining drill",
              "internalName": "burner-mining-drill",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Burner_mining_drill.png/48px-Burner_mining_drill.png"
            },
            {
              "title": "Electric mining drill",
              "internalName": "electric-mining-drill",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Electric_mining_drill.png/48px-Electric_mining_drill.png"
            },
            {
              "title": "Big mining drill",
              "internalName": "big-mining-drill",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Big_mining_drill.png/48px-Big_mining_drill.png"
            },
            {
              "title": "Offshore pump",
              "internalName": "offshore-pump",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Offshore_pump.png/48px-Offshore_pump.png"
            },
            {
              "title": "Pumpjack",
              "internalName": "pumpjack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Pumpjack.png/48px-Pumpjack.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Stone_furnace.png/48px-Stone_furnace.png"
            },
            {
              "title": "Steel furnace",
              "internalName": "steel-furnace",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Steel_furnace.png/48px-Steel_furnace.png"
            },
            {
              "title": "Electric furnace",
              "internalName": "electric-furnace",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Electric_furnace.png/48px-Electric_furnace.png"
            },
            {
              "title": "Foundry",
              "internalName": "foundry",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Foundry.png/48px-Foundry.png"
            },
            {
              "title": "Recycler",
              "internalName": "recycler",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Recycler.png/48px-Recycler.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Agricultural_tower.png/48px-Agricultural_tower.png"
            },
            {
              "title": "Biochamber",
              "internalName": "biochamber",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Biochamber.png/48px-Biochamber.png"
            },
            {
              "title": "Captive biter spawner",
              "internalName": "captive-biter-spawner",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Captive_biter_spawner.png/48px-Captive_biter_spawner.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Assembling_machine_1.png/48px-Assembling_machine_1.png"
            },
            {
              "title": "Assembling machine 2",
              "internalName": "assembling-machine-2",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Assembling_machine_2.png/48px-Assembling_machine_2.png"
            },
            {
              "title": "Assembling machine 3",
              "internalName": "assembling-machine-3",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Assembling_machine_3.png/48px-Assembling_machine_3.png"
            },
            {
              "title": "Oil refinery",
              "internalName": "oil-refinery",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Oil_refinery.png/48px-Oil_refinery.png"
            },
            {
              "title": "Chemical plant",
              "internalName": "chemical-plant",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Chemical_plant.png/48px-Chemical_plant.png"
            },
            {
              "title": "Centrifuge",
              "internalName": "centrifuge",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Centrifuge.png/48px-Centrifuge.png"
            },
            {
              "title": "Electromagnetic plant",
              "internalName": "electromagnetic-plant",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Electromagnetic_plant.png/48px-Electromagnetic_plant.png"
            },
            {
              "title": "Cryogenic plant",
              "internalName": "cryogenic-plant",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Cryogenic_plant.png/48px-Cryogenic_plant.png"
            },
            {
              "title": "Lab",
              "internalName": "lab",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lab.png/48px-Lab.png"
            },
            {
              "title": "Biolab",
              "internalName": "biolab",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Biolab.png/48px-Biolab.png"
            }
          ]
        },
        {
          "items": [
            {
              "title": "Lightning rod",
              "internalName": "lightning-rod",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lightning_rod.png/48px-Lightning_rod.png"
            },
            {
              "title": "Lightning collector",
              "internalName": "lightning-collector",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lightning_collector.png/48px-Lightning_collector.png"
            },
            {
              "title": "Heating tower",
              "internalName": "heating-tower",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Heating_tower.png/48px-Heating_tower.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Beacon.png/48px-Beacon.png"
            },
            {
              "title": "Speed module",
              "internalName": "speed-module",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Speed_module.png/48px-Speed_module.png"
            },
            {
              "title": "Speed module 2",
              "internalName": "speed-module-2",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Speed_module_2.png/48px-Speed_module_2.png"
            },
            {
              "title": "Speed module 3",
              "internalName": "speed-module-3",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Speed_module_3.png/48px-Speed_module_3.png"
            },
            {
              "title": "Efficiency module",
              "internalName": "efficiency-module",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Efficiency_module.png/48px-Efficiency_module.png"
            },
            {
              "title": "Efficiency module 2",
              "internalName": "efficiency-module-2",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Efficiency_module_2.png/48px-Efficiency_module_2.png"
            },
            {
              "title": "Efficiency module 3",
              "internalName": "efficiency-module-3",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Efficiency_module_3.png/48px-Efficiency_module_3.png"
            },
            {
              "title": "Productivity module",
              "internalName": "productivity-module",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Productivity_module.png/48px-Productivity_module.png"
            },
            {
              "title": "Productivity module 2",
              "internalName": "productivity-module-2",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Productivity_module_2.png/48px-Productivity_module_2.png"
            },
            {
              "title": "Productivity module 3",
              "internalName": "productivity-module-3",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Productivity_module_3.png/48px-Productivity_module_3.png"
            },
            {
              "title": "Quality module",
              "internalName": "quality-module",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Quality_module.png/48px-Quality_module.png"
            },
            {
              "title": "Quality module 2",
              "internalName": "quality-module-2",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Quality_module_2.png/48px-Quality_module_2.png"
            },
            {
              "title": "Quality module 3",
              "internalName": "quality-module-3",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Quality_module_3.png/48px-Quality_module_3.png"
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
      "iconSrc": "https://wiki.factorio.com/images/Item-group_intermediate_products.png",
      "rows": [
        {
          "items": [
            {
              "title": "Water",
              "internalName": "water",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Water.png/48px-Water.png"
            },
            {
              "title": "Steam",
              "internalName": "steam",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Steam.png/48px-Steam.png"
            },
            {
              "title": "Crude oil",
              "internalName": "crude-oil",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Crude_oil.png/48px-Crude_oil.png"
            },
            {
              "title": "Heavy oil",
              "internalName": "heavy-oil",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Heavy_oil.png/48px-Heavy_oil.png"
            },
            {
              "title": "Light oil",
              "internalName": "light-oil",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Light_oil.png/48px-Light_oil.png"
            },
            {
              "title": "Lubricant",
              "internalName": "lubricant",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lubricant.png/48px-Lubricant.png"
            },
            {
              "title": "Petroleum gas",
              "internalName": "petroleum-gas",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Petroleum_gas.png/48px-Petroleum_gas.png"
            },
            {
              "title": "Sulfuric acid",
              "internalName": "sulfuric-acid",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Sulfuric_acid.png/48px-Sulfuric_acid.png"
            },
            {
              "title": "Thruster fuel",
              "internalName": "thruster-fuel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Thruster_fuel.png/48px-Thruster_fuel.png"
            },
            {
              "title": "Thruster oxidizer",
              "internalName": "thruster-oxidizer",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Thruster_oxidizer.png/48px-Thruster_oxidizer.png"
            },
            {
              "title": "Lava",
              "internalName": "lava",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lava.png/48px-Lava.png"
            },
            {
              "title": "Molten iron",
              "internalName": "molten-iron",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Molten_iron.png/48px-Molten_iron.png"
            },
            {
              "title": "Molten copper",
              "internalName": "molten-copper",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Molten_copper.png/48px-Molten_copper.png"
            },
            {
              "title": "Holmium solution",
              "internalName": "holmium-solution",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Holmium_solution.png/48px-Holmium_solution.png"
            },
            {
              "title": "Electrolyte",
              "internalName": "electrolyte",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Electrolyte.png/48px-Electrolyte.png"
            },
            {
              "title": "Ammoniacal solution",
              "internalName": "ammoniacal-solution",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Ammoniacal_solution.png/48px-Ammoniacal_solution.png"
            },
            {
              "title": "Ammonia",
              "internalName": "ammonia",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Ammonia.png/48px-Ammonia.png"
            },
            {
              "title": "Fluorine",
              "internalName": "fluorine",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fluorine.png/48px-Fluorine.png"
            },
            {
              "title": "Fluoroketone (hot)",
              "internalName": "fluoroketone-hot",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fluoroketone_%28hot%29.png/48px-Fluoroketone_%28hot%29.png"
            },
            {
              "title": "Fluoroketone (cold)",
              "internalName": "fluoroketone-cold",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fluoroketone_%28cold%29.png/48px-Fluoroketone_%28cold%29.png"
            },
            {
              "title": "Lithium brine",
              "internalName": "lithium-brine",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lithium_brine.png/48px-Lithium_brine.png"
            },
            {
              "title": "Plasma",
              "internalName": "fusion-plasma",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Plasma.png/48px-Plasma.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Wood.png/48px-Wood.png"
            },
            {
              "title": "Coal",
              "internalName": "coal",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Coal.png/48px-Coal.png"
            },
            {
              "title": "Stone",
              "internalName": "stone",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Stone.png/48px-Stone.png"
            },
            {
              "title": "Iron ore",
              "internalName": "iron-ore",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Iron_ore.png/48px-Iron_ore.png"
            },
            {
              "title": "Copper ore",
              "internalName": "copper-ore",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Copper_ore.png/48px-Copper_ore.png"
            },
            {
              "title": "Uranium ore",
              "internalName": "uranium-ore",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Uranium_ore.png/48px-Uranium_ore.png"
            },
            {
              "title": "Raw fish",
              "internalName": "raw-fish",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Raw_fish.png/48px-Raw_fish.png"
            },
            {
              "title": "Ice",
              "internalName": "ice",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Ice.png/48px-Ice.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Iron_plate.png/48px-Iron_plate.png"
            },
            {
              "title": "Copper plate",
              "internalName": "copper-plate",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Copper_plate.png/48px-Copper_plate.png"
            },
            {
              "title": "Steel plate",
              "internalName": "steel-plate",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Steel_plate.png/48px-Steel_plate.png"
            },
            {
              "title": "Solid fuel",
              "internalName": "solid-fuel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Solid_fuel.png/48px-Solid_fuel.png"
            },
            {
              "title": "Plastic bar",
              "internalName": "plastic-bar",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Plastic_bar.png/48px-Plastic_bar.png"
            },
            {
              "title": "Sulfur",
              "internalName": "sulfur",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Sulfur.png/48px-Sulfur.png"
            },
            {
              "title": "Battery",
              "internalName": "battery",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Battery.png/48px-Battery.png"
            },
            {
              "title": "Explosives",
              "internalName": "explosives",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Explosives.png/48px-Explosives.png"
            },
            {
              "title": "Carbon",
              "internalName": "carbon",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Carbon.png/48px-Carbon.png"
            },
            {
              "title": "Coal synthesis",
              "internalName": "coal-synthesis",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Coal_synthesis.png/48px-Coal_synthesis.png"
            }
          ]
        },
        {
          "items": [
            {
              "title": "Water barrel",
              "internalName": "water-barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Water_barrel.png/48px-Water_barrel.png"
            },
            {
              "title": "Crude oil barrel",
              "internalName": "crude-oil-barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Crude_oil_barrel.png/48px-Crude_oil_barrel.png"
            },
            {
              "title": "Petroleum gas barrel",
              "internalName": "petroleum-gas-barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Petroleum_gas_barrel.png/48px-Petroleum_gas_barrel.png"
            },
            {
              "title": "Light oil barrel",
              "internalName": "light-oil-barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Light_oil_barrel.png/48px-Light_oil_barrel.png"
            },
            {
              "title": "Heavy oil barrel",
              "internalName": "heavy-oil-barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Heavy_oil_barrel.png/48px-Heavy_oil_barrel.png"
            },
            {
              "title": "Lubricant barrel",
              "internalName": "lubricant-barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lubricant_barrel.png/48px-Lubricant_barrel.png"
            },
            {
              "title": "Sulfuric acid barrel",
              "internalName": "sulfuric-acid-barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Sulfuric_acid_barrel.png/48px-Sulfuric_acid_barrel.png"
            },
            {
              "title": "Fluoroketone (hot) barrel",
              "internalName": "fluoroketone-hot-barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fluoroketone_%28hot%29_barrel.png/48px-Fluoroketone_%28hot%29_barrel.png"
            },
            {
              "title": "Fluoroketone (cold) barrel",
              "internalName": "fluoroketone-cold-barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fluoroketone_%28cold%29_barrel.png/48px-Fluoroketone_%28cold%29_barrel.png"
            },
            null
          ]
        },
        {
          "items": [
            {
              "title": "Iron gear wheel",
              "internalName": "iron-gear-wheel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Iron_gear_wheel.png/48px-Iron_gear_wheel.png"
            },
            {
              "title": "Iron stick",
              "internalName": "iron-stick",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Iron_stick.png/48px-Iron_stick.png"
            },
            {
              "title": "Copper cable",
              "internalName": "copper-cable",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Copper_cable.png/48px-Copper_cable.png"
            },
            {
              "title": "Barrel",
              "internalName": "barrel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Barrel.png/48px-Barrel.png"
            },
            {
              "title": "Electronic circuit",
              "internalName": "electronic-circuit",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Electronic_circuit.png/48px-Electronic_circuit.png"
            },
            {
              "title": "Advanced circuit",
              "internalName": "advanced-circuit",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Advanced_circuit.png/48px-Advanced_circuit.png"
            },
            {
              "title": "Processing unit",
              "internalName": "processing-unit",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Processing_unit.png/48px-Processing_unit.png"
            },
            {
              "title": "Engine unit",
              "internalName": "engine-unit",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Engine_unit.png/48px-Engine_unit.png"
            },
            {
              "title": "Electric engine unit",
              "internalName": "electric-engine-unit",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Electric_engine_unit.png/48px-Electric_engine_unit.png"
            },
            {
              "title": "Flying robot frame",
              "internalName": "flying-robot-frame",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Flying_robot_frame.png/48px-Flying_robot_frame.png"
            },
            {
              "title": "Low density structure",
              "internalName": "low-density-structure",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Low_density_structure.png/48px-Low_density_structure.png"
            },
            {
              "title": "Rocket fuel",
              "internalName": "rocket-fuel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rocket_fuel.png/48px-Rocket_fuel.png"
            },
            {
              "title": "Rocket part",
              "internalName": "rocket-part",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rocket_part.png/48px-Rocket_part.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Uranium-235.png/48px-Uranium-235.png"
            },
            {
              "title": "Uranium-238",
              "internalName": "uranium-238",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Uranium-238.png/48px-Uranium-238.png"
            },
            {
              "title": "Uranium fuel cell",
              "internalName": "uranium-fuel-cell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Uranium_fuel_cell.png/48px-Uranium_fuel_cell.png"
            },
            {
              "title": "Depleted uranium fuel cell",
              "internalName": "depleted-uranium-fuel-cell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Depleted_uranium_fuel_cell.png/48px-Depleted_uranium_fuel_cell.png"
            },
            {
              "title": "Nuclear fuel",
              "internalName": "nuclear-fuel",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Nuclear_fuel.png/48px-Nuclear_fuel.png"
            },
            {
              "title": "Uranium processing",
              "internalName": "uranium-processing",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Uranium_processing.png/48px-Uranium_processing.png"
            },
            {
              "title": "Nuclear fuel reprocessing",
              "internalName": "nuclear-fuel-reprocessing",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Nuclear_fuel_reprocessing.png/48px-Nuclear_fuel_reprocessing.png"
            },
            {
              "title": "Kovarex enrichment process",
              "internalName": "kovarex-enrichment-process",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Kovarex_enrichment_process.png/48px-Kovarex_enrichment_process.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Calcite.png/48px-Calcite.png"
            },
            {
              "title": "Tungsten ore",
              "internalName": "tungsten-ore",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Tungsten_ore.png/48px-Tungsten_ore.png"
            },
            {
              "title": "Tungsten carbide",
              "internalName": "tungsten-carbide",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Tungsten_carbide.png/48px-Tungsten_carbide.png"
            },
            {
              "title": "Tungsten plate",
              "internalName": "tungsten-plate",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Tungsten_plate.png/48px-Tungsten_plate.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Scrap.png/48px-Scrap.png"
            },
            {
              "title": "Holmium ore",
              "internalName": "holmium-ore",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Holmium_ore.png/48px-Holmium_ore.png"
            },
            {
              "title": "Holmium plate",
              "internalName": "holmium-plate",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Holmium_plate.png/48px-Holmium_plate.png"
            },
            {
              "title": "Superconductor",
              "internalName": "superconductor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Superconductor.png/48px-Superconductor.png"
            },
            {
              "title": "Supercapacitor",
              "internalName": "supercapacitor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Supercapacitor.png/48px-Supercapacitor.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Yumako_seed.png/48px-Yumako_seed.png"
            },
            {
              "title": "Jellynut seed",
              "internalName": "jellynut-seed",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Jellynut_seed.png/48px-Jellynut_seed.png"
            },
            {
              "title": "Tree seed",
              "internalName": "tree-seed",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Tree_seed.png/48px-Tree_seed.png"
            },
            {
              "title": "Yumako",
              "internalName": "yumako",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Yumako.png/48px-Yumako.png"
            },
            {
              "title": "Jellynut",
              "internalName": "jellynut",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Jellynut.png/48px-Jellynut.png"
            },
            {
              "title": "Iron bacteria",
              "internalName": "iron-bacteria",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Iron_bacteria.png/48px-Iron_bacteria.png"
            },
            {
              "title": "Copper bacteria",
              "internalName": "copper-bacteria",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Copper_bacteria.png/48px-Copper_bacteria.png"
            },
            {
              "title": "Spoilage",
              "internalName": "spoilage",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Spoilage.png/48px-Spoilage.png"
            },
            {
              "title": "Nutrients",
              "internalName": "nutrients",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Nutrients.png/48px-Nutrients.png"
            },
            null
          ]
        },
        {
          "items": [
            {
              "title": "Bioflux",
              "internalName": "bioflux",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Bioflux.png/48px-Bioflux.png"
            },
            {
              "title": "Yumako mash",
              "internalName": "yumako-mash",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Yumako_mash.png/48px-Yumako_mash.png"
            },
            {
              "title": "Jelly",
              "internalName": "jelly",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Jelly.png/48px-Jelly.png"
            },
            {
              "title": "Carbon fiber",
              "internalName": "carbon-fiber",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Carbon_fiber.png/48px-Carbon_fiber.png"
            },
            {
              "title": "Biter egg",
              "internalName": "biter-egg",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Biter_egg.png/48px-Biter_egg.png"
            },
            {
              "title": "Pentapod egg",
              "internalName": "pentapod-egg",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Pentapod_egg.png/48px-Pentapod_egg.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lithium.png/48px-Lithium.png"
            },
            {
              "title": "Lithium plate",
              "internalName": "lithium-plate",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Lithium_plate.png/48px-Lithium_plate.png"
            },
            {
              "title": "Quantum processor",
              "internalName": "quantum-processor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Quantum_processor.png/48px-Quantum_processor.png"
            },
            {
              "title": "Fusion power cell",
              "internalName": "fusion-power-cell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fusion_power_cell.png/48px-Fusion_power_cell.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Automation_science_pack.png/48px-Automation_science_pack.png"
            },
            {
              "title": "Logistic science pack",
              "internalName": "logistic-science-pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Logistic_science_pack.png/48px-Logistic_science_pack.png"
            },
            {
              "title": "Military science pack",
              "internalName": "military-science-pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Military_science_pack.png/48px-Military_science_pack.png"
            },
            {
              "title": "Chemical science pack",
              "internalName": "chemical-science-pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Chemical_science_pack.png/48px-Chemical_science_pack.png"
            },
            {
              "title": "Production science pack",
              "internalName": "production-science-pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Production_science_pack.png/48px-Production_science_pack.png"
            },
            {
              "title": "Utility science pack",
              "internalName": "utility-science-pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Utility_science_pack.png/48px-Utility_science_pack.png"
            },
            {
              "title": "Space science pack",
              "internalName": "space-science-pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Space_science_pack.png/48px-Space_science_pack.png"
            },
            {
              "title": "Metallurgic science pack",
              "internalName": "metallurgic-science-pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Metallurgic_science_pack.png/48px-Metallurgic_science_pack.png"
            },
            {
              "title": "Electromagnetic science pack",
              "internalName": "electromagnetic-science-pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Electromagnetic_science_pack.png/48px-Electromagnetic_science_pack.png"
            },
            {
              "title": "Agricultural science pack",
              "internalName": "agricultural-science-pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Agricultural_science_pack.png/48px-Agricultural_science_pack.png"
            },
            {
              "title": "Cryogenic science pack",
              "internalName": "cryogenic-science-pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Cryogenic_science_pack.png/48px-Cryogenic_science_pack.png"
            },
            {
              "title": "Promethium science pack",
              "internalName": "promethium-science-pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Promethium_science_pack.png/48px-Promethium_science_pack.png"
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
      "iconSrc": "https://wiki.factorio.com/images/Item-group_space.png",
      "rows": [
        {
          "items": [
            {
              "title": "Rocket silo",
              "internalName": "rocket-silo",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rocket_silo.png/48px-Rocket_silo.png"
            },
            {
              "title": "Cargo landing pad",
              "internalName": "cargo-landing-pad",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Cargo_landing_pad.png/48px-Cargo_landing_pad.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Space_platform_foundation.png/48px-Space_platform_foundation.png"
            },
            {
              "title": "Cargo bay",
              "internalName": "cargo-bay",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Cargo_bay.png/48px-Cargo_bay.png"
            },
            {
              "title": "Asteroid collector",
              "internalName": "asteroid-collector",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Asteroid_collector.png/48px-Asteroid_collector.png"
            },
            {
              "title": "Crusher",
              "internalName": "crusher",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Crusher.png/48px-Crusher.png"
            },
            {
              "title": "Thruster",
              "internalName": "thruster",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Thruster.png/48px-Thruster.png"
            },
            {
              "title": "Space platform hub",
              "internalName": "space-platform-hub",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Space_platform_hub.png/48px-Space_platform_hub.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Satellite.png/48px-Satellite.png"
            },
            {
              "title": "Space platform starter pack",
              "internalName": "space-platform-starter-pack",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Space_platform_hub.png/48px-Space_platform_hub.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Metallic_asteroid_chunk.png/48px-Metallic_asteroid_chunk.png"
            },
            {
              "title": "Carbonic asteroid chunk",
              "internalName": "carbonic-asteroid-chunk",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Carbonic_asteroid_chunk.png/48px-Carbonic_asteroid_chunk.png"
            },
            {
              "title": "Oxide asteroid chunk",
              "internalName": "oxide-asteroid-chunk",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Oxide_asteroid_chunk.png/48px-Oxide_asteroid_chunk.png"
            },
            {
              "title": "Promethium asteroid chunk",
              "internalName": "promethium-asteroid-chunk",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Promethium_asteroid_chunk.png/48px-Promethium_asteroid_chunk.png"
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
              "internalName": "nauvis",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Nauvis.png/48px-Nauvis.png"
            },
            {
              "title": "Vulcanus",
              "internalName": "vulcanus",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Vulcanus.png/48px-Vulcanus.png"
            },
            {
              "title": "Gleba",
              "internalName": "gleba",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Gleba.png/48px-Gleba.png"
            },
            {
              "title": "Fulgora",
              "internalName": "fulgora",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Fulgora.png/48px-Fulgora.png"
            },
            {
              "title": "Aquilo",
              "internalName": "aquilo",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Aquilo.png/48px-Aquilo.png"
            },
            {
              "title": "Solar system edge",
              "internalName": "solar-system-edge",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Solar_system_edge.png/48px-Solar_system_edge.png"
            },
            {
              "title": "Shattered planet",
              "internalName": "shattered-planet",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Shattered_planet.png/48px-Shattered_planet.png"
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
      "iconSrc": "https://wiki.factorio.com/images/Item-group_military.png",
      "rows": [
        {
          "items": [
            {
              "title": "Pistol",
              "internalName": "pistol",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Pistol.png/48px-Pistol.png"
            },
            {
              "title": "Submachine gun",
              "internalName": "submachine-gun",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Submachine_gun.png/48px-Submachine_gun.png"
            },
            {
              "title": "Railgun",
              "internalName": "railgun",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Railgun.png/48px-Railgun.png"
            },
            {
              "title": "Tesla gun",
              "internalName": "teslagun",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Tesla_gun.png/48px-Tesla_gun.png"
            },
            {
              "title": "Shotgun",
              "internalName": "shotgun",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Shotgun.png/48px-Shotgun.png"
            },
            {
              "title": "Combat shotgun",
              "internalName": "combat-shotgun",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Combat_shotgun.png/48px-Combat_shotgun.png"
            },
            {
              "title": "Rocket launcher",
              "internalName": "rocket-launcher",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rocket_launcher.png/48px-Rocket_launcher.png"
            },
            {
              "title": "Flamethrower",
              "internalName": "flamethrower",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Flamethrower.png/48px-Flamethrower.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Firearm_magazine.png/48px-Firearm_magazine.png"
            },
            {
              "title": "Piercing rounds magazine",
              "internalName": "piercing-rounds-magazine",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Piercing_rounds_magazine.png/48px-Piercing_rounds_magazine.png"
            },
            {
              "title": "Uranium rounds magazine",
              "internalName": "uranium-rounds-magazine",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Uranium_rounds_magazine.png/48px-Uranium_rounds_magazine.png"
            },
            {
              "title": "Shotgun shells",
              "internalName": "shotgun-shell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Shotgun_shells.png/48px-Shotgun_shells.png"
            },
            {
              "title": "Piercing shotgun shells",
              "internalName": "piercing-shotgun-shell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Piercing_shotgun_shells.png/48px-Piercing_shotgun_shells.png"
            },
            {
              "title": "Cannon shell",
              "internalName": "cannon-shell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Cannon_shell.png/48px-Cannon_shell.png"
            },
            {
              "title": "Explosive cannon shell",
              "internalName": "explosive-cannon-shell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Explosive_cannon_shell.png/48px-Explosive_cannon_shell.png"
            },
            {
              "title": "Uranium cannon shell",
              "internalName": "uranium-cannon-shell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Uranium_cannon_shell.png/48px-Uranium_cannon_shell.png"
            },
            {
              "title": "Explosive uranium cannon shell",
              "internalName": "explosive-uranium-cannon-shell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Explosive_uranium_cannon_shell.png/48px-Explosive_uranium_cannon_shell.png"
            },
            {
              "title": "Artillery shell",
              "internalName": "artillery-shell",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Artillery_shell.png/48px-Artillery_shell.png"
            },
            {
              "title": "Rocket",
              "internalName": "rocket",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rocket.png/48px-Rocket.png"
            },
            {
              "title": "Explosive rocket",
              "internalName": "explosive-rocket",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Explosive_rocket.png/48px-Explosive_rocket.png"
            },
            {
              "title": "Atomic bomb",
              "internalName": "atomic-bomb",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Atomic_bomb.png/48px-Atomic_bomb.png"
            },
            {
              "title": "Capture bot rocket",
              "internalName": "capture-robot-rocket",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Capture_bot_rocket.png/48px-Capture_bot_rocket.png"
            },
            {
              "title": "Flamethrower ammo",
              "internalName": "flamethrower-ammo",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Flamethrower_ammo.png/48px-Flamethrower_ammo.png"
            },
            {
              "title": "Railgun ammo",
              "internalName": "railgun-ammo",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Railgun_ammo.png/48px-Railgun_ammo.png"
            },
            {
              "title": "Tesla ammo",
              "internalName": "tesla-ammo",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Tesla_ammo.png/48px-Tesla_ammo.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Grenade.png/48px-Grenade.png"
            },
            {
              "title": "Cluster grenade",
              "internalName": "cluster-grenade",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Cluster_grenade.png/48px-Cluster_grenade.png"
            },
            {
              "title": "Poison capsule",
              "internalName": "poison-capsule",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Poison_capsule.png/48px-Poison_capsule.png"
            },
            {
              "title": "Slowdown capsule",
              "internalName": "slowdown-capsule",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Slowdown_capsule.png/48px-Slowdown_capsule.png"
            },
            {
              "title": "Defender capsule",
              "internalName": "defender-capsule",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Defender_capsule.png/48px-Defender_capsule.png"
            },
            {
              "title": "Distractor capsule",
              "internalName": "distractor-capsule",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Distractor_capsule.png/48px-Distractor_capsule.png"
            },
            {
              "title": "Destroyer capsule",
              "internalName": "destroyer-capsule",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Destroyer_capsule.png/48px-Destroyer_capsule.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Light_armor.png/48px-Light_armor.png"
            },
            {
              "title": "Heavy armor",
              "internalName": "heavy-armor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Heavy_armor.png/48px-Heavy_armor.png"
            },
            {
              "title": "Modular armor",
              "internalName": "modular-armor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Modular_armor.png/48px-Modular_armor.png"
            },
            {
              "title": "Power armor",
              "internalName": "power-armor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Power_armor.png/48px-Power_armor.png"
            },
            {
              "title": "Power armor MK2",
              "internalName": "power-armor-mk2",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Power_armor_MK2.png/48px-Power_armor_MK2.png"
            },
            {
              "title": "Mech armor",
              "internalName": "mech-armor",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Mech_armor.png/48px-Mech_armor.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Portable_solar_panel.png/48px-Portable_solar_panel.png"
            },
            {
              "title": "Portable fission reactor",
              "internalName": "fission-reactor-equipment",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Portable_fission_reactor.png/48px-Portable_fission_reactor.png"
            },
            {
              "title": "Portable fusion reactor",
              "internalName": "fusion-reactor-equipment",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Portable_fusion_reactor.png/48px-Portable_fusion_reactor.png"
            },
            {
              "title": "Personal battery",
              "internalName": "battery-equipment",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Personal_battery.png/48px-Personal_battery.png"
            },
            {
              "title": "Personal battery MK2",
              "internalName": "battery-mk2-equipment",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Personal_battery_MK2.png/48px-Personal_battery_MK2.png"
            },
            {
              "title": "Personal battery MK3",
              "internalName": "battery-mk3-equipment",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Personal_battery_MK3.png/48px-Personal_battery_MK3.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Belt_immunity_equipment.png/48px-Belt_immunity_equipment.png"
            },
            {
              "title": "Exoskeleton",
              "internalName": "exoskeleton-equipment",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Exoskeleton.png/48px-Exoskeleton.png"
            },
            {
              "title": "Personal roboport",
              "internalName": "personal-roboport-equipment",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Personal_roboport.png/48px-Personal_roboport.png"
            },
            {
              "title": "Personal roboport MK2",
              "internalName": "personal-roboport-mk2-equipment",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Personal_roboport_MK2.png/48px-Personal_roboport_MK2.png"
            },
            {
              "title": "Nightvision",
              "internalName": "night-vision-equipment",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Nightvision.png/48px-Nightvision.png"
            },
            {
              "title": "Toolbelt equipment",
              "internalName": "toolbelt-equipment",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Toolbelt_equipment.png/48px-Toolbelt_equipment.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Energy_shield.png/48px-Energy_shield.png"
            },
            {
              "title": "Energy shield MK2",
              "internalName": "energy-shield-mk2-equipment",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Energy_shield_MK2.png/48px-Energy_shield_MK2.png"
            },
            {
              "title": "Personal laser defense",
              "internalName": "personal-laser-defense-equipment",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Personal_laser_defense.png/48px-Personal_laser_defense.png"
            },
            {
              "title": "Discharge defense",
              "internalName": "discharge-defense-equipment",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Discharge_defense.png/48px-Discharge_defense.png"
            },
            {
              "title": "Discharge defense remote",
              "internalName": "discharge-defense-remote",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Discharge_defense_remote.png/48px-Discharge_defense_remote.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Wall.png/48px-Wall.png"
            },
            {
              "title": "Gate",
              "internalName": "gate",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Gate.png/48px-Gate.png"
            },
            {
              "title": "Radar",
              "internalName": "radar",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Radar.png/48px-Radar.png"
            },
            {
              "title": "Land mine",
              "internalName": "land-mine",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Land_mine.png/48px-Land_mine.png"
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
              "imgSrc": "https://wiki.factorio.com/images/thumb/Gun_turret.png/48px-Gun_turret.png"
            },
            {
              "title": "Laser turret",
              "internalName": "laser-turret",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Laser_turret.png/48px-Laser_turret.png"
            },
            {
              "title": "Flamethrower turret",
              "internalName": "flamethrower-turret",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Flamethrower_turret.png/48px-Flamethrower_turret.png"
            },
            {
              "title": "Artillery turret",
              "internalName": "artillery-turret",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Artillery_turret.png/48px-Artillery_turret.png"
            },
            {
              "title": "Artillery targeting remote",
              "internalName": "artillery-targeting-remote",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Artillery_targeting_remote.png/48px-Artillery_targeting_remote.png"
            },
            {
              "title": "Rocket turret",
              "internalName": "rocket-turret",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Rocket_turret.png/48px-Rocket_turret.png"
            },
            {
              "title": "Tesla turret",
              "internalName": "tesla-turret",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Tesla_turret.png/48px-Tesla_turret.png"
            },
            {
              "title": "Railgun turret",
              "internalName": "railgun-turret",
              "imgSrc": "https://wiki.factorio.com/images/thumb/Railgun_turret.png/48px-Railgun_turret.png"
            },
            null,
            null
          ]
        }
      ]
    }
  ]
};
