using NUnit.Framework;
using NUnit.Framework.Constraints;

namespace HAC.Tests.Unit
{
    public class AlphabetSubSequence
    {
        [TestCase("effg", false)]
        [TestCase("ace", true)]
        public void ShouldWork(string data, bool expected)
        {
            Assert.AreEqual(expected, HAC.AlphabetSubsequence(data));
        }
    }
}