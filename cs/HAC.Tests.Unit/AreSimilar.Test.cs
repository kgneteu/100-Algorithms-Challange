using NUnit.Framework;
using static HAC.HAC;

namespace HAC.Tests.Unit
{
    public class AreSimilarTest
    {
        [TestCase(new[] {1, 2, 3}, new[] {1, 2, 3}, true)]
        [TestCase(new[] {1, 2, 3}, new[] {2, 1, 3}, true)]
        [TestCase(new[] {1, 2, 2}, new[] {2, 1, 1}, false)]
        [TestCase(new[] {2, 3, 1}, new[] {1, 3, 2}, true)]
        [TestCase(new[] {832, 998, 148, 570, 533, 561, 894, 147, 455, 279},
            new[] {832, 998, 148, 570, 533, 561, 455, 147, 894, 279}, true)]
        public void ShouldWork(int[] a1, int[] a2, bool expected)
        {
            Assert.AreEqual(expected, AreSimilar(a1, a2));
        }
    }
}