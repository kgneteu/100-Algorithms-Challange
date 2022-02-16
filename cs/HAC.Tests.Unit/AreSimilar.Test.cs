using NUnit.Framework;
using static HAC.HAC;

namespace HAC.Tests.Unit
{
    public class AreSimilarTest
    {
        [TestCase(new[] {1, 2, 3}, new[] {1, 2, 3 }, true)]
        [TestCase(new[] {1, 2, 3}, new[] {2, 1, 3 }, true)]
        [TestCase(new[] {1, 2, 2}, new[] {2, 1, 1 }, false)]
        public void ShouldWork(int []a1,int[]a2,bool expected)
        {
            Assert.AreEqual(expected, AreSimilar(a1,a2));
        }
    }
}