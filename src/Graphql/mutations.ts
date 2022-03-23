/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addToIpfs = /* GraphQL */ `
	mutation AddToIpfs($input: String!) {
		addToIpfs(input: $input) {
			url
		}
	}
`
export const createGiftCards = /* GraphQL */ `
	mutation CreateGiftCards($input: CreateGiftCardsInput!, $condition: ModelGiftCardsConditionInput) {
		createGiftCards(input: $input, condition: $condition) {
			id
			activatedTimestamp
			address
			createdAt
			updatedAt
		}
	}
`
export const updateGiftCards = /* GraphQL */ `
	mutation UpdateGiftCards($input: UpdateGiftCardsInput!, $condition: ModelGiftCardsConditionInput) {
		updateGiftCards(input: $input, condition: $condition) {
			id
			activatedTimestamp
			address
			createdAt
			updatedAt
		}
	}
`
export const deleteGiftCards = /* GraphQL */ `
	mutation DeleteGiftCards($input: DeleteGiftCardsInput!, $condition: ModelGiftCardsConditionInput) {
		deleteGiftCards(input: $input, condition: $condition) {
			id
			activatedTimestamp
			address
			createdAt
			updatedAt
		}
	}
`
export const createGameDraft = /* GraphQL */ `
	mutation CreateGameDraft($input: CreateGameDraftInput!, $condition: ModelGameDraftConditionInput) {
		createGameDraft(input: $input, condition: $condition) {
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
export const updateGameDraft = /* GraphQL */ `
	mutation UpdateGameDraft($input: UpdateGameDraftInput!, $condition: ModelGameDraftConditionInput) {
		updateGameDraft(input: $input, condition: $condition) {
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
export const deleteGameDraft = /* GraphQL */ `
	mutation DeleteGameDraft($input: DeleteGameDraftInput!, $condition: ModelGameDraftConditionInput) {
		deleteGameDraft(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
	mutation CreateGame($input: CreateGameInput!, $condition: ModelGameConditionInput) {
		createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
	mutation UpdateGame($input: UpdateGameInput!, $condition: ModelGameConditionInput) {
		updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
	mutation DeleteGame($input: DeleteGameInput!, $condition: ModelGameConditionInput) {
		deleteGame(input: $input, condition: $condition) {
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
export const createTeamAccount = /* GraphQL */ `
	mutation CreateTeamAccount($input: CreateTeamAccountInput!, $condition: ModelTeamAccountConditionInput) {
		createTeamAccount(input: $input, condition: $condition) {
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
export const updateTeamAccount = /* GraphQL */ `
	mutation UpdateTeamAccount($input: UpdateTeamAccountInput!, $condition: ModelTeamAccountConditionInput) {
		updateTeamAccount(input: $input, condition: $condition) {
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
export const deleteTeamAccount = /* GraphQL */ `
	mutation DeleteTeamAccount($input: DeleteTeamAccountInput!, $condition: ModelTeamAccountConditionInput) {
		deleteTeamAccount(input: $input, condition: $condition) {
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
export const createAccount = /* GraphQL */ `
	mutation CreateAccount($input: CreateAccountInput!, $condition: ModelAccountConditionInput) {
		createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
	mutation UpdateAccount($input: UpdateAccountInput!, $condition: ModelAccountConditionInput) {
		updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
	mutation DeleteAccount($input: DeleteAccountInput!, $condition: ModelAccountConditionInput) {
		deleteAccount(input: $input, condition: $condition) {
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
export const createAccountWatchlist = /* GraphQL */ `
	mutation CreateAccountWatchlist($input: CreateAccountWatchlistInput!, $condition: ModelAccountWatchlistConditionInput) {
		createAccountWatchlist(input: $input, condition: $condition) {
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
export const updateAccountWatchlist = /* GraphQL */ `
	mutation UpdateAccountWatchlist($input: UpdateAccountWatchlistInput!, $condition: ModelAccountWatchlistConditionInput) {
		updateAccountWatchlist(input: $input, condition: $condition) {
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
export const deleteAccountWatchlist = /* GraphQL */ `
	mutation DeleteAccountWatchlist($input: DeleteAccountWatchlistInput!, $condition: ModelAccountWatchlistConditionInput) {
		deleteAccountWatchlist(input: $input, condition: $condition) {
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
export const createNewsletterMembers = /* GraphQL */ `
	mutation CreateNewsletterMembers($input: CreateNewsletterMembersInput!, $condition: ModelNewsletterMembersConditionInput) {
		createNewsletterMembers(input: $input, condition: $condition) {
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
export const updateNewsletterMembers = /* GraphQL */ `
	mutation UpdateNewsletterMembers($input: UpdateNewsletterMembersInput!, $condition: ModelNewsletterMembersConditionInput) {
		updateNewsletterMembers(input: $input, condition: $condition) {
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
export const deleteNewsletterMembers = /* GraphQL */ `
	mutation DeleteNewsletterMembers($input: DeleteNewsletterMembersInput!, $condition: ModelNewsletterMembersConditionInput) {
		deleteNewsletterMembers(input: $input, condition: $condition) {
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
export const createGameTransaction = /* GraphQL */ `
	mutation CreateGameTransaction($input: CreateGameTransactionInput!, $condition: ModelGameTransactionConditionInput) {
		createGameTransaction(input: $input, condition: $condition) {
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
export const updateGameTransaction = /* GraphQL */ `
	mutation UpdateGameTransaction($input: UpdateGameTransactionInput!, $condition: ModelGameTransactionConditionInput) {
		updateGameTransaction(input: $input, condition: $condition) {
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
export const deleteGameTransaction = /* GraphQL */ `
	mutation DeleteGameTransaction($input: DeleteGameTransactionInput!, $condition: ModelGameTransactionConditionInput) {
		deleteGameTransaction(input: $input, condition: $condition) {
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
export const createAccountTransaction = /* GraphQL */ `
	mutation CreateAccountTransaction($input: CreateAccountTransactionInput!, $condition: ModelAccountTransactionConditionInput) {
		createAccountTransaction(input: $input, condition: $condition) {
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
export const updateAccountTransaction = /* GraphQL */ `
	mutation UpdateAccountTransaction($input: UpdateAccountTransactionInput!, $condition: ModelAccountTransactionConditionInput) {
		updateAccountTransaction(input: $input, condition: $condition) {
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
export const deleteAccountTransaction = /* GraphQL */ `
	mutation DeleteAccountTransaction($input: DeleteAccountTransactionInput!, $condition: ModelAccountTransactionConditionInput) {
		deleteAccountTransaction(input: $input, condition: $condition) {
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
export const createAccountGame = /* GraphQL */ `
	mutation CreateAccountGame($input: CreateAccountGameInput!, $condition: ModelAccountGameConditionInput) {
		createAccountGame(input: $input, condition: $condition) {
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
export const updateAccountGame = /* GraphQL */ `
	mutation UpdateAccountGame($input: UpdateAccountGameInput!, $condition: ModelAccountGameConditionInput) {
		updateAccountGame(input: $input, condition: $condition) {
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
export const deleteAccountGame = /* GraphQL */ `
	mutation DeleteAccountGame($input: DeleteAccountGameInput!, $condition: ModelAccountGameConditionInput) {
		deleteAccountGame(input: $input, condition: $condition) {
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
