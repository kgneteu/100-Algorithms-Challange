import unittest

from src.array_maximal_adjacent_difference import array_maximal_adjacent_difference


class TestArrayMaximalAdjacentDifference(unittest.TestCase):
    def test_array_maximal_adjacent_difference1(self):
        self.assertEqual(3, array_maximal_adjacent_difference([2, 4, 1, 0]))

    def test_array_maximal_adjacent_difference2(self):
        self.assertEqual(8, array_maximal_adjacent_difference([2, 9, 1, 0]))


if __name__ == '__main__':
    unittest.main()
