import unittest

from src.almost_increasing_sequence import almost_increasing_sequence


class TestAlmostIncreasingSequence(unittest.TestCase):
    def test_almost_increasing_sequence1(self):
        data = [1, 3, 2]
        self.assertTrue(almost_increasing_sequence(data))

    def test_almost_increasing_sequence2(self):
        data = [1, 3, 2, 1]
        self.assertFalse(almost_increasing_sequence(data))

    def test_almost_increasing_sequence3(self):
        data = [2, 3, 1, 3, 4, 5, 6]
        self.assertFalse(almost_increasing_sequence(data))


if __name__ == '__main__':
    unittest.main()
