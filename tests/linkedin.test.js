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

  // it("Should be logged in with access to search bar", async () => {
  //   await page.type("#username", "eva59@nomail.top", { delay: 100 });
  //   await page.type("#password", "Passw0rd!", { delay: 100 });
  //   await page.click('button[type="submit"]');
  //   const searchField = await page.waitForSelector('#global-nav-typeahead');
  //   expect(searchField).toBeTruthy();
  // });

  // it("Should take user to the jobs results page", async () => {
  //   await page.click('#global-nav-typeahead');
  //   await page.type('#global-nav-typeahead', "Automation engineer", { delay: 100});
  //   await page.waitFor(500);
  //   await page.keyboard.press('ArrowDown', {delay: 100});
  //   await page.keyboard.press('Enter');
  //   const jobNavBar = await page.waitForSelector('#ember5 > div.application-outlet > div.authentication-outlet > section.job-search-ext.job-search-ext--two-pane > header');
  //   expect(jobNavBar).toBeTruthy();
  // })

  // it('Should show description for the first job in the search results', async() => {
  //   const firstJobDescription = await page.waitForSelector('#ember1195 > div');
  //   expect(firstJobDescription).toBeTruthy();
  // })

});
