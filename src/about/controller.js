function addItem (name, qty, amount) {
    const $item = $(
      "<tr>" +
        `<td class="mdl-data-table__cell--non-numeric">${name}</td>` +
        `<td>${qty}</td>` +
        `<td>$${amount}</td>` +
        "</tr>")
    $('tbody').prepend($item)
}

function init(){
  addItem('Acrylic (Transparent)', 25, 2.90)
  addItem('Plywood (Birch)', 50, 1.25)
  addItem('Laminate (Gold on Blue)', 10, 2.35)
}

function addItemWithAnimation() {
  //$('table tbody tr').addClass('animated fadeOutDown');
  addItem('cool!', 10, 2.99)
  //$('table tbody tr:first').addClass('animated flipInX');
  $('table tbody tr:first').addClass('new-item')
}
export default class AboutController {
  constructor() {
    init()
    setTimeout(function(){
      addItemWithAnimation()
    }, 1500);
  }
}

AboutController.$inject = ['$scope']
