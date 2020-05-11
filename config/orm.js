let connection = require("../config/connection");

let orm = {
    selectAll = function (burgerName, boolean, cb) {
        let queryString = "SELECT * FROM burgers";
        connection.query(queryString, [burgerName, boolean, cb], function (err, res) {
            if (err) throw err;
            cb(res);
        })
    },
    insertOne = function () { },
    updateOne = function () { }
}

module.exports = orm;