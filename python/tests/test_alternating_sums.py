import unittest
from src.alternating_sums import alternating_sums


class TestAlternatingSums(unittest.TestCase):
    def test_alternating_sums(self):
        self.assertEqual(alternating_sums([50, 60, 60, 45, 70]), [180, 105])


if __name__ == '__main__':
    unittest.main()
