var jwt = require('jsonwebtoken');

module.exports = () => {
  return jwt.sign({ foo: 'bar' }, 'shhhhh');
}
