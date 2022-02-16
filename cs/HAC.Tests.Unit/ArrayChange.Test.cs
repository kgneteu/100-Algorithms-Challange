using NUnit.Framework;
using static HAC.HAC;

namespace HAC.Tests.Unit
{
    public class ArrayChangeTest
    {
        [Test]
        public void ShouldWork()
        {
            Assert.AreEqual(3, ArrayChange(new[]{1, 1, 1}));
        }
    }
}
