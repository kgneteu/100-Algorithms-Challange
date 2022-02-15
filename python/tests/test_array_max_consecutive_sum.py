import unittest

from src.array_max_consecutive_sum import array_max_consecutive_sum


class TestArrayMaxConsecutiveSum(unittest.TestCase):
    def test_array_max_consecutive_sum(self):
        self.assertEqual(8, array_max_consecutive_sum([2, 3, 5, 1, 6], 2))


if __name__ == '__main__':
    unittest.main()
