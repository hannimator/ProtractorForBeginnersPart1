var HomePage = function() {
    
    this.centerStageButtons = element(by.css(".center.stage-buttons"));
    this.viewOnGitHubButton = this.centerStageButtons.all(by.css(".btn.btn-large")).get(0);
    this.downloadButton = this.centerStageButtons.element(by.css(".btn-primary"));
    this.designDocsButton = this.centerStageButtons.element(by.css(".btn-warning"));
};

describe('angularjs.org', function() {
    var homePage = new HomePage();
    
    beforeEach(function() {
        browser.get('https://angularjs.org/');
    });
    
    it('should have a three buttons', function() {

        expect(homePage.viewOnGitHubButton.isPresent()).toBe(true);
        //expect(homePage.viewOnGitHubButton.isPresent()).toBe(false);
        
        expect(homePage.viewOnGitHubButton.isDisplayed()).toBe(true);
        //expect(homePage.viewOnGitHubButton.isDisplayed()).toBe(false);
        
        expect(homePage.downloadButton.isPresent()).toBe(true);
        //expect(homePage.downloadButton.isPresent()).toBe(false);
        
        expect(homePage.downloadButton.isDisplayed()).toBe(true);
        //expect(homePage.downloadButton.isDisplayed()).toBe(false);
    });
});
