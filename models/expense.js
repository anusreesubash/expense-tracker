const ExpenseModel = function() {
  this.getAll = function(callback) {
    $.get('http://localhost:5000/api/expense', function(data) {
      callback(data.data);
    });
  }
};