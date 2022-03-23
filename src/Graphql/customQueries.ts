import { gql } from '@apollo/client'

export const listCustomSmallGames = /* GraphQL */ `
	query ListGames($filter: ModelGameFilterInput, $limit: Int, $nextToken: String) {
		listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
			items {
				id
				name
				platforms
				symbol
				media {
					logo
				}
				url
				cartridge {
					type
					address
				}
				title
				createdAt
				updatedAt
			}
			nextToken
		}
	}
`

export const getAccountSmall = /* GraphQL */ `
	query GetAccount($id: ID!) {
		getAccount(id: $id) {
			id
			nickname
			avatar
			email
			type
			bgColor
			social {
				fb
				telegram
				twitter
				twitch
				discord
			}
			ownedGames(limit: 10000) {
				items {
					game {
						cartridge {
							address
							blockchain
							cryptoCurrency
							initialPrice
							marketCap
							sold
							tradingFee
							totalSupply
							type
							unitPrice
							unitPriceInHash
						}
						id
						name
						platforms
						title
						releaseDate
						symbol
					}
				}
			}

			url
			hashBalance
			isVerified
		}
	}
`

export const getAccountWithGames = /* GraphQL */ `
	query GetAccount($id: ID!) {
		getAccount(id: $id) {
			id
			nickname
			avatar
			email
			type
			bgColor
			description
			ownedGames {
				items {
					game {
						cartridge {
							address
							blockchain
							cryptoCurrency
							initialPrice
							marketCap
							sold
							tradingFee
							totalSupply
							type
							unitPrice
							unitPriceInHash
						}
						media {
							logo
						}
						colors {
							bg
							cta
							text
						}
						id
						name
						platforms
						title
						releaseDate
						symbol
					}
				}
			}

			social {
				fb
				telegram
				twitter
				twitch
				discord
			}
			url
			hashBalance
			isVerified
			transactions {
				items {
					id
					type
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

export const SearchData = (id: string) => gql`
	{
		listAccounts(limit: 10, filter: {or:[
			{nickname: {contains: "${id}"}},
			{id:{contains: "${id}"}}
		]}) {
			nextToken
			items {
			
				id
				nickname
				isVerified
				bgColor
				avatar
			}
		}
		
	  listGames(limit: 10, filter: {or:[
			{name: {contains: "${id}"}},
			{id:{contains: "${id}"}}
		]}) {
			items {
			  id
			  name
			  platforms
			  cartridge {
				address
				type
			  }
			  media {
			  	logo
			  }
			}
		}


	listGameTransactions(limit: 10, filter: {or:[
			{gameId: {contains: "${id}"}},
			{id:{contains: "${id}"}}
		]}) {
			items {
				id
				type
				gameId
				fromAccountId
				toAccountId
				game {
					media {
						logo
					}
					name
				}
				fromAccount {
					id
					nickname
				}
			}
		}
		
	}
`

export const getOneGameQuery = /* GraphQL */ `
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
			transactions(limit: 20) {
				items {
					id
					type
					gameId
					fromAccountId
					toAccountId
					additionalInfo
					createdAt
					updatedAt
					fromAccount {
						avatar
						id
						nickname
					}
					toAccount {
						avatar
						id
						nickname
					}
				}
				nextToken
			}
			createdAt
			updatedAt
		}
	}
`
