var ldap = require('ldapjs');
var client = ldap.createClient({
  url: `ldap://${process.env.LDAP_HOST}:389`,
  bindDN: process.env.LDAP_USERNAME,
  bindCredentials: process.env.LDAP_PASSWORD
});

function search (user) {
  console.log('search for user: ', user);
  return new Promise( (resolve, reject) => {
    var opts = {
      filter: `(mail=${user})`,
      scope: 'sub',
      attributes: ['dn', 'sn', 'cn']
    };
    client.search('dc=hq,dc=opinionlab,dc=com', opts, (err, res) => {
      if (err ) reject(err)
      res.on('searchEntry', (entry) => {
        resolve(entry.object);
      });
      res.on('error', (err) => {
        console.error('error: ' + err.message);
        reject(err)
      });
    });
  })
}

function auth(dn, password){
  return new Promise( (resolve, reject) => {
    client.bind(dn, password, (err) => {
      if (err) {
        console.log('\n\n', {code: err.code, name: err.name, mess: err.message}, '\n\n');
        client.unbind()
        reject(err)
      }else{
        console.log('\n\n AUTH!! \n\n');
        client.unbind()
        resolve(true)
      }
    })

  })
}

module.exports = (user, password) => {
  return search(user)
  .then((resp) => {
    console.log('user found', resp);
    return auth(resp.dn, password)
  })
  .then((resp) => {
    return resp
  })
}

