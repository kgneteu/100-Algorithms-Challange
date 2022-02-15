import unittest

from src.array_change import array_change


class TestArrayChange(unittest.TestCase):
    def test_array_change(self):
        self.assertEqual(3, array_change([1, 1, 1]))


if __name__ == '__main__':
    unittest.main()
