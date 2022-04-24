import { connectToDb, createTables } from './src/db/db'
import * as models from './src/db/models'
import Providers from './src/providers/Providers'

// Connect to SQLite Database
connectToDb()

// Create tables if they dont exists
createTables(Object.values(models).map(model => new model()))

// Since the entire app uses Context for state management, this the entire app bundled in context
export default Providers

