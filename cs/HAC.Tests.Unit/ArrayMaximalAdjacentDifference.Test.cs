using NUnit.Framework;
using static HAC.HAC;

namespace HAC.Tests.Unit
{
    public class ArrayMaximalAdjacentDifferenceTest
    {
        [TestCase(new[] {2, 4, 1, 0}, 3)]
        [TestCase(new[] {2, 9, 1, 0}, 8)]
        public void ShouldWork(int[] data, int expected)
        {
            Assert.AreEqual(expected, ArrayMaximalAdjacentDifference(data));
        }
    }
}