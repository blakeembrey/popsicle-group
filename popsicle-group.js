/**
 * Exports `popsicleGroup`.
 */
module.exports = popsicleGroup

/**
 * Create a grouping function that'll apply methods to all requests.
 *
 * @param  {Function} app
 * @return {Function}
 */
function popsicleGroup () {
  var id = 0
  var aborted = false
  var requests = {}
  var requestCount = 0

  function group (request) {
    var currentId = id++

    requestCount++
    requests[currentId] = request

    // Abort instantly when the group has already been aborted.
    if (aborted) {
      request.abort()
    }

    request.always(function () {
      requestCount--
      delete requests[currentId]
    })
  }

  group.abort = function () {
    if (aborted) {
      return
    }

    aborted = true

    Object.keys(requests).forEach(function (id) {
      requests[id].abort()
    })
  }

  group.active = function () {
    return requestCount
  }

  return group
}
