import algoliasearch from 'algoliasearch'
import './env'

//Initialize ALgolia
const {ALGOLIA_APP_ID="",ALGOLIA_API_KEY="",ALGOLIA_INDEX=""} = process.env
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY)
const index = client.initIndex(ALGOLIA_INDEX)

export { client,index}