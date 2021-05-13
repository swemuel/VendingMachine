class Coin {
	constructor (newAlloy, newDiameter, newWeight, newValue){
		this.alloy = newAlloy
		this.diameter = newDiameter
		this.weight = newWeight
		this.value = newValue
		
	}
	
	toString(){
		return `${this.alloy}, ${this.diameter}, ${this.weight}, ${this.value}`
	}
	
	toCoinTableRow(){
		
	}
}