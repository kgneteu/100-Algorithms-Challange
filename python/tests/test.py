import unittest

from add_border import add_border


class MyTestCase(unittest.TestCase):
    def test_add_border(self):
        self.assertEqual(add_border(["abd", "ded"]), ["*****", "*abd*", "*ded*", "*****"], 'should be equal')


if __name__ == '__main__':
    unittest.main()
