import path from "path";
import { fileURLToPath } from "url";

const getDirname = (metaUrl) => {
  const __filename = fileURLToPath(metaUrl);
  const __dirname = path.dirname(__filename);

  return __dirname;
};

export default getDirname;
