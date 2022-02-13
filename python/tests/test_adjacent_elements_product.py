import unittest

from src.adjacent_elements_product import adjacent_elements_product


class TestAdjacentElementsProduct(unittest.TestCase):
    def test_adjacent_elements_product(self):
        data = [3, 6, -2, -5, 7, 3];
        self.assertEqual(adjacent_elements_product(data), 21)


if __name__ == '__main__':
    unittest.main()
