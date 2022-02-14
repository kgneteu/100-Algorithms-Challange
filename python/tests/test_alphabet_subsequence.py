import unittest
from src.alphabet_subsequence import alphabet_subsequence


class TestAlphabetSubsequence(unittest.TestCase):
    def test_alphabet_subsequence(self):
        data = 'effg'
        self.assertFalse(alphabet_subsequence(data))

    def test_alphabet_subsequence2(self):
        data = 'ace'
        self.assertTrue(alphabet_subsequence(data))


if __name__ == '__main__':
    unittest.main()
