describe('Google Homepage', () => {
  test('has title "Google"', async () => {
    await page.goto('https://google.com', { waitUntil: 'networkidle0' })
    const title = await page.title()
    expect(title).toBe('Google')
  })

});