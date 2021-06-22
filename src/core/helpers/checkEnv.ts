import fs from 'fs'
import path from 'path'

const checkEnv = () => {
    const envPath = path.join(process.cwd(),'.env')
    if (!fs.existsSync(envPath)) throw new Error('There is no .env file')
    const envFile = fs.readFileSync(envPath, { encoding: 'utf8', flag: 'r' })

    const envValues= ['ALGOLIA_APP_ID','ALGOLIA_API_KEY','ALGOLIA_INDEX']
    envValues.forEach(value => {
        if(!envFile.includes(value)) throw new Error('The values in the .env are no valid')
    })
}

export default checkEnv