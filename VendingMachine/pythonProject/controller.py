from vendingmachine import VendingMachine


def setup():
    the_vending_machine = VendingMachine('Ara Vending Machine', 'Madras Street')

    the_vending_machine.add_coin("Cupro-nickel", 23.62, 5.66, "10 cents")
    the_vending_machine.add_coin("Cupro-nickel", 23.62, 5.66, "10 cents")
    the_vending_machine.add_coin("Cupro-nickel", 23.62, 5.66, "10 cents")
    the_vending_machine.add_coin("Cupro-nickel", 23.62, 5.66, "10 cents")
    the_vending_machine.add_coin("Cupro-nickel", 23.62, 5.66, "10 cents")
    the_vending_machine.add_coin("Cupro-nickel", 23.62, 5.66, "10 cents")
    the_vending_machine.add_coin("Cupro-nickel", 23.62, 5.66, "10 cents")
    the_vending_machine.add_coin("Cupro-nickel", 23.62, 5.66, "10 cents")
    the_vending_machine.add_coin("Cupro-nickel", 23.62, 5.66, "10 cents")
    the_vending_machine.add_coin("Cupro-nickel", 23.62, 5.66, "10 cents")

    return the_vending_machine


if __name__ == '__main__':
    a_vending_machine = setup()
    # uncomment as you work to see output
    print(a_vending_machine)
