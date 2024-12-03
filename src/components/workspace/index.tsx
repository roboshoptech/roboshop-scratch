"use client";

import styles from "./workspace.module.css";

import { useEffect, useRef } from "react";
import { useBlocklyWorkspace } from "react-blockly";
import { javascriptGenerator } from "blockly/javascript";
import { TOOLBOX_CONFIG } from "./toolbox";
import { WorkspaceLoader } from "./loader";
import { useToggle } from "../../utils/use-toggle";
import { Dialog, DialogActions } from "../common/modal-dialog";
import { Grid } from "../common/box";
import { button } from "../common/button";

export function ScratchWorkspace() {
  const [openCreateVariableDialog, toggleCreateVariableDialog] = useToggle();
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

  useEffect(() => {
    if (!workspace) return;

    workspace?.registerButtonCallback("create-variable-btn", () => {
      // console.log("create variable button");
      toggleCreateVariableDialog();
    });
  }, [workspace]);

  // function handleExecute() {
  //   javascriptGenerator.addReservedWords("code");
  //   const code = javascriptGenerator.workspaceToCode(workspace!);
  //   console.log("ScratchWorkspace", { code });
  //   try {
  //     eval(code);
  //     console.log("ScratchWorkspace finished executing");
  //   } catch (e: unknown) {
  //     console.error("ScratchWorkspace", e);
  //   }
  // }

  function handleCreateVariable(e: any) {
    e.preventDefault();
    const vname = e.currentTarget["variable-name"].value;
    if (!vname || workspace == null) return;

    workspace.createVariable(vname);
    toggleCreateVariableDialog();
  }

  return (
    <div className={styles["workspace-container"]}>
      <div ref={blocklyRef} />
      {workspace != null && <WorkspaceLoader workspace={workspace} />}
      <Dialog open={openCreateVariableDialog}>
        <form onSubmit={handleCreateVariable}>
          <Grid
            maxWidth="var(--sp-sm)"
            marginInline="auto"
            backgroundColor="white"
            border="2px solid lightgray"
            padding="var(--sp-4)"
            gap="var(--sp-2)"
          >
            <span>Select variable name</span>
            <input required name="variable-name" />
            <DialogActions>
              <button
                type="button"
                className={button({ kind: "soft" })}
                onClick={toggleCreateVariableDialog}
              >
                cancel
              </button>
              <button type="submit" className={button({ kind: "bold" })}>
                create
              </button>
            </DialogActions>
          </Grid>
        </form>
      </Dialog>
      {/* <button
        className={styles["workspace-execute-btn"]}
        onClick={handleExecute}
      >
        PLAY
      </button> */}
    </div>
  );
}
