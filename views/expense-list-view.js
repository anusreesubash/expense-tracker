const ExpenseListView = function(options) {
  this.options = options;
  this.el = $('#' + options.id);

  let self = this;
  $.get('views/expense-list.html', function(template) {
    self.el.html(template);
  });

  this.add = function(expense) {
    let row = `<tr><td></td><td>${expense.description}</td><td>${expense.amount}</td></tr>`;
    this.el.find('table tbody').append(row);
  }
};