
var assert = require('assert')
var go = require('..')

describe('port', function () {
    it('should works fine', function (done) {
        var port = new go.Port()
        var sum = 0

        port.forEach(function (num) {
            console.log(num)
            sum += num
        })

        port.put(1)
        port.put(2)
        port.put(3)
        port.put(4)
        port.close('DONE')

        port.then(function (val) {
            assert(val === 'DONE')
            assert(sum === 10)
            done()
        })
    })
})
