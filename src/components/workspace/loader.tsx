import { serialization, WorkspaceSvg } from "blockly";
import { cloneElement, ReactElement, useEffect, useState } from "react";
import {
  MdAdd,
  MdCheck,
  MdClose,
  MdContentCopy,
  MdDelete,
} from "react-icons/md";
import { FaCode, FaDownload, FaSave } from "react-icons/fa";

import { button } from "../common/button";
import { ToggleView } from "../common/toggle-view";
import { APP_PROJECT } from "../../utils/constants";
import { Box, Flex, Grid } from "../common/box";
import { spinner } from "../common/spinner";
import { arduinoGenerator } from "./generators/arduino";
import { useToggle } from "../../utils/use-toggle";
import { Dialog } from "../common/modal-dialog";

import styles from "./loader.module.css";

type Props = {
  workspace: WorkspaceSvg;
};

type ProjectData = {
  id: string;
  name: string;
};

const generator = arduinoGenerator;

export function WorkspaceLoader({ workspace }: Props) {
  const [currentProject, setCurrentProject] = useState<ProjectData | null>(
    null
  );
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    const projects: { id: string; name: string }[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key?.startsWith(APP_PROJECT)) continue;
      const [_, id, name] = key.split("-");
      if (!id || !name) continue;
      projects.push({ id, name });
    }
    if (projects.length) {
      setProjects(projects);
    }
  }, []);

  const saveAsNew =
    currentProject != null ? null : (
      <ToggleView>
        {(open, toggleOpen) =>
          !open ? (
            <div>
              <button
                className={button({ kind: "text", size: "small" })}
                onClick={toggleOpen}
              >
                Save as new
              </button>
            </div>
          ) : (
            <form
              className={styles["linear-form"]}
              onSubmit={(e) => {
                e.preventDefault();
                const projectName = e.currentTarget["project-name"].value;
                if (!projectName) return;

                const id = Date.now().toString(36);
                const key = `${APP_PROJECT}-${id}-${projectName}`;
                const serializedValue = JSON.stringify(
                  serialization.workspaces.save(workspace)
                );
                localStorage.setItem(key, serializedValue);

                setCurrentProject({ id, name: projectName });
                setProjects((pp) => pp.concat({ id, name: projectName }));
                toggleOpen();
              }}
            >
              <input
                required
                name="project-name"
                placeholder="New project name"
              />

              <button
                type="submit"
                className={button({ kind: "soft", size: "small" })}
              >
                <MdCheck size={24} />
              </button>
              <button
                type="button"
                className={button({ kind: "soft", size: "small" })}
                onClick={toggleOpen}
              >
                <MdClose size={24} />
              </button>
            </form>
          )
        }
      </ToggleView>
    );

  const saveCurrentProject =
    currentProject == null ? null : (
      <Flex gap="var(--sp-2)">
        <ToggleView>
          {(loading, setLoading) => (
            <button
              disabled={loading}
              className={button({ kind: "bold" })}
              title="Save to browser"
              onClick={() => {
                setLoading();
                setTimeout(() => {
                  const key = `${APP_PROJECT}-${currentProject.id}-${currentProject.name}`;
                  const serializedValue = JSON.stringify(
                    serialization.workspaces.save(workspace)
                  );
                  localStorage.setItem(key, serializedValue);
                  setLoading();
                }, 1000);
              }}
            >
              {loading ? <div className={spinner()} /> : <FaSave size={16} />}
            </button>
          )}
        </ToggleView>

        <ToggleView>
          {(loading, setLoading) => (
            <button
              disabled={loading}
              className={button({ kind: "bold" })}
              title="Duplicate this project"
              onClick={() => {
                setLoading();
                setTimeout(() => {
                  // save current project
                  let key = `${APP_PROJECT}-${currentProject.id}-${currentProject.name}`;
                  const serializedValue = JSON.stringify(
                    serialization.workspaces.save(workspace)
                  );
                  localStorage.setItem(key, serializedValue);

                  // create new project from current state
                  const projectName = currentProject.name + " (copy)";

                  const id = Date.now().toString(36);
                  key = `${APP_PROJECT}-${id}-${projectName}`;

                  localStorage.setItem(key, serializedValue);

                  setCurrentProject({ id, name: projectName });
                  setProjects((pp) => pp.concat({ id, name: projectName }));
                  setLoading();
                }, 1000);
              }}
            >
              {loading ? (
                <div className={spinner()} />
              ) : (
                <MdContentCopy size={16} />
              )}
            </button>
          )}
        </ToggleView>

        <WorkspaceCodePreview title={currentProject.name} workspace={workspace}>
          <button className={button({ kind: "bold" })} title="Preview code">
            <FaCode size={16} />
          </button>
        </WorkspaceCodePreview>

        <button
          className={button({ kind: "bold" })}
          title="Download code"
          onClick={() => {
            try {
              // const code = javascriptGenerator.workspaceToCode(workspace)

              const code = generator.workspaceToCode(workspace);
              downloadFile(code, `${currentProject.name}.ino`, "text/plain");
            } catch (err: any) {
              alert(err.toString());
              console.log((err as Error).stack?.toString());
            }
          }}
        >
          <FaDownload size={16} />
        </button>

        <ToggleView>
          {(loading, setLoading) => (
            <button
              disabled={loading}
              className={button({ kind: "bold" })}
              title="Delete this project"
              onClick={() => {
                setLoading();
                setTimeout(() => {
                  workspace.clear();
                  setProjects((pp) =>
                    pp.filter((p) => p.id != currentProject.id)
                  );
                  setCurrentProject(null);
                  const key = `${APP_PROJECT}-${currentProject.id}-${currentProject.name}`;
                  localStorage.removeItem(key);

                  setLoading();
                }, 1000);
              }}
            >
              {loading ? <div className={spinner()} /> : <MdDelete size={16} />}
            </button>
          )}
        </ToggleView>
      </Flex>
    );

  const previousProjectLoadout = (
    <ToggleView>
      {(open, toggleOpen) =>
        !open ? (
          <div>
            <button
              disabled={!projects.length}
              className={button({ kind: "text", size: "small" })}
              onClick={toggleOpen}
            >
              load project
            </button>
          </div>
        ) : (
          <Grid width="100%">
            <Flex justifyContent="space-between" gap="var(--sp-2)">
              <span>Previous projects</span>
              <button
                type="button"
                className={button({ kind: "soft", size: "small" })}
                onClick={toggleOpen}
              >
                <MdClose size={24} />
              </button>
            </Flex>

            {projects.map((project) => (
              <Box key={project.id}>
                &mdash;
                {project.id == currentProject?.id ? (
                  <Box
                    as="span"
                    display="inline-block"
                    height="40px"
                    className={button({ kind: "soft" })}
                  >
                    {currentProject.name}
                  </Box>
                ) : (
                  <button
                    className={button({ kind: "text" })}
                    onClick={() => {
                      const key = `${APP_PROJECT}-${project.id}-${project.name}`;
                      const serializedValue = localStorage.getItem(key);
                      if (serializedValue) {
                        serialization.workspaces.load(
                          JSON.parse(serializedValue),
                          workspace
                        );
                        setCurrentProject(project);
                      }
                    }}
                  >
                    {project.name}
                  </button>
                )}
              </Box>
            ))}
            <Box marginBlockStart="var(--sp-2)">
              <button
                className={button({ kind: "line" })}
                onClick={() => {
                  workspace.clear();
                  setCurrentProject(null);
                }}
              >
                <MdAdd size={20} />
                <span>new project</span>
              </button>
            </Box>
          </Grid>
        )
      }
    </ToggleView>
  );

  return (
    <div className={styles["main"]}>
      <span className={styles["project-title"]}>
        {currentProject?.name || "Untitled"}
      </span>
      {saveAsNew}

      {saveCurrentProject}

      <hr />

      {previousProjectLoadout}
    </div>
  );
}

function WorkspaceCodePreview({
  title,
  workspace,
  children,
}: {
  title: string;
  workspace: WorkspaceSvg;
  children: ReactElement;
}) {
  const [code, setCode] = useState("");
  const [open, toggleOpen] = useToggle();

  function handleClick() {
    try {
      // const code = javascriptGenerator.workspaceToCode(workspace)

      const code = generator.workspaceToCode(workspace);
      setCode(code);
      toggleOpen();
    } catch (err: any) {
      alert(err.toString());
      console.log((err as Error).stack?.toString());
    }
  }

  return (
    <>
      {cloneElement(children, { onClick: handleClick })}
      <Dialog open={open} onClose={() => open && toggleOpen()}>
        <Grid
          backgroundColor="white"
          maxWidth="var(--sp-md)"
          marginInline="auto"
          borderRadius="var(--sp-1)"
          border="1px solid var(--c-con-2)"
        >
          <Flex
            justifyContent="space-between"
            backgroundColor="var(--c-con-1)"
            padding="var(--sp-2)"
          >
            <Box as="span" fontWeight="bold">
              {title}
            </Box>
            <button
              className={button({ kind: "soft", size: "small" })}
              onClick={toggleOpen}
            >
              <MdClose size={24} />
            </button>
          </Flex>
          <Box padding="var(--sp-2)" maxHeight="75vh" overflow="auto">
            <pre>{code}</pre>
          </Box>
        </Grid>
      </Dialog>
    </>
  );
}

function downloadFile(data: any, filename: string, type = "application/json") {
  const file = new Blob([data], { type });
  const a = document.createElement("a");
  const url = URL.createObjectURL(file);

  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}
