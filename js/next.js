function send(e) {
  var temp = {
    name: document.querySelector('#firstname').value,
    Lname: document.querySelector('#lastname').value,
    Pnumber: document.querySelector('#Pnumbrt').value,
    idnumber: document.querySelector('#email').value,
    email: document.querySelector('#idnumer').value,
    date: document.querySelector('#date').value
  };

  emailjs.send('gmail', 'template_3nntn1g', temp)
  .then(function(res) {
    console.log('success', res.status);
  })
}