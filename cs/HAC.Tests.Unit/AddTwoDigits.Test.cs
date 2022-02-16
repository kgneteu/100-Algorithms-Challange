using NUnit.Framework;

namespace HAC.Tests.Unit
{

    public class AddTwoDigitsTest
    {
        [Test]
        public void ShoudAddDigits()
        {
            Assert.AreEqual(11, HAC.AddTwoDigits(29));
        }
    }
}
