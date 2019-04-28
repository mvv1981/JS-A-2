/**
 * Барабаш Максим Сергеевич
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    let promiseList = [];
    for (let i = 0; i < operations.length; i++) {
        let promise = new Promise ((resolve, reject) => {
            operations[i]((err, res) => {
                if(err === null) {
                    resolve(res)
                }
                else
                    reject(err)
            });
        });
        promiseList.push(promise);
    }
    Promise
        .all(promiseList)
        .then((res) => {callback(null, res)}, (err) => {callback(err)});
};
