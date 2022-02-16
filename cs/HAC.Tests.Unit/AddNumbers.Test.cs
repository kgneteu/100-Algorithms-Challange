using NUnit.Framework;

namespace HAC.Tests.Unit
{
    public class AddNumbersTest
    {
        [TestCase(1, 2, 3)]
        [TestCase(3, 2, 5)]
        public void ShouldAdd(int a, int b, int expected)
        {
            Assert.AreEqual(expected, HAC.Add(a, b));
        }

        [TestCase(new[] { 2, 3 }, 5)]
        [TestCase(new[] { 1, 2, 3, 4, 5 }, 15)]
        public void ShouldAddSpread(int[] a, int expected)
        {
            Assert.AreEqual(expected, HAC.Add2(a));
        }
    }
}
