import unittest
from src.add_numbers import add, add2


class TestAddNumbers(unittest.TestCase):
    def test_simple_add(self):
        self.assertEqual(add(1, 2), 3)

    def test_var_add(self):
        self.assertEqual(add2(1, 2, 3, 4), 10)

    def test_var_add_array(self):
        list_of_integers = [1, 2, 3]
        self.assertEqual(add2(*list_of_integers), 6)


if __name__ == '__main__':
    unittest.main()
