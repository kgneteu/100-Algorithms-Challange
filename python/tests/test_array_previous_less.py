import unittest

from src.array_previous_less import array_previous_less


class TestArrayPreviousLess(unittest.TestCase):
    def test_array_previous_less(self):
        self.assertEqual([-1, 3, -1, 2, 4], array_previous_less([3, 5, 2, 4, 5]))


if __name__ == '__main__':
    unittest.main()
