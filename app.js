document
  .querySelector('button')
  .addEventListener('submit', payWithPaystack, false);
function payWithPaystack(e) {
  let handler = PaystackPop.setup({
    key: 'pk_test_af91df84565095d59cdfb8868d0e7741e5bb19ff', // Replace with your public key
    email: 'bobslegend795@gmail.com',
    amount: 1000 * 100,
    firstname: 'Emmanuel',
    lastname: 'Alabi',
    ref: '' + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function () {
      alert('Window closed.');
    },
    callback: function (response) {
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    },
  });

  handler.openIframe();
}
