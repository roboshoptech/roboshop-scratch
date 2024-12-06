import { ArduinoGenerator } from "./arduino/arduino_generator";
/* import * as colour from './arduino/colour.js';*/
import * as lists from "./arduino/lists";
import * as logic from "./arduino/logic";
import * as loops from "./arduino/loops";
import * as math from "./arduino/math";
import * as procedures from "./arduino/procedures";
import * as text from "./arduino/text";
import * as variables from "./arduino/variables";
// import * as variablesDynamic from "./arduino/variables_dynamic";

export * from "./arduino/arduino_generator";

/**
 * Arduino code generator instance.
 * @type {!ArduinoGenerator}
 */
export const arduinoGenerator: ArduinoGenerator = new ArduinoGenerator();

// Install per-block-type generator functions:
const generators: typeof arduinoGenerator.forBlock = {
  ...lists,
  ...logic,
  ...loops,
  ...math,
  ...procedures,
  ...text,
  ...variables,
  // ...variablesDynamic,
};
for (const name in generators) {
  arduinoGenerator.forBlock[name] = generators[name];
}
