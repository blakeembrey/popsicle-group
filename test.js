/* global describe, it, before, after */

require('es6-promise').polyfill()

var expect = require('chai').expect
var popsicle = require('popsicle')
var serverAddress = require('server-address')
var group = require('./')

describe('popsicle server', function () {
  var server

  before(function () {
    server = serverAddress(function (req, res) {
      res.end('hello world')
    })

    server.listen()
  })

  after(function () {
    server.close()
  })

  describe('active', function () {
    it('should track active requests', function () {
      var g = group()

      expect(g.active()).to.equal(0)

      return popsicle.get(server.url())
        .use(g)
        .use(function (req, next) {
          expect(g.active()).to.equal(1)

          return next()
        })
        .then(function (res) {
          expect(g.active()).to.equal(0)
        })
    })
  })

  describe('abort', function () {
    it('should abort requests (past, present and future)', function () {
      var g = group()
      var r = popsicle.get(server.url()).use(g)
      var errored = 0

      g.abort()
      g.abort()

      function abortError (err) {
        errored++
        expect(err.code).to.equal('EABORT')
      }

      return r
        .catch(abortError)
        .then(function () {
          return popsicle.get(server.url()).use(g)
        })
        .catch(abortError)
        .then(function () {
          expect(errored).to.equal(2)
        })
    })
  })
})
