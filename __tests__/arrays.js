const assert = require('assert')

const { repeat } = require('../src/utils/arrays')

describe('Array', () => {
  describe('#repeat', () => {
    it('should return the value repeated thrice', () => {
      assert.deepEqual([1, 1, 1], repeat(1, 3))
    })

    it('should return the value repeated twice when no count passed', () => {
      assert.deepEqual(['a', 'a'], repeat('a'))
    })
  })
})
