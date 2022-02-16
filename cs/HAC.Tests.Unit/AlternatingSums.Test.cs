using NUnit.Framework;

namespace HAC.Tests.Unit
{
    public class AlternatingSums
    {
        [Test]
        public void ShouldWork()
        {
            Assert.AreEqual(new[]{180, 105}, HAC.AlternatingSums(new[]{50, 60, 60, 45, 70}));
        }
    }
}
