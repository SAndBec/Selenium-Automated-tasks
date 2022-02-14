const {Builder, By, Key, util} = require("selenium-webdriver");

async function credentials() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://us99.broadcloud.io/Login/");
    await driver.findElement(By.name("EnteredUserID")).sendKeys("dpaucar_sip.bbo.cloud@broadcloudpbx.net");
    await driver.findElement(By.name("Password")).sendKeys("Password123#",Key.RETURN);
    await driver.findElement(By.partialLinkText("Profile")).click();
    await driver.findElement(By.name("/Reseller/Groups/")).click();
}
credentials();
