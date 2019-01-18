module.exports = {
        typeDefs: /* GraphQL */ `type AggregateFaq {
  count: Int!
}

type AggregateHomeContent {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Faq {
  id: ID!
  title: String!
  body: String!
}

type FaqConnection {
  pageInfo: PageInfo!
  edges: [FaqEdge]!
  aggregate: AggregateFaq!
}

input FaqCreateInput {
  title: String!
  body: String!
}

type FaqEdge {
  node: Faq!
  cursor: String!
}

enum FaqOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  body_ASC
  body_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type FaqPreviousValues {
  id: ID!
  title: String!
  body: String!
}

type FaqSubscriptionPayload {
  mutation: MutationType!
  node: Faq
  updatedFields: [String!]
  previousValues: FaqPreviousValues
}

input FaqSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FaqWhereInput
  AND: [FaqSubscriptionWhereInput!]
  OR: [FaqSubscriptionWhereInput!]
  NOT: [FaqSubscriptionWhereInput!]
}

input FaqUpdateInput {
  title: String
  body: String
}

input FaqWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  AND: [FaqWhereInput!]
  OR: [FaqWhereInput!]
  NOT: [FaqWhereInput!]
}

input FaqWhereUniqueInput {
  id: ID
}

type HomeContent {
  id: ID!
  heading: String!
  subheading: String!
  heroImageUrl: String!
}

type HomeContentConnection {
  pageInfo: PageInfo!
  edges: [HomeContentEdge]!
  aggregate: AggregateHomeContent!
}

input HomeContentCreateInput {
  heading: String!
  subheading: String!
  heroImageUrl: String!
}

type HomeContentEdge {
  node: HomeContent!
  cursor: String!
}

enum HomeContentOrderByInput {
  id_ASC
  id_DESC
  heading_ASC
  heading_DESC
  subheading_ASC
  subheading_DESC
  heroImageUrl_ASC
  heroImageUrl_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type HomeContentPreviousValues {
  id: ID!
  heading: String!
  subheading: String!
  heroImageUrl: String!
}

type HomeContentSubscriptionPayload {
  mutation: MutationType!
  node: HomeContent
  updatedFields: [String!]
  previousValues: HomeContentPreviousValues
}

input HomeContentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: HomeContentWhereInput
  AND: [HomeContentSubscriptionWhereInput!]
  OR: [HomeContentSubscriptionWhereInput!]
  NOT: [HomeContentSubscriptionWhereInput!]
}

input HomeContentUpdateInput {
  heading: String
  subheading: String
  heroImageUrl: String
}

input HomeContentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  heading: String
  heading_not: String
  heading_in: [String!]
  heading_not_in: [String!]
  heading_lt: String
  heading_lte: String
  heading_gt: String
  heading_gte: String
  heading_contains: String
  heading_not_contains: String
  heading_starts_with: String
  heading_not_starts_with: String
  heading_ends_with: String
  heading_not_ends_with: String
  subheading: String
  subheading_not: String
  subheading_in: [String!]
  subheading_not_in: [String!]
  subheading_lt: String
  subheading_lte: String
  subheading_gt: String
  subheading_gte: String
  subheading_contains: String
  subheading_not_contains: String
  subheading_starts_with: String
  subheading_not_starts_with: String
  subheading_ends_with: String
  subheading_not_ends_with: String
  heroImageUrl: String
  heroImageUrl_not: String
  heroImageUrl_in: [String!]
  heroImageUrl_not_in: [String!]
  heroImageUrl_lt: String
  heroImageUrl_lte: String
  heroImageUrl_gt: String
  heroImageUrl_gte: String
  heroImageUrl_contains: String
  heroImageUrl_not_contains: String
  heroImageUrl_starts_with: String
  heroImageUrl_not_starts_with: String
  heroImageUrl_ends_with: String
  heroImageUrl_not_ends_with: String
  AND: [HomeContentWhereInput!]
  OR: [HomeContentWhereInput!]
  NOT: [HomeContentWhereInput!]
}

input HomeContentWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createFaq(data: FaqCreateInput!): Faq!
  updateFaq(data: FaqUpdateInput!, where: FaqWhereUniqueInput!): Faq
  updateManyFaqs(data: FaqUpdateInput!, where: FaqWhereInput): BatchPayload!
  upsertFaq(where: FaqWhereUniqueInput!, create: FaqCreateInput!, update: FaqUpdateInput!): Faq!
  deleteFaq(where: FaqWhereUniqueInput!): Faq
  deleteManyFaqs(where: FaqWhereInput): BatchPayload!
  createHomeContent(data: HomeContentCreateInput!): HomeContent!
  updateHomeContent(data: HomeContentUpdateInput!, where: HomeContentWhereUniqueInput!): HomeContent
  updateManyHomeContents(data: HomeContentUpdateInput!, where: HomeContentWhereInput): BatchPayload!
  upsertHomeContent(where: HomeContentWhereUniqueInput!, create: HomeContentCreateInput!, update: HomeContentUpdateInput!): HomeContent!
  deleteHomeContent(where: HomeContentWhereUniqueInput!): HomeContent
  deleteManyHomeContents(where: HomeContentWhereInput): BatchPayload!
  createPost(data: PostCreateInput!): Post!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput): BatchPayload!
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  deletePost(where: PostWhereUniqueInput!): Post
  deleteManyPosts(where: PostWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Post {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  description: String!
  imageUrl: String!
}

type PostConnection {
  pageInfo: PageInfo!
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  description: String!
  imageUrl: String!
}

type PostEdge {
  node: Post!
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  description_ASC
  description_DESC
  imageUrl_ASC
  imageUrl_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  description: String!
  imageUrl: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PostWhereInput
  AND: [PostSubscriptionWhereInput!]
  OR: [PostSubscriptionWhereInput!]
  NOT: [PostSubscriptionWhereInput!]
}

input PostUpdateInput {
  description: String
  imageUrl: String
}

input PostWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  imageUrl: String
  imageUrl_not: String
  imageUrl_in: [String!]
  imageUrl_not_in: [String!]
  imageUrl_lt: String
  imageUrl_lte: String
  imageUrl_gt: String
  imageUrl_gte: String
  imageUrl_contains: String
  imageUrl_not_contains: String
  imageUrl_starts_with: String
  imageUrl_not_starts_with: String
  imageUrl_ends_with: String
  imageUrl_not_ends_with: String
  AND: [PostWhereInput!]
  OR: [PostWhereInput!]
  NOT: [PostWhereInput!]
}

input PostWhereUniqueInput {
  id: ID
}

type Query {
  faq(where: FaqWhereUniqueInput!): Faq
  faqs(where: FaqWhereInput, orderBy: FaqOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Faq]!
  faqsConnection(where: FaqWhereInput, orderBy: FaqOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FaqConnection!
  homeContent(where: HomeContentWhereUniqueInput!): HomeContent
  homeContents(where: HomeContentWhereInput, orderBy: HomeContentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [HomeContent]!
  homeContentsConnection(where: HomeContentWhereInput, orderBy: HomeContentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): HomeContentConnection!
  post(where: PostWhereUniqueInput!): Post
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  faq(where: FaqSubscriptionWhereInput): FaqSubscriptionPayload
  homeContent(where: HomeContentSubscriptionWhereInput): HomeContentSubscriptionPayload
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    