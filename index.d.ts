// TODO: These type declarations are non-exhaustive, still pending to add all
// supported options.

interface PostcssPluginOptionsI {}

type PostcssPluginT = string | [string, PostcssPluginOptionsI];

export type PluginOptionsT = {
  autoResolveMultipleImports: boolean;

  filetypes?: {
    [key in `.${string}`]: {
      plugins?: PostcssPluginT[];
      syntax: string;
    };
  };

  generateScopedName?: string
  | ((name: string, filename: string, css: string) => string);

  replaceImport?: boolean;
}
