using NUnit.Framework;
using static HAC.HAC;

namespace HAC.Tests.Unit
{
    public class ArrayPreviousLessTest
    {
        [Test]
        public void ShouldWork()
        {
            Assert.AreEqual(new[] {-1, 3, -1, 2, 4}, ArrayPreviousLess(new[] {3, 5, 2, 4, 5}));
        }
    }
}
