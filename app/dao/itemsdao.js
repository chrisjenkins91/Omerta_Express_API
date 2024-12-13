const pool = require('../config/dbconfig');

class ItemDao {



    constructor() {
        this.pool = pool
    }
    
    findAll(req,res) {
        pool.query('SELECT * FROM items', (err, rows) => {
            if(err) {
                console.log(err)
            } else {
                console.log(rows)
                res.send(rows)
            }
        })
    }

}

module.exports = ItemDao;