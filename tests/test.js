// Your code here ...

module.exports = {
  'Home test': browser => {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('#pageIndex', 1000)
      .assert.containsText('h1', 'New User')
      .end();
  }
};
