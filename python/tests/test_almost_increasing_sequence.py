import unittest
from src.almost_increasing_sequence import almost_increasing_sequence


class TestAlmostIncreasingSequence(unittest.TestCase):
    def test_almost_increasing_sequence1(self):
        data = [1, 3, 2, 1]
        self.assertFalse(almost_increasing_sequence(data))

    def test_almost_increasing_sequence2(self):
        data = [2, 3, 1, 3, 4, 5, 6]
        self.assertFalse(almost_increasing_sequence(data))

    def test_almost_increasing_sequence3(self):
        data = [1, 3, 2]
        self.assertTrue(almost_increasing_sequence(data))

    def test_almost_increasing_sequence4(self):
        data = [1, 2, 5, 3, 5]
        self.assertTrue(almost_increasing_sequence(data))

    def test_almost_increasing_sequence5(self):
        data = [10, 1, 2, 3, 4, 5]
        self.assertTrue(almost_increasing_sequence(data))

    def test_almost_increasing_sequence6(self):
        data = [1, 2, 3, 4, 99, 5, 6]
        self.assertTrue(almost_increasing_sequence(data))

    def test_almost_increasing_sequence7(self):
        data = [123, -17, -5, 1, 2, 3, 12, 43, 45]
        self.assertTrue(almost_increasing_sequence(data))

    def test_almost_increasing_sequence8(self):
        data = [1, 2, 3, 4, 3, 6]
        self.assertTrue(almost_increasing_sequence(data))


if __name__ == '__main__':
    unittest.main()
