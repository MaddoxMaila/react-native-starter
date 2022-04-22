import {openDatabase, SQLiteDatabase, ResultSet, enablePromise} from 'react-native-sqlite-storage'

enablePromise(true)

export class Database{
    sqlite!: SQLiteDatabase;
    selectStatement: any
    insertStatement: any
    
    static db: Database
    
    static getInstance(): Database{
        if(!this.db){
            this.db = new Database()
            this.db.connect()
        }
        return this.db
    }

    constructor(){
        this.selectStatement = ""
        this.insertStatement = ""
    }
    
    async connect(){Database.getInstance().sqlite = await openDatabase({name: 'brackr.db', location: 'default'});}

    async getdb(){return await Database.getInstance().sqlite}

    async createTable(tableName: String, columns: Array<String>): Promise<ResultSet[]>{
        const self = Database.getInstance()
        const query = `CREATE TABLE IF NOT EXISTS ${tableName}(${columns.toString()});`
        return await self.sqlite?.executeSql(query)
    }

    async select(tableName: String): Promise<Database> {
        const self = Database.getInstance()
        this.selectStatement = `SELECT * FROM ${tableName}`
        return self
    }

    async where(condition: String): Promise<Database>{
        const self = Database.getInstance() 
        self.selectStatement = `${self.selectStatement} WHERE ${condition}`
        return self
    }

    async limit(limit: number): Promise<Database>{
        const self = Database.getInstance() 
        self.selectStatement = `${self.selectStatement} LIMIT ${limit}`
        return self
    }

    async ascending(): Promise<Database>{
        const self = Database.getInstance() 
        self.selectStatement = `${self.selectStatement} ASC`
        return self
    }

    async descending(): Promise<Database>{
        const self = Database.getInstance() 
        self.selectStatement = `${self.selectStatement} DESC`
        return self
    }

    async get(): Promise<ResultSet[]>{
        const self = Database.getInstance()
        self.selectStatement = `${self.selectStatement};`
        return await self.sqlite.executeSql(self.selectStatement)
    }

    async insert(tableName: String): Promise<Database>{
        const self = Database.getInstance() 
        self.insertStatement = `INSERT INTO ${tableName}`
        return self
    }

    async add(columns: Object): Promise<ResultSet[]>{
        const self = Database.getInstance()
        self.insertStatement = `${this.insertStatement}(${Object.keys(columns).toString()}) VALUES(${Object.values(columns).toString()})`
        return await self.sqlite.executeSql(self.insertStatement)
    }

}
