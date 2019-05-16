var name = 'matt';
var email = 'test0@test.com';
var azDomain = '.onmicrosoft.com';


function domGet () {
  var removeAtSign = email.split('@').join('');
  var removeCom = removeAtSign.split('.com');
  var newEmailDom = removeCom[0];
  var userPrinName = name + '@' + newEmailDom + azDomain;

  return userPrinName;

}

console.log(domGet(name, email, azDomain));