using NUnit.Framework;

namespace HAC.Tests.Unit
{
    public class AlphabeticShift
    {
        [Test]
        public void ShouldWork()
        {
            Assert.AreEqual("dsbaz", HAC.AlphabeticShift("crazy"));
        }
    }
}
