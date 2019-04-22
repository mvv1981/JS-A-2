/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
  let results = [];
  let count = operations.length;
  let isError = false;

  for (let i = 0; i < operations.length; i++) {
    operations[i]((err, res) => {
      if (isError) return;

      if (err) {
        isError = true;
        callback(err);
      } else if (count == 0) {
        callback(null, results);
      } else {
        results.push(res);
        count--;
      }
    });
  }
};
