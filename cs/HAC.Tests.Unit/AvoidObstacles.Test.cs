using NUnit.Framework;
using static HAC.HAC;

namespace HAC.Tests.Unit
{
    public class AvoidObstaclesTest
    {
        [TestCase(new[] {5, 3, 6, 7, 9}, 4)]
        [TestCase(new[] {1, 3, 5, 7, 9}, 2)]
        [TestCase(new[] {2, 5, 7, 9}, 4)]
        [TestCase(new[] {2, 4, 7, 10}, 3)]
        public void ShouldWork(int[] data, int expected)
        {
            Assert.AreEqual(expected, AvoidObstacles(data));
        }
    }
}