import unittest

from src.are_similar import are_similar


class TestAreSimilar(unittest.TestCase):
    def test_are_similar1(self):
        self.assertTrue(are_similar([1, 2, 3], [1, 2, 3]))

    def test_are_similar2(self):
        self.assertTrue(are_similar([1, 2, 3], [2, 1, 3]))

    def test_are_similar3(self):
        self.assertFalse(are_similar([1, 2, 2], [2, 1, 1]))

    def test_are_similar4(self):
        self.assertTrue(are_similar([2, 3, 1], [1, 3, 2]))

    def test_are_similar5(self):
        self.assertTrue(are_similar([832, 998, 148, 570, 533, 561, 894, 147, 455, 279],
                                    [832, 998, 148, 570, 533, 561, 455, 147, 894, 279]))


if __name__ == '__main__':
    unittest.main()
