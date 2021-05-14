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

	toStringCoin(){
		return `${this.allMyCoins[0].alloy}, ${this.allMyCoins[0].diameter}, ${this.allMyCoins[0].weight}, ${this.allMyCoins[0].value}`
	}

	toCoinTable(){
		let result = `<table>`
			result += `<tr> <th colspan="3">Coins</th> </tr>`
			result += `<tr> <td>Alloy</td> <td id='right'>${this.allMyCoins[0].alloy}</td> </tr>`
			result += `<tr> <td>Diameter</td> <td id='right'>${this.allMyCoins[0].diameter}</td> </tr>`
			result += `<tr> <td>Weight</td> <td id='right'>${this.allMyCoins[0].weight}</td> </tr>`
			result += `<tr> <td>Value</td> <td id='right'>${this.allMyCoins[0].value}</td> </tr>`
			result += `</table>`

		return result
	}
}
