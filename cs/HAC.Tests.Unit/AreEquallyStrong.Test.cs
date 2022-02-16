using NUnit.Framework;

namespace HAC.Tests.Unit
{

    public class AreEquallyStrong
    {
        [TestCase(10, 15, 15, 10, true)]
        [TestCase(15, 10, 15, 10, true)]
        [TestCase(15, 10, 15, 9, false)]
        [TestCase(12, 10, 8, 14, false)]
        public void ShoudCalculate(int yl, int yr, int fl, int fr, bool expected)
        {
            Assert.AreEqual(expected, HAC.AreEquallyStrong(yl, yr, fl, fr));
        }
    }
}