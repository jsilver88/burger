let orm = require("../config/orm");

let burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (colOne, colTwo, cb) {
        orm.insertOne("burgers", colOne, colTwo, function (res) {
            cb(res);
        });
    },
    updateOne: function (colOne, condition, cb) {
        orm.updateOne("burgers", colOne, condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;