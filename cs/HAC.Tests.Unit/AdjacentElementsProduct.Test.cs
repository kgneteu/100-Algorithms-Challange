using NUnit.Framework;

namespace HAC.Tests.Unit
{
    public class AdjacentElementsProduct
    {
        [Test]
        public void ShouldWork()
        {
            Assert.AreEqual(21, HAC.AdjacentElementsProduct(new[] {3, 6, -2, -5, 7, 3}));
        }
    }
}