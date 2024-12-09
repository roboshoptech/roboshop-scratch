import { defineBlocksWithJsonArray } from "blockly";
import { Order } from "blockly/javascript";
import { arduinoGenerator } from "./generators/arduino";

const generator = arduinoGenerator;

export const ROBOBOX_TOOLBOX_CONFIG = {
  kind: "category",
  name: "Robobox",
  colour: "190",
  contents: [
    {
      kind: "category",
      name: "Sensors",
      colour: "190",
      contents: [
        {
          kind: "block",
          type: "robobox_sensor_ultrasonic_distance",
        },
      ],
    },
    {
      kind: "category",
      name: "Batrobot",
      colour: "190",
      contents: [
        {
          kind: "block",
          type: "robobox_batrobot_drive_forward",
        },
        {
          kind: "block",
          type: "robobox_batrobot_drive_backward",
        },
        {
          kind: "block",
          type: "robobox_batrobot_turn_right",
        },
        {
          kind: "block",
          type: "robobox_batrobot_turn_left",
        },
      ],
    },
  ],
};

defineBlocksWithJsonArray([
  {
    type: "robobox_sensor_ultrasonic_distance",
    tooltip: "",
    helpUrl: "",
    message0: "Distance (cm) %1 %2 %3 Trigger on pin: %4 Listen on pin: %5",
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
        name: "NAME",
      },
      {
        type: "input_value",
        name: "TRIGGER_PIN",
      },
      {
        type: "input_value",
        name: "LISTEN_PIN",
      },
    ],
    output: null,
    colour: 190,
  },
  {
    type: "robobox_batrobot_drive_forward",
    tooltip: "",
    helpUrl: "",
    message0: "drive forward %1",
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
    type: "robobox_batrobot_drive_backward",
    tooltip: "",
    helpUrl: "",
    message0: "drive backward %1",
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
    type: "robobox_batrobot_turn_right",
    tooltip: "",
    helpUrl: "",
    message0: "turn right %1",
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
    type: "robobox_batrobot_turn_left",
    tooltip: "",
    helpUrl: "",
    message0: "turn left %1",
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
]);

generator.forBlock["robobox_sensor_ultrasonic_distance"] = function (
  block,
  generator
) {
  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_trigger_pin = generator.valueToCode(
    block,
    "TRIGGER_PIN",
    Order.ATOMIC
  );

  // TODO: change Order.ATOMIC to the correct operator precedence strength
  const value_listen_pin = generator.valueToCode(
    block,
    "LISTEN_PIN",
    Order.ATOMIC
  );
  const varName = generator.getVariableName("value");
  const fnCode = `\
int robobox_sensor_distance(byte trig_pin, byte dist_pin) {
    digitalWrite(trig_pin,HIGH);
    delayMicroseconds(1000);
    digitalWrite(trig_pin,LOW);
    int ${varName} = (pulseIn(dist_pin,HIGH)/2)/29.1+2;
    if (${varName}>255) { ${varName}=255; }
    delay(20);
    return ${varName};
}`;
  const fnName = generator.provideFunction_("robobox_sensor_distance", fnCode);
  generator.addFunction(fnName, fnCode);
  // TODO: Assemble javascript into the code variable.
  const code = `${fnName}(${value_trigger_pin}, ${value_listen_pin})`;
  // TODO: Change Order.NONE to the correct operator precedence strength
  return [code, Order.NONE];
};

generator.forBlock["robobox_batrobot_drive_forward"] = function () {
  generator.addSetup(`pinmode_3`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_4`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_5`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_6`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_7`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_8`, `pinMode(3, OUTPUT);`);

  const code = `
  analogWrite(6, 255);
  digitalWrite(7, LOW);
  digitalWrite(8, HIGH);
  analogWrite(5, 255);
  digitalWrite(4, LOW);
  digitalWrite(3, HIGH);`;
  return code;
};

generator.forBlock["robobox_batrobot_drive_backward"] = function () {
  generator.addSetup(`pinmode_3`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_4`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_5`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_6`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_7`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_8`, `pinMode(3, OUTPUT);`);

  const code = `
  analogWrite(6, 255);
  digitalWrite(7, HIGH);
  digitalWrite(8, LOW);
  analogWrite(5, 255);
  digitalWrite(4, HIGH);
  digitalWrite(3, LOW);`;
  return code;
};

generator.forBlock["robobox_batrobot_turn_right"] = function () {
  generator.addSetup(`pinmode_3`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_4`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_5`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_6`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_7`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_8`, `pinMode(3, OUTPUT);`);

  const code = `
  analogWrite(6, 255);
  digitalWrite(7, HIGH);
  digitalWrite(8, LOW);
  analogWrite(5, 255);
  digitalWrite(4, LOW);
  digitalWrite(3, HIGH);`;
  return code;
};

generator.forBlock["robobox_batrobot_turn_left"] = function () {
  generator.addSetup(`pinmode_3`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_4`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_5`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_6`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_7`, `pinMode(3, OUTPUT);`);
  generator.addSetup(`pinmode_8`, `pinMode(3, OUTPUT);`);

  const code = `
  analogWrite(6, 255);
  digitalWrite(7, LOW);
  digitalWrite(8, HIGH);
  analogWrite(5, 255);
  digitalWrite(4, HIGH);
  digitalWrite(3, LOW);`;
  return code;
};
