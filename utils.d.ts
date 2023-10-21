interface LoaderContextI {
  resourcePath: string;
}

interface OptionsI {}

export function getLocalIdent(
  { resourcePath }: LoaderContextI,
  localIdentName: string,
  localName: string,
  options: OptionsI,
): string;

