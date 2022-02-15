import unittest

from src.array_replace import array_replace


class TestArrayReplace(unittest.TestCase):
    def test_array_replace(self):
        self.assertEqual([3, 8, 2, 4, 8], array_replace([3, 5, 2, 4, 5], 5, 8))


if __name__ == '__main__':
    unittest.main()
