import { defineBlocksWithJsonArray } from "blockly";
import { Order } from "blockly/javascript";
import { arduinoGenerator } from "./generators/arduino";

const generator = arduinoGenerator;

export const BATROBOT_TOOLBOX_MAX_INSTANCES = {
  batrobot_input_button1_press: 1,
  batrobot_input_button2_press: 1,
};

export const BATROBOT_TOOLBOX_CONFIG = {
  kind: "category",
  name: "BatRobot",
  colour: "190",
  expanded: "true",
  contents: [
    {
      kind: "category",
      name: "Input",
      colour: "190",
      contents: [
        {
          kind: "block",
          type: "batrobot_input_ultrasonic_distance",
        },
        {
          kind: "block",
          type: "batrobot_input_read_light_sensor",
        },
        {
          kind: "block",
          type: "batrobot_input_button1_press",
        },
        // {
        //   kind: "block",
        //   type: "batrobot_input_button2_press",
        // },
      ],
    },
    {
      kind: "category",
      name: "Output",
      colour: "190",
      contents: [
        {
          kind: "block",
          type: "batrobot_output_start_buzz",
        },
        {
          kind: "block",
          type: "batrobot_output_stop_buzz",
        },
        {
          kind: "block",
          type: "batrobot_output_set_led",
          inputs: {
            RED: {
              shadow: {
                type: "math_number",
                fields: { NUM: 128 },
              },
            },
            GREEN: {
              shadow: {
                type: "math_number",
                fields: { NUM: 128 },
              },
            },
            BLUE: {
              shadow: {
                type: "math_number",
                fields: { NUM: 128 },
              },
            },
          },
        },
        {
          kind: "block",
          type: "batrobot_output_drive_forward",
          inputs: {
            SPEED: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 64,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "batrobot_output_drive_backward",
          inputs: {
            SPEED: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 64,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "batrobot_output_turn_right",
          inputs: {
            SPEED: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 64,
                },
              },
            },
          },
        },
        {
          kind: "block",
          type: "batrobot_output_turn_left",
          inputs: {
            SPEED: {
              shadow: {
                type: "math_number",
                fields: {
                  NUM: 64,
                },
              },
            },
          },
        },
      ],
    },
  ],
};

defineBlocksWithJsonArray([
  {
    type: "batrobot_input_ultrasonic_distance",
    tooltip: "",
    helpUrl: "",
    message0: "Distance (cm) %1 %2 %3",
    args0: [
      {
        type: "input_dummy",
        name: "NAME",
      },
      {
        type: "field_image",
        src: "https://cdn1.npcdn.net/image/15192845619c34d41c6f409549d0788097f5cc33f4.png?md5id=88f5117f17105532ce02ca3f132c6628&new_width=1000&new_height=1000&size=max&w=-62170009200",
        width: 48,
        height: 48,
        alt: "*",
        flipRtl: "FALSE",
      },
      {
        type: "input_dummy",
        name: "NAME2",
        align: "CENTRE",
      },
    ],
    output: null,
    colour: 190,
  },
  {
    type: "batrobot_input_read_light_sensor",
    tooltip: "",
    helpUrl: "",
    message0: "read light sensor %1 %2 %3",
    args0: [
      {
        type: "input_dummy",
        name: "SENSOR",
      },
      {
        type: "field_image",
        src: "https://www.circuitbasics.com/wp-content/uploads/2020/06/Photoresistor-Electrodes-and-Resistive-Material-300x186.jpg",
        width: 64,
        height: 40,
        alt: "*",
        flipRtl: "FALSE",
      },
      {
        type: "input_dummy",
        name: "NAME",
        align: "CENTRE",
      },
    ],
    output: "Number",
    colour: 190,
  },
  {
    type: "batrobot_input_button1_press",
    tooltip: "",
    helpUrl: "",
    message0: "When button1 is pressed %1 %2",
    args0: [
      {
        type: "input_dummy",
        name: "NAME",
      },
      {
        type: "input_statement",
        name: "HANDLER",
      },
    ],
    colour: 190,
  },
  {
    type: "batrobot_input_button2_press",
    tooltip: "",
    helpUrl: "",
    message0: "When button2 is pressed %1 %2",
    args0: [
      {
        type: "input_dummy",
        name: "NAME",
      },
      {
        type: "input_statement",
        name: "HANDLER",
      },
    ],
    colour: 190,
  },
  {
    type: "batrobot_output_drive_forward",
    tooltip: "",
    helpUrl: "",
    message0: "drive forward at speed %1",
    args0: [
      {
        type: "input_value",
        name: "SPEED",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 190,
  },
  {
    type: "batrobot_output_drive_backward",
    tooltip: "",
    helpUrl: "",
    message0: "drive backward at speed %1",
    args0: [
      {
        type: "input_value",
        name: "SPEED",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 190,
  },
  {
    type: "batrobot_output_turn_right",
    tooltip: "",
    helpUrl: "",
    message0: "turn right at speed %1",
    args0: [
      {
        type: "input_value",
        name: "SPEED",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 190,
  },
  {
    type: "batrobot_output_turn_left",
    tooltip: "",
    helpUrl: "",
    message0: "turn left at speed %1",
    args0: [
      {
        type: "input_value",
        name: "SPEED",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 190,
  },
  {
    type: "batrobot_output_start_buzz",
    tooltip: "",
    helpUrl: "",
    message0: "start buzz %1",
    args0: [
      {
        type: "input_dummy",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 190,
  },
  {
    type: "batrobot_output_stop_buzz",
    tooltip: "",
    helpUrl: "",
    message0: "stop buzz %1",
    args0: [
      {
        type: "input_dummy",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 190,
  },
  {
    type: "batrobot_output_set_led",
    tooltip: "",
    helpUrl: "",
    message0: "set LED, red %1 green %2 blue %3",
    args0: [
      {
        type: "input_value",
        name: "RED",
        check: "Number",
      },
      {
        type: "input_value",
        name: "GREEN",
        align: "RIGHT",
        check: "Number",
      },
      {
        type: "input_value",
        name: "BLUE",
        align: "RIGHT",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 190,
  },
]);

generator.forBlock["batrobot_input_ultrasonic_distance"] = function (
  block,
  generator
) {
  generator.addSetup(`pinmode_a0`, `${generator.INDENT}pinMode(A0, OUTPUT);`);
  generator.addSetup(`pinmode_a1`, `${generator.INDENT}pinMode(A1, INPUT);`);

  const varName = generator.getVariableName("value");
  const fnCode = `\
int batrobot_sensor_distance(byte trig_pin, byte dist_pin) {
${generator.INDENT}digitalWrite(trig_pin, HIGH);
${generator.INDENT}delayMicroseconds(10);
${generator.INDENT}digitalWrite(trig_pin, LOW);
${generator.INDENT}int ${varName} = (pulseIn(dist_pin, HIGH) / 2) / 29.1 + 2;
${generator.INDENT}if (${varName}>255) { ${varName}=255; }
${generator.INDENT}delay(20);
${generator.INDENT}return ${varName};
}`;
  const fnName = "batrobot_sensor_distance"; // generator.provideFunction_("batrobot_sensor_distance", fnCode);
  generator.addFunction(fnName, fnCode);

  const code = `${fnName}(A0, A1)`;
  return [code, Order.ATOMIC];
};

generator.forBlock["batrobot_output_drive_forward"] = function (
  block,
  generator
) {
  generator.addSetup(`pinmode_3`, `${generator.INDENT}pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_4`, `${generator.INDENT}pinMode(4, OUTPUT);`);
  generator.addSetup(`pinmode_5`, `${generator.INDENT}pinMode(5, OUTPUT);`);
  generator.addSetup(`pinmode_6`, `${generator.INDENT}pinMode(6, OUTPUT);`);
  generator.addSetup(`pinmode_7`, `${generator.INDENT}pinMode(7, OUTPUT);`);
  generator.addSetup(`pinmode_8`, `${generator.INDENT}pinMode(8, OUTPUT);`);

  const value_speed = generator.valueToCode(block, "SPEED", Order.ATOMIC);

  const code = `\
analogWrite(6, ${value_speed});
digitalWrite(7, LOW);
digitalWrite(8, HIGH);
analogWrite(5, ${value_speed});
digitalWrite(4, LOW);
digitalWrite(3, HIGH);\n`;
  return code;
};

generator.forBlock["batrobot_output_drive_backward"] = function (
  block,
  generator
) {
  generator.addSetup(`pinmode_3`, `${generator.INDENT}pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_4`, `${generator.INDENT}pinMode(4, OUTPUT);`);
  generator.addSetup(`pinmode_5`, `${generator.INDENT}pinMode(5, OUTPUT);`);
  generator.addSetup(`pinmode_6`, `${generator.INDENT}pinMode(6, OUTPUT);`);
  generator.addSetup(`pinmode_7`, `${generator.INDENT}pinMode(7, OUTPUT);`);
  generator.addSetup(`pinmode_8`, `${generator.INDENT}pinMode(8, OUTPUT);`);

  const value_speed = generator.valueToCode(block, "SPEED", Order.ATOMIC);

  const code = `\
analogWrite(6, ${value_speed});
digitalWrite(7, HIGH);
digitalWrite(8, LOW);
analogWrite(5, ${value_speed});
digitalWrite(4, HIGH);
digitalWrite(3, LOW);\n`;
  return code;
};

generator.forBlock["batrobot_output_turn_right"] = function (block, generator) {
  generator.addSetup(`pinmode_3`, `${generator.INDENT}pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_4`, `${generator.INDENT}pinMode(4, OUTPUT);`);
  generator.addSetup(`pinmode_5`, `${generator.INDENT}pinMode(5, OUTPUT);`);
  generator.addSetup(`pinmode_6`, `${generator.INDENT}pinMode(6, OUTPUT);`);
  generator.addSetup(`pinmode_7`, `${generator.INDENT}pinMode(7, OUTPUT);`);
  generator.addSetup(`pinmode_8`, `${generator.INDENT}pinMode(8, OUTPUT);`);

  const value_speed = generator.valueToCode(block, "SPEED", Order.ATOMIC);

  const code = `\
analogWrite(6, ${value_speed});
digitalWrite(7, HIGH);
digitalWrite(8, LOW);
analogWrite(5, ${value_speed});
digitalWrite(4, LOW);
digitalWrite(3, HIGH);\n`;
  return code;
};

generator.forBlock["batrobot_output_turn_left"] = function (block, generator) {
  generator.addSetup(`pinmode_3`, `${generator.INDENT}pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_4`, `${generator.INDENT}pinMode(4, OUTPUT);`);
  generator.addSetup(`pinmode_5`, `${generator.INDENT}pinMode(5, OUTPUT);`);
  generator.addSetup(`pinmode_6`, `${generator.INDENT}pinMode(6, OUTPUT);`);
  generator.addSetup(`pinmode_7`, `${generator.INDENT}pinMode(7, OUTPUT);`);
  generator.addSetup(`pinmode_8`, `${generator.INDENT}pinMode(8, OUTPUT);`);

  const value_speed = generator.valueToCode(block, "SPEED", Order.ATOMIC);

  const code = `\
analogWrite(6, ${value_speed});
digitalWrite(7, LOW);
digitalWrite(8, HIGH);
analogWrite(5, ${value_speed});
digitalWrite(4, HIGH);
digitalWrite(3, LOW);\n`;
  return code;
};

generator.forBlock["batrobot_output_start_buzz"] = function (block, generator) {
  generator.addSetup(`pinmode_13`, `${generator.INDENT}pinMode(13, OUTPUT);`);

  const code = "digitalWrite(13, HIGH);\n";
  return code;
};

generator.forBlock["batrobot_output_stop_buzz"] = function (block, generator) {
  generator.addSetup(`pinmode_13`, `${generator.INDENT}pinMode(13, OUTPUT);`);

  const code = "digitalWrite(13, LOW);\n";
  return code;
};

generator.forBlock["batrobot_output_set_led"] = function (block, generator) {
  generator.addSetup(`pinmode_9`, `${generator.INDENT}pinMode(9, OUTPUT);`);
  generator.addSetup(`pinmode_10`, `${generator.INDENT}pinMode(10, OUTPUT);`);
  generator.addSetup(`pinmode_11`, `${generator.INDENT}pinMode(11, OUTPUT);`);

  const value_red = generator.valueToCode(block, "RED", Order.ATOMIC);
  const value_green = generator.valueToCode(block, "GREEN", Order.ATOMIC);
  const value_blue = generator.valueToCode(block, "BLUE", Order.ATOMIC);

  const code = `\
analogWrite(11, ${value_red});
analogWrite(10, ${value_green});
analogWrite(9, ${value_blue});\n`;
  return code;
};

generator.forBlock["batrobot_input_read_light_sensor"] = function (
  block,
  generator
) {
  generator.addSetup(`pinmode_A2`, `${generator.INDENT}pinMode(A2, INPUT);`);

  const code = "analogRead(A2)";
  // TODO: Change Order.NONE to the correct operator precedence strength
  return [code, Order.ATOMIC];
};

generator.forBlock["batrobot_input_button1_press"] = function (
  block,
  generator
) {
  generator.addSetup(`pinmode_2`, `${generator.INDENT}pinMode(2, INPUT);`);
  const statement_handler = generator.statementToCode(block, "HANDLER");
  // console.log("batrobot_input_button1_press", {
  //   statement_handler,
  //   variables: generator.definitions_,
  // });
  const fnCode = `void batrobot_input_button1_handler() {\n${statement_handler}}`;
  const fnName = "batrobot_input_button1_handler";
  // generator.provideFunction_(
  //   "batrobot_input_button1_handler",
  //   fnCode
  // );
  generator.addFunction(fnName, fnCode);
  generator.addSetup(
    "batrobot_input_button1_handler",
    `${generator.INDENT}attachInterrupt(digitalPinToInterrupt(2), ${fnName}, RISING);`
  );
  const code = "";
  return code;
};

// generator.forBlock["batrobot_input_button2_press"] = function (
//   block,
//   generator
// ) {
//   generator.addSetup(`pinmode_2`, `${generator.INDENT}pinMode(2, INPUT);`);
//   const statement_handler = generator.statementToCode(block, "HANDLER");

//   const fnCode = `void batrobot_input_button2_handler() {\n${statement_handler}}`;
//   const fnName = "batrobot_input_button2_handler";
//   // generator.provideFunction_(
//   //   "batrobot_input_button2_handler",
//   //   fnCode
//   // );
//   generator.addFunction(fnName, fnCode);
//   generator.addSetup(
//     "batrobot_input_button2_handler",
//     `${generator.INDENT}attachInterrupt(digitalPinToInterrupt(12), ${fnName}, RISING);`
//   );
//   const code = "";
//   return code;
// };