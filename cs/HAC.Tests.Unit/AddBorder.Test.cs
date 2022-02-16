using NUnit.Framework;

namespace HAC.Tests.Unit
{
    public class AddBorderTest
    {
        [Test]
        public void ShouldRender()
        {
            Assert.AreEqual(new [] { "*****", "*abc*", "*ded*", "*****" },
                HAC.AddBorder(new[] { "abc", "ded" }));
        }
    }
}
