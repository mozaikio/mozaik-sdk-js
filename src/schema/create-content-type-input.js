/* eslint no-unused-vars: 0 */
// @flow
const createFieldInput = require('./create-field-input.js');
import type { ObjectTypeDefinitionNode } from 'graphql/language/ast';
import type { ContentTypeInput } from '../content-types/create/index.js';

module.exports = function createContentTypeInput(
  definition: ObjectTypeDefinitionNode
): ContentTypeInput {
  const { kind, name, interfaces, directives, fields } = definition;

  return {
    name: name.value,
    apiId: name.value
      .replace(/([a-z])([A-Z])/g, g => `${g[0]}_${g[1]}`)
      .toUpperCase(),
    fields: (fields || []).map(f => createFieldInput(f)),
  };
};
