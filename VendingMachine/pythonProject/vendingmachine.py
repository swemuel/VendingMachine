class VendingMachine:
    def __init__(self, newName, newLocation):
        self.name = newName
        self.location = newLocation

    def __str__(self):
        result = f'{self.name} {self.location}'
        return result

    def to_table(self):
        result = f'<table><tr>'
        result += f'<td>{self.name}</td>'
        result += f'<td>{self.location}</td>'
        result += '</tr></table>'

        return result
