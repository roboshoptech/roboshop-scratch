import { Order } from "blockly/javascript";
import { defineBlocksWithJsonArray } from "blockly";
import { arduinoGenerator } from "./generators/arduino";

const generator = arduinoGenerator;

export const ARDUINO_TOOLBOX_MAX_INSTANCES = {
  arduino_setup_loop: 1,
};

export const ARDUINO_TOOLBOX_CONFIG = {
  kind: "category",
  name: "Arduino",
  colour: "180",
  expanded: "true",
  contents: [
    {
      kind: "category",
      name: "General",
      colour: "180",
      contents: [
        {
          kind: "block",
          type: "arduino_setup_loop",
        },
        {
          kind: "block",
          type: "arduino_include_library",
        },
        {
          kind: "block",
          type: "arduino_define_variable",
        },
        {
          kind: "block",
          type: "arduino_pinmode",
          inputs: {
            PIN: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arduino_analog_read",
          inputs: {
            PIN: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arduino_analog_write",
          inputs: {
            PIN: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
            STATE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arduino_digital_read",
          inputs: {
            PIN: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arduino_digital_write",
          inputs: {
            PIN: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
            STATE: {
              shadow: {
                type: "arduino_logic_state",
                fields: {
                  STATE: "HIGH",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arduino_logic_state",
        },
        {
          kind: "block",
          type: "arduino_transform",
        },
      ],
    },
    {
      kind: "category",
      name: "Time",
      colour: "180",
      contents: [
        {
          kind: "block",
          type: "arduino_delay",
          inputs: {
            VALUE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 1000,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arduino_delaymicros",
          inputs: {
            VALUE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 100,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arduino_millis",
        },
        {
          kind: "block",
          type: "arduino_micros",
        },
      ],
    },
    {
      kind: "category",
      name: "Servo",
      colour: "180",
      contents: [
        {
          kind: "block",
          type: "arduino_servo_control",
          inputs: {
            // PIN: {
            //   shadow: {
            //     type: "math_number",
            //     fields: {
            //       NUM: 0,
            //     },
            //   },
            // },
            ANGLE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
      ],
    },
    {
      kind: "category",
      name: "Communication",
      colour: "180",
      contents: [
        {
          kind: "block",
          type: "arduino_serial_speed",
        },
        {
          kind: "block",
          type: "arduino_serial_write_byte",
          inputs: {
            VALUE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arduino_serial_write_string",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arduino_serial_print_number",
          inputs: {
            VALUE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arduino_serial_print_text",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arduino_serial_println_number",
          inputs: {
            VALUE: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 0,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arduino_serial_println_text",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: {
                  TEXT: "",
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arduino_serial_println_labelvalue",
          inputs: {
            LABEL: {
              shadow: {
                type: "text",
                fields: { TEXT: "" },
              },
            },
            VALUE: {
              shadow: {
                type: "math_number",
                fields: { NUM: 0 },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arduino_serial_flush",
        },
        {
          kind: "block",
          type: "arduino_serial_available",
        },
        {
          kind: "block",
          type: "arduino_serial_read",
        },
      ],
    },
    {
      kind: "category",
      name: "LCD",
      colour: "180",
      contents: [
        {
          kind: "block",
          type: "arduino_lcd_setup",
        },
        {
          kind: "block",
          type: "arduino_lcd_print",
          inputs: {
            VALUE: {
              shadow: {
                type: "text",
                fields: { TEXT: "" },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arduino_lcd_set_cursor",
          inputs: {
            POS_X: {
              shadow: {
                type: "math_number",
                fields: { NUM: 0 },
              },
            },
            POS_Y: {
              shadow: {
                type: "math_number",
                fields: { NUM: 0 },
              },
            },
          },
        },
        {
          kind: "block",
          type: "arduino_lcd_clear",
        },
      ],
    },
  ],
};

/// Arduino blocks

defineBlocksWithJsonArray([
  {
    type: "arduino_setup_loop",
    tooltip: "Setup Arduino program and loop",
    helpUrl: "",
    message0: "Arduino setup %1 %2 Loop forever %3 %4",
    args0: [
      {
        type: "input_dummy",
        name: "DUMMY1",
      },
      {
        type: "input_statement",
        name: "SETUP_CODE",
        align: "CENTRE",
      },
      {
        type: "input_dummy",
        name: "DUMMY2",
      },
      {
        type: "input_statement",
        name: "LOOP_CODE",
      },
    ],
    colour: 180,
  },
  {
    type: "arduino_include_library",
    tooltip: "",
    helpUrl: "",
    message0: "include library %1 .h %2",
    args0: [
      {
        type: "field_input",
        name: "LIBNAME",
        text: "lib",
      },
      {
        type: "input_dummy",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
  {
    type: "arduino_define_variable",
    tooltip: "",
    helpUrl: "",
    message0: "define %1 as %2 %3 volatile %4 %5",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "item",
      },
      {
        type: "field_dropdown",
        name: "TYPE",
        options: [
          ["char", "char"],
          ["string", "String"],
          ["byte", "byte"],
          ["int", "int"],
          ["unsigned", "unsigned int"],
          ["long", "long"],
          ["unsigned long", "unsigned long"],
          ["float", "float"],
        ],
      },
      {
        type: "input_dummy",
        name: "NAME",
      },
      {
        type: "field_checkbox",
        name: "VOLATILE",
        checked: "FALSE",
      },
      {
        type: "input_dummy",
        name: "D2",
        align: "RIGHT",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
  {
    type: "arduino_pinmode",
    tooltip: "",
    helpUrl: "",
    message0: "set pin %1 to mode %2",
    args0: [
      {
        type: "input_value",
        name: "PIN",
        check: "Number",
      },
      {
        type: "field_dropdown",
        name: "MODE",
        options: [
          ["input", "INPUT"],
          ["input pullup", "INPUT_PULLUP"],
          ["output", "OUTPUT"],
        ],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
    inputsInline: true,
  },
  {
    type: "arduino_analog_read",
    tooltip: "",
    helpUrl: "",
    message0: "read analog pin %1",
    args0: [
      {
        type: "input_value",
        name: "PIN",
        check: "Number",
      },
    ],
    output: "Number",
    colour: 180,
  },
  {
    type: "arduino_digital_read",
    tooltip: "",
    helpUrl: "",
    message0: "read digital pin %1",
    args0: [
      {
        type: "input_value",
        name: "PIN",
        check: "Number",
      },
    ],
    output: "STATE",
    colour: 180,
  },
  {
    type: "arduino_digital_write",
    tooltip: "",
    helpUrl: "",
    message0: "set digital pin %1 to logic state %2",
    args0: [
      {
        type: "input_value",
        name: "PIN",
        check: "Number",
      },
      {
        type: "input_value",
        name: "STATE",
        check: "STATE",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
    inputsInline: true,
  },
  {
    type: "arduino_analog_write",
    tooltip: "",
    helpUrl: "",
    message0: "set analog pin %1 to value %2",
    args0: [
      {
        type: "input_value",
        name: "PIN",
        check: "Number",
      },
      {
        type: "input_value",
        name: "STATE",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
    inputsInline: true,
  },
  {
    type: "arduino_logic_state",
    tooltip: "",
    helpUrl: "",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "NAME",
        options: [
          ["HIGH", "HIGH"],
          ["LOW", "LOW"],
        ],
      },
      {
        type: "input_dummy",
        name: "STATE",
      },
    ],
    output: "STATE",
    colour: 180,
  },

  {
    type: "arduino_transform",
    tooltip: "",
    helpUrl: "",
    message0: "transform value %1 from range %2 to %3 %4 to range %5 to %6 %7",
    args0: [
      {
        type: "input_value",
        name: "NAME",
        check: "Number",
      },
      {
        type: "field_number",
        name: "FROM_LOW",
        value: 0,
      },
      {
        type: "field_number",
        name: "FROM_HIGH",
        value: 1023,
      },
      {
        type: "input_dummy",
        name: "D_FROM",
        align: "RIGHT",
      },
      {
        type: "field_number",
        name: "TO_LOW",
        value: 0,
      },
      {
        type: "field_number",
        name: "TO_HIGH",
        value: 180,
      },
      {
        type: "input_dummy",
        name: "D_TO",
        align: "RIGHT",
      },
    ],
    output: "Number",
    colour: 180,
  },
]);

generator.forBlock["arduino_setup_loop"] = function (block, generator) {
  const statement_setup_code = generator.statementToCode(block, "SETUP_CODE");
  const statement_loop_code = generator.statementToCode(block, "LOOP_CODE");

  generator.addUserSetup("main_setup", statement_setup_code);
  generator.addLoop("main_loop", statement_loop_code);

  const code = "";
  return code;
};

generator.forBlock["arduino_include_library"] = function (block, generator) {
  const text_libname = block.getFieldValue("LIBNAME");

  // TODO: Assemble javascript into the code variable.
  // const code = `#include "${text_libname}.h";`;
  generator.addLibrary(text_libname, `#include "${text_libname}.h"`);
  return "";
};

generator.forBlock["arduino_define_variable"] = function (block, generator) {
  const variable_var = generator.getVariableName(block.getFieldValue("VAR"));
  let dropdown_type = block.getFieldValue("TYPE");

  const checkbox_volatile = block.getFieldValue("VOLATILE");
  if (checkbox_volatile) {
    dropdown_type = "volatile " + dropdown_type;
  }
  generator.setVariableType(variable_var, dropdown_type);
  const code = "";
  return code;
};

generator.forBlock["arduino_pinmode"] = function (block, generator) {
  const dropdown_mode = block.getFieldValue("MODE");
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_pin = generator.valueToCode(block, "PIN", Order.ATOMIC);

  // TODO: Assemble javascript into the code variable.
  // const code = `pinMode(${value_pin}, ${dropdown_mode});`;
  generator.addSetup(
    `pinmode_${value_pin}`,
    `${generator.INDENT}pinMode(${value_pin}, ${dropdown_mode});`
  );
  return "";
};

generator.forBlock["arduino_analog_read"] = function (block, generator) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_name = generator.valueToCode(block, "PIN", Order.ATOMIC);

  if (isPin(value_name)) {
    generator.addSetup(
      `pinmode_${value_name}`,
      `${generator.INDENT}pinMode(${value_name}, INPUT);`
    );
  }

  const code = `analogRead(${value_name})`;

  // TODO: Change Order.NONE to the correct operator precedence strength
  return [code, Order.ATOMIC];
};

generator.forBlock["arduino_digital_read"] = function (block, generator) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_pin = generator.valueToCode(block, "PIN", Order.ATOMIC);

  if (isPin(value_pin)) {
    generator.addSetup(
      `pinmode_${value_pin}`,
      `${generator.INDENT}pinMode(${value_pin}, INPUT);`
    );
  }
  const code = `digitalRead(${value_pin})`;

  // TODO: Change Order.NONE to the correct operator precedence strength
  return [code, Order.NONE];
};

generator.forBlock["arduino_digital_write"] = function (block, generator) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_pin = generator.valueToCode(block, "PIN", Order.ATOMIC);
  const value_state = generator.valueToCode(block, "STATE", Order.ATOMIC);
  // console.log("arduino_digital_write", value_pin);

  if (isPin(value_pin)) {
    generator.addSetup(
      `pinmode_${value_pin}`,
      `${generator.INDENT}pinMode(${value_pin}, OUTPUT);`
    );
  }

  const code = `digitalWrite(${value_pin}, ${value_state});\n`;
  return code;
};

generator.forBlock["arduino_analog_write"] = function (block, generator) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_pin = generator.valueToCode(block, "PIN", Order.ATOMIC);
  const value_state = generator.valueToCode(block, "STATE", Order.ATOMIC);

  if (isPin(value_pin)) {
    generator.addSetup(
      `pinmode_${value_pin}`,
      `${generator.INDENT}pinMode(${value_pin}, OUTPUT);`
    );
  }
  const code = `analogWrite(${value_pin}, ${value_state});\n`;
  return code;
};

generator.forBlock["arduino_logic_state"] = function (block) {
  const dropdown_name = block.getFieldValue("NAME");
  const code = dropdown_name;
  return [code, Order.ATOMIC];
};

generator.forBlock["arduino_transform"] = function (block, generator) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_name = generator.valueToCode(block, "NAME", Order.ATOMIC);

  const number_from_low = block.getFieldValue("FROM_LOW");
  const number_from_high = block.getFieldValue("FROM_HIGH");

  const number_to_low = block.getFieldValue("TO_LOW");
  const number_to_high = block.getFieldValue("TO_HIGH");

  const code = `map(${value_name}, ${number_from_low}, ${number_from_high}, ${number_to_low}, ${number_to_high})`;
  return [code, Order.ATOMIC];
};

/// Time

defineBlocksWithJsonArray([
  {
    type: "arduino_delay",
    tooltip: "",
    helpUrl: "",
    message0: "wait %1 milliseconds %2",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        align: "CENTRE",
        check: "Number",
      },
      {
        type: "input_dummy",
        name: "D2",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
  {
    type: "arduino_delaymicros",
    tooltip: "",
    helpUrl: "",
    message0: "wait %1 microseconds %2",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        align: "CENTRE",
        check: "Number",
      },
      {
        type: "input_dummy",
        name: "D2",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
  {
    type: "arduino_millis",
    tooltip: "",
    helpUrl: "",
    message0: "milliseconds since program started %1",
    args0: [
      {
        type: "input_dummy",
        name: "NAME",
      },
    ],
    output: "Number",
    colour: 180,
  },
  {
    type: "arduino_micros",
    tooltip: "",
    helpUrl: "",
    message0: "microseconds since program started %1",
    args0: [
      {
        type: "input_dummy",
        name: "NAME",
      },
    ],
    output: "Number",
    colour: 180,
  },
]);

generator.forBlock["arduino_delay"] = function (block, generator) {
  const value_value = generator.valueToCode(block, "VALUE", Order.ATOMIC);
  const code = `delay(${value_value});\n`;
  return code;
};

generator.forBlock["arduino_delaymicros"] = function (block, generator) {
  const value_value = generator.valueToCode(block, "VALUE", Order.ATOMIC);
  const code = `delayMicroseconds(${value_value});\n`;
  return code;
};

generator.forBlock["arduino_millis"] = function () {
  const code = `millis()`;
  return [code, Order.ATOMIC];
};

generator.forBlock["arduino_micros"] = function () {
  const code = `micros()`;
  return [code, Order.ATOMIC];
};

/// Servo

defineBlocksWithJsonArray([
  {
    type: "arduino_servo_control",
    tooltip: "",
    helpUrl: "",
    message0: "move servo at pin %1 to angle %2",
    args0: [
      {
        type: "field_number",
        name: "PIN",
        value: 0,
        min: 0,
        max: 16,
      },
      {
        type: "input_value",
        name: "ANGLE",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
]);

generator.forBlock["arduino_servo_control"] = function (block, generator) {
  generator.addLibrary("Servo", "#include <Servo.h>");

  const number_pin = block.getFieldValue("PIN");

  generator.addVariable(`servo_${number_pin}`, `Servo servo_${number_pin};`);
  generator.addSetup(
    `servo_${number_pin}_attach`,
    `${generator.INDENT}servo_${number_pin}.attach(${number_pin});`
  );

  const value_angle = generator.valueToCode(block, "ANGLE", Order.ATOMIC);
  const code = `servo_${number_pin}.write(${value_angle});\n`;
  return code;
};

/// Serial communication

defineBlocksWithJsonArray([
  {
    type: "arduino_serial_speed",
    tooltip: "",
    helpUrl: "",
    message0: "serial communication speed %1 bits/s %2",
    args0: [
      {
        type: "field_dropdown",
        name: "NAME",
        options: [
          ["300", "300"],
          ["600", "600"],
          ["1200", "1200"],
          ["2400", "2400"],
          ["4800", "4800"],
          ["9600", "9600"],
          ["14400", "14400"],
        ],
      },
      {
        type: "input_dummy",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
  {
    type: "arduino_serial_write_byte",
    tooltip: "",
    helpUrl: "",
    message0: "serial write byte %1",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
  {
    type: "arduino_serial_write_string",
    tooltip: "",
    helpUrl: "",
    message0: "serial write string %1",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        check: "String",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
  {
    type: "arduino_serial_print_number",
    tooltip: "",
    helpUrl: "",
    message0: "serial print number %1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "FORMAT",
        options: [
          ["decimal", "DEC"],
          ["hexadecimal", "HEX"],
          ["binary", "BIN"],
          ["octal", "OCT"],
        ],
      },
      {
        type: "input_value",
        name: "VALUE",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
  {
    type: "arduino_serial_print_text",
    tooltip: "",
    helpUrl: "",
    message0: "serial print text %1",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        check: "String",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
  {
    type: "arduino_serial_println_number",
    tooltip: "",
    helpUrl: "",
    message0: "serial print line number %1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "FORMAT",
        options: [
          ["decimal", "DEC"],
          ["hexadecimal", "HEX"],
          ["binary", "BIN"],
          ["octal", "OCT"],
        ],
      },
      {
        type: "input_value",
        name: "VALUE",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
  {
    type: "arduino_serial_println_text",
    tooltip: "",
    helpUrl: "",
    message0: "serial print line text %1",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        check: "String",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
  {
    type: "arduino_serial_println_labelvalue",
    tooltip: "",
    helpUrl: "",
    message0: "print line label:  %1 value:  %2",
    args0: [
      {
        type: "input_value",
        name: "LABEL",
        check: "String",
      },
      {
        type: "input_value",
        name: "VALUE",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
    inputsInline: true,
  },
  {
    type: "arduino_serial_flush",
    tooltip: "",
    helpUrl: "",
    message0: "serial flush %1",
    args0: [
      {
        type: "input_dummy",
        name: "VALUE",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
  {
    type: "arduino_serial_available",
    tooltip: "",
    helpUrl: "",
    message0: "Bluetooth available %1",
    args0: [
      {
        type: "input_dummy",
        name: "NAME",
      },
    ],
    output: "Boolean",
    colour: 180,
  },
  {
    type: "arduino_serial_read",
    tooltip: "",
    helpUrl: "",
    message0: "Read data from Bluetooth %1",
    args0: [
      {
        type: "input_dummy",
        name: "NAME",
      },
    ],
    output: "String",
    colour: 180,
  },
]);

generator.forBlock["arduino_serial_speed"] = function (block, generator) {
  const dropdown_name = block.getFieldValue("NAME");

  generator.addUserSetup(
    block.id,
    `${generator.INDENT}Serial.begin(${dropdown_name});`
  );
  return "";
};

generator.forBlock["arduino_serial_write_byte"] = function (block, generator) {
  const value_value = generator.valueToCode(block, "VALUE", Order.ATOMIC);
  const code = `Serial.write(${value_value});\n`;
  return code;
};

generator.forBlock["arduino_serial_write_string"] = function (
  block,
  generator
) {
  const value_value = generator.valueToCode(block, "VALUE", Order.ATOMIC);
  const code = `Serial.write(${value_value});\n`;
  return code;
};

generator.forBlock["arduino_serial_print_number"] = function (
  block,
  generator
) {
  const dropdown_format = block.getFieldValue("FORMAT");
  const value_value = generator.valueToCode(block, "VALUE", Order.ATOMIC);

  const code = `Serial.print(${value_value}, ${dropdown_format});\n`;
  return code;
};

generator.forBlock["arduino_serial_print_text"] = function (block, generator) {
  const value_value = generator.valueToCode(block, "VALUE", Order.ATOMIC);

  const code = `Serial.print(${value_value});\n`;
  return code;
};

generator.forBlock["arduino_serial_println_number"] = function (
  block,
  generator
) {
  const dropdown_format = block.getFieldValue("FORMAT");
  const value_value = generator.valueToCode(block, "VALUE", Order.ATOMIC);

  const code = `Serial.println(${value_value}, ${dropdown_format});\n`;
  return code;
};

generator.forBlock["arduino_serial_println_text"] = function (
  block,
  generator
) {
  const value_value = generator.valueToCode(block, "VALUE", Order.ATOMIC);

  const code = `Serial.println(${value_value});\n`;
  return code;
};

generator.forBlock["arduino_serial_println_labelvalue"] = function (
  block,
  generator
) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_label = generator.valueToCode(block, "LABEL", Order.ATOMIC);

  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_value = generator.valueToCode(block, "VALUE", Order.ATOMIC);

  // TODO: Assemble javascript into the code variable.
  const code = `
Serial.print(${value_label});
Serial.print(": ");
Serial.println(${value_value});\n`;
  return code;
};

generator.forBlock["arduino_serial_flush"] = function () {
  const code = "Serial.flush();\n";
  return code;
};

generator.forBlock["arduino_serial_available"] = function () {
  const code = `Serial.available()`;
  return [code, Order.ATOMIC];
};

generator.forBlock["arduino_serial_read"] = function () {
  const code = `Serial.read()`;
  return [code, Order.ATOMIC];
};

function isPin(v: string) {
  return !Number.isNaN(Number.parseInt(v, 16));
}

/// LCD

defineBlocksWithJsonArray([
  {
    type: "arduino_lcd_setup",
    tooltip: "",
    helpUrl: "",
    message0:
      "setup LCD %1 with width %2 and height %3 %4 using pins: RS %5 , EN %6 , D4 %7 , D5 %8 , D6 %9 , D7 %10 %11 %12 %13",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "item",
      },
      {
        type: "field_number",
        name: "DIM_WIDTH",
        value: 16,
        min: 0,
      },
      {
        type: "field_number",
        name: "DIM_HEIGHT",
        value: 2,
        min: 0,
      },
      {
        type: "input_dummy",
        name: "A",
      },
      {
        type: "field_number",
        name: "PIN_RS",
        value: 12,
        min: 0,
      },
      {
        type: "field_number",
        name: "PIN_EN",
        value: 11,
        min: 0,
      },
      {
        type: "field_number",
        name: "PIN_D4",
        value: 5,
        min: 0,
      },
      {
        type: "field_number",
        name: "PIN_D5",
        value: 4,
        min: 0,
      },
      {
        type: "field_number",
        name: "PIN_D6",
        value: 3,
        min: 0,
      },
      {
        type: "field_number",
        name: "PIN_D7",
        value: 2,
        min: 0,
      },
      {
        type: "input_dummy",
        name: "AA",
      },
      {
        type: "field_image",
        src: "https://docs.arduino.cc/static/7a7f1f877f04d48236ab166814aab58f/0a47e/lcd_photo.png",
        width: 128,
        height: 64,
        alt: "*",
        flipRtl: "FALSE",
      },
      {
        type: "input_dummy",
        name: "NAME",
        align: "CENTRE",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
  {
    type: "arduino_lcd_print",
    tooltip: "",
    helpUrl: "",
    message0: "On screen %1 print %2",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "item",
      },
      {
        type: "input_value",
        name: "VALUE",
        check: ["Number", "String"],
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
  {
    type: "arduino_lcd_set_cursor",
    tooltip: "",
    helpUrl: "",
    message0: "On screen %1 place cursor at x: %2 y: %3",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "item",
      },
      {
        type: "input_value",
        name: "POS_X",
      },
      {
        type: "input_value",
        name: "POS_Y",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
    inputsInline: true,
  },
  {
    type: "arduino_lcd_clear",
    tooltip: "",
    helpUrl: "",
    message0: "clear screen %1 %2",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "item",
      },
      {
        type: "input_dummy",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 180,
  },
]);

generator.forBlock["arduino_lcd_setup"] = function (block, generator) {
  generator.addLibrary("LiquidCrystal", "#include <LiquidCrystal.h>");

  const variable_var = generator.getVariableName(block.getFieldValue("VAR"));
  const number_dim_width = block.getFieldValue("DIM_WIDTH");
  const number_dim_height = block.getFieldValue("DIM_HEIGHT");

  const number_pin_rs = block.getFieldValue("PIN_RS");
  const number_pin_en = block.getFieldValue("PIN_EN");
  const number_pin_d4 = block.getFieldValue("PIN_D4");
  const number_pin_d5 = block.getFieldValue("PIN_D5");
  const number_pin_d6 = block.getFieldValue("PIN_D6");
  const number_pin_d7 = block.getFieldValue("PIN_D7");

  generator.setVariableType(
    variable_var,
    "LiquidCrystal",
    `${variable_var}(${[
      number_pin_rs,
      number_pin_en,
      number_pin_d4,
      number_pin_d5,
      number_pin_d6,
      number_pin_d7,
    ].join(", ")});`
  );

  generator.addSetup(
    `lcd_setup_${variable_var}`,
    `${generator.INDENT}${variable_var}.begin(${number_dim_width}, ${number_dim_height});`
  );

  // TODO: Assemble javascript into the code variable.
  const code = "";
  return code;
};

generator.forBlock["arduino_lcd_print"] = function (block, generator) {
  const variable_var = generator.getVariableName(block.getFieldValue("VAR"));
  const value_value = generator.valueToCode(block, "VALUE", Order.ATOMIC);

  const code = `${variable_var}.print(${value_value});\n`;
  return code;
};

generator.forBlock["arduino_lcd_set_cursor"] = function (block, generator) {
  const variable_var = generator.getVariableName(block.getFieldValue("VAR"));
  const value_pos_x = generator.valueToCode(block, "POS_X", Order.ATOMIC);
  const value_pos_y = generator.valueToCode(block, "POS_Y", Order.ATOMIC);

  const code = `${variable_var}.setCursor(${value_pos_x}, ${value_pos_y});\n`;
  return code;
};

generator.forBlock["arduino_lcd_clear"] = function (block, generator) {
  const variable_var = generator.getVariableName(block.getFieldValue("VAR"));

  const code = `${variable_var}.clear();\n`;
  return code;
};
