describe("LinkedIn job search", () => {
  beforeAll(async () => {
    await page.goto("https://www.linkedin.com/");
  });

  it("Should load LinkedIn page", async () => {
    await expect(page).toMatch("LinkedIn");
  });

  it("Should load login page", async () => {
    await page.click("a.nav__button-secondary", { waitUntil: "networkidle2" });
    const userLogin = await page.waitForSelector("[id='username']");
    expect(userLogin).toBeTruthy();
  });

});
