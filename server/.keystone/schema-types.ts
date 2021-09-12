type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type ProteinRelateToOneInput = {
  readonly create?: ProteinCreateInput | null;
  readonly connect?: ProteinWhereUniqueInput | null;
  readonly disconnect?: ProteinWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ToppingRelateToManyInput = {
  readonly create?: ReadonlyArray<ToppingCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ToppingWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ToppingWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CheeseRelateToManyInput = {
  readonly create?: ReadonlyArray<CheeseCreateInput | null> | null;
  readonly connect?: ReadonlyArray<CheeseWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<CheeseWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CondimentRelateToManyInput = {
  readonly create?: ReadonlyArray<CondimentCreateInput | null> | null;
  readonly connect?: ReadonlyArray<CondimentWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<CondimentWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type BurgerWhereInput = {
  readonly AND?: ReadonlyArray<BurgerWhereInput | null> | null;
  readonly OR?: ReadonlyArray<BurgerWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly protein?: ProteinWhereInput | null;
  readonly protein_is_null?: Scalars['Boolean'] | null;
  readonly topping_every?: ToppingWhereInput | null;
  readonly topping_some?: ToppingWhereInput | null;
  readonly topping_none?: ToppingWhereInput | null;
  readonly cheese_every?: CheeseWhereInput | null;
  readonly cheese_some?: CheeseWhereInput | null;
  readonly cheese_none?: CheeseWhereInput | null;
  readonly condiment_every?: CondimentWhereInput | null;
  readonly condiment_some?: CondimentWhereInput | null;
  readonly condiment_none?: CondimentWhereInput | null;
};

export type BurgerWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortBurgersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'protein_ASC'
  | 'protein_DESC'
  | 'topping_ASC'
  | 'topping_DESC'
  | 'cheese_ASC'
  | 'cheese_DESC'
  | 'condiment_ASC'
  | 'condiment_DESC';

export type BurgerUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly protein?: ProteinRelateToOneInput | null;
  readonly topping?: ToppingRelateToManyInput | null;
  readonly cheese?: CheeseRelateToManyInput | null;
  readonly condiment?: CondimentRelateToManyInput | null;
};

export type BurgersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: BurgerUpdateInput | null;
};

export type BurgerCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly protein?: ProteinRelateToOneInput | null;
  readonly topping?: ToppingRelateToManyInput | null;
  readonly cheese?: CheeseRelateToManyInput | null;
  readonly condiment?: CondimentRelateToManyInput | null;
};

export type BurgersCreateInput = {
  readonly data?: BurgerCreateInput | null;
};

export type ProteinWhereInput = {
  readonly AND?: ReadonlyArray<ProteinWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProteinWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly desciption?: Scalars['String'] | null;
  readonly desciption_not?: Scalars['String'] | null;
  readonly desciption_contains?: Scalars['String'] | null;
  readonly desciption_not_contains?: Scalars['String'] | null;
  readonly desciption_starts_with?: Scalars['String'] | null;
  readonly desciption_not_starts_with?: Scalars['String'] | null;
  readonly desciption_ends_with?: Scalars['String'] | null;
  readonly desciption_not_ends_with?: Scalars['String'] | null;
  readonly desciption_i?: Scalars['String'] | null;
  readonly desciption_not_i?: Scalars['String'] | null;
  readonly desciption_contains_i?: Scalars['String'] | null;
  readonly desciption_not_contains_i?: Scalars['String'] | null;
  readonly desciption_starts_with_i?: Scalars['String'] | null;
  readonly desciption_not_starts_with_i?: Scalars['String'] | null;
  readonly desciption_ends_with_i?: Scalars['String'] | null;
  readonly desciption_not_ends_with_i?: Scalars['String'] | null;
  readonly desciption_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly desciption_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly stock?: Scalars['Int'] | null;
  readonly stock_not?: Scalars['Int'] | null;
  readonly stock_lt?: Scalars['Int'] | null;
  readonly stock_lte?: Scalars['Int'] | null;
  readonly stock_gt?: Scalars['Int'] | null;
  readonly stock_gte?: Scalars['Int'] | null;
  readonly stock_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly stock_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly vegitarian?: Scalars['String'] | null;
  readonly vegitarian_not?: Scalars['String'] | null;
  readonly vegitarian_contains?: Scalars['String'] | null;
  readonly vegitarian_not_contains?: Scalars['String'] | null;
  readonly vegitarian_starts_with?: Scalars['String'] | null;
  readonly vegitarian_not_starts_with?: Scalars['String'] | null;
  readonly vegitarian_ends_with?: Scalars['String'] | null;
  readonly vegitarian_not_ends_with?: Scalars['String'] | null;
  readonly vegitarian_i?: Scalars['String'] | null;
  readonly vegitarian_not_i?: Scalars['String'] | null;
  readonly vegitarian_contains_i?: Scalars['String'] | null;
  readonly vegitarian_not_contains_i?: Scalars['String'] | null;
  readonly vegitarian_starts_with_i?: Scalars['String'] | null;
  readonly vegitarian_not_starts_with_i?: Scalars['String'] | null;
  readonly vegitarian_ends_with_i?: Scalars['String'] | null;
  readonly vegitarian_not_ends_with_i?: Scalars['String'] | null;
  readonly vegitarian_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly vegitarian_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type ProteinWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProteinsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'desciption_ASC'
  | 'desciption_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'stock_ASC'
  | 'stock_DESC'
  | 'vegitarian_ASC'
  | 'vegitarian_DESC';

export type ProteinUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly desciption?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly stock?: Scalars['Int'] | null;
  readonly vegitarian?: Scalars['String'] | null;
};

export type ProteinsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProteinUpdateInput | null;
};

export type ProteinCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly desciption?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly stock?: Scalars['Int'] | null;
  readonly vegitarian?: Scalars['String'] | null;
};

export type ProteinsCreateInput = {
  readonly data?: ProteinCreateInput | null;
};

export type ToppingWhereInput = {
  readonly AND?: ReadonlyArray<ToppingWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ToppingWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly stock?: Scalars['Int'] | null;
  readonly stock_not?: Scalars['Int'] | null;
  readonly stock_lt?: Scalars['Int'] | null;
  readonly stock_lte?: Scalars['Int'] | null;
  readonly stock_gt?: Scalars['Int'] | null;
  readonly stock_gte?: Scalars['Int'] | null;
  readonly stock_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly stock_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
};

export type ToppingWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortToppingsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'stock_ASC'
  | 'stock_DESC';

export type ToppingUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly stock?: Scalars['Int'] | null;
};

export type ToppingsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ToppingUpdateInput | null;
};

export type ToppingCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly stock?: Scalars['Int'] | null;
};

export type ToppingsCreateInput = {
  readonly data?: ToppingCreateInput | null;
};

export type CheeseWhereInput = {
  readonly AND?: ReadonlyArray<CheeseWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CheeseWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly stock?: Scalars['Int'] | null;
  readonly stock_not?: Scalars['Int'] | null;
  readonly stock_lt?: Scalars['Int'] | null;
  readonly stock_lte?: Scalars['Int'] | null;
  readonly stock_gt?: Scalars['Int'] | null;
  readonly stock_gte?: Scalars['Int'] | null;
  readonly stock_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly stock_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
};

export type CheeseWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCheesesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'stock_ASC'
  | 'stock_DESC';

export type CheeseUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly stock?: Scalars['Int'] | null;
};

export type CheesesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CheeseUpdateInput | null;
};

export type CheeseCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly stock?: Scalars['Int'] | null;
};

export type CheesesCreateInput = {
  readonly data?: CheeseCreateInput | null;
};

export type CondimentWhereInput = {
  readonly AND?: ReadonlyArray<CondimentWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CondimentWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly stock?: Scalars['Int'] | null;
  readonly stock_not?: Scalars['Int'] | null;
  readonly stock_lt?: Scalars['Int'] | null;
  readonly stock_lte?: Scalars['Int'] | null;
  readonly stock_gt?: Scalars['Int'] | null;
  readonly stock_gte?: Scalars['Int'] | null;
  readonly stock_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly stock_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
};

export type CondimentWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCondimentsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'stock_ASC'
  | 'stock_DESC';

export type CondimentUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly stock?: Scalars['Int'] | null;
};

export type CondimentsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CondimentUpdateInput | null;
};

export type CondimentCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly stock?: Scalars['Int'] | null;
};

export type CondimentsCreateInput = {
  readonly data?: CondimentCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type BurgerListTypeInfo = {
  key: 'Burger';
  fields:
    | 'id'
    | 'name'
    | 'description'
    | 'price'
    | 'protein'
    | 'topping'
    | 'cheese'
    | 'condiment';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly price?: number | null;
    readonly protein?: string | null;
    readonly topping?: string | null;
    readonly cheese?: string | null;
    readonly condiment?: string | null;
  };
  inputs: {
    where: BurgerWhereInput;
    create: BurgerCreateInput;
    update: BurgerUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: BurgerWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortBurgersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type BurgerListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    BurgerListTypeInfo,
    BurgerListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  BurgerListTypeInfo,
  BurgerListTypeInfo['fields']
>;

export type ProteinListTypeInfo = {
  key: 'Protein';
  fields: 'id' | 'name' | 'desciption' | 'price' | 'stock' | 'vegitarian';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly desciption?: string | null;
    readonly price?: number | null;
    readonly stock?: number | null;
    readonly vegitarian?: string | null;
  };
  inputs: {
    where: ProteinWhereInput;
    create: ProteinCreateInput;
    update: ProteinUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProteinWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProteinsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProteinListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProteinListTypeInfo,
    ProteinListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProteinListTypeInfo,
  ProteinListTypeInfo['fields']
>;

export type ToppingListTypeInfo = {
  key: 'Topping';
  fields: 'id' | 'name' | 'description' | 'price' | 'stock';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly price?: number | null;
    readonly stock?: number | null;
  };
  inputs: {
    where: ToppingWhereInput;
    create: ToppingCreateInput;
    update: ToppingUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ToppingWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortToppingsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ToppingListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ToppingListTypeInfo,
    ToppingListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ToppingListTypeInfo,
  ToppingListTypeInfo['fields']
>;

export type CheeseListTypeInfo = {
  key: 'Cheese';
  fields: 'id' | 'name' | 'description' | 'price' | 'stock';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly price?: number | null;
    readonly stock?: number | null;
  };
  inputs: {
    where: CheeseWhereInput;
    create: CheeseCreateInput;
    update: CheeseUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CheeseWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCheesesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CheeseListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CheeseListTypeInfo,
    CheeseListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CheeseListTypeInfo,
  CheeseListTypeInfo['fields']
>;

export type CondimentListTypeInfo = {
  key: 'Condiment';
  fields: 'id' | 'name' | 'description' | 'price' | 'stock';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly price?: number | null;
    readonly stock?: number | null;
  };
  inputs: {
    where: CondimentWhereInput;
    create: CondimentCreateInput;
    update: CondimentUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CondimentWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCondimentsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CondimentListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CondimentListTypeInfo,
    CondimentListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CondimentListTypeInfo,
  CondimentListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Burger: BurgerListTypeInfo;
  readonly Protein: ProteinListTypeInfo;
  readonly Topping: ToppingListTypeInfo;
  readonly Cheese: CheeseListTypeInfo;
  readonly Condiment: CondimentListTypeInfo;
};
