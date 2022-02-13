import unittest
from src.are_equally_strong import are_equally_strong


class TestAreEquallyStrong(unittest.TestCase):
    def test_are_equally_strong(self):
        self.assertTrue(are_equally_strong(10, 15, 15, 10))
        self.assertTrue(are_equally_strong(15, 10, 15, 10))
        self.assertFalse(are_equally_strong(15, 10, 15, 9))
        self.assertFalse(are_equally_strong(12, 10, 8, 14))


if __name__ == '__main__':
    unittest.main()
