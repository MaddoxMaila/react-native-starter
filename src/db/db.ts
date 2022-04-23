import {openDatabase, SQLiteDatabase, ResultSet, enablePromise} from 'react-native-sqlite-storage'

enablePromise(true)

export class Database{
    sqlite!: SQLiteDatabase;
    selectStatement: any
    insertStatement: any
    
    static db: Database
    
    static  getInstance(): Database{
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
    
    async connect(){
        this.sqlite = await openDatabase({name: 'brackr.db', location: 'default'});
    }

    async getdb(){
        return this.sqlite
    }

    async createTable(tableName: String, columns: Array<String>){
        const self = Database.getInstance()
        const query = `CREATE TABLE IF NOT EXISTS ${tableName}(${columns.toString()});`
        return await this.sqlite?.executeSql(query)
    }

    select(tableName: String){
        const self = Database.getInstance()
        this.selectStatement = `SELECT * FROM ${tableName}`
        return this
    }

    where(condition: String){
        const self = Database.getInstance() 
        this.selectStatement = `${this.selectStatement} WHERE ${condition}`
        return this
    }

    limit(limit: number){
        const self = Database.getInstance() 
        this.selectStatement = `${this.selectStatement} LIMIT ${limit}`
        return this
    }

    ascending(){
        const self = Database.getInstance() 
        this.selectStatement = `${this.selectStatement} ASC`
        return this
    }

    descending(){
        const self = Database.getInstance() 
        this.selectStatement = `${this.selectStatement} DESC`
        return this
    }

    insert(tableName: String){
        const self = Database.getInstance() 
        self.insertStatement = `INSERT INTO ${tableName}`
        return self
    }

    async get(): Promise<ResultSet[]>{
        const self = Database.getInstance()
        self.selectStatement = `${self.selectStatement};`
        
        return self.sqlite.executeSql(self.selectStatement)
    }


    async add(columns: Object): Promise<ResultSet[]>{
        const self = Database.getInstance()
        this.insertStatement = `${this.insertStatement}(${Object.keys(columns).toString()}) VALUES(${Object.values(columns).toString()})`

        return this.sqlite.executeSql(this.insertStatement)
    }

}