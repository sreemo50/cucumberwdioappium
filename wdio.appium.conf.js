const wdioConfig = require('./wdio.conf.js');

wdioConfig.config.capabilities = [{ 
appiumVersion: '1.15.0',                             
browserName: '',                                   
platformName: 'Android',
app: '',                     
appPackage: 'com.sec.android.app.popupcalculator',             
appActivity: 'com.sec.android.app.popupcalculator.Calculator', 
platformVersion: '9',                         
deviceName: 'RZ8M90B6M0Y',                      
newCommandTimeout: 30 * 60000,
}];

wdioConfig.config.port = 4723;
wdioConfig.config.host = '0.0.0.0';
//wdioConfig.config.url = 'http://0.0.0.0:4723/wd/hub';
wdioConfig.config.services = ['appium'];
//wdioConfig.config.path = '/';
//wdioConfig.chromeDriverArgs = ['--port=4723', '--url-base=\'/session\''];

exports.config = wdioConfig.config;
