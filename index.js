/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    var count = operations.length;
    var results = [];
    var errors = false;

    for (let index = 0; index < operations.length; index++) {
        operations[index](function(err, res){
            if (errors){
                return;
            }
            count--;
            results[index] = res;
            if (err !== null || count == 0) {
                if (err !== null) {
                    errors = true;
                    callback(err, null);
                }
                else callback(null, results);
            }
        });
    }

};