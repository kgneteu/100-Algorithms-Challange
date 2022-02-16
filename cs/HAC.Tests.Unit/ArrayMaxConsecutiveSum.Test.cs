using NUnit.Framework;
using static HAC.HAC;
namespace HAC.Tests.Unit
{
    public class ArrayMaxConsecutiveSumTest
    {
        [Test]
        public void ShouldWork()
        {
            Assert.AreEqual(8, ArrayMaxConsecutiveSum(new []{2, 3, 5, 1, 6},2));
        }
    }
}

