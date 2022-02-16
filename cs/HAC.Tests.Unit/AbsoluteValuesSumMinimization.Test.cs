using NUnit.Framework;

namespace HAC.Tests.Unit
{
    public class AbsoluteValuesSumMinimizationTest
    {
        [TestCase(new[] { 2, 4, 7 }, 4)]
        [TestCase(new[] { 2, 4, 7, 6 }, 4)]
        [TestCase(new[] { 2, 4, 7, 6, 6 }, 7)]
        [TestCase(new[] { 2, 4, 7, 6, 6, 8 }, 7)]
        public void ShouldCalc(int[] data, int expected)
        {
            Assert.AreEqual(expected, HAC.AbsoluteValuesSumMinimization(data));
        }
    }
}
