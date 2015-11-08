var Browser = require('zombie');

Browser.localhost(process.env.IP, process.env.PORT);

describe('User visits index page', function() {
    var browser = new Browser();
    
    before(function() {
        return browser.visit('/');
    });
    
    it('should be successful', function() {
        browser.assert.success();
    });
    
    it('should see welcome page', function() {
        browser.assert.text('div.page-header > h1', 'Receptek megosztása');
    });
        
    describe('User visits new recipe page', function (argument) {
    
        var browser = new Browser();
        
        before(function() {
            return browser.visit('/recipes/new');
        });
        
        it('should go to the authentication page', function () {
            browser.assert.redirected();
            browser.assert.success();
            browser.assert.url({ pathname: '/login' });
        });
        
        it('should be able to login with correct credentials', function (done) {
            browser
                .fill('username', 'user')
                .fill('password', 'jelszo')
                .pressButton('button[type=submit]')
                .then(function () {
                    browser.assert.redirected();
                    browser.assert.success();
                    browser.assert.url({ pathname: '/recipes/list' });
                    done();
                });
        });
    
       
        it('should go the recipe page', function () {
            return browser.visit('/recipes/new')
            .then(function () {
                browser.assert.success();
                browser.assert.text('div.page-header > h1', 'Új recept felvitele');
            });
        });
        
        it('should show errors if the form fields are not right', function () {
            return browser
                .fill('cim', '')
                .fill('leiras', '')
                .pressButton('button[type=submit]')
                .then(function() {
                    // browser.assert.redirected();
                    browser.assert.success();
                    browser.assert.element('form .form-group:nth-child(1) [name=title]');
                    browser.assert.hasClass('form .form-group:nth-child(1)', 'has-error');
                    browser.assert.element('form .form-group:nth-child(2) [name=leiras]');
                    browser.assert.hasClass('form .form-group:nth-child(2)', 'has-error');
                });
        });
            
        it('should show submit the right-filled form fields and go back to list page', function() {
            browser
                .fill('cim', 'kakaó')
                .fill('leiras', '2 dl tejbe 2 kiskanál kakaópor')
                .pressButton('button[type=submit]')
                .then(function() {
                    browser.assert.redirected();
                    browser.assert.success();
                    browser.assert.url({ pathname: '/recipes/list' });
            
            browser.assert.element('table.table');
            //browser.assert.text('table.table tbody tr:last-child td:nth-child(2) span.label', 'Új');    
            browser.assert.text('table.table tbody tr:last-child td:nth-child(3)', 'kakaó');    
            browser.assert.text('table.table tbody tr:last-child td:nth-child(4)', '0 2 dl tejbe 2 kiskanál kakaópor');
        });
});
    });

    
        
     
    
    
});

