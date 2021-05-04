/* globals describe beforeEach expect it Controller */

describe('Task 1:', () => {
  describe('Creating a VendingMachine', () => {
    let theVendingMachine
    beforeEach(() => {
      theVendingMachine = Controller.setup()
    })

    describe('the .name property', () => {
      it('should have a .name property', () => {
        expect('name' in theVendingMachine).to.be.true
      })
      it('should be Ara Vending Machine', () => {
        expect(theVendingMachine.name).to.equal('Ara Vending Machine')
      })
    })

    describe('the .location property', () => {
      it('should have a .location property', () => {
        expect('location' in theVendingMachine).to.be.true
      })
      it('should be Madras Street', () => {
        expect(theVendingMachine.location).to.equal('Madras Street')
      })
    })
  })

})
