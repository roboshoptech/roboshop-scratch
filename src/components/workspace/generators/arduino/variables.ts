import { Block, Variables } from "blockly";
import type { ArduinoGenerator } from "./arduino_generator";
import { Order } from "./arduino_generator";

export function variables_get(
  block: Block,
  generator: ArduinoGenerator
): [string, Order] {
  // Variable getter.
  // block.workspace.getVariableById(block.getFieldValue("VAR"))
  const code = generator.getVariableName(block.getFieldValue("VAR"));
  return [code, Order.ATOMIC];
}

export function variables_set(block: Block, generator: ArduinoGenerator) {
  // Variable setter.
  const argument0 =
    generator.valueToCode(block, "VALUE", Order.ASSIGNMENT) || "0";
  const varName = generator.getVariableName(block.getFieldValue("VAR"));
  return varName + " = " + argument0 + ";\n";
}
