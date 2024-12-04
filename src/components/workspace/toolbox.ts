import { defineBlocksWithJsonArray } from "blockly";
import { lists, loops, math, texts } from "blockly/blocks";
import { javascriptGenerator, Order } from "blockly/javascript";
import { ARDUINO_TOOLBOX_CONFIG } from "./toolbox-arduino";
import { ROBOBOX_TOOLBOX_CONFIG } from "./toolbox-robobox";

/// Display blocks

defineBlocksWithJsonArray([
  {
    type: "display_single",
    tooltip: "",
    helpUrl: "",
    colour: 230,
    nextStatement: null,
    previousStatement: null,
    message0: "show %1",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
      },
    ],
  },
]);

javascriptGenerator.forBlock["display_single"] = (block, generator) => {
  const value = generator.valueToCode(block, "VALUE", Order.ATOMIC);
  return `console.log(${value.toString()})`;
};

/// Toolbox

export const TOOLBOX_CONFIG = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Logic",
      colour: "0",
      contents: [
        {
          kind: "block",
          type: "controls_if",
        },
        {
          kind: "block",
          type: "controls_ifelse",
        },
        {
          kind: "block",
          type: "logic_boolean",
        },
        {
          kind: "block",
          type: "logic_compare",
        },
        {
          kind: "block",
          type: "logic_operation",
        },
        {
          kind: "block",
          type: "logic_negate",
        },
      ],
    },
    {
      kind: "category",
      name: "Loops",
      colour: "0",
      contents: Object.keys(loops.blocks).map((key) => ({
        kind: "block",
        type: key,
      })),
    },
    {
      kind: "category",
      name: "Math",
      colour: "0",
      contents: Object.keys(math.blocks).map((key) => ({
        kind: "block",
        type: key,
      })),
    },
    {
      kind: "category",
      name: "List",
      colour: "0",
      contents: Object.keys(lists.blocks).map((key) => ({
        kind: "block",
        type: key,
      })),
    },
    {
      kind: "category",
      name: "Text",
      colour: "0",
      contents: Object.keys(texts.blocks).map((key) => ({
        kind: "block",
        type: key,
      })),
    },
    {
      kind: "category",
      name: "Variables",
      custom: "VARIABLE_DYNAMIC",
      colour: "0",
    },
    {
      kind: "category",
      name: "Functions",
      custom: "PROCEDURE",
      colour: "0",
    },
    ARDUINO_TOOLBOX_CONFIG,
    ROBOBOX_TOOLBOX_CONFIG,
  ],
};

TOOLBOX_CONFIG.contents.forEach((cat, ix, arr) => {
  if (cat.colour == "0") {
    cat.colour = Math.floor((ix * 360) / arr.length).toString();
  }
});
