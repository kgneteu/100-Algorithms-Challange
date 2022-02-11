# Given a rectangular matrix of characters, add a border of asterisks(*) to it.
def add_border(picture):
    wall = "*" * (len(picture[0]) + 2)

    return [wall, *map(lambda value: '*' + value + '*', picture), wall]