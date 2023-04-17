/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuest = /* GraphQL */ `
  query GetQuest($id: ID!) {
    getQuest(id: $id) {
      id
      username
      lang
      textOrg
      audioUrlOrg
      img
      textSt
      audioUrlSt
      mark
      answer
      schedOn
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listQuests = /* GraphQL */ `
  query ListQuests(
    $filter: ModelQuestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        lang
        textOrg
        audioUrlOrg
        img
        textSt
        audioUrlSt
        mark
        answer
        schedOn
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const byUsername = /* GraphQL */ `
  query ByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        lang
        textOrg
        audioUrlOrg
        img
        textSt
        audioUrlSt
        mark
        answer
        schedOn
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
