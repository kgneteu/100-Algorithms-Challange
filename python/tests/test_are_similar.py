import unittest

from src.are_similar import are_similar


class TestAreSimilar(unittest.TestCase):
    def test_are_similar1(self):
        self.assertTrue(are_similar([1, 2, 3], [1, 2, 3]))

    def test_are_similar2(self):
        self.assertTrue(are_similar([1, 2, 3], [2, 1, 3]))

    def test_are_similar3(self):
        self.assertFalse(are_similar([1, 2, 2], [2, 1, 1]))


if __name__ == '__main__':
    unittest.main()
