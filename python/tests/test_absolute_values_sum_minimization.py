import unittest

from src.absolute_values_sum_minimization import absolute_values_sum_minimization


class TestAbsoluteValuesSumMinimization(unittest.TestCase):
    def test_absolute_values_sum_minimization1(self):
        self.assertEqual(absolute_values_sum_minimization([2, 4, 7]), 4)

    def test_absolute_values_sum_minimization2(self):
        self.assertEqual(absolute_values_sum_minimization([2, 4, 7, 6]), 4)

    def test_absolute_values_sum_minimization3(self):
        self.assertEqual(absolute_values_sum_minimization([2, 4, 7, 6, 6]), 7)

    def test_absolute_values_sum_minimization4(self):
        self.assertEqual(absolute_values_sum_minimization([2, 4, 7, 6, 6, 8]), 7)


if __name__ == '__main__':
    unittest.main()
