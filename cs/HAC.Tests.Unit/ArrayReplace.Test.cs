using NUnit.Framework;
using static HAC.HAC;
namespace HAC.Tests.Unit
{
    public class ArrayReplaceTest
    {
        [Test]
        public void ShouldWork()
        {
            Assert.AreEqual(new[]{3, 8, 2, 4, 8}, ArrayReplace(new[]{3, 5, 2, 4, 5},5,8));
        }
    }
}

