import SQLite from 'react-native-sqlite-storage';
import {DatabaseInitialization} from './DatabaseInitialization';

export interface Database {
  open(): Promise<SQLite.SQLiteDatabase>;
  close(): Promise<void>;
}

class DatabaseImp implements Database {
  private databaseName = 'AppDatabase.db';
  private database: SQLite.SQLiteDatabase | undefined;

  // Open the connection to the database
  public open(): Promise<SQLite.SQLiteDatabase> {
    SQLite.DEBUG(true);
    SQLite.enablePromise(true);
    let databaseInstance: SQLite.SQLiteDatabase;

    return SQLite.openDatabase({
      name: this.databaseName,
      location: 'default',
    })
      .then(db => {
        databaseInstance = db;
        console.log('[db] Database open!');

        // Perform any database initialization or updates, if needed
        const databaseInitialization = new DatabaseInitialization();
        return databaseInitialization.updateDatabaseTables(databaseInstance);
      })
      .then(() => {
        this.database = databaseInstance;
        return databaseInstance;
      });
  }

  public close(): Promise<void> {
    if (this.database === undefined) {
      return Promise.reject('[db] Database was not open; unable to close.');
    }
    return this.database.close().then(status => {
      console.log('[db] Database closed.');
      this.database = undefined;
    });
  }

  // Insert a new list into the database
  public createList(newListTitle: string): Promise<void> {
    return this.getDatabase()
      .then(db =>
        db.executeSql('INSERT INTO List (title) VALUES (?);', [newListTitle]),
      )
      .then(([results]) => {
        const {insertId} = results;
        console.log(
          `[db] Added list with title: "${newListTitle}"! InsertId: ${insertId}`,
        );
      });
  }

  private getDatabase(): Promise<SQLite.SQLiteDatabase> {
    if (this.database !== undefined) {
      return Promise.resolve(this.database);
    }
    // otherwise: open the database first
    return this.open();
  }
}

export const database: Database = new DatabaseImp();
