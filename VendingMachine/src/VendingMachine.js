class VendingMachine {
	constructor (newName, newLocation){
		this.name = newName
		this.location = newLocation
	}
	
	toString() {
		const result = `Vending Machine ${NEWLINE} ${TAB}${this.name} ${NEWLINE} ${TAB}${this.location}`
		return result
	}
	
	toTableRow() {
    let result = '<tr>'
		result += `<td>${this.name}</td>`
		result += `<td>${this.location}</td>`
		result += '</tr>'
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
}