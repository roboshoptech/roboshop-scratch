import { defineBlocksWithJsonArray } from "blockly";
import {
  lists,
  loops,
  math,
  procedures,
  texts,
  variablesDynamic,
} from "blockly/blocks";
import { javascriptGenerator, Order } from "blockly/javascript";

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

/// Arduino blocks

defineBlocksWithJsonArray([
  {
    type: "arduino_pinmode",
    tooltip: "",
    helpUrl: "",
    message0: "pin mode %1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "MODE",
        options: [
          ["input", "INPUT"],
          ["input pullup", "INPUT_PULLUP"],
          ["output", "OUTPUT"],
        ],
      },
      {
        type: "input_value",
        name: "PIN",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 45,
    inputsInline: true,
  },
  {
    type: "arduino_readpin",
    tooltip: "",
    helpUrl: "",
    message0: "read pin %1",
    args0: [
      {
        type: "input_value",
        name: "PIN",
        check: "String",
      },
    ],
    output: "String",
    colour: 45,
    inputsInline: true,
  },
  {
    type: "arduino_writepin",
    tooltip: "",
    helpUrl: "",
    message0: "write pin %1",
    args0: [
      {
        type: "input_value",
        name: "PIN",
        check: "String",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 45,
    inputsInline: true,
  },
]);

javascriptGenerator.forBlock["arduino_pinmode"] = function (block, generator) {
  const dropdown_mode = block.getFieldValue("MODE");
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_pin = generator.valueToCode(block, "PIN", Order.ATOMIC);

  // TODO: Assemble javascript into the code variable.
  const code = "...";
  return code;
};

javascriptGenerator.forBlock["arduino_readpin"] = function (block, generator) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_pin = generator.valueToCode(block, "PIN", Order.ATOMIC);

  // TODO: Assemble javascript into the code variable.
  const code = "...";
  // TODO: Change Order.NONE to the correct operator precedence strength
  return [code, Order.NONE];
};

javascriptGenerator.forBlock["arduino_writepin"] = function (block, generator) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_pin = generator.valueToCode(block, "PIN", Order.ATOMIC);

  // TODO: Assemble javascript into the code variable.
  const code = "...";
  return code;
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
      colour: "0",
      contents: [
        {
          kind: "button",
          text: "Create variable...",
          callbackKey: "create-variable-btn",
        },
        ...Object.keys(variablesDynamic.blocks).map((key) => ({
          kind: "block",
          type: key,
        })),
      ],
    },
    {
      kind: "category",
      name: "Procedures",
      colour: "0",
      contents: Object.keys(procedures.blocks).map((key) => ({
        kind: "block",
        type: key,
      })),
    },
    {
      kind: "category",
      name: "Display",
      color: "0",
      contents: [
        {
          kind: "block",
          type: "display_single",
        },
      ],
    },
    {
      kind: "category",
      name: "Arduino",
      color: "0",
      contents: [
        {
          kind: "block",
          type: "arduino_pinmode",
        },
        {
          kind: "block",
          type: "arduino_readpin",
        },
        {
          kind: "block",
          type: "arduino_writepin",
        },
      ],
    },
  ],
};

TOOLBOX_CONFIG.contents.forEach((cat, ix, arr) => {
  cat.colour = Math.floor((ix * 360) / arr.length).toString();
});
