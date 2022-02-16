using NUnit.Framework;

namespace HAC.Tests.Unit
{
    public class AllLongestStrings
    {
        [Test]
        public void ShouldWork()
        {
            Assert.AreEqual(new []{"aba", "vcd", "aba"}, HAC.AllLongestStrings(new []{"aba", "aa", "ad", "vcd", "aba"}));
        }
    }
}
