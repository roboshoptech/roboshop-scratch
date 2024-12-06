import { defineBlocksWithJsonArray, Msg } from "blockly";
import { lists, loops, math, texts } from "blockly/blocks";
import { javascriptGenerator, Order } from "blockly/javascript";
import { ARDUINO_TOOLBOX_CONFIG } from "./toolbox-arduino";
import { ROBOBOX_TOOLBOX_CONFIG } from "./toolbox-robobox";

const generator = javascriptGenerator;

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
  {
    type: "math_angle",
    tooltip: "",
    helpUrl: "",
    message0: "angle %1 %2",
    args0: [
      {
        type: "field_angle",
        name: "ANGLE",
        angle: 90,
      },
      {
        type: "input_dummy",
        name: "NAME",
      },
    ],
    output: null,
    colour: Msg.MATH_HUE,
  },
]);

generator.forBlock["display_single"] = (block, generator) => {
  const value = generator.valueToCode(block, "VALUE", Order.ATOMIC);
  return `console.log(${value.toString()})`;
};

generator.forBlock["math_angle"] = function (block) {
  const angle_angle = block.getFieldValue("ANGLE");

  // TODO: Assemble javascript into the code variable.
  const code = angle_angle;
  // TODO: Change Order.NONE to the correct operator precedence strength
  return [code, Order.NONE];
};

/// Toolbox

export const TOOLBOX_CONFIG = {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Logic",
      colour: Msg.LOGIC_HUE,
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
      colour: Msg.LOOPS_HUE,
      contents: Object.keys(loops.blocks).map((key) => ({
        kind: "block",
        type: key,
      })),
    },
    {
      kind: "category",
      name: "Math",
      colour: Msg.MATH_HUE,
      contents: [
        ...Object.keys(math.blocks).map((key) => ({
          kind: "block",
          type: key,
        })),
        {
          kind: "block",
          type: "math_angle",
        },
      ],
    },
    {
      kind: "category",
      name: "List",
      colour: Msg.LISTS_HUE,
      contents: Object.keys(lists.blocks).map((key) => ({
        kind: "block",
        type: key,
      })),
    },
    {
      kind: "category",
      name: "Text",
      colour: Msg.TEXTS_HUE,
      contents: Object.keys(texts.blocks).map((key) => ({
        kind: "block",
        type: key,
      })),
    },
    {
      kind: "category",
      name: "Variables",
      custom: "VARIABLE_DYNAMIC",
      colour: Msg.VARIABLES_DYNAMIC_HUE,
    },
    {
      kind: "category",
      name: "Functions",
      custom: "PROCEDURE",
      colour: Msg.PROCEDURES_HUE,
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
