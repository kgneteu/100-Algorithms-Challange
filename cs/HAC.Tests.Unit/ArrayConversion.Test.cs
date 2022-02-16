using NUnit.Framework;
using static HAC.HAC;
namespace HAC.Tests.Unit
{
    public class ArrayConversionTest
    {
        [Test]
        public void ShouldWork()
        {
            Assert.AreEqual(186, ArrayConversion(new[]{1, 2, 3, 4, 5, 6, 7, 8}));
        }
    }
}
