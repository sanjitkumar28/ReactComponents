import FileData from "./data.json";
import { ListType } from "./type";
import "./FileExplore.css";
import { useState } from "react";

const FileExplore = () => {
  const FileView = ({ data }: { data: ListType[] }) => {
    const [expanded, setExpanded] = useState({});
    return (
      <>
        {data.map((node) => {
          return (
            <div className="container">
              <div>
                {node.isFolder && !expanded[node.label] ? (
                  <span
                    onClick={() => {
                      setExpanded((prev) => {
                        return {
                          ...prev,
                          [node.label]: !prev[node.label],
                        };
                      });
                    }}
                  >
                    +
                  </span>
                ) : node.isFolder ? (
                  <span onClick={() => {
                      setExpanded((prev) => {
                        return {
                          ...prev,
                          [node.label]: !prev[node.label],
                        };
                      });
                    }}>-</span>
                ) : null}

                { <span>{node.label}</span>}
              </div>
              {node?.children && expanded[node.label] && <FileView data={node.children} />}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      File Explore in JS
      <FileView data={FileData} />
    </div>
  );
};

export default FileExplore;
