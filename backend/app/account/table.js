const pool = require('../../databasePool');

class AccountTable {
  static storeAccount({ username, password }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'INSERT INTO account(username, password) VALUES($1, $2)',
        [username, password],
        (error, response) => {
          if (error) return reject(error);

          resolve();
        }
      );
    });
  }
}

module.exports = AccountTable;
