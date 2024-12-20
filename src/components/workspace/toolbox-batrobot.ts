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
  colour: "195",
  expanded: "true",
  contents: [
    {
      kind: "category",
      name: "Input",
      colour: "195",
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
        {
          kind: "block",
          type: "batrobot_input_button_pressed",
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
      colour: "195",
      contents: [
        {
          kind: "label",
          text: "Buzzer",
        },
        {
          kind: "block",
          type: "batrobot_output_start_buzz",
        },
        {
          kind: "block",
          type: "batrobot_output_stop_buzz",
        },
        {
          kind: "sep",
        },
        {
          kind: "label",
          text: "Fan",
        },
        {
          kind: "block",
          type: "batrobot_output_start_fan",
        },
        {
          kind: "block",
          type: "batrobot_output_stop_fan",
        },
        {
          kind: "sep",
        },
        {
          kind: "label",
          text: "LED",
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
          type: "batrobot_output_chainled_set",
          inputs: {
            C_RED: {
              shadow: {
                type: "math_number",
                fields: { NUM: 128 },
              },
            },
            C_GREEN: {
              shadow: {
                type: "math_number",
                fields: { NUM: 128 },
              },
            },
            C_BLUE: {
              shadow: {
                type: "math_number",
                fields: { NUM: 128 },
              },
            },
          },
        },
        {
          kind: "block",
          type: "batrobot_output_chainled_set_brightness",
          inputs: {
            LUM: {
              shadow: {
                type: "math_number",
                fields: { NUM: 128 },
              },
            },
          },
        },
        {
          kind: "label",
          text: "Motor",
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
        {
          kind: "block",
          type: "batrobot_output_drive_motor",
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
          type: "batrobot_output_stop_driving",
        },
        {
          kind: "label",
          text: "Servo",
        },
        {
          kind: "block",
          type: "batrobot_output_servo_control",
          inputs: {
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
    colour: 195,
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
    colour: 195,
  },
  {
    type: "batrobot_input_button1_press",
    tooltip: "",
    helpUrl: "",
    message0: "When Button1 is pressed %1 %2",
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
    colour: 195,
  },
  {
    type: "batrobot_input_button_pressed",
    tooltip: "",
    helpUrl: "",
    message0: "%1 is pressed %2",
    args0: [
      {
        type: "field_dropdown",
        name: "BUTTON",
        options: [
          ["Button1", "2"],
          ["Button2", "12"],
        ],
      },
      {
        type: "input_dummy",
        name: "NAME",
      },
    ],
    output: "Boolean",
    colour: 195,
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
    colour: 195,
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
    colour: 195,
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
    colour: 195,
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
    colour: 195,
  },
  {
    type: "batrobot_output_drive_motor",
    tooltip: "",
    helpUrl: "",
    message0: "spin %1 motor %2 at speed %3",
    args0: [
      {
        type: "field_dropdown",
        name: "SIDE",
        options: [
          ["left", "LEFT"],
          ["right", "RIGHT"],
        ],
      },
      {
        type: "field_dropdown",
        name: "DIR",
        options: [
          ["forward", "FWD"],
          ["backward", "BCK"],
        ],
      },
      {
        type: "input_value",
        name: "SPEED",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
  },

  {
    type: "batrobot_output_stop_driving",
    tooltip: "",
    helpUrl: "",
    message0: "stop driving %1",
    args0: [
      {
        type: "input_dummy",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
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
    colour: 195,
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
    colour: 195,
  },
  {
    type: "batrobot_output_start_fan",
    tooltip: "",
    helpUrl: "",
    message0: "start fan %1",
    args0: [
      {
        type: "input_dummy",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
  },
  {
    type: "batrobot_output_stop_fan",
    tooltip: "",
    helpUrl: "",
    message0: "stop fan %1",
    args0: [
      {
        type: "input_dummy",
        name: "NAME",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
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
    colour: 195,
  },
  {
    type: "batrobot_output_servo_control",
    tooltip: "",
    helpUrl: "",
    message0: "move servo %1 to angle %2",
    args0: [
      {
        type: "field_dropdown",
        name: "PIN",
        options: [
          ["left", "10"],
          ["right", "11"],
        ],
      },
      {
        type: "input_value",
        name: "ANGLE",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
  },
  {
    type: "batrobot_output_chainled_set",
    tooltip: "",
    helpUrl: "",
    message0: "set chain LED %1 %2 to color, red %3 green %4 blue %5",
    args0: [
      {
        type: "field_dropdown",
        name: "PIXEL",
        options: [
          ["left", "0"],
          ["right", "1"],
          // ["both", "2"],
        ],
      },
      {
        type: "input_dummy",
        name: "NAME",
      },
      {
        type: "input_value",
        name: "C_RED",
        align: "RIGHT",
        check: "Number",
      },
      {
        type: "input_value",
        name: "C_GREEN",
        align: "RIGHT",
        check: "Number",
      },
      {
        type: "input_value",
        name: "C_BLUE",
        align: "RIGHT",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
  },
  {
    type: "batrobot_output_chainled_set_brightness",
    tooltip: "",
    helpUrl: "",
    message0: "set chain LED brightness to %1",
    args0: [
      {
        type: "input_value",
        name: "LUM",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 195,
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

generator.forBlock["batrobot_output_drive_motor"] = function (
  block,
  generator
) {
  const dropdown_side = block.getFieldValue("SIDE");
  const dropdown_dir = block.getFieldValue("DIR");
  const value_speed = generator.valueToCode(block, "SPEED", Order.ATOMIC);

  const pins = dropdown_side === "LEFT" ? [5, 4, 3] : [6, 7, 8];

  const code = `
analogWrite(${pins[0]}, ${Math.max(0, Math.min(255, Number(value_speed)))});
digitalWrite(${pins[1]}, ${dropdown_dir === "FWD" ? "HIGH" : "LOW"});
digitalWrite(${pins[2]}, ${dropdown_dir === "FWD" ? "LOW" : "HIGH"});\n`;
  return code;
};

generator.forBlock["batrobot_output_stop_driving"] = function (
  block,
  generator
) {
  generator.addSetup(`pinmode_3`, `${generator.INDENT}pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_4`, `${generator.INDENT}pinMode(4, OUTPUT);`);
  generator.addSetup(`pinmode_5`, `${generator.INDENT}pinMode(5, OUTPUT);`);
  generator.addSetup(`pinmode_6`, `${generator.INDENT}pinMode(6, OUTPUT);`);
  generator.addSetup(`pinmode_7`, `${generator.INDENT}pinMode(7, OUTPUT);`);
  generator.addSetup(`pinmode_8`, `${generator.INDENT}pinMode(8, OUTPUT);`);

  const code = `\
analogWrite(6, 0);
digitalWrite(7, LOW);
digitalWrite(8, LOW);
analogWrite(5, 0);
digitalWrite(4, LOW);
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

generator.forBlock["batrobot_output_start_buzz"] = function (block, generator) {
  generator.addSetup(`pinmode_12`, `${generator.INDENT}pinMode(12, OUTPUT);`);

  const code = "digitalWrite(12, HIGH);\n";
  return code;
};

generator.forBlock["batrobot_output_stop_buzz"] = function (block, generator) {
  generator.addSetup(`pinmode_12`, `${generator.INDENT}pinMode(12, OUTPUT);`);

  const code = "digitalWrite(12, LOW);\n";
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

generator.forBlock["batrobot_input_button_pressed"] = function (
  block,
  generator
) {
  const dropdown_button = block.getFieldValue("BUTTON");

  generator.addSetup(
    `pinmode_${dropdown_button}`,
    `${generator.INDENT}pinMode(${dropdown_button}, INPUT);`
  );

  const code = `digitalRead(${dropdown_button})`;
  return [code, Order.ATOMIC];
};

generator.forBlock["batrobot_output_servo_control"] = function (
  block,
  generator
) {
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

generator.forBlock["batrobot_output_chainled_set"] = function (
  block,
  generator
) {
  generator.addLibrary("Adafruit_NeoPixel", "#include <Adafruit_NeoPixel.h>");
  generator.addVariable(
    "chainled",
    "Adafruit_NeoPixel chainled(2, 9, NEO_GRB + NEO_KHZ800);"
  );
  generator.addSetup("chainled_pin", `${generator.INDENT}pinMode(9, OUTPUT);`);
  generator.addSetup("chainled", `${generator.INDENT}chainled.begin();`);

  const dropdown_pixel = block.getFieldValue("PIXEL");
  const value_c_red = generator.valueToCode(block, "C_RED", Order.ATOMIC);
  const value_c_green = generator.valueToCode(block, "C_GREEN", Order.ATOMIC);
  const value_c_blue = generator.valueToCode(block, "C_BLUE", Order.ATOMIC);

  const color = `chainled.Color(${value_c_red}, ${value_c_green}, ${value_c_blue})`;
  const code = `chainled.setPixelColor(${dropdown_pixel}, ${color});\nchainled.show();\n`;
  return code;
};

generator.forBlock["batrobot_output_chainled_set_brightness"] = function (
  block,
  generator
) {
  generator.addLibrary("Adafruit_NeoPixel", "#include <Adafruit_NeoPixel.h>");
  generator.addVariable(
    "chainled",
    "Adafruit_NeoPixel chainled(2, 9, NEO_GRB + NEO_KHZ800);"
  );
  generator.addSetup("chainled", `${generator.INDENT}chainled.begin();\n`);

  const value_lum = generator.valueToCode(block, "LUM", Order.ATOMIC);

  const code = `chainled.setBrightness(${value_lum});\n`;
  return code;
};
