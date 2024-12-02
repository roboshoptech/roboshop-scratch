"use client";

import styles from "./workspace.module.css";

import { useRef } from "react";
import { useBlocklyWorkspace } from "react-blockly";
import { javascriptGenerator } from "blockly/javascript";
import { TOOLBOX_CONFIG } from "./toolbox";

export function ScratchWorkspace() {
  const blocklyRef = useRef(null);
  const { workspace, xml } = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: TOOLBOX_CONFIG,
    workspaceConfiguration: {
      grid: { spacing: 16 },
      zoom: { controls: true, wheel: true },
    },
    initialXml: "",
  });

  function handleExecute() {
    javascriptGenerator.addReservedWords("code");
    const code = javascriptGenerator.workspaceToCode(workspace!);
    console.log("ScratchWorkspace", { code });
    try {
      eval(code);
      console.log("ScratchWorkspace finished executing");
    } catch (e: unknown) {
      console.error("ScratchWorkspace", e);
    }
  }

  return (
    <div className={styles["workspace-container"]}>
      <div ref={blocklyRef} />
      <button
        className={styles["workspace-execute-btn"]}
        onClick={handleExecute}
      >
        PLAY
      </button>
    </div>
  );
}
