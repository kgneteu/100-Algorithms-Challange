import unittest

from src.array_conversion import array_conversion


class TestArrayConversion(unittest.TestCase):
    def test_array_conversion(self):
        self.assertEqual(186, array_conversion([1, 2, 3, 4, 5, 6, 7, 8]))


if __name__ == '__main__':
    unittest.main()