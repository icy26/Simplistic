/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProspect = /* GraphQL */ `
  query GetProspect($id: ID!) {
    getProspect(id: $id) {
      id
      name
      email
      message
      createdAt
      updatedAt
    }
  }
`;
export const listProspects = /* GraphQL */ `
  query ListProspects(
    $filter: ModelProspectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProspects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
