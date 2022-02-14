import unittest

from src.all_longest_strings import all_longest_strings


class TestAllLongestStrings(unittest.TestCase):
    def test_all_longest_strings(self):
        data = ["aba", "aa", "ad", "vcd", "aba"]
        self.assertEqual(all_longest_strings(data), ["aba", "vcd", "aba"])


if __name__ == '__main__':
    unittest.main()
