/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGiftCards = /* GraphQL */ `
	query GetGiftCards($id: ID!) {
		getGiftCards(id: $id) {
			id
			activatedTimestamp
			address
			createdAt
			updatedAt
		}
	}
`
export const listGiftCards = /* GraphQL */ `
	query ListGiftCards($filter: ModelGiftCardsFilterInput, $limit: Int, $nextToken: String) {
		listGiftCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				activatedTimestamp
				address
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`
export const getGameDraft = /* GraphQL */ `
	query GetGameDraft($id: ID!) {
		getGameDraft(id: $id) {
			id
			title
			name
			symbol
			media {
				coverPhoto
				logo
				banner1
				banner2
			}
			colors {
				bg
				cta
				text
			}
			url
			releaseDate
			platforms
			cartridge {
				type
				blockchain
				address
				cryptoCurrency
				tradingFee
				initialPrice
				unitPrice
				unitPriceInHash
				sold
				totalSupply
				marketCap
			}
			metadata {
				description
				social {
					fb
					telegram
					twitter
					twitch
					discord
				}
				video
				screens
				gamePaper
			}
			metadataUrl
			developerId
			developer {
				id
				nickname
				avatar
				email
				type
				bgColor
				description
				social {
					fb
					telegram
					twitter
					twitch
					discord
				}
				url
				role
				hashBalance
				isVerified
				teamAccount {
					id
					role
					createdAt
					updatedAt
					teamAccountAccountId
				}
				accountWatchlist {
					nextToken
				}
				ownedGames {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
				accountTeamAccountId
			}
			createdAt
			updatedAt
		}
	}
`
export const listGameDrafts = /* GraphQL */ `
	query ListGameDrafts($filter: ModelGameDraftFilterInput, $limit: Int, $nextToken: String) {
		listGameDrafts(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				title
				name
				symbol
				media {
					coverPhoto
					logo
					banner1
					banner2
				}
				colors {
					bg
					cta
					text
				}
				url
				releaseDate
				platforms
				cartridge {
					type
					blockchain
					address
					cryptoCurrency
					tradingFee
					initialPrice
					unitPrice
					unitPriceInHash
					sold
					totalSupply
					marketCap
				}
				metadata {
					description
					video
					screens
					gamePaper
				}
				metadataUrl
				developerId
				developer {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`
export const getGame = /* GraphQL */ `
	query GetGame($id: ID!) {
		getGame(id: $id) {
			id
			title
			name
			symbol
			media {
				coverPhoto
				logo
				banner1
				banner2
			}
			colors {
				bg
				cta
				text
			}
			url
			releaseDate
			platforms
			cartridge {
				type
				blockchain
				address
				cryptoCurrency
				tradingFee
				initialPrice
				unitPrice
				unitPriceInHash
				sold
				totalSupply
				marketCap
			}
			metadata {
				description
				social {
					fb
					telegram
					twitter
					twitch
					discord
				}
				video
				screens
				gamePaper
			}
			metadataUrl
			developerId
			developer {
				id
				nickname
				avatar
				email
				type
				bgColor
				description
				social {
					fb
					telegram
					twitter
					twitch
					discord
				}
				url
				role
				hashBalance
				isVerified
				teamAccount {
					id
					role
					createdAt
					updatedAt
					teamAccountAccountId
				}
				accountWatchlist {
					nextToken
				}
				ownedGames {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
				accountTeamAccountId
			}
			gamers {
				items {
					id
					gameID
					accountID
					createdAt
					updatedAt
				}
				nextToken
			}
			transactions {
				items {
					id
					type
					gameId
					fromAccountId
					toAccountId
					additionalInfo
					createdAt
					updatedAt
				}
				nextToken
			}
			createdAt
			updatedAt
		}
	}
`
export const listGames = /* GraphQL */ `
	query ListGames($filter: ModelGameFilterInput, $limit: Int, $nextToken: String) {
		listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				title
				name
				symbol
				media {
					coverPhoto
					logo
					banner1
					banner2
				}
				colors {
					bg
					cta
					text
				}
				url
				releaseDate
				platforms
				cartridge {
					type
					blockchain
					address
					cryptoCurrency
					tradingFee
					initialPrice
					unitPrice
					unitPriceInHash
					sold
					totalSupply
					marketCap
				}
				metadata {
					description
					video
					screens
					gamePaper
				}
				metadataUrl
				developerId
				developer {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				gamers {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`
export const searchGames = /* GraphQL */ `
	query SearchGames(
		$filter: SearchableGameFilterInput
		$sort: [SearchableGameSortInput]
		$limit: Int
		$nextToken: String
		$from: Int
		$aggregates: [SearchableGameAggregationInput]
	) {
		searchGames(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken, from: $from, aggregates: $aggregates) {
			items {
				id
				title
				name
				symbol
				media {
					coverPhoto
					logo
					banner1
					banner2
				}
				colors {
					bg
					cta
					text
				}
				url
				releaseDate
				platforms
				cartridge {
					type
					blockchain
					address
					cryptoCurrency
					tradingFee
					initialPrice
					unitPrice
					unitPriceInHash
					sold
					totalSupply
					marketCap
				}
				metadata {
					description
					video
					screens
					gamePaper
				}
				metadataUrl
				developerId
				developer {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				gamers {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
			}
			nextToken
			total
			aggregateItems {
				name
				result {
					... on SearchableAggregateScalarResult {
						value
					}
					... on SearchableAggregateBucketResult {
						buckets {
							key
							doc_count
						}
					}
				}
			}
		}
	}
`
export const getTeamAccount = /* GraphQL */ `
	query GetTeamAccount($id: ID!) {
		getTeamAccount(id: $id) {
			id
			role
			account {
				id
				nickname
				avatar
				email
				type
				bgColor
				description
				social {
					fb
					telegram
					twitter
					twitch
					discord
				}
				url
				role
				hashBalance
				isVerified
				teamAccount {
					id
					role
					createdAt
					updatedAt
					teamAccountAccountId
				}
				accountWatchlist {
					nextToken
				}
				ownedGames {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
				accountTeamAccountId
			}
			createdAt
			updatedAt
			teamAccountAccountId
		}
	}
`
export const listTeamAccounts = /* GraphQL */ `
	query ListTeamAccounts($filter: ModelTeamAccountFilterInput, $limit: Int, $nextToken: String) {
		listTeamAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				role
				account {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				createdAt
				updatedAt
				teamAccountAccountId
			}
			nextToken
		}
	}
`
export const getAccount = /* GraphQL */ `
	query GetAccount($id: ID!) {
		getAccount(id: $id) {
			id
			nickname
			avatar
			email
			type
			bgColor
			description
			social {
				fb
				telegram
				twitter
				twitch
				discord
			}
			url
			role
			hashBalance
			isVerified
			teamAccount {
				id
				role
				account {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				createdAt
				updatedAt
				teamAccountAccountId
			}
			accountWatchlist {
				items {
					id
					accountId
					followedId
					createdAt
					updatedAt
				}
				nextToken
			}
			ownedGames {
				items {
					id
					gameID
					accountID
					createdAt
					updatedAt
				}
				nextToken
			}
			transactions {
				items {
					id
					type
					accountId
					fromAccountId
					toAccountId
					additionalInfo
					createdAt
					updatedAt
				}
				nextToken
			}
			createdAt
			updatedAt
			accountTeamAccountId
		}
	}
`
export const listAccounts = /* GraphQL */ `
	query ListAccounts($filter: ModelAccountFilterInput, $limit: Int, $nextToken: String) {
		listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				nickname
				avatar
				email
				type
				bgColor
				description
				social {
					fb
					telegram
					twitter
					twitch
					discord
				}
				url
				role
				hashBalance
				isVerified
				teamAccount {
					id
					role
					createdAt
					updatedAt
					teamAccountAccountId
				}
				accountWatchlist {
					nextToken
				}
				ownedGames {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
				accountTeamAccountId
			}
			nextToken
		}
	}
`
export const searchAccounts = /* GraphQL */ `
	query SearchAccounts(
		$filter: SearchableAccountFilterInput
		$sort: [SearchableAccountSortInput]
		$limit: Int
		$nextToken: String
		$from: Int
		$aggregates: [SearchableAccountAggregationInput]
	) {
		searchAccounts(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken, from: $from, aggregates: $aggregates) {
			items {
				id
				nickname
				avatar
				email
				type
				bgColor
				description
				social {
					fb
					telegram
					twitter
					twitch
					discord
				}
				url
				role
				hashBalance
				isVerified
				teamAccount {
					id
					role
					createdAt
					updatedAt
					teamAccountAccountId
				}
				accountWatchlist {
					nextToken
				}
				ownedGames {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
				accountTeamAccountId
			}
			nextToken
			total
			aggregateItems {
				name
				result {
					... on SearchableAggregateScalarResult {
						value
					}
					... on SearchableAggregateBucketResult {
						buckets {
							key
							doc_count
						}
					}
				}
			}
		}
	}
`
export const getAccountWatchlist = /* GraphQL */ `
	query GetAccountWatchlist($id: ID!) {
		getAccountWatchlist(id: $id) {
			id
			accountId
			account {
				id
				nickname
				avatar
				email
				type
				bgColor
				description
				social {
					fb
					telegram
					twitter
					twitch
					discord
				}
				url
				role
				hashBalance
				isVerified
				teamAccount {
					id
					role
					createdAt
					updatedAt
					teamAccountAccountId
				}
				accountWatchlist {
					nextToken
				}
				ownedGames {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
				accountTeamAccountId
			}
			followedId
			followed {
				id
				nickname
				avatar
				email
				type
				bgColor
				description
				social {
					fb
					telegram
					twitter
					twitch
					discord
				}
				url
				role
				hashBalance
				isVerified
				teamAccount {
					id
					role
					createdAt
					updatedAt
					teamAccountAccountId
				}
				accountWatchlist {
					nextToken
				}
				ownedGames {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
				accountTeamAccountId
			}
			createdAt
			updatedAt
		}
	}
`
export const listAccountWatchlists = /* GraphQL */ `
	query ListAccountWatchlists($filter: ModelAccountWatchlistFilterInput, $limit: Int, $nextToken: String) {
		listAccountWatchlists(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				accountId
				account {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				followedId
				followed {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`
export const getNewsletterMembers = /* GraphQL */ `
	query GetNewsletterMembers($id: ID!) {
		getNewsletterMembers(id: $id) {
			id
			account {
				id
				nickname
				avatar
				email
				type
				bgColor
				description
				social {
					fb
					telegram
					twitter
					twitch
					discord
				}
				url
				role
				hashBalance
				isVerified
				teamAccount {
					id
					role
					createdAt
					updatedAt
					teamAccountAccountId
				}
				accountWatchlist {
					nextToken
				}
				ownedGames {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
				accountTeamAccountId
			}
			email
			createdAt
			updatedAt
			newsletterMembersAccountId
		}
	}
`
export const listNewsletterMembers = /* GraphQL */ `
	query ListNewsletterMembers($filter: ModelNewsletterMembersFilterInput, $limit: Int, $nextToken: String) {
		listNewsletterMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				account {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				email
				createdAt
				updatedAt
				newsletterMembersAccountId
			}
			nextToken
		}
	}
`
export const getGameTransaction = /* GraphQL */ `
	query GetGameTransaction($id: ID!) {
		getGameTransaction(id: $id) {
			id
			type
			gameId
			game {
				id
				title
				name
				symbol
				media {
					coverPhoto
					logo
					banner1
					banner2
				}
				colors {
					bg
					cta
					text
				}
				url
				releaseDate
				platforms
				cartridge {
					type
					blockchain
					address
					cryptoCurrency
					tradingFee
					initialPrice
					unitPrice
					unitPriceInHash
					sold
					totalSupply
					marketCap
				}
				metadata {
					description
					video
					screens
					gamePaper
				}
				metadataUrl
				developerId
				developer {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				gamers {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
			}
			fromAccountId
			fromAccount {
				id
				nickname
				avatar
				email
				type
				bgColor
				description
				social {
					fb
					telegram
					twitter
					twitch
					discord
				}
				url
				role
				hashBalance
				isVerified
				teamAccount {
					id
					role
					createdAt
					updatedAt
					teamAccountAccountId
				}
				accountWatchlist {
					nextToken
				}
				ownedGames {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
				accountTeamAccountId
			}
			toAccountId
			toAccount {
				id
				nickname
				avatar
				email
				type
				bgColor
				description
				social {
					fb
					telegram
					twitter
					twitch
					discord
				}
				url
				role
				hashBalance
				isVerified
				teamAccount {
					id
					role
					createdAt
					updatedAt
					teamAccountAccountId
				}
				accountWatchlist {
					nextToken
				}
				ownedGames {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
				accountTeamAccountId
			}
			additionalInfo
			createdAt
			updatedAt
		}
	}
`
export const listGameTransactions = /* GraphQL */ `
	query ListGameTransactions($filter: ModelGameTransactionFilterInput, $limit: Int, $nextToken: String) {
		listGameTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				type
				gameId
				game {
					id
					title
					name
					symbol
					url
					releaseDate
					platforms
					metadataUrl
					developerId
					createdAt
					updatedAt
				}
				fromAccountId
				fromAccount {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				toAccountId
				toAccount {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				additionalInfo
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`
export const searchGameTransactions = /* GraphQL */ `
	query SearchGameTransactions(
		$filter: SearchableGameTransactionFilterInput
		$sort: [SearchableGameTransactionSortInput]
		$limit: Int
		$nextToken: String
		$from: Int
		$aggregates: [SearchableGameTransactionAggregationInput]
	) {
		searchGameTransactions(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken, from: $from, aggregates: $aggregates) {
			items {
				id
				type
				gameId
				game {
					id
					title
					name
					symbol
					url
					releaseDate
					platforms
					metadataUrl
					developerId
					createdAt
					updatedAt
				}
				fromAccountId
				fromAccount {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				toAccountId
				toAccount {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				additionalInfo
				createdAt
				updatedAt
			}
			nextToken
			total
			aggregateItems {
				name
				result {
					... on SearchableAggregateScalarResult {
						value
					}
					... on SearchableAggregateBucketResult {
						buckets {
							key
							doc_count
						}
					}
				}
			}
		}
	}
`
export const getAccountTransaction = /* GraphQL */ `
	query GetAccountTransaction($id: ID!) {
		getAccountTransaction(id: $id) {
			id
			type
			accountId
			account {
				id
				nickname
				avatar
				email
				type
				bgColor
				description
				social {
					fb
					telegram
					twitter
					twitch
					discord
				}
				url
				role
				hashBalance
				isVerified
				teamAccount {
					id
					role
					createdAt
					updatedAt
					teamAccountAccountId
				}
				accountWatchlist {
					nextToken
				}
				ownedGames {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
				accountTeamAccountId
			}
			fromAccountId
			fromAccount {
				id
				nickname
				avatar
				email
				type
				bgColor
				description
				social {
					fb
					telegram
					twitter
					twitch
					discord
				}
				url
				role
				hashBalance
				isVerified
				teamAccount {
					id
					role
					createdAt
					updatedAt
					teamAccountAccountId
				}
				accountWatchlist {
					nextToken
				}
				ownedGames {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
				accountTeamAccountId
			}
			toAccountId
			toAccount {
				id
				nickname
				avatar
				email
				type
				bgColor
				description
				social {
					fb
					telegram
					twitter
					twitch
					discord
				}
				url
				role
				hashBalance
				isVerified
				teamAccount {
					id
					role
					createdAt
					updatedAt
					teamAccountAccountId
				}
				accountWatchlist {
					nextToken
				}
				ownedGames {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
				accountTeamAccountId
			}
			additionalInfo
			createdAt
			updatedAt
		}
	}
`
export const listAccountTransactions = /* GraphQL */ `
	query ListAccountTransactions($filter: ModelAccountTransactionFilterInput, $limit: Int, $nextToken: String) {
		listAccountTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				type
				accountId
				account {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				fromAccountId
				fromAccount {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				toAccountId
				toAccount {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				additionalInfo
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`
export const searchAccountTransactions = /* GraphQL */ `
	query SearchAccountTransactions(
		$filter: SearchableAccountTransactionFilterInput
		$sort: [SearchableAccountTransactionSortInput]
		$limit: Int
		$nextToken: String
		$from: Int
		$aggregates: [SearchableAccountTransactionAggregationInput]
	) {
		searchAccountTransactions(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken, from: $from, aggregates: $aggregates) {
			items {
				id
				type
				accountId
				account {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				fromAccountId
				fromAccount {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				toAccountId
				toAccount {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				additionalInfo
				createdAt
				updatedAt
			}
			nextToken
			total
			aggregateItems {
				name
				result {
					... on SearchableAggregateScalarResult {
						value
					}
					... on SearchableAggregateBucketResult {
						buckets {
							key
							doc_count
						}
					}
				}
			}
		}
	}
`
export const getAccountGame = /* GraphQL */ `
	query GetAccountGame($id: ID!) {
		getAccountGame(id: $id) {
			id
			gameID
			accountID
			game {
				id
				title
				name
				symbol
				media {
					coverPhoto
					logo
					banner1
					banner2
				}
				colors {
					bg
					cta
					text
				}
				url
				releaseDate
				platforms
				cartridge {
					type
					blockchain
					address
					cryptoCurrency
					tradingFee
					initialPrice
					unitPrice
					unitPriceInHash
					sold
					totalSupply
					marketCap
				}
				metadata {
					description
					video
					screens
					gamePaper
				}
				metadataUrl
				developerId
				developer {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				gamers {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
			}
			account {
				id
				nickname
				avatar
				email
				type
				bgColor
				description
				social {
					fb
					telegram
					twitter
					twitch
					discord
				}
				url
				role
				hashBalance
				isVerified
				teamAccount {
					id
					role
					createdAt
					updatedAt
					teamAccountAccountId
				}
				accountWatchlist {
					nextToken
				}
				ownedGames {
					nextToken
				}
				transactions {
					nextToken
				}
				createdAt
				updatedAt
				accountTeamAccountId
			}
			createdAt
			updatedAt
		}
	}
`
export const listAccountGames = /* GraphQL */ `
	query ListAccountGames($filter: ModelAccountGameFilterInput, $limit: Int, $nextToken: String) {
		listAccountGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				gameID
				accountID
				game {
					id
					title
					name
					symbol
					url
					releaseDate
					platforms
					metadataUrl
					developerId
					createdAt
					updatedAt
				}
				account {
					id
					nickname
					avatar
					email
					type
					bgColor
					description
					url
					role
					hashBalance
					isVerified
					createdAt
					updatedAt
					accountTeamAccountId
				}
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`
