interface LoaderContextI {
  resourcePath: string;
}

interface OptionsI {}

export function generateScopedNameFactory(
  localIdentName: string,
): (localName: string, assetPath: string) => string;

export function getLocalIdent(
  { resourcePath }: LoaderContextI,
  localIdentName: string,
  localName: string,
  options: OptionsI,
): string;

