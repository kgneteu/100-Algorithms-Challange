import unittest
from src.add_border import add_border


class TestAddBorder(unittest.TestCase):
    def test_add_border(self):
        self.assertEqual(add_border(["abd", "ded"]), ["*****", "*abd*", "*ded*", "*****"], 'should be equal')


if __name__ == '__main__':
    unittest.main()
