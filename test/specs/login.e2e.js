const { expect } = require('chai');

describe('Altoro Mutual Demo', () => {
  it(' it will logged in successfully', async () => {
    
    await browser.url('/login.jsp');

  
    await $('#LoginLink').click();
    await $('#uid').setValue('jsmith');
    await $('#passw').setValue('Demo1234');
    await $('input[name="btnSubmit"]').click();

    const signOffLink = await $('=Sign Off');
    await signOffLink.waitForDisplayed({ timeout: 5_000 });
    expect(await signOffLink.isDisplayed()).to.be.true;
    
    const heading = await $('//h1[contains(.,"Hello John Smith")]');
    await heading.waitForDisplayed({ timeout: 10_000 });
    expect(await heading.getText()).to.contain('Hello John Smith');
    
    const title = await browser.getTitle();
    expect(title).to.contain('Altoro Mutual');
   
    
  });



});
