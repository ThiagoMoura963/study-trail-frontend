import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

export interface Option {
  metadata: {
    title: string,
    url: string,
  },
  content: string,
  slug: string,
}

export default function OptionService() {
  return {
    async getAll(): Promise<Option[]> {
      const encoding = 'utf-8';
      const PATH_OPTIONS = path.resolve(".", "_data", "options");
      const optionsFile = await fs.readdir(PATH_OPTIONS, encoding);
      const optionsPromise = optionsFile.map(async (optionFileName) => {
        const pathOption = path.resolve(PATH_OPTIONS, optionFileName);
        const optionsFile = await fs.readFile(pathOption, encoding);
        const { data, content } = matter(optionsFile);

        const option: Option = {
          metadata: {
            title: data.title,
            url: data.url,
          },
          content,
          slug: optionFileName.replace(".md", ""),
        }

        return option;
      })

      const options = Promise.all(optionsPromise);
      return options;
    }
  }
}
