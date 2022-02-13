import unittest

from src.alphabetic_shift import alphabetic_shift


class TestAlphabeticShift(unittest.TestCase):
    def test_alphabetic_shift(self):
        self.assertEqual(alphabetic_shift('crazy'), 'dsbaz')


if __name__ == '__main__':
    unittest.main()
