const ExpenseFormView = function(options) {
  this.options = options;
  this.el = $('#' + options.id);

  let self = this;
  $.get('views/expense-form.html', function(template) {
    self.el.html(template);
    self.afterLoad();
  });

  this.afterLoad = function() {
    const $addBtn = self.el.find('.addBtn');
    const $amount = self.el.find('.amount');
    const $description = self.el.find('.description');

    $addBtn.click(function() {
      let description = $description.val();
      let amount = $amount.val();
      self.functionToBeCalled({
        description: description,
        amount: amount
      });
    });
  };

  this.callThisWhenSomeoneClicksAdd = function(callback) {
    this.functionToBeCalled = callback;
  };
}

// const txt = $('.txt').val();
// const amount = $('.amount').val();
// const txtAlert = $('.txtAlert');
// const amountAlert = $('.amountAlert');
// const type = $('.expense-type').val();
// let isValid = true;
        
// let expense = {
//   description: txt,
//   amount: amount
// }

// onAdd = function(){
//     if (!txt || txt === ''){
//       txtAlert.show();
//       isValid = false;
//     }
//     else{
//       txtAlert.hide();
//     }

//     if (!amount || amount === ''){
//       amountAlert.show();
//       isValid = false;
//     }
//     else{
//       amountAlert.hide();
//     }
//     if (isValid){
//       if(type === 'essential') {
//         essentialExpenseListView.add({
//           description: txt,
//           amount: amount
//         });
//       }

//       if(type === 'luxury') {
//         luxuryExpenseListView.add({
//           description: txt,
//           amount: amount
//         });
//       }
//     }
//   }