/* globals describe beforeEach expect it Controller */

describe('Task 3:', () => {
  describe('Adding coins', () => {
    let theCoin
    beforeEach(() => {
      theCoin = new Coin('Cupro-nickel', 23.62, 5.66, '10 cents')
    })

    describe('the .alloy property', () => {
      it('should have a .alloy property', () => {
        expect('alloy' in theCoin).to.be.true
      })
      it('should be Cupro-nickel', () => {
        expect(theCoin.alloy).to.equal('Cupro-nickel')
      })
    })

    describe('the .diameter property', () => {
      it('should have a .diameter property', () => {
        expect('diameter' in theCoin).to.be.true
      })
      it('should be 23.62', () => {
        expect(theCoin.diameter).to.equal(23.62)
      })
    })
	
	describe('the .weight property', () => {
      it('should have a .weight property', () => {
        expect('weight' in theCoin).to.be.true
      })
      it('should be 5.66', () => {
        expect(theCoin.weight).to.equal(5.66)
      })
    })

    describe('the .value property', () => {
      it('should have a .value property', () => {
        expect('value' in theCoin).to.be.true
      })
      it('should be 10 cents', () => {
        expect(theCoin.value).to.equal('10 cents')
      })
    })	
  })

})