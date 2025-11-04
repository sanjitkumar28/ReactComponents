import FileData from "./data.json";
import { ListType } from "./type";

const FileExplore = () => {
  const FileView = ({ data }: { data: ListType[] }) => {
    return (
      <>
        {data.map((node) => {
          return (
            <div>
              <span>{node.label}</span>
              {node?.children && <FileView data={node.children} />}
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
