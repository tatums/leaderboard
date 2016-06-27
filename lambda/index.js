const ApiBuilder = require('claudia-api-builder')
const api = new ApiBuilder();

const lib = require('./lib')

api.post('/token', (req) => {
  return lib.auth(req.post.user, req.post.password)
  .then((resp) => {
    return resp
  }).catch((err) =>{
    return err
  })
})

api.get('/', () => {
  return '<html> ' +
  '<body>' +
    '<h1>Hello World</h1>' +
  '</body>' +
  '</html>'
}, { success: { contentType: 'text/html'}})

module.exports = api;
