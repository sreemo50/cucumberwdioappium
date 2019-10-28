const wdioConfig = require('./wdio.conf.js');

wdioConfig.config.capabilities = [{ 
appiumVersion: '1.15.0',                             
browserName: '',                                   
platformName: 'Android',
app: '',                     
appPackage: 'com.sec.android.app.popupcalculator',             
appActivity: 'com.sec.android.app.popupcalculator.Calculator', 
platformVersion: '5.1.1',                         
deviceName: '4200834a9bea8200',                      
newCommandTimeout: 30 * 60000,
}];

wdioConfig.config.port = 4724;
wdioConfig.config.host = '0.0.0.0';
//wdioConfig.config.url = 'http://0.0.0.0:4724/wd/hub';
wdioConfig.config.services = ['appium'];
wdioConfig.config.hubPort = 4444;
wdioConfig.config.hubHost = '192.168.42.141';
//wdioConfig.config.path = '/';
//wdioConfig.chromeDriverArgs = ['--port=4723', '--url-base=\'/session\''];

exports.config = wdioConfig.config;
