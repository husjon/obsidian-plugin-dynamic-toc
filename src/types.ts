export type BulletStyle = "bullet" | "number";
export interface TableOptions {
  style: BulletStyle;
  min_depth: number;
  max_depth: number;
}

export const EXTERNAL_MARKDOWN_PREVIEW_STYLE = {
  None: "",
  TOC: "[TOC]",
  _TOC_: "__TOC__",
  DevonThink: "{{toc}}",
  TheBrain: "[/toc/]",
};

export type ExternalMarkdownKey = keyof typeof EXTERNAL_MARKDOWN_PREVIEW_STYLE;
export interface DynamicTOCSettings extends TableOptions {
  externalStyle: ExternalMarkdownKey;
  supportAllMatchers: boolean;
}
