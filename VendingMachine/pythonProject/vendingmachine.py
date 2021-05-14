from Coin import Coin

class VendingMachine:
    def __init__(self, newName, newLocation):
        self.name = newName
        self.location = newLocation
        self.allMyCoins = []

    def __str__(self):
        result = f'{self.name} {self.location}'
        return result

    def to_table(self):
        result = f'<table><tr>'
        result += f'<td>{self.name}</td>'
        result += f'<td>{self.location}</td>'
        result += '</tr></table>'
        return result

    def add_coin(self, new_alloy, new_diameter, new_weight, new_value):
        new_coin = Coin(new_alloy, new_diameter, new_weight, new_value)
        self.allMyCoins.append(new_coin)

    def to_table_coin(self):
        result = f'<table>'
        result += f'<tr> <th colspan="2">Coins</th> </tr>'
        result += f'<tr> <td>Alloy</td> <td>{self.allMyCoins[0].alloy} </td> </tr>'
        result += f'<tr> <td>Diameter</td> <td>{self.allMyCoins[0].diameter}</td> </tr>'
        result += f'<tr> <td>Weight</td> <td>{self.allMyCoins[0].weight}</td> </tr>'
        result += f'<tr> <td>Value</td> <td>{self.allMyCoins[0].value}</td> </tr>'
        result += '</table>'
        return result
