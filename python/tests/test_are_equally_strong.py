import unittest
from src.are_equally_strong import are_equally_strong


class TestAreEquallyStrong(unittest.TestCase):
    def test_are_equally_strong1(self):
        self.assertTrue(are_equally_strong(10, 15, 15, 10))

    def test_are_equally_strong2(self):
        self.assertTrue(are_equally_strong(15, 10, 15, 10))

    def test_are_equally_strong3(self):
        self.assertFalse(are_equally_strong(15, 10, 15, 9))

    def test_are_equally_strong4(self):
        self.assertFalse(are_equally_strong(12, 10, 8, 14))


if __name__ == '__main__':
    unittest.main()
