#  A keystone list
type User {
  id: ID!
  name: String
  email: String
  password_is_set: Boolean
  passwordResetToken_is_set: Boolean
  passwordResetIssuedAt: String
  passwordResetRedeemedAt: String
  magicAuthToken_is_set: Boolean
  magicAuthIssuedAt: String
  magicAuthRedeemedAt: String
}

input UserWhereInput {
  AND: [UserWhereInput]
  OR: [UserWhereInput]
  id: ID
  id_not: ID
  id_in: [ID]
  id_not_in: [ID]
  name: String
  name_not: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  name_i: String
  name_not_i: String
  name_contains_i: String
  name_not_contains_i: String
  name_starts_with_i: String
  name_not_starts_with_i: String
  name_ends_with_i: String
  name_not_ends_with_i: String
  name_in: [String]
  name_not_in: [String]
  email: String
  email_not: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  email_i: String
  email_not_i: String
  email_contains_i: String
  email_not_contains_i: String
  email_starts_with_i: String
  email_not_starts_with_i: String
  email_ends_with_i: String
  email_not_ends_with_i: String
  email_in: [String]
  email_not_in: [String]
  password_is_set: Boolean
  passwordResetToken_is_set: Boolean
  passwordResetIssuedAt: String
  passwordResetIssuedAt_not: String
  passwordResetIssuedAt_lt: String
  passwordResetIssuedAt_lte: String
  passwordResetIssuedAt_gt: String
  passwordResetIssuedAt_gte: String
  passwordResetIssuedAt_in: [String]
  passwordResetIssuedAt_not_in: [String]
  passwordResetRedeemedAt: String
  passwordResetRedeemedAt_not: String
  passwordResetRedeemedAt_lt: String
  passwordResetRedeemedAt_lte: String
  passwordResetRedeemedAt_gt: String
  passwordResetRedeemedAt_gte: String
  passwordResetRedeemedAt_in: [String]
  passwordResetRedeemedAt_not_in: [String]
  magicAuthToken_is_set: Boolean
  magicAuthIssuedAt: String
  magicAuthIssuedAt_not: String
  magicAuthIssuedAt_lt: String
  magicAuthIssuedAt_lte: String
  magicAuthIssuedAt_gt: String
  magicAuthIssuedAt_gte: String
  magicAuthIssuedAt_in: [String]
  magicAuthIssuedAt_not_in: [String]
  magicAuthRedeemedAt: String
  magicAuthRedeemedAt_not: String
  magicAuthRedeemedAt_lt: String
  magicAuthRedeemedAt_lte: String
  magicAuthRedeemedAt_gt: String
  magicAuthRedeemedAt_gte: String
  magicAuthRedeemedAt_in: [String]
  magicAuthRedeemedAt_not_in: [String]
}

input UserWhereUniqueInput {
  id: ID!
}

enum SortUsersBy {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  passwordResetIssuedAt_ASC
  passwordResetIssuedAt_DESC
  passwordResetRedeemedAt_ASC
  passwordResetRedeemedAt_DESC
  magicAuthIssuedAt_ASC
  magicAuthIssuedAt_DESC
  magicAuthRedeemedAt_ASC
  magicAuthRedeemedAt_DESC
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  passwordResetToken: String
  passwordResetIssuedAt: String
  passwordResetRedeemedAt: String
  magicAuthToken: String
  magicAuthIssuedAt: String
  magicAuthRedeemedAt: String
}

input UsersUpdateInput {
  id: ID!
  data: UserUpdateInput
}

input UserCreateInput {
  name: String
  email: String
  password: String
  passwordResetToken: String
  passwordResetIssuedAt: String
  passwordResetRedeemedAt: String
  magicAuthToken: String
  magicAuthIssuedAt: String
  magicAuthRedeemedAt: String
}

input UsersCreateInput {
  data: UserCreateInput
}

input ProteinRelateToOneInput {
  create: ProteinCreateInput
  connect: ProteinWhereUniqueInput
  disconnect: ProteinWhereUniqueInput
  disconnectAll: Boolean
}

input ToppingRelateToManyInput {
  create: [ToppingCreateInput]
  connect: [ToppingWhereUniqueInput]
  disconnect: [ToppingWhereUniqueInput]
  disconnectAll: Boolean
}

input CheeseRelateToManyInput {
  create: [CheeseCreateInput]
  connect: [CheeseWhereUniqueInput]
  disconnect: [CheeseWhereUniqueInput]
  disconnectAll: Boolean
}

input CondimentRelateToManyInput {
  create: [CondimentCreateInput]
  connect: [CondimentWhereUniqueInput]
  disconnect: [CondimentWhereUniqueInput]
  disconnectAll: Boolean
}

#  A keystone list
type Burger {
  id: ID!
  name: String
  description: String
  price: Int
  protein: Protein
  topping(
    where: ToppingWhereInput
    search: String
    sortBy: [SortToppingsBy!]
    orderBy: String
    first: Int
    skip: Int
  ): [Topping!]!
  _toppingMeta(
    where: ToppingWhereInput
    search: String
    sortBy: [SortToppingsBy!]
    orderBy: String
    first: Int
    skip: Int
  ): _QueryMeta
  cheese(
    where: CheeseWhereInput
    search: String
    sortBy: [SortCheesesBy!]
    orderBy: String
    first: Int
    skip: Int
  ): [Cheese!]!
  _cheeseMeta(
    where: CheeseWhereInput
    search: String
    sortBy: [SortCheesesBy!]
    orderBy: String
    first: Int
    skip: Int
  ): _QueryMeta
  condiment(
    where: CondimentWhereInput
    search: String
    sortBy: [SortCondimentsBy!]
    orderBy: String
    first: Int
    skip: Int
  ): [Condiment!]!
  _condimentMeta(
    where: CondimentWhereInput
    search: String
    sortBy: [SortCondimentsBy!]
    orderBy: String
    first: Int
    skip: Int
  ): _QueryMeta
}

input BurgerWhereInput {
  AND: [BurgerWhereInput]
  OR: [BurgerWhereInput]
  id: ID
  id_not: ID
  id_in: [ID]
  id_not_in: [ID]
  name: String
  name_not: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  name_i: String
  name_not_i: String
  name_contains_i: String
  name_not_contains_i: String
  name_starts_with_i: String
  name_not_starts_with_i: String
  name_ends_with_i: String
  name_not_ends_with_i: String
  name_in: [String]
  name_not_in: [String]
  description: String
  description_not: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  description_i: String
  description_not_i: String
  description_contains_i: String
  description_not_contains_i: String
  description_starts_with_i: String
  description_not_starts_with_i: String
  description_ends_with_i: String
  description_not_ends_with_i: String
  description_in: [String]
  description_not_in: [String]
  price: Int
  price_not: Int
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  price_in: [Int]
  price_not_in: [Int]
  protein: ProteinWhereInput
  protein_is_null: Boolean

  #  condition must be true for all nodes
  topping_every: ToppingWhereInput

  #  condition must be true for at least 1 node
  topping_some: ToppingWhereInput

  #  condition must be false for all nodes
  topping_none: ToppingWhereInput

  #  condition must be true for all nodes
  cheese_every: CheeseWhereInput

  #  condition must be true for at least 1 node
  cheese_some: CheeseWhereInput

  #  condition must be false for all nodes
  cheese_none: CheeseWhereInput

  #  condition must be true for all nodes
  condiment_every: CondimentWhereInput

  #  condition must be true for at least 1 node
  condiment_some: CondimentWhereInput

  #  condition must be false for all nodes
  condiment_none: CondimentWhereInput
}

input BurgerWhereUniqueInput {
  id: ID!
}

enum SortBurgersBy {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  protein_ASC
  protein_DESC
  topping_ASC
  topping_DESC
  cheese_ASC
  cheese_DESC
  condiment_ASC
  condiment_DESC
}

input BurgerUpdateInput {
  name: String
  description: String
  price: Int
  protein: ProteinRelateToOneInput
  topping: ToppingRelateToManyInput
  cheese: CheeseRelateToManyInput
  condiment: CondimentRelateToManyInput
}

input BurgersUpdateInput {
  id: ID!
  data: BurgerUpdateInput
}

input BurgerCreateInput {
  name: String
  description: String
  price: Int
  protein: ProteinRelateToOneInput
  topping: ToppingRelateToManyInput
  cheese: CheeseRelateToManyInput
  condiment: CondimentRelateToManyInput
}

input BurgersCreateInput {
  data: BurgerCreateInput
}

#  A keystone list
type Protein {
  id: ID!
  name: String
  description: String
  price: Int
  stock: Int
  vegitarian: String
}

input ProteinWhereInput {
  AND: [ProteinWhereInput]
  OR: [ProteinWhereInput]
  id: ID
  id_not: ID
  id_in: [ID]
  id_not_in: [ID]
  name: String
  name_not: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  name_i: String
  name_not_i: String
  name_contains_i: String
  name_not_contains_i: String
  name_starts_with_i: String
  name_not_starts_with_i: String
  name_ends_with_i: String
  name_not_ends_with_i: String
  name_in: [String]
  name_not_in: [String]
  description: String
  description_not: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  description_i: String
  description_not_i: String
  description_contains_i: String
  description_not_contains_i: String
  description_starts_with_i: String
  description_not_starts_with_i: String
  description_ends_with_i: String
  description_not_ends_with_i: String
  description_in: [String]
  description_not_in: [String]
  price: Int
  price_not: Int
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  price_in: [Int]
  price_not_in: [Int]
  stock: Int
  stock_not: Int
  stock_lt: Int
  stock_lte: Int
  stock_gt: Int
  stock_gte: Int
  stock_in: [Int]
  stock_not_in: [Int]
  vegitarian: String
  vegitarian_not: String
  vegitarian_contains: String
  vegitarian_not_contains: String
  vegitarian_starts_with: String
  vegitarian_not_starts_with: String
  vegitarian_ends_with: String
  vegitarian_not_ends_with: String
  vegitarian_i: String
  vegitarian_not_i: String
  vegitarian_contains_i: String
  vegitarian_not_contains_i: String
  vegitarian_starts_with_i: String
  vegitarian_not_starts_with_i: String
  vegitarian_ends_with_i: String
  vegitarian_not_ends_with_i: String
  vegitarian_in: [String]
  vegitarian_not_in: [String]
}

input ProteinWhereUniqueInput {
  id: ID!
}

enum SortProteinsBy {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  stock_ASC
  stock_DESC
  vegitarian_ASC
  vegitarian_DESC
}

input ProteinUpdateInput {
  name: String
  description: String
  price: Int
  stock: Int
  vegitarian: String
}

input ProteinsUpdateInput {
  id: ID!
  data: ProteinUpdateInput
}

input ProteinCreateInput {
  name: String
  description: String
  price: Int
  stock: Int
  vegitarian: String
}

input ProteinsCreateInput {
  data: ProteinCreateInput
}

#  A keystone list
type Topping {
  id: ID!
  name: String
  description: String
  price: Int
  stock: Int
}

input ToppingWhereInput {
  AND: [ToppingWhereInput]
  OR: [ToppingWhereInput]
  id: ID
  id_not: ID
  id_in: [ID]
  id_not_in: [ID]
  name: String
  name_not: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  name_i: String
  name_not_i: String
  name_contains_i: String
  name_not_contains_i: String
  name_starts_with_i: String
  name_not_starts_with_i: String
  name_ends_with_i: String
  name_not_ends_with_i: String
  name_in: [String]
  name_not_in: [String]
  description: String
  description_not: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  description_i: String
  description_not_i: String
  description_contains_i: String
  description_not_contains_i: String
  description_starts_with_i: String
  description_not_starts_with_i: String
  description_ends_with_i: String
  description_not_ends_with_i: String
  description_in: [String]
  description_not_in: [String]
  price: Int
  price_not: Int
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  price_in: [Int]
  price_not_in: [Int]
  stock: Int
  stock_not: Int
  stock_lt: Int
  stock_lte: Int
  stock_gt: Int
  stock_gte: Int
  stock_in: [Int]
  stock_not_in: [Int]
}

input ToppingWhereUniqueInput {
  id: ID!
}

enum SortToppingsBy {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  stock_ASC
  stock_DESC
}

input ToppingUpdateInput {
  name: String
  description: String
  price: Int
  stock: Int
}

input ToppingsUpdateInput {
  id: ID!
  data: ToppingUpdateInput
}

input ToppingCreateInput {
  name: String
  description: String
  price: Int
  stock: Int
}

input ToppingsCreateInput {
  data: ToppingCreateInput
}

#  A keystone list
type Cheese {
  id: ID!
  name: String
  description: String
  price: Int
  stock: Int
}

input CheeseWhereInput {
  AND: [CheeseWhereInput]
  OR: [CheeseWhereInput]
  id: ID
  id_not: ID
  id_in: [ID]
  id_not_in: [ID]
  name: String
  name_not: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  name_i: String
  name_not_i: String
  name_contains_i: String
  name_not_contains_i: String
  name_starts_with_i: String
  name_not_starts_with_i: String
  name_ends_with_i: String
  name_not_ends_with_i: String
  name_in: [String]
  name_not_in: [String]
  description: String
  description_not: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  description_i: String
  description_not_i: String
  description_contains_i: String
  description_not_contains_i: String
  description_starts_with_i: String
  description_not_starts_with_i: String
  description_ends_with_i: String
  description_not_ends_with_i: String
  description_in: [String]
  description_not_in: [String]
  price: Int
  price_not: Int
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  price_in: [Int]
  price_not_in: [Int]
  stock: Int
  stock_not: Int
  stock_lt: Int
  stock_lte: Int
  stock_gt: Int
  stock_gte: Int
  stock_in: [Int]
  stock_not_in: [Int]
}

input CheeseWhereUniqueInput {
  id: ID!
}

enum SortCheesesBy {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  stock_ASC
  stock_DESC
}

input CheeseUpdateInput {
  name: String
  description: String
  price: Int
  stock: Int
}

input CheesesUpdateInput {
  id: ID!
  data: CheeseUpdateInput
}

input CheeseCreateInput {
  name: String
  description: String
  price: Int
  stock: Int
}

input CheesesCreateInput {
  data: CheeseCreateInput
}

#  A keystone list
type Condiment {
  id: ID!
  name: String
  description: String
  price: Int
  stock: Int
}

input CondimentWhereInput {
  AND: [CondimentWhereInput]
  OR: [CondimentWhereInput]
  id: ID
  id_not: ID
  id_in: [ID]
  id_not_in: [ID]
  name: String
  name_not: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  name_i: String
  name_not_i: String
  name_contains_i: String
  name_not_contains_i: String
  name_starts_with_i: String
  name_not_starts_with_i: String
  name_ends_with_i: String
  name_not_ends_with_i: String
  name_in: [String]
  name_not_in: [String]
  description: String
  description_not: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  description_i: String
  description_not_i: String
  description_contains_i: String
  description_not_contains_i: String
  description_starts_with_i: String
  description_not_starts_with_i: String
  description_ends_with_i: String
  description_not_ends_with_i: String
  description_in: [String]
  description_not_in: [String]
  price: Int
  price_not: Int
  price_lt: Int
  price_lte: Int
  price_gt: Int
  price_gte: Int
  price_in: [Int]
  price_not_in: [Int]
  stock: Int
  stock_not: Int
  stock_lt: Int
  stock_lte: Int
  stock_gt: Int
  stock_gte: Int
  stock_in: [Int]
  stock_not_in: [Int]
}

input CondimentWhereUniqueInput {
  id: ID!
}

enum SortCondimentsBy {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  stock_ASC
  stock_DESC
}

input CondimentUpdateInput {
  name: String
  description: String
  price: Int
  stock: Int
}

input CondimentsUpdateInput {
  id: ID!
  data: CondimentUpdateInput
}

input CondimentCreateInput {
  name: String
  description: String
  price: Int
  stock: Int
}

input CondimentsCreateInput {
  data: CondimentCreateInput
}

# The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
scalar JSON

type _ListAccess {
  # Access Control settings for the currently logged in (or anonymous)
  # user when performing 'create' operations.
  # NOTE: 'create' can only return a Boolean.
  # It is not possible to specify a declarative Where clause for this
  # operation
  create: Boolean

  # Access Control settings for the currently logged in (or anonymous)
  # user when performing 'read' operations.
  read: JSON

  # Access Control settings for the currently logged in (or anonymous)
  # user when performing 'update' operations.
  update: JSON

  # Access Control settings for the currently logged in (or anonymous)
  # user when performing 'delete' operations.
  delete: JSON

  # Access Control settings for the currently logged in (or anonymous)
  # user when performing 'auth' operations.
  auth: JSON
}

type _ListQueries {
  # Single-item query name
  item: String

  # All-items query name
  list: String

  # List metadata query name
  meta: String
}

type _ListMutations {
  # Create mutation name
  create: String

  # Create many mutation name
  createMany: String

  # Update mutation name
  update: String

  # Update many mutation name
  updateMany: String

  # Delete mutation name
  delete: String

  # Delete many mutation name
  deleteMany: String
}

type _ListInputTypes {
  # Input type for matching multiple items
  whereInput: String

  # Input type for matching a unique item
  whereUniqueInput: String

  # Create mutation input type name
  createInput: String

  # Create many mutation input type name
  createManyInput: String

  # Update mutation name input
  updateInput: String

  # Update many mutation name input
  updateManyInput: String
}

type _ListSchemaFields {
  # The path of the field in its list
  path: String

  # The name of the field in its list
  name: String @deprecated(reason: "Use `path` instead")

  # The field type (ie, Checkbox, Text, etc)
  type: String
}

type _ListSchemaRelatedFields {
  # The typename as used in GraphQL queries
  type: String

  # A list of GraphQL field names
  fields: [String]
}

type _ListSchema {
  # The typename as used in GraphQL queries
  type: String

  # Top level GraphQL query names which either return this type, or
  # provide aggregate information about this type
  queries: _ListQueries

  # Top-level GraphQL mutation names
  mutations: _ListMutations

  # Top-level GraphQL input types
  inputTypes: _ListInputTypes

  # Information about fields defined on this list
  fields(where: _ListSchemaFieldsInput): [_ListSchemaFields]

  # Information about fields on other types which return this type, or
  # provide aggregate information about this type
  relatedFields: [_ListSchemaRelatedFields]
}

type _ListMeta {
  # The Keystone list key
  key: String

  # The Keystone List name
  name: String @deprecated(reason: "Use `key` instead")

  # The list's user-facing description
  description: String

  # The list's display name in the Admin UI
  label: String

  # The list's singular display name
  singular: String

  # The list's plural display name
  plural: String

  # The list's data path
  path: String

  # Access control configuration for the currently authenticated request
  access: _ListAccess

  # Information on the generated GraphQL schema
  schema: _ListSchema
}

type _QueryMeta {
  count: Int
}

input _ksListsMetaInput {
  key: String

  # Whether this is an auxiliary helper list
  auxiliary: Boolean
}

input _ListSchemaFieldsInput {
  type: String
}

type Query {
  #  Search for all User items which match the where clause.
  allUsers(
    where: UserWhereInput
    search: String
    sortBy: [SortUsersBy!]
    orderBy: String
    first: Int
    skip: Int
  ): [User]

  #  Search for the User item with the matching ID.
  User(where: UserWhereUniqueInput!): User

  #  Perform a meta-query on all User items which match the where clause.
  _allUsersMeta(
    where: UserWhereInput
    search: String
    sortBy: [SortUsersBy!]
    orderBy: String
    first: Int
    skip: Int
  ): _QueryMeta

  #  Retrieve the meta-data for the User list.
  _UsersMeta: _ListMeta

  #  Search for all Burger items which match the where clause.
  allBurgers(
    where: BurgerWhereInput
    search: String
    sortBy: [SortBurgersBy!]
    orderBy: String
    first: Int
    skip: Int
  ): [Burger]

  #  Search for the Burger item with the matching ID.
  Burger(where: BurgerWhereUniqueInput!): Burger

  #  Perform a meta-query on all Burger items which match the where clause.
  _allBurgersMeta(
    where: BurgerWhereInput
    search: String
    sortBy: [SortBurgersBy!]
    orderBy: String
    first: Int
    skip: Int
  ): _QueryMeta

  #  Retrieve the meta-data for the Burger list.
  _BurgersMeta: _ListMeta

  #  Search for all Protein items which match the where clause.
  allProteins(
    where: ProteinWhereInput
    search: String
    sortBy: [SortProteinsBy!]
    orderBy: String
    first: Int
    skip: Int
  ): [Protein]

  #  Search for the Protein item with the matching ID.
  Protein(where: ProteinWhereUniqueInput!): Protein

  #  Perform a meta-query on all Protein items which match the where clause.
  _allProteinsMeta(
    where: ProteinWhereInput
    search: String
    sortBy: [SortProteinsBy!]
    orderBy: String
    first: Int
    skip: Int
  ): _QueryMeta

  #  Retrieve the meta-data for the Protein list.
  _ProteinsMeta: _ListMeta

  #  Search for all Topping items which match the where clause.
  allToppings(
    where: ToppingWhereInput
    search: String
    sortBy: [SortToppingsBy!]
    orderBy: String
    first: Int
    skip: Int
  ): [Topping]

  #  Search for the Topping item with the matching ID.
  Topping(where: ToppingWhereUniqueInput!): Topping

  #  Perform a meta-query on all Topping items which match the where clause.
  _allToppingsMeta(
    where: ToppingWhereInput
    search: String
    sortBy: [SortToppingsBy!]
    orderBy: String
    first: Int
    skip: Int
  ): _QueryMeta

  #  Retrieve the meta-data for the Topping list.
  _ToppingsMeta: _ListMeta

  #  Search for all Cheese items which match the where clause.
  allCheeses(
    where: CheeseWhereInput
    search: String
    sortBy: [SortCheesesBy!]
    orderBy: String
    first: Int
    skip: Int
  ): [Cheese]

  #  Search for the Cheese item with the matching ID.
  Cheese(where: CheeseWhereUniqueInput!): Cheese

  #  Perform a meta-query on all Cheese items which match the where clause.
  _allCheesesMeta(
    where: CheeseWhereInput
    search: String
    sortBy: [SortCheesesBy!]
    orderBy: String
    first: Int
    skip: Int
  ): _QueryMeta

  #  Retrieve the meta-data for the Cheese list.
  _CheesesMeta: _ListMeta

  #  Search for all Condiment items which match the where clause.
  allCondiments(
    where: CondimentWhereInput
    search: String
    sortBy: [SortCondimentsBy!]
    orderBy: String
    first: Int
    skip: Int
  ): [Condiment]

  #  Search for the Condiment item with the matching ID.
  Condiment(where: CondimentWhereUniqueInput!): Condiment

  #  Perform a meta-query on all Condiment items which match the where clause.
  _allCondimentsMeta(
    where: CondimentWhereInput
    search: String
    sortBy: [SortCondimentsBy!]
    orderBy: String
    first: Int
    skip: Int
  ): _QueryMeta

  #  Retrieve the meta-data for the Condiment list.
  _CondimentsMeta: _ListMeta

  #  Retrieve the meta-data for all lists.
  _ksListsMeta(where: _ksListsMetaInput): [_ListMeta]

  # The version of the Keystone application serving this API.
  appVersion: String
  authenticatedItem: AuthenticatedItem
  keystone: KeystoneMeta!
}

type Mutation {
  #  Create a single User item.
  createUser(data: UserCreateInput): User

  #  Create multiple User items.
  createUsers(data: [UsersCreateInput]): [User]

  #  Update a single User item by ID.
  updateUser(id: ID!, data: UserUpdateInput): User

  #  Update multiple User items by ID.
  updateUsers(data: [UsersUpdateInput]): [User]

  #  Delete a single User item by ID.
  deleteUser(id: ID!): User

  #  Delete multiple User items by ID.
  deleteUsers(ids: [ID!]): [User]

  #  Create a single Burger item.
  createBurger(data: BurgerCreateInput): Burger

  #  Create multiple Burger items.
  createBurgers(data: [BurgersCreateInput]): [Burger]

  #  Update a single Burger item by ID.
  updateBurger(id: ID!, data: BurgerUpdateInput): Burger

  #  Update multiple Burger items by ID.
  updateBurgers(data: [BurgersUpdateInput]): [Burger]

  #  Delete a single Burger item by ID.
  deleteBurger(id: ID!): Burger

  #  Delete multiple Burger items by ID.
  deleteBurgers(ids: [ID!]): [Burger]

  #  Create a single Protein item.
  createProtein(data: ProteinCreateInput): Protein

  #  Create multiple Protein items.
  createProteins(data: [ProteinsCreateInput]): [Protein]

  #  Update a single Protein item by ID.
  updateProtein(id: ID!, data: ProteinUpdateInput): Protein

  #  Update multiple Protein items by ID.
  updateProteins(data: [ProteinsUpdateInput]): [Protein]

  #  Delete a single Protein item by ID.
  deleteProtein(id: ID!): Protein

  #  Delete multiple Protein items by ID.
  deleteProteins(ids: [ID!]): [Protein]

  #  Create a single Topping item.
  createTopping(data: ToppingCreateInput): Topping

  #  Create multiple Topping items.
  createToppings(data: [ToppingsCreateInput]): [Topping]

  #  Update a single Topping item by ID.
  updateTopping(id: ID!, data: ToppingUpdateInput): Topping

  #  Update multiple Topping items by ID.
  updateToppings(data: [ToppingsUpdateInput]): [Topping]

  #  Delete a single Topping item by ID.
  deleteTopping(id: ID!): Topping

  #  Delete multiple Topping items by ID.
  deleteToppings(ids: [ID!]): [Topping]

  #  Create a single Cheese item.
  createCheese(data: CheeseCreateInput): Cheese

  #  Create multiple Cheese items.
  createCheeses(data: [CheesesCreateInput]): [Cheese]

  #  Update a single Cheese item by ID.
  updateCheese(id: ID!, data: CheeseUpdateInput): Cheese

  #  Update multiple Cheese items by ID.
  updateCheeses(data: [CheesesUpdateInput]): [Cheese]

  #  Delete a single Cheese item by ID.
  deleteCheese(id: ID!): Cheese

  #  Delete multiple Cheese items by ID.
  deleteCheeses(ids: [ID!]): [Cheese]

  #  Create a single Condiment item.
  createCondiment(data: CondimentCreateInput): Condiment

  #  Create multiple Condiment items.
  createCondiments(data: [CondimentsCreateInput]): [Condiment]

  #  Update a single Condiment item by ID.
  updateCondiment(id: ID!, data: CondimentUpdateInput): Condiment

  #  Update multiple Condiment items by ID.
  updateCondiments(data: [CondimentsUpdateInput]): [Condiment]

  #  Delete a single Condiment item by ID.
  deleteCondiment(id: ID!): Condiment

  #  Delete multiple Condiment items by ID.
  deleteCondiments(ids: [ID!]): [Condiment]
  authenticateUserWithPassword(
    email: String!
    password: String!
  ): UserAuthenticationWithPasswordResult!
  createInitialUser(
    data: CreateInitialUserInput!
  ): UserAuthenticationWithPasswordSuccess!
  endSession: Boolean!
}

# The `Upload` scalar type represents a file upload.
scalar Upload

union AuthenticatedItem = User

union UserAuthenticationWithPasswordResult =
    UserAuthenticationWithPasswordSuccess
  | UserAuthenticationWithPasswordFailure

type UserAuthenticationWithPasswordSuccess {
  sessionToken: String!
  item: User!
}

type UserAuthenticationWithPasswordFailure {
  code: PasswordAuthErrorCode!
  message: String!
}

enum PasswordAuthErrorCode {
  FAILURE
  IDENTITY_NOT_FOUND
  SECRET_NOT_SET
  MULTIPLE_IDENTITY_MATCHES
  SECRET_MISMATCH
}

input CreateInitialUserInput {
  name: String
  email: String
  password: String
}

type KeystoneMeta {
  adminMeta: KeystoneAdminMeta!
}

type KeystoneAdminMeta {
  enableSignout: Boolean!
  enableSessionItem: Boolean!
  lists: [KeystoneAdminUIListMeta!]!
  list(key: String!): KeystoneAdminUIListMeta
}

type KeystoneAdminUIListMeta {
  key: String!
  itemQueryName: String!
  listQueryName: String!
  hideCreate: Boolean!
  hideDelete: Boolean!
  path: String!
  label: String!
  singular: String!
  plural: String!
  description: String
  initialColumns: [String!]!
  pageSize: Int!
  labelField: String!
  fields: [KeystoneAdminUIFieldMeta!]!
  initialSort: KeystoneAdminUISort
  isHidden: Boolean!
}

type KeystoneAdminUISort {
  field: String!
  direction: KeystoneAdminUISortDirection!
}

type KeystoneAdminUIFieldMeta {
  path: String!
  label: String!
  isOrderable: Boolean!
  fieldMeta: JSON
  viewsHash: String!
  customViewsHash: String
  createView: KeystoneAdminUIFieldMetaCreateView!
  listView: KeystoneAdminUIFieldMetaListView!
  itemView(id: ID!): KeystoneAdminUIFieldMetaItemView
}

type KeystoneAdminUIFieldMetaCreateView {
  fieldMode: KeystoneAdminUIFieldMetaCreateViewFieldMode!
}

type KeystoneAdminUIFieldMetaListView {
  fieldMode: KeystoneAdminUIFieldMetaListViewFieldMode!
}

type KeystoneAdminUIFieldMetaItemView {
  fieldMode: KeystoneAdminUIFieldMetaItemViewFieldMode!
}

enum KeystoneAdminUIFieldMetaCreateViewFieldMode {
  edit
  hidden
}

enum KeystoneAdminUIFieldMetaListViewFieldMode {
  read
  hidden
}

enum KeystoneAdminUIFieldMetaItemViewFieldMode {
  edit
  read
  hidden
}

enum KeystoneAdminUISortDirection {
  ASC
  DESC
}