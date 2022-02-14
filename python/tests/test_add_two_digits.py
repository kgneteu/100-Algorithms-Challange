import unittest
from src.add_two_digits import add_two_digits


class TestAddTwoDigits(unittest.TestCase):
    def test_add_two_digits(self):
        self.assertEqual(add_two_digits(11), 2)

    def test_add_two_digits2(self):
        self.assertEqual(add_two_digits(341), 8)


if __name__ == '__main__':
    unittest.main()
