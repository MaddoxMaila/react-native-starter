import {openDatabase, SQLiteDatabase, ResultSet, enablePromise} from 'react-native-sqlite-storage'

enablePromise(true)

export class LiteORM{
    sqlite!: SQLiteDatabase;
    selectStatement: any
    insertStatement: any
    
    static db: LiteORM
    
    static  getInstance(): LiteORM{
        if(!this.db){
            this.db = new LiteORM()
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
        const self = LiteORM.getInstance()
        const query = `CREATE TABLE IF NOT EXISTS ${tableName}(${columns.toString()});`
        return await this.sqlite?.executeSql(query)
    }

    select(tableName: String){
        const self = LiteORM.getInstance()
        this.selectStatement = `SELECT * FROM ${tableName}`
        return this
    }

    where(condition: String){
        const self = LiteORM.getInstance() 
        this.selectStatement = `${this.selectStatement} WHERE ${condition}`
        return this
    }

    limit(limit: number){
        const self = LiteORM.getInstance() 
        this.selectStatement = `${this.selectStatement} LIMIT ${limit}`
        return this
    }

    ascending(){
        const self = LiteORM.getInstance() 
        this.selectStatement = `${this.selectStatement} ASC`
        return this
    }

    descending(){
        const self = LiteORM.getInstance() 
        this.selectStatement = `${this.selectStatement} DESC`
        return this
    }

    insert(tableName: String){
        const self = LiteORM.getInstance() 
        self.insertStatement = `INSERT INTO ${tableName}`
        return self
    }

    async get(): Promise<ResultSet[]>{
        const self = LiteORM.getInstance()
        self.selectStatement = `${self.selectStatement};`

        return self.sqlite.executeSql(self.selectStatement)
    }


    async add(columns: Object): Promise<ResultSet[]>{
        const self = LiteORM.getInstance()
        this.insertStatement = `${this.insertStatement}(${Object.keys(columns).toString()}) VALUES(${Object.values(columns).toString()})`

        return this.sqlite.executeSql(this.insertStatement)
    }

}