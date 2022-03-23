/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type AddToIpfs = {
    __typename: 'AddToIpfs';
    url: string;
};

export type CreateGiftCardsInput = {
    id?: string | null;
    activatedTimestamp: number;
    address?: string | null;
};

export type ModelGiftCardsConditionInput = {
    activatedTimestamp?: ModelIntInput | null;
    address?: ModelStringInput | null;
    and?: Array<ModelGiftCardsConditionInput | null> | null;
    or?: Array<ModelGiftCardsConditionInput | null> | null;
    not?: ModelGiftCardsConditionInput | null;
};

export type ModelIntInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
};

export enum ModelAttributeTypes {
    binary = 'binary',
    binarySet = 'binarySet',
    bool = 'bool',
    list = 'list',
    map = 'map',
    number = 'number',
    numberSet = 'numberSet',
    string = 'string',
    stringSet = 'stringSet',
    _null = '_null',
}

export type ModelStringInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
};

export type GiftCards = {
    __typename: 'GiftCards';
    id: string;
    activatedTimestamp: number;
    address?: string | null;
    createdAt: string;
    updatedAt: string;
};

export type UpdateGiftCardsInput = {
    id: string;
    activatedTimestamp?: number | null;
    address?: string | null;
};

export type DeleteGiftCardsInput = {
    id: string;
};

export type CreateGameDraftInput = {
    id?: string | null;
    title: string;
    name: string;
    symbol: string;
    media: GameMediaInput;
    colors: GameColorsInput;
    url: string;
    releaseDate?: string | null;
    platforms?: Array<PLATFORM | null> | null;
    cartridge: GameCartridgeInput;
    metadata: GameMetadataInput;
    metadataUrl: string;
    developerId?: string | null;
};

export type GameMediaInput = {
    coverPhoto: string;
    logo: string;
    banner1: string;
    banner2: string;
};

export type GameColorsInput = {
    bg: string;
    cta: string;
    text: string;
};

export enum PLATFORM {
    WEB = 'WEB',
    WINDOWS = 'WINDOWS',
    OSX = 'OSX',
    LINUX = 'LINUX',
    ANDROID = 'ANDROID',
    IOS = 'IOS',
}

export type GameCartridgeInput = {
    type: CartridgeType;
    blockchain: BLOCKCHAIN;
    address?: string | null;
    cryptoCurrency: CryptoCurrency;
    tradingFee: number;
    initialPrice?: number | null;
    unitPrice?: number | null;
    unitPriceInHash?: number | null;
    sold?: number | null;
    totalSupply?: number | null;
    marketCap?: number | null;
};

export enum CartridgeType {
    GREEN = 'GREEN',
    GOLD = 'GOLD',
    BLUE = 'BLUE',
    GRAY = 'GRAY',
    RED = 'RED',
}

export enum BLOCKCHAIN {
    POLYGON = 'POLYGON',
    BSC = 'BSC',
    ETHEREUM = 'ETHEREUM',
}

export enum CryptoCurrency {
    BNB = 'BNB',
    USDT = 'USDT',
    HASH = 'HASH',
}

export type GameMetadataInput = {
    description: string;
    social: SocialInput;
    video: string;
    screens: Array<string>;
    gamePaper: string;
};

export type SocialInput = {
    fb?: string | null;
    telegram?: string | null;
    twitter?: string | null;
    twitch?: string | null;
    discord?: string | null;
};

export type ModelGameDraftConditionInput = {
    title?: ModelStringInput | null;
    name?: ModelStringInput | null;
    symbol?: ModelStringInput | null;
    url?: ModelStringInput | null;
    releaseDate?: ModelStringInput | null;
    platforms?: ModelPLATFORMListInput | null;
    metadataUrl?: ModelStringInput | null;
    developerId?: ModelIDInput | null;
    and?: Array<ModelGameDraftConditionInput | null> | null;
    or?: Array<ModelGameDraftConditionInput | null> | null;
    not?: ModelGameDraftConditionInput | null;
};

export type ModelPLATFORMListInput = {
    eq?: Array<PLATFORM | null> | null;
    ne?: Array<PLATFORM | null> | null;
    contains?: PLATFORM | null;
    notContains?: PLATFORM | null;
};

export type ModelIDInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};

export type GameDraft = {
    __typename: 'GameDraft';
    id: string;
    title: string;
    name: string;
    symbol: string;
    media: GameMedia;
    colors: GameColors;
    url: string;
    releaseDate?: string | null;
    platforms?: Array<PLATFORM | null> | null;
    cartridge: GameCartridge;
    metadata: GameMetadata;
    metadataUrl: string;
    developerId?: string | null;
    developer?: Account | null;
    createdAt: string;
    updatedAt: string;
};

export type GameMedia = {
    __typename: 'GameMedia';
    coverPhoto: string;
    logo: string;
    banner1: string;
    banner2: string;
};

export type GameColors = {
    __typename: 'GameColors';
    bg: string;
    cta: string;
    text: string;
};

export type GameCartridge = {
    __typename: 'GameCartridge';
    type: CartridgeType;
    blockchain: BLOCKCHAIN;
    address?: string | null;
    cryptoCurrency: CryptoCurrency;
    tradingFee: number;
    initialPrice?: number | null;
    unitPrice?: number | null;
    unitPriceInHash?: number | null;
    sold?: number | null;
    totalSupply?: number | null;
    marketCap?: number | null;
};

export type GameMetadata = {
    __typename: 'GameMetadata';
    description: string;
    social: Social;
    video: string;
    screens: Array<string>;
    gamePaper: string;
};

export type Social = {
    __typename: 'Social';
    fb?: string | null;
    telegram?: string | null;
    twitter?: string | null;
    twitch?: string | null;
    discord?: string | null;
};

export type Account = {
    __typename: 'Account';
    id: string;
    nickname?: string | null;
    avatar?: string | null;
    email?: string | null;
    type?: AccountType | null;
    bgColor?: string | null;
    description?: string | null;
    social?: Social | null;
    url?: string | null;
    role?: string | null;
    hashBalance?: number | null;
    isVerified?: boolean | null;
    teamAccount?: TeamAccount | null;
    accountWatchlist?: ModelAccountWatchlistConnection | null;
    ownedGames?: ModelAccountGameConnection | null;
    transactions?: ModelAccountTransactionConnection | null;
    createdAt: string;
    updatedAt: string;
    accountTeamAccountId?: string | null;
};

export enum AccountType {
    MEMBER = 'MEMBER',
    DEVELOPER = 'DEVELOPER',
    ADMIN = 'ADMIN',
    TEAM = 'TEAM',
}

export type TeamAccount = {
    __typename: 'TeamAccount';
    id: string;
    role: string;
    account?: Account | null;
    createdAt: string;
    updatedAt: string;
    teamAccountAccountId?: string | null;
};

export type ModelAccountWatchlistConnection = {
    __typename: 'ModelAccountWatchlistConnection';
    items: Array<AccountWatchlist>;
    nextToken?: string | null;
};

export type AccountWatchlist = {
    __typename: 'AccountWatchlist';
    id: string;
    accountId: string;
    account: Account;
    followedId: string;
    followed: Account;
    createdAt: string;
    updatedAt: string;
};

export type ModelAccountGameConnection = {
    __typename: 'ModelAccountGameConnection';
    items: Array<AccountGame>;
    nextToken?: string | null;
};

export type AccountGame = {
    __typename: 'AccountGame';
    id: string;
    gameID: string;
    accountID: string;
    game: Game;
    account: Account;
    createdAt: string;
    updatedAt: string;
};

export type Game = {
    __typename: 'Game';
    id: string;
    title: string;
    name: string;
    symbol: string;
    media: GameMedia;
    colors: GameColors;
    url: string;
    releaseDate?: string | null;
    platforms: Array<PLATFORM>;
    cartridge: GameCartridge;
    metadata: GameMetadata;
    metadataUrl: string;
    developerId?: string | null;
    developer?: Account | null;
    gamers?: ModelAccountGameConnection | null;
    transactions?: ModelGameTransactionConnection | null;
    createdAt: string;
    updatedAt: string;
};

export type ModelGameTransactionConnection = {
    __typename: 'ModelGameTransactionConnection';
    items: Array<GameTransaction>;
    nextToken?: string | null;
};

export type GameTransaction = {
    __typename: 'GameTransaction';
    id: string;
    type: GameTransactionType;
    gameId: string;
    game: Game;
    fromAccountId: string;
    fromAccount?: Account | null;
    toAccountId?: string | null;
    toAccount?: Account | null;
    additionalInfo?: string | null;
    createdAt: string;
    updatedAt: string;
};

export enum GameTransactionType {
    SELL = 'SELL',
    RELEASE_GAME = 'RELEASE_GAME',
    BUY_GAME = 'BUY_GAME',
}

export type ModelAccountTransactionConnection = {
    __typename: 'ModelAccountTransactionConnection';
    items: Array<AccountTransaction>;
    nextToken?: string | null;
};

export type AccountTransaction = {
    __typename: 'AccountTransaction';
    id: string;
    type: AccountTransactionType;
    fromAccountId: string;
    fromAccount: Account;
    toAccountId?: string | null;
    toAccount?: Account | null;
    additionalInfo?: string | null;
    createdAt: string;
    updatedAt: string;
};

export enum AccountTransactionType {
    SELL = 'SELL',
    RELEASE_GAME = 'RELEASE_GAME',
}

export type UpdateGameDraftInput = {
    id: string;
    title?: string | null;
    name?: string | null;
    symbol?: string | null;
    media?: GameMediaInput | null;
    colors?: GameColorsInput | null;
    url?: string | null;
    releaseDate?: string | null;
    platforms?: Array<PLATFORM | null> | null;
    cartridge?: GameCartridgeInput | null;
    metadata?: GameMetadataInput | null;
    metadataUrl?: string | null;
    developerId?: string | null;
};

export type DeleteGameDraftInput = {
    id: string;
};

export type CreateGameInput = {
    id?: string | null;
    title: string;
    name: string;
    symbol: string;
    media: GameMediaInput;
    colors: GameColorsInput;
    url: string;
    releaseDate?: string | null;
    platforms: Array<PLATFORM>;
    cartridge: GameCartridgeInput;
    metadata: GameMetadataInput;
    metadataUrl: string;
    developerId?: string | null;
};

export type ModelGameConditionInput = {
    title?: ModelStringInput | null;
    name?: ModelStringInput | null;
    symbol?: ModelStringInput | null;
    url?: ModelStringInput | null;
    releaseDate?: ModelStringInput | null;
    platforms?: ModelPLATFORMInput | null;
    metadataUrl?: ModelStringInput | null;
    developerId?: ModelIDInput | null;
    and?: Array<ModelGameConditionInput | null> | null;
    or?: Array<ModelGameConditionInput | null> | null;
    not?: ModelGameConditionInput | null;
};

export type ModelPLATFORMInput = {
    eq?: PLATFORM | null;
    ne?: PLATFORM | null;
};

export type UpdateGameInput = {
    id: string;
    title?: string | null;
    name?: string | null;
    symbol?: string | null;
    media?: GameMediaInput | null;
    colors?: GameColorsInput | null;
    url?: string | null;
    releaseDate?: string | null;
    platforms?: Array<PLATFORM> | null;
    cartridge?: GameCartridgeInput | null;
    metadata?: GameMetadataInput | null;
    metadataUrl?: string | null;
    developerId?: string | null;
};

export type DeleteGameInput = {
    id: string;
};

export type CreateTeamAccountInput = {
    id?: string | null;
    role: string;
    teamAccountAccountId?: string | null;
};

export type ModelTeamAccountConditionInput = {
    role?: ModelStringInput | null;
    and?: Array<ModelTeamAccountConditionInput | null> | null;
    or?: Array<ModelTeamAccountConditionInput | null> | null;
    not?: ModelTeamAccountConditionInput | null;
    teamAccountAccountId?: ModelIDInput | null;
};

export type UpdateTeamAccountInput = {
    id: string;
    role?: string | null;
    teamAccountAccountId?: string | null;
};

export type DeleteTeamAccountInput = {
    id: string;
};

export type CreateAccountInput = {
    id?: string | null;
    nickname?: string | null;
    avatar?: string | null;
    email?: string | null;
    type?: AccountType | null;
    bgColor?: string | null;
    description?: string | null;
    social?: SocialInput | null;
    url?: string | null;
    role?: string | null;
    hashBalance?: number | null;
    isVerified?: boolean | null;
    accountTeamAccountId?: string | null;
};

export type ModelAccountConditionInput = {
    nickname?: ModelStringInput | null;
    avatar?: ModelStringInput | null;
    email?: ModelStringInput | null;
    type?: ModelAccountTypeInput | null;
    bgColor?: ModelStringInput | null;
    description?: ModelStringInput | null;
    url?: ModelStringInput | null;
    role?: ModelStringInput | null;
    hashBalance?: ModelIntInput | null;
    isVerified?: ModelBooleanInput | null;
    and?: Array<ModelAccountConditionInput | null> | null;
    or?: Array<ModelAccountConditionInput | null> | null;
    not?: ModelAccountConditionInput | null;
    accountTeamAccountId?: ModelIDInput | null;
};

export type ModelAccountTypeInput = {
    eq?: AccountType | null;
    ne?: AccountType | null;
};

export type ModelBooleanInput = {
    ne?: boolean | null;
    eq?: boolean | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
};

export type UpdateAccountInput = {
    id: string;
    nickname?: string | null;
    avatar?: string | null;
    email?: string | null;
    type?: AccountType | null;
    bgColor?: string | null;
    description?: string | null;
    social?: SocialInput | null;
    url?: string | null;
    role?: string | null;
    hashBalance?: number | null;
    isVerified?: boolean | null;
    accountTeamAccountId?: string | null;
};

export type DeleteAccountInput = {
    id: string;
};

export type CreateAccountWatchlistInput = {
    id?: string | null;
    accountId: string;
    followedId: string;
};

export type ModelAccountWatchlistConditionInput = {
    accountId?: ModelIDInput | null;
    followedId?: ModelIDInput | null;
    and?: Array<ModelAccountWatchlistConditionInput | null> | null;
    or?: Array<ModelAccountWatchlistConditionInput | null> | null;
    not?: ModelAccountWatchlistConditionInput | null;
};

export type UpdateAccountWatchlistInput = {
    id: string;
    accountId?: string | null;
    followedId?: string | null;
};

export type DeleteAccountWatchlistInput = {
    id: string;
};

export type CreateNewsletterMembersInput = {
    id?: string | null;
    email?: string | null;
    newsletterMembersAccountId?: string | null;
};

export type ModelNewsletterMembersConditionInput = {
    email?: ModelStringInput | null;
    and?: Array<ModelNewsletterMembersConditionInput | null> | null;
    or?: Array<ModelNewsletterMembersConditionInput | null> | null;
    not?: ModelNewsletterMembersConditionInput | null;
    newsletterMembersAccountId?: ModelIDInput | null;
};

export type NewsletterMembers = {
    __typename: 'NewsletterMembers';
    id?: string | null;
    account?: Account | null;
    email?: string | null;
    createdAt: string;
    updatedAt: string;
    newsletterMembersAccountId?: string | null;
};

export type UpdateNewsletterMembersInput = {
    id: string;
    email?: string | null;
    newsletterMembersAccountId?: string | null;
};

export type DeleteNewsletterMembersInput = {
    id: string;
};

export type CreateGameTransactionInput = {
    id?: string | null;
    type: GameTransactionType;
    gameId: string;
    fromAccountId: string;
    toAccountId?: string | null;
    additionalInfo?: string | null;
};

export type ModelGameTransactionConditionInput = {
    type?: ModelGameTransactionTypeInput | null;
    gameId?: ModelIDInput | null;
    fromAccountId?: ModelIDInput | null;
    toAccountId?: ModelIDInput | null;
    additionalInfo?: ModelStringInput | null;
    and?: Array<ModelGameTransactionConditionInput | null> | null;
    or?: Array<ModelGameTransactionConditionInput | null> | null;
    not?: ModelGameTransactionConditionInput | null;
};

export type ModelGameTransactionTypeInput = {
    eq?: GameTransactionType | null;
    ne?: GameTransactionType | null;
};

export type UpdateGameTransactionInput = {
    id: string;
    type?: GameTransactionType | null;
    gameId?: string | null;
    fromAccountId?: string | null;
    toAccountId?: string | null;
    additionalInfo?: string | null;
};

export type DeleteGameTransactionInput = {
    id: string;
};

export type CreateAccountTransactionInput = {
    id?: string | null;
    type: AccountTransactionType;
    fromAccountId: string;
    toAccountId?: string | null;
    additionalInfo?: string | null;
};

export type ModelAccountTransactionConditionInput = {
    type?: ModelAccountTransactionTypeInput | null;
    fromAccountId?: ModelIDInput | null;
    toAccountId?: ModelIDInput | null;
    additionalInfo?: ModelStringInput | null;
    and?: Array<ModelAccountTransactionConditionInput | null> | null;
    or?: Array<ModelAccountTransactionConditionInput | null> | null;
    not?: ModelAccountTransactionConditionInput | null;
};

export type ModelAccountTransactionTypeInput = {
    eq?: AccountTransactionType | null;
    ne?: AccountTransactionType | null;
};

export type UpdateAccountTransactionInput = {
    id: string;
    type?: AccountTransactionType | null;
    fromAccountId?: string | null;
    toAccountId?: string | null;
    additionalInfo?: string | null;
};

export type DeleteAccountTransactionInput = {
    id: string;
};

export type CreateAccountGameInput = {
    id?: string | null;
    gameID: string;
    accountID: string;
};

export type ModelAccountGameConditionInput = {
    gameID?: ModelIDInput | null;
    accountID?: ModelIDInput | null;
    and?: Array<ModelAccountGameConditionInput | null> | null;
    or?: Array<ModelAccountGameConditionInput | null> | null;
    not?: ModelAccountGameConditionInput | null;
};

export type UpdateAccountGameInput = {
    id: string;
    gameID?: string | null;
    accountID?: string | null;
};

export type DeleteAccountGameInput = {
    id: string;
};

export type ModelGiftCardsFilterInput = {
    id?: ModelIDInput | null;
    activatedTimestamp?: ModelIntInput | null;
    address?: ModelStringInput | null;
    and?: Array<ModelGiftCardsFilterInput | null> | null;
    or?: Array<ModelGiftCardsFilterInput | null> | null;
    not?: ModelGiftCardsFilterInput | null;
};

export type ModelGiftCardsConnection = {
    __typename: 'ModelGiftCardsConnection';
    items: Array<GiftCards>;
    nextToken?: string | null;
};

export type ModelGameDraftFilterInput = {
    id?: ModelIDInput | null;
    title?: ModelStringInput | null;
    name?: ModelStringInput | null;
    symbol?: ModelStringInput | null;
    url?: ModelStringInput | null;
    releaseDate?: ModelStringInput | null;
    platforms?: ModelPLATFORMListInput | null;
    metadataUrl?: ModelStringInput | null;
    developerId?: ModelIDInput | null;
    and?: Array<ModelGameDraftFilterInput | null> | null;
    or?: Array<ModelGameDraftFilterInput | null> | null;
    not?: ModelGameDraftFilterInput | null;
};

export type ModelGameDraftConnection = {
    __typename: 'ModelGameDraftConnection';
    items: Array<GameDraft>;
    nextToken?: string | null;
};

export type ModelGameFilterInput = {
    id?: ModelIDInput | null;
    title?: ModelStringInput | null;
    name?: ModelStringInput | null;
    symbol?: ModelStringInput | null;
    url?: ModelStringInput | null;
    releaseDate?: ModelStringInput | null;
    platforms?: ModelPLATFORMInput | null;
    metadataUrl?: ModelStringInput | null;
    developerId?: ModelIDInput | null;
    and?: Array<ModelGameFilterInput | null> | null;
    or?: Array<ModelGameFilterInput | null> | null;
    not?: ModelGameFilterInput | null;
};

export type ModelGameConnection = {
    __typename: 'ModelGameConnection';
    items: Array<Game>;
    nextToken?: string | null;
};

export type SearchableGameFilterInput = {
    id?: SearchableIDFilterInput | null;
    title?: SearchableStringFilterInput | null;
    name?: SearchableStringFilterInput | null;
    symbol?: SearchableStringFilterInput | null;
    url?: SearchableStringFilterInput | null;
    releaseDate?: SearchableStringFilterInput | null;
    metadataUrl?: SearchableStringFilterInput | null;
    developerId?: SearchableIDFilterInput | null;
    createdAt?: SearchableStringFilterInput | null;
    updatedAt?: SearchableStringFilterInput | null;
    platforms?: SearchableStringFilterInput | null;
    and?: Array<SearchableGameFilterInput | null> | null;
    or?: Array<SearchableGameFilterInput | null> | null;
    not?: SearchableGameFilterInput | null;
};

export type SearchableIDFilterInput = {
    ne?: string | null;
    gt?: string | null;
    lt?: string | null;
    gte?: string | null;
    lte?: string | null;
    eq?: string | null;
    match?: string | null;
    matchPhrase?: string | null;
    matchPhrasePrefix?: string | null;
    multiMatch?: string | null;
    exists?: boolean | null;
    wildcard?: string | null;
    regexp?: string | null;
    range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
    ne?: string | null;
    gt?: string | null;
    lt?: string | null;
    gte?: string | null;
    lte?: string | null;
    eq?: string | null;
    match?: string | null;
    matchPhrase?: string | null;
    matchPhrasePrefix?: string | null;
    multiMatch?: string | null;
    exists?: boolean | null;
    wildcard?: string | null;
    regexp?: string | null;
    range?: Array<string | null> | null;
};

export type SearchableGameSortInput = {
    field?: SearchableGameSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchableGameSortableFields {
    id = 'id',
    title = 'title',
    name = 'name',
    symbol = 'symbol',
    url = 'url',
    releaseDate = 'releaseDate',
    metadataUrl = 'metadataUrl',
    developerId = 'developerId',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
}

export enum SearchableSortDirection {
    asc = 'asc',
    desc = 'desc',
}

export type SearchableGameAggregationInput = {
    name: string;
    type: SearchableAggregateType;
    field: SearchableGameAggregateField;
};

export enum SearchableAggregateType {
    terms = 'terms',
    avg = 'avg',
    min = 'min',
    max = 'max',
    sum = 'sum',
}

export enum SearchableGameAggregateField {
    id = 'id',
    title = 'title',
    name = 'name',
    symbol = 'symbol',
    url = 'url',
    releaseDate = 'releaseDate',
    platforms = 'platforms',
    metadataUrl = 'metadataUrl',
    developerId = 'developerId',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
}

export type SearchableGameConnection = {
    __typename: 'SearchableGameConnection';
    items: Array<Game>;
    nextToken?: string | null;
    total?: number | null;
    aggregateItems: Array<SearchableAggregateResult>;
};

export type SearchableAggregateResult = {
    __typename: 'SearchableAggregateResult';
    name: string;
    result?: SearchableAggregateGenericResult | null;
};

export type SearchableAggregateGenericResult = SearchableAggregateScalarResult | SearchableAggregateBucketResult;

export type SearchableAggregateScalarResult = {
    __typename: 'SearchableAggregateScalarResult';
    value: number;
};

export type SearchableAggregateBucketResult = {
    __typename: 'SearchableAggregateBucketResult';
    buckets?: Array<SearchableAggregateBucketResultItem | null> | null;
};

export type SearchableAggregateBucketResultItem = {
    __typename: 'SearchableAggregateBucketResultItem';
    key: string;
    doc_count: number;
};

export type ModelTeamAccountFilterInput = {
    id?: ModelIDInput | null;
    role?: ModelStringInput | null;
    and?: Array<ModelTeamAccountFilterInput | null> | null;
    or?: Array<ModelTeamAccountFilterInput | null> | null;
    not?: ModelTeamAccountFilterInput | null;
    teamAccountAccountId?: ModelIDInput | null;
};

export type ModelTeamAccountConnection = {
    __typename: 'ModelTeamAccountConnection';
    items: Array<TeamAccount>;
    nextToken?: string | null;
};

export type ModelAccountFilterInput = {
    id?: ModelIDInput | null;
    nickname?: ModelStringInput | null;
    avatar?: ModelStringInput | null;
    email?: ModelStringInput | null;
    type?: ModelAccountTypeInput | null;
    bgColor?: ModelStringInput | null;
    description?: ModelStringInput | null;
    url?: ModelStringInput | null;
    role?: ModelStringInput | null;
    hashBalance?: ModelIntInput | null;
    isVerified?: ModelBooleanInput | null;
    and?: Array<ModelAccountFilterInput | null> | null;
    or?: Array<ModelAccountFilterInput | null> | null;
    not?: ModelAccountFilterInput | null;
    accountTeamAccountId?: ModelIDInput | null;
};

export type ModelAccountConnection = {
    __typename: 'ModelAccountConnection';
    items: Array<Account>;
    nextToken?: string | null;
};

export type SearchableAccountFilterInput = {
    id?: SearchableIDFilterInput | null;
    nickname?: SearchableStringFilterInput | null;
    avatar?: SearchableStringFilterInput | null;
    email?: SearchableStringFilterInput | null;
    bgColor?: SearchableStringFilterInput | null;
    description?: SearchableStringFilterInput | null;
    url?: SearchableStringFilterInput | null;
    role?: SearchableStringFilterInput | null;
    hashBalance?: SearchableIntFilterInput | null;
    isVerified?: SearchableBooleanFilterInput | null;
    createdAt?: SearchableStringFilterInput | null;
    updatedAt?: SearchableStringFilterInput | null;
    accountTeamAccountId?: SearchableIDFilterInput | null;
    type?: SearchableStringFilterInput | null;
    and?: Array<SearchableAccountFilterInput | null> | null;
    or?: Array<SearchableAccountFilterInput | null> | null;
    not?: SearchableAccountFilterInput | null;
};

export type SearchableIntFilterInput = {
    ne?: number | null;
    gt?: number | null;
    lt?: number | null;
    gte?: number | null;
    lte?: number | null;
    eq?: number | null;
    range?: Array<number | null> | null;
};

export type SearchableBooleanFilterInput = {
    eq?: boolean | null;
    ne?: boolean | null;
};

export type SearchableAccountSortInput = {
    field?: SearchableAccountSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchableAccountSortableFields {
    id = 'id',
    nickname = 'nickname',
    avatar = 'avatar',
    email = 'email',
    bgColor = 'bgColor',
    description = 'description',
    url = 'url',
    role = 'role',
    hashBalance = 'hashBalance',
    isVerified = 'isVerified',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
    accountTeamAccountId = 'accountTeamAccountId',
}

export type SearchableAccountAggregationInput = {
    name: string;
    type: SearchableAggregateType;
    field: SearchableAccountAggregateField;
};

export enum SearchableAccountAggregateField {
    id = 'id',
    nickname = 'nickname',
    avatar = 'avatar',
    email = 'email',
    type = 'type',
    bgColor = 'bgColor',
    description = 'description',
    url = 'url',
    role = 'role',
    hashBalance = 'hashBalance',
    isVerified = 'isVerified',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
    accountTeamAccountId = 'accountTeamAccountId',
}

export type SearchableAccountConnection = {
    __typename: 'SearchableAccountConnection';
    items: Array<Account>;
    nextToken?: string | null;
    total?: number | null;
    aggregateItems: Array<SearchableAggregateResult>;
};

export type ModelAccountWatchlistFilterInput = {
    id?: ModelIDInput | null;
    accountId?: ModelIDInput | null;
    followedId?: ModelIDInput | null;
    and?: Array<ModelAccountWatchlistFilterInput | null> | null;
    or?: Array<ModelAccountWatchlistFilterInput | null> | null;
    not?: ModelAccountWatchlistFilterInput | null;
};

export type ModelNewsletterMembersFilterInput = {
    id?: ModelIDInput | null;
    email?: ModelStringInput | null;
    and?: Array<ModelNewsletterMembersFilterInput | null> | null;
    or?: Array<ModelNewsletterMembersFilterInput | null> | null;
    not?: ModelNewsletterMembersFilterInput | null;
    newsletterMembersAccountId?: ModelIDInput | null;
};

export type ModelNewsletterMembersConnection = {
    __typename: 'ModelNewsletterMembersConnection';
    items: Array<NewsletterMembers>;
    nextToken?: string | null;
};

export type ModelGameTransactionFilterInput = {
    id?: ModelIDInput | null;
    type?: ModelGameTransactionTypeInput | null;
    gameId?: ModelIDInput | null;
    fromAccountId?: ModelIDInput | null;
    toAccountId?: ModelIDInput | null;
    additionalInfo?: ModelStringInput | null;
    and?: Array<ModelGameTransactionFilterInput | null> | null;
    or?: Array<ModelGameTransactionFilterInput | null> | null;
    not?: ModelGameTransactionFilterInput | null;
};

export type SearchableGameTransactionFilterInput = {
    id?: SearchableIDFilterInput | null;
    gameId?: SearchableIDFilterInput | null;
    fromAccountId?: SearchableIDFilterInput | null;
    toAccountId?: SearchableIDFilterInput | null;
    additionalInfo?: SearchableStringFilterInput | null;
    createdAt?: SearchableStringFilterInput | null;
    updatedAt?: SearchableStringFilterInput | null;
    type?: SearchableStringFilterInput | null;
    and?: Array<SearchableGameTransactionFilterInput | null> | null;
    or?: Array<SearchableGameTransactionFilterInput | null> | null;
    not?: SearchableGameTransactionFilterInput | null;
};

export type SearchableGameTransactionSortInput = {
    field?: SearchableGameTransactionSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchableGameTransactionSortableFields {
    id = 'id',
    gameId = 'gameId',
    fromAccountId = 'fromAccountId',
    toAccountId = 'toAccountId',
    additionalInfo = 'additionalInfo',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
}

export type SearchableGameTransactionAggregationInput = {
    name: string;
    type: SearchableAggregateType;
    field: SearchableGameTransactionAggregateField;
};

export enum SearchableGameTransactionAggregateField {
    id = 'id',
    type = 'type',
    gameId = 'gameId',
    fromAccountId = 'fromAccountId',
    toAccountId = 'toAccountId',
    additionalInfo = 'additionalInfo',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
}

export type SearchableGameTransactionConnection = {
    __typename: 'SearchableGameTransactionConnection';
    items: Array<GameTransaction>;
    nextToken?: string | null;
    total?: number | null;
    aggregateItems: Array<SearchableAggregateResult>;
};

export type ModelAccountTransactionFilterInput = {
    id?: ModelIDInput | null;
    type?: ModelAccountTransactionTypeInput | null;
    fromAccountId?: ModelIDInput | null;
    toAccountId?: ModelIDInput | null;
    additionalInfo?: ModelStringInput | null;
    and?: Array<ModelAccountTransactionFilterInput | null> | null;
    or?: Array<ModelAccountTransactionFilterInput | null> | null;
    not?: ModelAccountTransactionFilterInput | null;
};

export type SearchableAccountTransactionFilterInput = {
    id?: SearchableIDFilterInput | null;
    fromAccountId?: SearchableIDFilterInput | null;
    toAccountId?: SearchableIDFilterInput | null;
    additionalInfo?: SearchableStringFilterInput | null;
    createdAt?: SearchableStringFilterInput | null;
    updatedAt?: SearchableStringFilterInput | null;
    type?: SearchableStringFilterInput | null;
    and?: Array<SearchableAccountTransactionFilterInput | null> | null;
    or?: Array<SearchableAccountTransactionFilterInput | null> | null;
    not?: SearchableAccountTransactionFilterInput | null;
};

export type SearchableAccountTransactionSortInput = {
    field?: SearchableAccountTransactionSortableFields | null;
    direction?: SearchableSortDirection | null;
};

export enum SearchableAccountTransactionSortableFields {
    id = 'id',
    fromAccountId = 'fromAccountId',
    toAccountId = 'toAccountId',
    additionalInfo = 'additionalInfo',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
}

export type SearchableAccountTransactionAggregationInput = {
    name: string;
    type: SearchableAggregateType;
    field: SearchableAccountTransactionAggregateField;
};

export enum SearchableAccountTransactionAggregateField {
    id = 'id',
    type = 'type',
    fromAccountId = 'fromAccountId',
    toAccountId = 'toAccountId',
    additionalInfo = 'additionalInfo',
    createdAt = 'createdAt',
    updatedAt = 'updatedAt',
}

export type SearchableAccountTransactionConnection = {
    __typename: 'SearchableAccountTransactionConnection';
    items: Array<AccountTransaction>;
    nextToken?: string | null;
    total?: number | null;
    aggregateItems: Array<SearchableAggregateResult>;
};

export type ModelAccountGameFilterInput = {
    id?: ModelIDInput | null;
    gameID?: ModelIDInput | null;
    accountID?: ModelIDInput | null;
    and?: Array<ModelAccountGameFilterInput | null> | null;
    or?: Array<ModelAccountGameFilterInput | null> | null;
    not?: ModelAccountGameFilterInput | null;
};

export type AddToIpfsMutationVariables = {
    input: string;
};

export type AddToIpfsMutation = {
    addToIpfs?: {
        __typename: 'AddToIpfs';
        url: string;
    } | null;
};

export type CreateGiftCardsMutationVariables = {
    input: CreateGiftCardsInput;
    condition?: ModelGiftCardsConditionInput | null;
};

export type CreateGiftCardsMutation = {
    createGiftCards?: {
        __typename: 'GiftCards';
        id: string;
        activatedTimestamp: number;
        address?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type UpdateGiftCardsMutationVariables = {
    input: UpdateGiftCardsInput;
    condition?: ModelGiftCardsConditionInput | null;
};

export type UpdateGiftCardsMutation = {
    updateGiftCards?: {
        __typename: 'GiftCards';
        id: string;
        activatedTimestamp: number;
        address?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type DeleteGiftCardsMutationVariables = {
    input: DeleteGiftCardsInput;
    condition?: ModelGiftCardsConditionInput | null;
};

export type DeleteGiftCardsMutation = {
    deleteGiftCards?: {
        __typename: 'GiftCards';
        id: string;
        activatedTimestamp: number;
        address?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateGameDraftMutationVariables = {
    input: CreateGameDraftInput;
    condition?: ModelGameDraftConditionInput | null;
};

export type CreateGameDraftMutation = {
    createGameDraft?: {
        __typename: 'GameDraft';
        id: string;
        title: string;
        name: string;
        symbol: string;
        media: {
            __typename: 'GameMedia';
            coverPhoto: string;
            logo: string;
            banner1: string;
            banner2: string;
        };
        colors: {
            __typename: 'GameColors';
            bg: string;
            cta: string;
            text: string;
        };
        url: string;
        releaseDate?: string | null;
        platforms?: Array<PLATFORM | null> | null;
        cartridge: {
            __typename: 'GameCartridge';
            type: CartridgeType;
            blockchain: BLOCKCHAIN;
            address?: string | null;
            cryptoCurrency: CryptoCurrency;
            tradingFee: number;
            initialPrice?: number | null;
            unitPrice?: number | null;
            unitPriceInHash?: number | null;
            sold?: number | null;
            totalSupply?: number | null;
            marketCap?: number | null;
        };
        metadata: {
            __typename: 'GameMetadata';
            description: string;
            social: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            };
            video: string;
            screens: Array<string>;
            gamePaper: string;
        };
        metadataUrl: string;
        developerId?: string | null;
        developer?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type UpdateGameDraftMutationVariables = {
    input: UpdateGameDraftInput;
    condition?: ModelGameDraftConditionInput | null;
};

export type UpdateGameDraftMutation = {
    updateGameDraft?: {
        __typename: 'GameDraft';
        id: string;
        title: string;
        name: string;
        symbol: string;
        media: {
            __typename: 'GameMedia';
            coverPhoto: string;
            logo: string;
            banner1: string;
            banner2: string;
        };
        colors: {
            __typename: 'GameColors';
            bg: string;
            cta: string;
            text: string;
        };
        url: string;
        releaseDate?: string | null;
        platforms?: Array<PLATFORM | null> | null;
        cartridge: {
            __typename: 'GameCartridge';
            type: CartridgeType;
            blockchain: BLOCKCHAIN;
            address?: string | null;
            cryptoCurrency: CryptoCurrency;
            tradingFee: number;
            initialPrice?: number | null;
            unitPrice?: number | null;
            unitPriceInHash?: number | null;
            sold?: number | null;
            totalSupply?: number | null;
            marketCap?: number | null;
        };
        metadata: {
            __typename: 'GameMetadata';
            description: string;
            social: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            };
            video: string;
            screens: Array<string>;
            gamePaper: string;
        };
        metadataUrl: string;
        developerId?: string | null;
        developer?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type DeleteGameDraftMutationVariables = {
    input: DeleteGameDraftInput;
    condition?: ModelGameDraftConditionInput | null;
};

export type DeleteGameDraftMutation = {
    deleteGameDraft?: {
        __typename: 'GameDraft';
        id: string;
        title: string;
        name: string;
        symbol: string;
        media: {
            __typename: 'GameMedia';
            coverPhoto: string;
            logo: string;
            banner1: string;
            banner2: string;
        };
        colors: {
            __typename: 'GameColors';
            bg: string;
            cta: string;
            text: string;
        };
        url: string;
        releaseDate?: string | null;
        platforms?: Array<PLATFORM | null> | null;
        cartridge: {
            __typename: 'GameCartridge';
            type: CartridgeType;
            blockchain: BLOCKCHAIN;
            address?: string | null;
            cryptoCurrency: CryptoCurrency;
            tradingFee: number;
            initialPrice?: number | null;
            unitPrice?: number | null;
            unitPriceInHash?: number | null;
            sold?: number | null;
            totalSupply?: number | null;
            marketCap?: number | null;
        };
        metadata: {
            __typename: 'GameMetadata';
            description: string;
            social: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            };
            video: string;
            screens: Array<string>;
            gamePaper: string;
        };
        metadataUrl: string;
        developerId?: string | null;
        developer?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateGameMutationVariables = {
    input: CreateGameInput;
    condition?: ModelGameConditionInput | null;
};

export type CreateGameMutation = {
    createGame?: {
        __typename: 'Game';
        id: string;
        title: string;
        name: string;
        symbol: string;
        media: {
            __typename: 'GameMedia';
            coverPhoto: string;
            logo: string;
            banner1: string;
            banner2: string;
        };
        colors: {
            __typename: 'GameColors';
            bg: string;
            cta: string;
            text: string;
        };
        url: string;
        releaseDate?: string | null;
        platforms: Array<PLATFORM>;
        cartridge: {
            __typename: 'GameCartridge';
            type: CartridgeType;
            blockchain: BLOCKCHAIN;
            address?: string | null;
            cryptoCurrency: CryptoCurrency;
            tradingFee: number;
            initialPrice?: number | null;
            unitPrice?: number | null;
            unitPriceInHash?: number | null;
            sold?: number | null;
            totalSupply?: number | null;
            marketCap?: number | null;
        };
        metadata: {
            __typename: 'GameMetadata';
            description: string;
            social: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            };
            video: string;
            screens: Array<string>;
            gamePaper: string;
        };
        metadataUrl: string;
        developerId?: string | null;
        developer?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        gamers?: {
            __typename: 'ModelAccountGameConnection';
            items: Array<{
                __typename: 'AccountGame';
                id: string;
                gameID: string;
                accountID: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        transactions?: {
            __typename: 'ModelGameTransactionConnection';
            items: Array<{
                __typename: 'GameTransaction';
                id: string;
                type: GameTransactionType;
                gameId: string;
                fromAccountId: string;
                toAccountId?: string | null;
                additionalInfo?: string | null;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type UpdateGameMutationVariables = {
    input: UpdateGameInput;
    condition?: ModelGameConditionInput | null;
};

export type UpdateGameMutation = {
    updateGame?: {
        __typename: 'Game';
        id: string;
        title: string;
        name: string;
        symbol: string;
        media: {
            __typename: 'GameMedia';
            coverPhoto: string;
            logo: string;
            banner1: string;
            banner2: string;
        };
        colors: {
            __typename: 'GameColors';
            bg: string;
            cta: string;
            text: string;
        };
        url: string;
        releaseDate?: string | null;
        platforms: Array<PLATFORM>;
        cartridge: {
            __typename: 'GameCartridge';
            type: CartridgeType;
            blockchain: BLOCKCHAIN;
            address?: string | null;
            cryptoCurrency: CryptoCurrency;
            tradingFee: number;
            initialPrice?: number | null;
            unitPrice?: number | null;
            unitPriceInHash?: number | null;
            sold?: number | null;
            totalSupply?: number | null;
            marketCap?: number | null;
        };
        metadata: {
            __typename: 'GameMetadata';
            description: string;
            social: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            };
            video: string;
            screens: Array<string>;
            gamePaper: string;
        };
        metadataUrl: string;
        developerId?: string | null;
        developer?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        gamers?: {
            __typename: 'ModelAccountGameConnection';
            items: Array<{
                __typename: 'AccountGame';
                id: string;
                gameID: string;
                accountID: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        transactions?: {
            __typename: 'ModelGameTransactionConnection';
            items: Array<{
                __typename: 'GameTransaction';
                id: string;
                type: GameTransactionType;
                gameId: string;
                fromAccountId: string;
                toAccountId?: string | null;
                additionalInfo?: string | null;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type DeleteGameMutationVariables = {
    input: DeleteGameInput;
    condition?: ModelGameConditionInput | null;
};

export type DeleteGameMutation = {
    deleteGame?: {
        __typename: 'Game';
        id: string;
        title: string;
        name: string;
        symbol: string;
        media: {
            __typename: 'GameMedia';
            coverPhoto: string;
            logo: string;
            banner1: string;
            banner2: string;
        };
        colors: {
            __typename: 'GameColors';
            bg: string;
            cta: string;
            text: string;
        };
        url: string;
        releaseDate?: string | null;
        platforms: Array<PLATFORM>;
        cartridge: {
            __typename: 'GameCartridge';
            type: CartridgeType;
            blockchain: BLOCKCHAIN;
            address?: string | null;
            cryptoCurrency: CryptoCurrency;
            tradingFee: number;
            initialPrice?: number | null;
            unitPrice?: number | null;
            unitPriceInHash?: number | null;
            sold?: number | null;
            totalSupply?: number | null;
            marketCap?: number | null;
        };
        metadata: {
            __typename: 'GameMetadata';
            description: string;
            social: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            };
            video: string;
            screens: Array<string>;
            gamePaper: string;
        };
        metadataUrl: string;
        developerId?: string | null;
        developer?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        gamers?: {
            __typename: 'ModelAccountGameConnection';
            items: Array<{
                __typename: 'AccountGame';
                id: string;
                gameID: string;
                accountID: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        transactions?: {
            __typename: 'ModelGameTransactionConnection';
            items: Array<{
                __typename: 'GameTransaction';
                id: string;
                type: GameTransactionType;
                gameId: string;
                fromAccountId: string;
                toAccountId?: string | null;
                additionalInfo?: string | null;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateTeamAccountMutationVariables = {
    input: CreateTeamAccountInput;
    condition?: ModelTeamAccountConditionInput | null;
};

export type CreateTeamAccountMutation = {
    createTeamAccount?: {
        __typename: 'TeamAccount';
        id: string;
        role: string;
        account?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        teamAccountAccountId?: string | null;
    } | null;
};

export type UpdateTeamAccountMutationVariables = {
    input: UpdateTeamAccountInput;
    condition?: ModelTeamAccountConditionInput | null;
};

export type UpdateTeamAccountMutation = {
    updateTeamAccount?: {
        __typename: 'TeamAccount';
        id: string;
        role: string;
        account?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        teamAccountAccountId?: string | null;
    } | null;
};

export type DeleteTeamAccountMutationVariables = {
    input: DeleteTeamAccountInput;
    condition?: ModelTeamAccountConditionInput | null;
};

export type DeleteTeamAccountMutation = {
    deleteTeamAccount?: {
        __typename: 'TeamAccount';
        id: string;
        role: string;
        account?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        teamAccountAccountId?: string | null;
    } | null;
};

export type CreateAccountMutationVariables = {
    input: CreateAccountInput;
    condition?: ModelAccountConditionInput | null;
};

export type CreateAccountMutation = {
    createAccount?: {
        __typename: 'Account';
        id: string;
        nickname?: string | null;
        avatar?: string | null;
        email?: string | null;
        type?: AccountType | null;
        bgColor?: string | null;
        description?: string | null;
        social?: {
            __typename: 'Social';
            fb?: string | null;
            telegram?: string | null;
            twitter?: string | null;
            twitch?: string | null;
            discord?: string | null;
        } | null;
        url?: string | null;
        role?: string | null;
        hashBalance?: number | null;
        isVerified?: boolean | null;
        teamAccount?: {
            __typename: 'TeamAccount';
            id: string;
            role: string;
            account?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            teamAccountAccountId?: string | null;
        } | null;
        accountWatchlist?: {
            __typename: 'ModelAccountWatchlistConnection';
            items: Array<{
                __typename: 'AccountWatchlist';
                id: string;
                accountId: string;
                followedId: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        ownedGames?: {
            __typename: 'ModelAccountGameConnection';
            items: Array<{
                __typename: 'AccountGame';
                id: string;
                gameID: string;
                accountID: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        transactions?: {
            __typename: 'ModelAccountTransactionConnection';
            items: Array<{
                __typename: 'AccountTransaction';
                id: string;
                type: AccountTransactionType;
                fromAccountId: string;
                toAccountId?: string | null;
                additionalInfo?: string | null;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        accountTeamAccountId?: string | null;
    } | null;
};

export type UpdateAccountMutationVariables = {
    input: UpdateAccountInput;
    condition?: ModelAccountConditionInput | null;
};

export type UpdateAccountMutation = {
    updateAccount?: {
        __typename: 'Account';
        id: string;
        nickname?: string | null;
        avatar?: string | null;
        email?: string | null;
        type?: AccountType | null;
        bgColor?: string | null;
        description?: string | null;
        social?: {
            __typename: 'Social';
            fb?: string | null;
            telegram?: string | null;
            twitter?: string | null;
            twitch?: string | null;
            discord?: string | null;
        } | null;
        url?: string | null;
        role?: string | null;
        hashBalance?: number | null;
        isVerified?: boolean | null;
        teamAccount?: {
            __typename: 'TeamAccount';
            id: string;
            role: string;
            account?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            teamAccountAccountId?: string | null;
        } | null;
        accountWatchlist?: {
            __typename: 'ModelAccountWatchlistConnection';
            items: Array<{
                __typename: 'AccountWatchlist';
                id: string;
                accountId: string;
                followedId: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        ownedGames?: {
            __typename: 'ModelAccountGameConnection';
            items: Array<{
                __typename: 'AccountGame';
                id: string;
                gameID: string;
                accountID: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        transactions?: {
            __typename: 'ModelAccountTransactionConnection';
            items: Array<{
                __typename: 'AccountTransaction';
                id: string;
                type: AccountTransactionType;
                fromAccountId: string;
                toAccountId?: string | null;
                additionalInfo?: string | null;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        accountTeamAccountId?: string | null;
    } | null;
};

export type DeleteAccountMutationVariables = {
    input: DeleteAccountInput;
    condition?: ModelAccountConditionInput | null;
};

export type DeleteAccountMutation = {
    deleteAccount?: {
        __typename: 'Account';
        id: string;
        nickname?: string | null;
        avatar?: string | null;
        email?: string | null;
        type?: AccountType | null;
        bgColor?: string | null;
        description?: string | null;
        social?: {
            __typename: 'Social';
            fb?: string | null;
            telegram?: string | null;
            twitter?: string | null;
            twitch?: string | null;
            discord?: string | null;
        } | null;
        url?: string | null;
        role?: string | null;
        hashBalance?: number | null;
        isVerified?: boolean | null;
        teamAccount?: {
            __typename: 'TeamAccount';
            id: string;
            role: string;
            account?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            teamAccountAccountId?: string | null;
        } | null;
        accountWatchlist?: {
            __typename: 'ModelAccountWatchlistConnection';
            items: Array<{
                __typename: 'AccountWatchlist';
                id: string;
                accountId: string;
                followedId: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        ownedGames?: {
            __typename: 'ModelAccountGameConnection';
            items: Array<{
                __typename: 'AccountGame';
                id: string;
                gameID: string;
                accountID: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        transactions?: {
            __typename: 'ModelAccountTransactionConnection';
            items: Array<{
                __typename: 'AccountTransaction';
                id: string;
                type: AccountTransactionType;
                fromAccountId: string;
                toAccountId?: string | null;
                additionalInfo?: string | null;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        accountTeamAccountId?: string | null;
    } | null;
};

export type CreateAccountWatchlistMutationVariables = {
    input: CreateAccountWatchlistInput;
    condition?: ModelAccountWatchlistConditionInput | null;
};

export type CreateAccountWatchlistMutation = {
    createAccountWatchlist?: {
        __typename: 'AccountWatchlist';
        id: string;
        accountId: string;
        account: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        followedId: string;
        followed: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type UpdateAccountWatchlistMutationVariables = {
    input: UpdateAccountWatchlistInput;
    condition?: ModelAccountWatchlistConditionInput | null;
};

export type UpdateAccountWatchlistMutation = {
    updateAccountWatchlist?: {
        __typename: 'AccountWatchlist';
        id: string;
        accountId: string;
        account: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        followedId: string;
        followed: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type DeleteAccountWatchlistMutationVariables = {
    input: DeleteAccountWatchlistInput;
    condition?: ModelAccountWatchlistConditionInput | null;
};

export type DeleteAccountWatchlistMutation = {
    deleteAccountWatchlist?: {
        __typename: 'AccountWatchlist';
        id: string;
        accountId: string;
        account: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        followedId: string;
        followed: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateNewsletterMembersMutationVariables = {
    input: CreateNewsletterMembersInput;
    condition?: ModelNewsletterMembersConditionInput | null;
};

export type CreateNewsletterMembersMutation = {
    createNewsletterMembers?: {
        __typename: 'NewsletterMembers';
        id?: string | null;
        account?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        email?: string | null;
        createdAt: string;
        updatedAt: string;
        newsletterMembersAccountId?: string | null;
    } | null;
};

export type UpdateNewsletterMembersMutationVariables = {
    input: UpdateNewsletterMembersInput;
    condition?: ModelNewsletterMembersConditionInput | null;
};

export type UpdateNewsletterMembersMutation = {
    updateNewsletterMembers?: {
        __typename: 'NewsletterMembers';
        id?: string | null;
        account?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        email?: string | null;
        createdAt: string;
        updatedAt: string;
        newsletterMembersAccountId?: string | null;
    } | null;
};

export type DeleteNewsletterMembersMutationVariables = {
    input: DeleteNewsletterMembersInput;
    condition?: ModelNewsletterMembersConditionInput | null;
};

export type DeleteNewsletterMembersMutation = {
    deleteNewsletterMembers?: {
        __typename: 'NewsletterMembers';
        id?: string | null;
        account?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        email?: string | null;
        createdAt: string;
        updatedAt: string;
        newsletterMembersAccountId?: string | null;
    } | null;
};

export type CreateGameTransactionMutationVariables = {
    input: CreateGameTransactionInput;
    condition?: ModelGameTransactionConditionInput | null;
};

export type CreateGameTransactionMutation = {
    createGameTransaction?: {
        __typename: 'GameTransaction';
        id: string;
        type: GameTransactionType;
        gameId: string;
        game: {
            __typename: 'Game';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms: Array<PLATFORM>;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            gamers?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelGameTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        fromAccountId: string;
        fromAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        toAccountId?: string | null;
        toAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        additionalInfo?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type UpdateGameTransactionMutationVariables = {
    input: UpdateGameTransactionInput;
    condition?: ModelGameTransactionConditionInput | null;
};

export type UpdateGameTransactionMutation = {
    updateGameTransaction?: {
        __typename: 'GameTransaction';
        id: string;
        type: GameTransactionType;
        gameId: string;
        game: {
            __typename: 'Game';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms: Array<PLATFORM>;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            gamers?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelGameTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        fromAccountId: string;
        fromAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        toAccountId?: string | null;
        toAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        additionalInfo?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type DeleteGameTransactionMutationVariables = {
    input: DeleteGameTransactionInput;
    condition?: ModelGameTransactionConditionInput | null;
};

export type DeleteGameTransactionMutation = {
    deleteGameTransaction?: {
        __typename: 'GameTransaction';
        id: string;
        type: GameTransactionType;
        gameId: string;
        game: {
            __typename: 'Game';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms: Array<PLATFORM>;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            gamers?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelGameTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        fromAccountId: string;
        fromAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        toAccountId?: string | null;
        toAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        additionalInfo?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateAccountTransactionMutationVariables = {
    input: CreateAccountTransactionInput;
    condition?: ModelAccountTransactionConditionInput | null;
};

export type CreateAccountTransactionMutation = {
    createAccountTransaction?: {
        __typename: 'AccountTransaction';
        id: string;
        type: AccountTransactionType;
        fromAccountId: string;
        fromAccount: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        toAccountId?: string | null;
        toAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        additionalInfo?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type UpdateAccountTransactionMutationVariables = {
    input: UpdateAccountTransactionInput;
    condition?: ModelAccountTransactionConditionInput | null;
};

export type UpdateAccountTransactionMutation = {
    updateAccountTransaction?: {
        __typename: 'AccountTransaction';
        id: string;
        type: AccountTransactionType;
        fromAccountId: string;
        fromAccount: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        toAccountId?: string | null;
        toAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        additionalInfo?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type DeleteAccountTransactionMutationVariables = {
    input: DeleteAccountTransactionInput;
    condition?: ModelAccountTransactionConditionInput | null;
};

export type DeleteAccountTransactionMutation = {
    deleteAccountTransaction?: {
        __typename: 'AccountTransaction';
        id: string;
        type: AccountTransactionType;
        fromAccountId: string;
        fromAccount: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        toAccountId?: string | null;
        toAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        additionalInfo?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type CreateAccountGameMutationVariables = {
    input: CreateAccountGameInput;
    condition?: ModelAccountGameConditionInput | null;
};

export type CreateAccountGameMutation = {
    createAccountGame?: {
        __typename: 'AccountGame';
        id: string;
        gameID: string;
        accountID: string;
        game: {
            __typename: 'Game';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms: Array<PLATFORM>;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            gamers?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelGameTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        account: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type UpdateAccountGameMutationVariables = {
    input: UpdateAccountGameInput;
    condition?: ModelAccountGameConditionInput | null;
};

export type UpdateAccountGameMutation = {
    updateAccountGame?: {
        __typename: 'AccountGame';
        id: string;
        gameID: string;
        accountID: string;
        game: {
            __typename: 'Game';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms: Array<PLATFORM>;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            gamers?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelGameTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        account: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type DeleteAccountGameMutationVariables = {
    input: DeleteAccountGameInput;
    condition?: ModelAccountGameConditionInput | null;
};

export type DeleteAccountGameMutation = {
    deleteAccountGame?: {
        __typename: 'AccountGame';
        id: string;
        gameID: string;
        accountID: string;
        game: {
            __typename: 'Game';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms: Array<PLATFORM>;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            gamers?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelGameTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        account: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type GetGiftCardsQueryVariables = {
    id: string;
};

export type GetGiftCardsQuery = {
    getGiftCards?: {
        __typename: 'GiftCards';
        id: string;
        activatedTimestamp: number;
        address?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type ListGiftCardsQueryVariables = {
    filter?: ModelGiftCardsFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListGiftCardsQuery = {
    listGiftCards?: {
        __typename: 'ModelGiftCardsConnection';
        items: Array<{
            __typename: 'GiftCards';
            id: string;
            activatedTimestamp: number;
            address?: string | null;
            createdAt: string;
            updatedAt: string;
        }>;
        nextToken?: string | null;
    } | null;
};

export type GetGameDraftQueryVariables = {
    id: string;
};

export type GetGameDraftQuery = {
    getGameDraft?: {
        __typename: 'GameDraft';
        id: string;
        title: string;
        name: string;
        symbol: string;
        media: {
            __typename: 'GameMedia';
            coverPhoto: string;
            logo: string;
            banner1: string;
            banner2: string;
        };
        colors: {
            __typename: 'GameColors';
            bg: string;
            cta: string;
            text: string;
        };
        url: string;
        releaseDate?: string | null;
        platforms?: Array<PLATFORM | null> | null;
        cartridge: {
            __typename: 'GameCartridge';
            type: CartridgeType;
            blockchain: BLOCKCHAIN;
            address?: string | null;
            cryptoCurrency: CryptoCurrency;
            tradingFee: number;
            initialPrice?: number | null;
            unitPrice?: number | null;
            unitPriceInHash?: number | null;
            sold?: number | null;
            totalSupply?: number | null;
            marketCap?: number | null;
        };
        metadata: {
            __typename: 'GameMetadata';
            description: string;
            social: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            };
            video: string;
            screens: Array<string>;
            gamePaper: string;
        };
        metadataUrl: string;
        developerId?: string | null;
        developer?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type ListGameDraftsQueryVariables = {
    filter?: ModelGameDraftFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListGameDraftsQuery = {
    listGameDrafts?: {
        __typename: 'ModelGameDraftConnection';
        items: Array<{
            __typename: 'GameDraft';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms?: Array<PLATFORM | null> | null;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        }>;
        nextToken?: string | null;
    } | null;
};

export type GetGameQueryVariables = {
    id: string;
};

export type GetGameQuery = {
    getGame?: {
        __typename: 'Game';
        id: string;
        title: string;
        name: string;
        symbol: string;
        media: {
            __typename: 'GameMedia';
            coverPhoto: string;
            logo: string;
            banner1: string;
            banner2: string;
        };
        colors: {
            __typename: 'GameColors';
            bg: string;
            cta: string;
            text: string;
        };
        url: string;
        releaseDate?: string | null;
        platforms: Array<PLATFORM>;
        cartridge: {
            __typename: 'GameCartridge';
            type: CartridgeType;
            blockchain: BLOCKCHAIN;
            address?: string | null;
            cryptoCurrency: CryptoCurrency;
            tradingFee: number;
            initialPrice?: number | null;
            unitPrice?: number | null;
            unitPriceInHash?: number | null;
            sold?: number | null;
            totalSupply?: number | null;
            marketCap?: number | null;
        };
        metadata: {
            __typename: 'GameMetadata';
            description: string;
            social: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            };
            video: string;
            screens: Array<string>;
            gamePaper: string;
        };
        metadataUrl: string;
        developerId?: string | null;
        developer?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        gamers?: {
            __typename: 'ModelAccountGameConnection';
            items: Array<{
                __typename: 'AccountGame';
                id: string;
                gameID: string;
                accountID: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        transactions?: {
            __typename: 'ModelGameTransactionConnection';
            items: Array<{
                __typename: 'GameTransaction';
                id: string;
                type: GameTransactionType;
                gameId: string;
                fromAccountId: string;
                toAccountId?: string | null;
                additionalInfo?: string | null;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type ListGamesQueryVariables = {
    filter?: ModelGameFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListGamesQuery = {
    listGames?: {
        __typename: 'ModelGameConnection';
        items: Array<{
            __typename: 'Game';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms: Array<PLATFORM>;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            gamers?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelGameTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        }>;
        nextToken?: string | null;
    } | null;
};

export type SearchGamesQueryVariables = {
    filter?: SearchableGameFilterInput | null;
    sort?: Array<SearchableGameSortInput | null> | null;
    limit?: number | null;
    nextToken?: string | null;
    from?: number | null;
    aggregates?: Array<SearchableGameAggregationInput | null> | null;
};

export type SearchGamesQuery = {
    searchGames?: {
        __typename: 'SearchableGameConnection';
        items: Array<{
            __typename: 'Game';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms: Array<PLATFORM>;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            gamers?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelGameTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        }>;
        nextToken?: string | null;
        total?: number | null;
        aggregateItems: Array<{
            __typename: 'SearchableAggregateResult';
            name: string;
            result:
                | (
                | {
                __typename: 'SearchableAggregateScalarResult';
                value: number;
            }
                | {
                __typename: 'SearchableAggregateBucketResult';
                buckets?: Array<{
                    __typename: string;
                    key: string;
                    doc_count: number;
                } | null> | null;
            }
                )
                | null;
        }>;
    } | null;
};

export type GetTeamAccountQueryVariables = {
    id: string;
};

export type GetTeamAccountQuery = {
    getTeamAccount?: {
        __typename: 'TeamAccount';
        id: string;
        role: string;
        account?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        teamAccountAccountId?: string | null;
    } | null;
};

export type ListTeamAccountsQueryVariables = {
    filter?: ModelTeamAccountFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListTeamAccountsQuery = {
    listTeamAccounts?: {
        __typename: 'ModelTeamAccountConnection';
        items: Array<{
            __typename: 'TeamAccount';
            id: string;
            role: string;
            account?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            teamAccountAccountId?: string | null;
        }>;
        nextToken?: string | null;
    } | null;
};

export type GetAccountQueryVariables = {
    id: string;
};

export type GetAccountQuery = {
    getAccount?: {
        __typename: 'Account';
        id: string;
        nickname?: string | null;
        avatar?: string | null;
        email?: string | null;
        type?: AccountType | null;
        bgColor?: string | null;
        description?: string | null;
        social?: {
            __typename: 'Social';
            fb?: string | null;
            telegram?: string | null;
            twitter?: string | null;
            twitch?: string | null;
            discord?: string | null;
        } | null;
        url?: string | null;
        role?: string | null;
        hashBalance?: number | null;
        isVerified?: boolean | null;
        teamAccount?: {
            __typename: 'TeamAccount';
            id: string;
            role: string;
            account?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            teamAccountAccountId?: string | null;
        } | null;
        accountWatchlist?: {
            __typename: 'ModelAccountWatchlistConnection';
            items: Array<{
                __typename: 'AccountWatchlist';
                id: string;
                accountId: string;
                followedId: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        ownedGames?: {
            __typename: 'ModelAccountGameConnection';
            items: Array<{
                __typename: 'AccountGame';
                id: string;
                gameID: string;
                accountID: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        transactions?: {
            __typename: 'ModelAccountTransactionConnection';
            items: Array<{
                __typename: 'AccountTransaction';
                id: string;
                type: AccountTransactionType;
                fromAccountId: string;
                toAccountId?: string | null;
                additionalInfo?: string | null;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        accountTeamAccountId?: string | null;
    } | null;
};

export type ListAccountsQueryVariables = {
    filter?: ModelAccountFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListAccountsQuery = {
    listAccounts?: {
        __typename: 'ModelAccountConnection';
        items: Array<{
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        }>;
        nextToken?: string | null;
    } | null;
};

export type SearchAccountsQueryVariables = {
    filter?: SearchableAccountFilterInput | null;
    sort?: Array<SearchableAccountSortInput | null> | null;
    limit?: number | null;
    nextToken?: string | null;
    from?: number | null;
    aggregates?: Array<SearchableAccountAggregationInput | null> | null;
};

export type SearchAccountsQuery = {
    searchAccounts?: {
        __typename: 'SearchableAccountConnection';
        items: Array<{
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        }>;
        nextToken?: string | null;
        total?: number | null;
        aggregateItems: Array<{
            __typename: 'SearchableAggregateResult';
            name: string;
            result:
                | (
                | {
                __typename: 'SearchableAggregateScalarResult';
                value: number;
            }
                | {
                __typename: 'SearchableAggregateBucketResult';
                buckets?: Array<{
                    __typename: string;
                    key: string;
                    doc_count: number;
                } | null> | null;
            }
                )
                | null;
        }>;
    } | null;
};

export type GetAccountWatchlistQueryVariables = {
    id: string;
};

export type GetAccountWatchlistQuery = {
    getAccountWatchlist?: {
        __typename: 'AccountWatchlist';
        id: string;
        accountId: string;
        account: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        followedId: string;
        followed: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type ListAccountWatchlistsQueryVariables = {
    filter?: ModelAccountWatchlistFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListAccountWatchlistsQuery = {
    listAccountWatchlists?: {
        __typename: 'ModelAccountWatchlistConnection';
        items: Array<{
            __typename: 'AccountWatchlist';
            id: string;
            accountId: string;
            account: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            };
            followedId: string;
            followed: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            };
            createdAt: string;
            updatedAt: string;
        }>;
        nextToken?: string | null;
    } | null;
};

export type GetNewsletterMembersQueryVariables = {
    id: string;
};

export type GetNewsletterMembersQuery = {
    getNewsletterMembers?: {
        __typename: 'NewsletterMembers';
        id?: string | null;
        account?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        email?: string | null;
        createdAt: string;
        updatedAt: string;
        newsletterMembersAccountId?: string | null;
    } | null;
};

export type ListNewsletterMembersQueryVariables = {
    filter?: ModelNewsletterMembersFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListNewsletterMembersQuery = {
    listNewsletterMembers?: {
        __typename: 'ModelNewsletterMembersConnection';
        items: Array<{
            __typename: 'NewsletterMembers';
            id?: string | null;
            account?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            email?: string | null;
            createdAt: string;
            updatedAt: string;
            newsletterMembersAccountId?: string | null;
        }>;
        nextToken?: string | null;
    } | null;
};

export type GetGameTransactionQueryVariables = {
    id: string;
};

export type GetGameTransactionQuery = {
    getGameTransaction?: {
        __typename: 'GameTransaction';
        id: string;
        type: GameTransactionType;
        gameId: string;
        game: {
            __typename: 'Game';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms: Array<PLATFORM>;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            gamers?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelGameTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        fromAccountId: string;
        fromAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        toAccountId?: string | null;
        toAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        additionalInfo?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type ListGameTransactionsQueryVariables = {
    filter?: ModelGameTransactionFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListGameTransactionsQuery = {
    listGameTransactions?: {
        __typename: 'ModelGameTransactionConnection';
        items: Array<{
            __typename: 'GameTransaction';
            id: string;
            type: GameTransactionType;
            gameId: string;
            game: {
                __typename: 'Game';
                id: string;
                title: string;
                name: string;
                symbol: string;
                url: string;
                releaseDate?: string | null;
                platforms: Array<PLATFORM>;
                metadataUrl: string;
                developerId?: string | null;
                createdAt: string;
                updatedAt: string;
            };
            fromAccountId: string;
            fromAccount?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            toAccountId?: string | null;
            toAccount?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            additionalInfo?: string | null;
            createdAt: string;
            updatedAt: string;
        }>;
        nextToken?: string | null;
    } | null;
};

export type SearchGameTransactionsQueryVariables = {
    filter?: SearchableGameTransactionFilterInput | null;
    sort?: Array<SearchableGameTransactionSortInput | null> | null;
    limit?: number | null;
    nextToken?: string | null;
    from?: number | null;
    aggregates?: Array<SearchableGameTransactionAggregationInput | null> | null;
};

export type SearchGameTransactionsQuery = {
    searchGameTransactions?: {
        __typename: 'SearchableGameTransactionConnection';
        items: Array<{
            __typename: 'GameTransaction';
            id: string;
            type: GameTransactionType;
            gameId: string;
            game: {
                __typename: 'Game';
                id: string;
                title: string;
                name: string;
                symbol: string;
                url: string;
                releaseDate?: string | null;
                platforms: Array<PLATFORM>;
                metadataUrl: string;
                developerId?: string | null;
                createdAt: string;
                updatedAt: string;
            };
            fromAccountId: string;
            fromAccount?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            toAccountId?: string | null;
            toAccount?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            additionalInfo?: string | null;
            createdAt: string;
            updatedAt: string;
        }>;
        nextToken?: string | null;
        total?: number | null;
        aggregateItems: Array<{
            __typename: 'SearchableAggregateResult';
            name: string;
            result:
                | (
                | {
                __typename: 'SearchableAggregateScalarResult';
                value: number;
            }
                | {
                __typename: 'SearchableAggregateBucketResult';
                buckets?: Array<{
                    __typename: string;
                    key: string;
                    doc_count: number;
                } | null> | null;
            }
                )
                | null;
        }>;
    } | null;
};

export type GetAccountTransactionQueryVariables = {
    id: string;
};

export type GetAccountTransactionQuery = {
    getAccountTransaction?: {
        __typename: 'AccountTransaction';
        id: string;
        type: AccountTransactionType;
        fromAccountId: string;
        fromAccount: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        toAccountId?: string | null;
        toAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        additionalInfo?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type ListAccountTransactionsQueryVariables = {
    filter?: ModelAccountTransactionFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListAccountTransactionsQuery = {
    listAccountTransactions?: {
        __typename: 'ModelAccountTransactionConnection';
        items: Array<{
            __typename: 'AccountTransaction';
            id: string;
            type: AccountTransactionType;
            fromAccountId: string;
            fromAccount: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            };
            toAccountId?: string | null;
            toAccount?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            additionalInfo?: string | null;
            createdAt: string;
            updatedAt: string;
        }>;
        nextToken?: string | null;
    } | null;
};

export type SearchAccountTransactionsQueryVariables = {
    filter?: SearchableAccountTransactionFilterInput | null;
    sort?: Array<SearchableAccountTransactionSortInput | null> | null;
    limit?: number | null;
    nextToken?: string | null;
    from?: number | null;
    aggregates?: Array<SearchableAccountTransactionAggregationInput | null> | null;
};

export type SearchAccountTransactionsQuery = {
    searchAccountTransactions?: {
        __typename: 'SearchableAccountTransactionConnection';
        items: Array<{
            __typename: 'AccountTransaction';
            id: string;
            type: AccountTransactionType;
            fromAccountId: string;
            fromAccount: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            };
            toAccountId?: string | null;
            toAccount?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            additionalInfo?: string | null;
            createdAt: string;
            updatedAt: string;
        }>;
        nextToken?: string | null;
        total?: number | null;
        aggregateItems: Array<{
            __typename: 'SearchableAggregateResult';
            name: string;
            result:
                | (
                | {
                __typename: 'SearchableAggregateScalarResult';
                value: number;
            }
                | {
                __typename: 'SearchableAggregateBucketResult';
                buckets?: Array<{
                    __typename: string;
                    key: string;
                    doc_count: number;
                } | null> | null;
            }
                )
                | null;
        }>;
    } | null;
};

export type GetAccountGameQueryVariables = {
    id: string;
};

export type GetAccountGameQuery = {
    getAccountGame?: {
        __typename: 'AccountGame';
        id: string;
        gameID: string;
        accountID: string;
        game: {
            __typename: 'Game';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms: Array<PLATFORM>;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            gamers?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelGameTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        account: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type ListAccountGamesQueryVariables = {
    filter?: ModelAccountGameFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};

export type ListAccountGamesQuery = {
    listAccountGames?: {
        __typename: 'ModelAccountGameConnection';
        items: Array<{
            __typename: 'AccountGame';
            id: string;
            gameID: string;
            accountID: string;
            game: {
                __typename: 'Game';
                id: string;
                title: string;
                name: string;
                symbol: string;
                url: string;
                releaseDate?: string | null;
                platforms: Array<PLATFORM>;
                metadataUrl: string;
                developerId?: string | null;
                createdAt: string;
                updatedAt: string;
            };
            account: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            };
            createdAt: string;
            updatedAt: string;
        }>;
        nextToken?: string | null;
    } | null;
};

export type OnCreateGiftCardsSubscription = {
    onCreateGiftCards?: {
        __typename: 'GiftCards';
        id: string;
        activatedTimestamp: number;
        address?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnUpdateGiftCardsSubscription = {
    onUpdateGiftCards?: {
        __typename: 'GiftCards';
        id: string;
        activatedTimestamp: number;
        address?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnDeleteGiftCardsSubscription = {
    onDeleteGiftCards?: {
        __typename: 'GiftCards';
        id: string;
        activatedTimestamp: number;
        address?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnCreateGameDraftSubscription = {
    onCreateGameDraft?: {
        __typename: 'GameDraft';
        id: string;
        title: string;
        name: string;
        symbol: string;
        media: {
            __typename: 'GameMedia';
            coverPhoto: string;
            logo: string;
            banner1: string;
            banner2: string;
        };
        colors: {
            __typename: 'GameColors';
            bg: string;
            cta: string;
            text: string;
        };
        url: string;
        releaseDate?: string | null;
        platforms?: Array<PLATFORM | null> | null;
        cartridge: {
            __typename: 'GameCartridge';
            type: CartridgeType;
            blockchain: BLOCKCHAIN;
            address?: string | null;
            cryptoCurrency: CryptoCurrency;
            tradingFee: number;
            initialPrice?: number | null;
            unitPrice?: number | null;
            unitPriceInHash?: number | null;
            sold?: number | null;
            totalSupply?: number | null;
            marketCap?: number | null;
        };
        metadata: {
            __typename: 'GameMetadata';
            description: string;
            social: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            };
            video: string;
            screens: Array<string>;
            gamePaper: string;
        };
        metadataUrl: string;
        developerId?: string | null;
        developer?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnUpdateGameDraftSubscription = {
    onUpdateGameDraft?: {
        __typename: 'GameDraft';
        id: string;
        title: string;
        name: string;
        symbol: string;
        media: {
            __typename: 'GameMedia';
            coverPhoto: string;
            logo: string;
            banner1: string;
            banner2: string;
        };
        colors: {
            __typename: 'GameColors';
            bg: string;
            cta: string;
            text: string;
        };
        url: string;
        releaseDate?: string | null;
        platforms?: Array<PLATFORM | null> | null;
        cartridge: {
            __typename: 'GameCartridge';
            type: CartridgeType;
            blockchain: BLOCKCHAIN;
            address?: string | null;
            cryptoCurrency: CryptoCurrency;
            tradingFee: number;
            initialPrice?: number | null;
            unitPrice?: number | null;
            unitPriceInHash?: number | null;
            sold?: number | null;
            totalSupply?: number | null;
            marketCap?: number | null;
        };
        metadata: {
            __typename: 'GameMetadata';
            description: string;
            social: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            };
            video: string;
            screens: Array<string>;
            gamePaper: string;
        };
        metadataUrl: string;
        developerId?: string | null;
        developer?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnDeleteGameDraftSubscription = {
    onDeleteGameDraft?: {
        __typename: 'GameDraft';
        id: string;
        title: string;
        name: string;
        symbol: string;
        media: {
            __typename: 'GameMedia';
            coverPhoto: string;
            logo: string;
            banner1: string;
            banner2: string;
        };
        colors: {
            __typename: 'GameColors';
            bg: string;
            cta: string;
            text: string;
        };
        url: string;
        releaseDate?: string | null;
        platforms?: Array<PLATFORM | null> | null;
        cartridge: {
            __typename: 'GameCartridge';
            type: CartridgeType;
            blockchain: BLOCKCHAIN;
            address?: string | null;
            cryptoCurrency: CryptoCurrency;
            tradingFee: number;
            initialPrice?: number | null;
            unitPrice?: number | null;
            unitPriceInHash?: number | null;
            sold?: number | null;
            totalSupply?: number | null;
            marketCap?: number | null;
        };
        metadata: {
            __typename: 'GameMetadata';
            description: string;
            social: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            };
            video: string;
            screens: Array<string>;
            gamePaper: string;
        };
        metadataUrl: string;
        developerId?: string | null;
        developer?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnCreateGameSubscription = {
    onCreateGame?: {
        __typename: 'Game';
        id: string;
        title: string;
        name: string;
        symbol: string;
        media: {
            __typename: 'GameMedia';
            coverPhoto: string;
            logo: string;
            banner1: string;
            banner2: string;
        };
        colors: {
            __typename: 'GameColors';
            bg: string;
            cta: string;
            text: string;
        };
        url: string;
        releaseDate?: string | null;
        platforms: Array<PLATFORM>;
        cartridge: {
            __typename: 'GameCartridge';
            type: CartridgeType;
            blockchain: BLOCKCHAIN;
            address?: string | null;
            cryptoCurrency: CryptoCurrency;
            tradingFee: number;
            initialPrice?: number | null;
            unitPrice?: number | null;
            unitPriceInHash?: number | null;
            sold?: number | null;
            totalSupply?: number | null;
            marketCap?: number | null;
        };
        metadata: {
            __typename: 'GameMetadata';
            description: string;
            social: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            };
            video: string;
            screens: Array<string>;
            gamePaper: string;
        };
        metadataUrl: string;
        developerId?: string | null;
        developer?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        gamers?: {
            __typename: 'ModelAccountGameConnection';
            items: Array<{
                __typename: 'AccountGame';
                id: string;
                gameID: string;
                accountID: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        transactions?: {
            __typename: 'ModelGameTransactionConnection';
            items: Array<{
                __typename: 'GameTransaction';
                id: string;
                type: GameTransactionType;
                gameId: string;
                fromAccountId: string;
                toAccountId?: string | null;
                additionalInfo?: string | null;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnUpdateGameSubscription = {
    onUpdateGame?: {
        __typename: 'Game';
        id: string;
        title: string;
        name: string;
        symbol: string;
        media: {
            __typename: 'GameMedia';
            coverPhoto: string;
            logo: string;
            banner1: string;
            banner2: string;
        };
        colors: {
            __typename: 'GameColors';
            bg: string;
            cta: string;
            text: string;
        };
        url: string;
        releaseDate?: string | null;
        platforms: Array<PLATFORM>;
        cartridge: {
            __typename: 'GameCartridge';
            type: CartridgeType;
            blockchain: BLOCKCHAIN;
            address?: string | null;
            cryptoCurrency: CryptoCurrency;
            tradingFee: number;
            initialPrice?: number | null;
            unitPrice?: number | null;
            unitPriceInHash?: number | null;
            sold?: number | null;
            totalSupply?: number | null;
            marketCap?: number | null;
        };
        metadata: {
            __typename: 'GameMetadata';
            description: string;
            social: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            };
            video: string;
            screens: Array<string>;
            gamePaper: string;
        };
        metadataUrl: string;
        developerId?: string | null;
        developer?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        gamers?: {
            __typename: 'ModelAccountGameConnection';
            items: Array<{
                __typename: 'AccountGame';
                id: string;
                gameID: string;
                accountID: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        transactions?: {
            __typename: 'ModelGameTransactionConnection';
            items: Array<{
                __typename: 'GameTransaction';
                id: string;
                type: GameTransactionType;
                gameId: string;
                fromAccountId: string;
                toAccountId?: string | null;
                additionalInfo?: string | null;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnDeleteGameSubscription = {
    onDeleteGame?: {
        __typename: 'Game';
        id: string;
        title: string;
        name: string;
        symbol: string;
        media: {
            __typename: 'GameMedia';
            coverPhoto: string;
            logo: string;
            banner1: string;
            banner2: string;
        };
        colors: {
            __typename: 'GameColors';
            bg: string;
            cta: string;
            text: string;
        };
        url: string;
        releaseDate?: string | null;
        platforms: Array<PLATFORM>;
        cartridge: {
            __typename: 'GameCartridge';
            type: CartridgeType;
            blockchain: BLOCKCHAIN;
            address?: string | null;
            cryptoCurrency: CryptoCurrency;
            tradingFee: number;
            initialPrice?: number | null;
            unitPrice?: number | null;
            unitPriceInHash?: number | null;
            sold?: number | null;
            totalSupply?: number | null;
            marketCap?: number | null;
        };
        metadata: {
            __typename: 'GameMetadata';
            description: string;
            social: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            };
            video: string;
            screens: Array<string>;
            gamePaper: string;
        };
        metadataUrl: string;
        developerId?: string | null;
        developer?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        gamers?: {
            __typename: 'ModelAccountGameConnection';
            items: Array<{
                __typename: 'AccountGame';
                id: string;
                gameID: string;
                accountID: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        transactions?: {
            __typename: 'ModelGameTransactionConnection';
            items: Array<{
                __typename: 'GameTransaction';
                id: string;
                type: GameTransactionType;
                gameId: string;
                fromAccountId: string;
                toAccountId?: string | null;
                additionalInfo?: string | null;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnCreateTeamAccountSubscription = {
    onCreateTeamAccount?: {
        __typename: 'TeamAccount';
        id: string;
        role: string;
        account?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        teamAccountAccountId?: string | null;
    } | null;
};

export type OnUpdateTeamAccountSubscription = {
    onUpdateTeamAccount?: {
        __typename: 'TeamAccount';
        id: string;
        role: string;
        account?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        teamAccountAccountId?: string | null;
    } | null;
};

export type OnDeleteTeamAccountSubscription = {
    onDeleteTeamAccount?: {
        __typename: 'TeamAccount';
        id: string;
        role: string;
        account?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        teamAccountAccountId?: string | null;
    } | null;
};

export type OnCreateAccountSubscription = {
    onCreateAccount?: {
        __typename: 'Account';
        id: string;
        nickname?: string | null;
        avatar?: string | null;
        email?: string | null;
        type?: AccountType | null;
        bgColor?: string | null;
        description?: string | null;
        social?: {
            __typename: 'Social';
            fb?: string | null;
            telegram?: string | null;
            twitter?: string | null;
            twitch?: string | null;
            discord?: string | null;
        } | null;
        url?: string | null;
        role?: string | null;
        hashBalance?: number | null;
        isVerified?: boolean | null;
        teamAccount?: {
            __typename: 'TeamAccount';
            id: string;
            role: string;
            account?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            teamAccountAccountId?: string | null;
        } | null;
        accountWatchlist?: {
            __typename: 'ModelAccountWatchlistConnection';
            items: Array<{
                __typename: 'AccountWatchlist';
                id: string;
                accountId: string;
                followedId: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        ownedGames?: {
            __typename: 'ModelAccountGameConnection';
            items: Array<{
                __typename: 'AccountGame';
                id: string;
                gameID: string;
                accountID: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        transactions?: {
            __typename: 'ModelAccountTransactionConnection';
            items: Array<{
                __typename: 'AccountTransaction';
                id: string;
                type: AccountTransactionType;
                fromAccountId: string;
                toAccountId?: string | null;
                additionalInfo?: string | null;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        accountTeamAccountId?: string | null;
    } | null;
};

export type OnUpdateAccountSubscription = {
    onUpdateAccount?: {
        __typename: 'Account';
        id: string;
        nickname?: string | null;
        avatar?: string | null;
        email?: string | null;
        type?: AccountType | null;
        bgColor?: string | null;
        description?: string | null;
        social?: {
            __typename: 'Social';
            fb?: string | null;
            telegram?: string | null;
            twitter?: string | null;
            twitch?: string | null;
            discord?: string | null;
        } | null;
        url?: string | null;
        role?: string | null;
        hashBalance?: number | null;
        isVerified?: boolean | null;
        teamAccount?: {
            __typename: 'TeamAccount';
            id: string;
            role: string;
            account?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            teamAccountAccountId?: string | null;
        } | null;
        accountWatchlist?: {
            __typename: 'ModelAccountWatchlistConnection';
            items: Array<{
                __typename: 'AccountWatchlist';
                id: string;
                accountId: string;
                followedId: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        ownedGames?: {
            __typename: 'ModelAccountGameConnection';
            items: Array<{
                __typename: 'AccountGame';
                id: string;
                gameID: string;
                accountID: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        transactions?: {
            __typename: 'ModelAccountTransactionConnection';
            items: Array<{
                __typename: 'AccountTransaction';
                id: string;
                type: AccountTransactionType;
                fromAccountId: string;
                toAccountId?: string | null;
                additionalInfo?: string | null;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        accountTeamAccountId?: string | null;
    } | null;
};

export type OnDeleteAccountSubscription = {
    onDeleteAccount?: {
        __typename: 'Account';
        id: string;
        nickname?: string | null;
        avatar?: string | null;
        email?: string | null;
        type?: AccountType | null;
        bgColor?: string | null;
        description?: string | null;
        social?: {
            __typename: 'Social';
            fb?: string | null;
            telegram?: string | null;
            twitter?: string | null;
            twitch?: string | null;
            discord?: string | null;
        } | null;
        url?: string | null;
        role?: string | null;
        hashBalance?: number | null;
        isVerified?: boolean | null;
        teamAccount?: {
            __typename: 'TeamAccount';
            id: string;
            role: string;
            account?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            teamAccountAccountId?: string | null;
        } | null;
        accountWatchlist?: {
            __typename: 'ModelAccountWatchlistConnection';
            items: Array<{
                __typename: 'AccountWatchlist';
                id: string;
                accountId: string;
                followedId: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        ownedGames?: {
            __typename: 'ModelAccountGameConnection';
            items: Array<{
                __typename: 'AccountGame';
                id: string;
                gameID: string;
                accountID: string;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        transactions?: {
            __typename: 'ModelAccountTransactionConnection';
            items: Array<{
                __typename: 'AccountTransaction';
                id: string;
                type: AccountTransactionType;
                fromAccountId: string;
                toAccountId?: string | null;
                additionalInfo?: string | null;
                createdAt: string;
                updatedAt: string;
            }>;
            nextToken?: string | null;
        } | null;
        createdAt: string;
        updatedAt: string;
        accountTeamAccountId?: string | null;
    } | null;
};

export type OnCreateAccountWatchlistSubscription = {
    onCreateAccountWatchlist?: {
        __typename: 'AccountWatchlist';
        id: string;
        accountId: string;
        account: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        followedId: string;
        followed: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnUpdateAccountWatchlistSubscription = {
    onUpdateAccountWatchlist?: {
        __typename: 'AccountWatchlist';
        id: string;
        accountId: string;
        account: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        followedId: string;
        followed: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnDeleteAccountWatchlistSubscription = {
    onDeleteAccountWatchlist?: {
        __typename: 'AccountWatchlist';
        id: string;
        accountId: string;
        account: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        followedId: string;
        followed: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnCreateNewsletterMembersSubscription = {
    onCreateNewsletterMembers?: {
        __typename: 'NewsletterMembers';
        id?: string | null;
        account?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        email?: string | null;
        createdAt: string;
        updatedAt: string;
        newsletterMembersAccountId?: string | null;
    } | null;
};

export type OnUpdateNewsletterMembersSubscription = {
    onUpdateNewsletterMembers?: {
        __typename: 'NewsletterMembers';
        id?: string | null;
        account?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        email?: string | null;
        createdAt: string;
        updatedAt: string;
        newsletterMembersAccountId?: string | null;
    } | null;
};

export type OnDeleteNewsletterMembersSubscription = {
    onDeleteNewsletterMembers?: {
        __typename: 'NewsletterMembers';
        id?: string | null;
        account?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        email?: string | null;
        createdAt: string;
        updatedAt: string;
        newsletterMembersAccountId?: string | null;
    } | null;
};

export type OnCreateGameTransactionSubscription = {
    onCreateGameTransaction?: {
        __typename: 'GameTransaction';
        id: string;
        type: GameTransactionType;
        gameId: string;
        game: {
            __typename: 'Game';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms: Array<PLATFORM>;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            gamers?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelGameTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        fromAccountId: string;
        fromAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        toAccountId?: string | null;
        toAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        additionalInfo?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnUpdateGameTransactionSubscription = {
    onUpdateGameTransaction?: {
        __typename: 'GameTransaction';
        id: string;
        type: GameTransactionType;
        gameId: string;
        game: {
            __typename: 'Game';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms: Array<PLATFORM>;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            gamers?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelGameTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        fromAccountId: string;
        fromAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        toAccountId?: string | null;
        toAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        additionalInfo?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnDeleteGameTransactionSubscription = {
    onDeleteGameTransaction?: {
        __typename: 'GameTransaction';
        id: string;
        type: GameTransactionType;
        gameId: string;
        game: {
            __typename: 'Game';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms: Array<PLATFORM>;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            gamers?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelGameTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        fromAccountId: string;
        fromAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        toAccountId?: string | null;
        toAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        additionalInfo?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnCreateAccountTransactionSubscription = {
    onCreateAccountTransaction?: {
        __typename: 'AccountTransaction';
        id: string;
        type: AccountTransactionType;
        fromAccountId: string;
        fromAccount: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        toAccountId?: string | null;
        toAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        additionalInfo?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnUpdateAccountTransactionSubscription = {
    onUpdateAccountTransaction?: {
        __typename: 'AccountTransaction';
        id: string;
        type: AccountTransactionType;
        fromAccountId: string;
        fromAccount: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        toAccountId?: string | null;
        toAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        additionalInfo?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnDeleteAccountTransactionSubscription = {
    onDeleteAccountTransaction?: {
        __typename: 'AccountTransaction';
        id: string;
        type: AccountTransactionType;
        fromAccountId: string;
        fromAccount: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        toAccountId?: string | null;
        toAccount?: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        } | null;
        additionalInfo?: string | null;
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnCreateAccountGameSubscription = {
    onCreateAccountGame?: {
        __typename: 'AccountGame';
        id: string;
        gameID: string;
        accountID: string;
        game: {
            __typename: 'Game';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms: Array<PLATFORM>;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            gamers?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelGameTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        account: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnUpdateAccountGameSubscription = {
    onUpdateAccountGame?: {
        __typename: 'AccountGame';
        id: string;
        gameID: string;
        accountID: string;
        game: {
            __typename: 'Game';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms: Array<PLATFORM>;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            gamers?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelGameTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        account: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};

export type OnDeleteAccountGameSubscription = {
    onDeleteAccountGame?: {
        __typename: 'AccountGame';
        id: string;
        gameID: string;
        accountID: string;
        game: {
            __typename: 'Game';
            id: string;
            title: string;
            name: string;
            symbol: string;
            media: {
                __typename: 'GameMedia';
                coverPhoto: string;
                logo: string;
                banner1: string;
                banner2: string;
            };
            colors: {
                __typename: 'GameColors';
                bg: string;
                cta: string;
                text: string;
            };
            url: string;
            releaseDate?: string | null;
            platforms: Array<PLATFORM>;
            cartridge: {
                __typename: 'GameCartridge';
                type: CartridgeType;
                blockchain: BLOCKCHAIN;
                address?: string | null;
                cryptoCurrency: CryptoCurrency;
                tradingFee: number;
                initialPrice?: number | null;
                unitPrice?: number | null;
                unitPriceInHash?: number | null;
                sold?: number | null;
                totalSupply?: number | null;
                marketCap?: number | null;
            };
            metadata: {
                __typename: 'GameMetadata';
                description: string;
                video: string;
                screens: Array<string>;
                gamePaper: string;
            };
            metadataUrl: string;
            developerId?: string | null;
            developer?: {
                __typename: 'Account';
                id: string;
                nickname?: string | null;
                avatar?: string | null;
                email?: string | null;
                type?: AccountType | null;
                bgColor?: string | null;
                description?: string | null;
                url?: string | null;
                role?: string | null;
                hashBalance?: number | null;
                isVerified?: boolean | null;
                createdAt: string;
                updatedAt: string;
                accountTeamAccountId?: string | null;
            } | null;
            gamers?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelGameTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
        };
        account: {
            __typename: 'Account';
            id: string;
            nickname?: string | null;
            avatar?: string | null;
            email?: string | null;
            type?: AccountType | null;
            bgColor?: string | null;
            description?: string | null;
            social?: {
                __typename: 'Social';
                fb?: string | null;
                telegram?: string | null;
                twitter?: string | null;
                twitch?: string | null;
                discord?: string | null;
            } | null;
            url?: string | null;
            role?: string | null;
            hashBalance?: number | null;
            isVerified?: boolean | null;
            teamAccount?: {
                __typename: 'TeamAccount';
                id: string;
                role: string;
                createdAt: string;
                updatedAt: string;
                teamAccountAccountId?: string | null;
            } | null;
            accountWatchlist?: {
                __typename: 'ModelAccountWatchlistConnection';
                nextToken?: string | null;
            } | null;
            ownedGames?: {
                __typename: 'ModelAccountGameConnection';
                nextToken?: string | null;
            } | null;
            transactions?: {
                __typename: 'ModelAccountTransactionConnection';
                nextToken?: string | null;
            } | null;
            createdAt: string;
            updatedAt: string;
            accountTeamAccountId?: string | null;
        };
        createdAt: string;
        updatedAt: string;
    } | null;
};
