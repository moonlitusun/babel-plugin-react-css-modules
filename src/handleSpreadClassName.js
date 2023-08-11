// @flow

import { NodePath } from '@babel/core';

import {
  cloneNode,
  Expression,
  isStringLiteral,
  isJSXExpressionContainer,
  jsxExpressionContainer,
  binaryExpression,
  stringLiteral,
} from '@babel/types';

const handleSpreadClassName = (
  path: typeof NodePath,
  destinationName: string,
  classNamesFromSpread: typeof Expression,
) => {
  const destinationAttribute = path.node.openingElement.attributes
    .find((attribute) => typeof attribute.name !== 'undefined' && attribute.name.name === destinationName);

  if (!destinationAttribute) {
    return;
  }

  if (isStringLiteral(destinationAttribute.value)) {
    destinationAttribute.value = jsxExpressionContainer(
      binaryExpression(
        '+',
        cloneNode(destinationAttribute.value),
        binaryExpression(
          '+',
          stringLiteral(' '),
          classNamesFromSpread,
        ),
      ),
    );
  } else if (isJSXExpressionContainer(destinationAttribute.value)) {
    destinationAttribute.value = jsxExpressionContainer(
      binaryExpression(
        '+',
        cloneNode(destinationAttribute.value.expression),
        binaryExpression(
          '+',
          stringLiteral(' '),
          classNamesFromSpread,
        ),
      ),
    );
  }
};

export default handleSpreadClassName;
