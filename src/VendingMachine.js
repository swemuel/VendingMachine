class VendingMachine {
	constructor (newName, newLocation){
		this.name = newName
		this.location = newLocation
		this.allMyCoins = []
	}

	toString() {
		const result = `Vending Machine ${NEWLINE} ${TAB}${this.name} ${NEWLINE} ${TAB}${this.location}`
		return result
	}

    toTable(){
		let result = `<table>`
			result += `<tr> <th colspan="3">Vending Machine</th> </tr>`
			result += `<tr> <td>Name</td> <td>${this.name}</td> </tr>`
			result += `<tr> <td>Location</td> <td>${this.location}</td> </tr>`
			result += `</table>`

		return result
  }
	
	addCoin10cent(newAlloy, newDiameter, newWeight, newValue){
		var aCoin = new Coin(newAlloy, newDiameter, newWeight, newValue)
		this.allMyCoins.push(aCoin)
	}
	
	toCoinTable(){
		
	}
}
