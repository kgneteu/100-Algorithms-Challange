using NUnit.Framework;

namespace HAC.Tests.Unit
{
    public class AlmostIncreasingSequence
    {
        [TestCase(new[] { 1, 3, 2, 1 }, false)]
        [TestCase(new[] { 1, 3, 2 }, true)]
        [TestCase(new[] { 2, 3, 1, 3, 4, 5, 6 }, false)]
        [TestCase(new[] { 1, 4, 4, 3, 3, 8 }, false)]
        public void ShouldWork(int[] data, bool expected)
        {
            Assert.AreEqual(expected, HAC.AlmostIncreasingSequence(data));
        }
    }
}
