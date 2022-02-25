using NUnit.Framework;

namespace HAC.Tests.Unit
{
    public class AlmostIncreasingSequence
    {
        [TestCase(new[] { 1, 3, 2, 1 }, false)]
        [TestCase(new[] { 2, 3, 1, 3, 4, 5, 6 }, false)]
        [TestCase(new[] { 1, 3, 2 }, true)]
        [TestCase(new[] { 1, 2, 5, 3, 5 }, true)]
        [TestCase(new[] { 10, 1, 2, 3, 4, 5 }, true)]
        [TestCase(new[] { 1, 2, 3, 4, 99, 5, 6 }, true)]
        [TestCase(new[] { 123, -17, -5, 1, 2, 3, 12, 43, 45 }, true)]
        [TestCase(new[] { 1, 2, 3, 4, 3, 6 }, true)]
        public void ShouldWork(int[] data, bool expected)
        {
            Assert.AreEqual(expected, HAC.AlmostIncreasingSequence(data));
        }
    }
}
