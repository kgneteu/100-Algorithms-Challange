import unittest

from src.avoid_obstacles import avoid_obstacles


class TestAvoidObstacles(unittest.TestCase):
    def test_avoid_obstacles1(self):
        self.assertEqual(4, avoid_obstacles([5, 3, 6, 7, 9]))

    def test_avoid_obstacles2(self):
        self.assertEqual(2, avoid_obstacles([1, 3, 5, 7, 9]))

    def test_avoid_obstacles3(self):
        self.assertEqual(4, avoid_obstacles([2, 5, 7, 9]))

    def test_avoid_obstacles4(self):
        self.assertEqual(3, avoid_obstacles([2, 4, 7, 10]))


if __name__ == '__main__':
    unittest.main()
