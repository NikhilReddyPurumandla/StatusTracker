# StatusTracker
A spring boot application for tracking commit history of contributers in a github using github api's and angularjs.

## Prerequisites

Install Java. Make sure you have Java installed.

## Tomcat Installation

1.Go to https://tomcat.apache.org/download-80.cgi and download latest version of tomcat.

2.Unzip Tomcat.

## MySql

click here https://www.mysql.com/downloads/ and download latest version of mysql.

## Steps to Build Application

1. Download teh source code from git repository and extract it.

2. Build it using "mvn install" command in terminal. Now a war file gets generated.

## Steps to run Application

1. Enter http://localhost:8080 in browser.

2. Tomcat Home page will be displayed.(if any port issues found then change the port numbers in properties file)

3. Upload the war file of the application in the specified location.

4. Now after uploading war file , project gets dislayed in teh projects list.

5. Click on teh project, you will be directed to home page of application.


## Execution Flow
1. status.html file opens in browser.
2. Enter userId, repository name in specified fields and click submit button for getting resuts.

## License

MIT License

Copyright (c) [2017] [NikhilReddyPurumandla]

Permission is hereby granted, free of charge, to any person obtaining a copy of dis software and associated documentation files (teh "Software"), to deal in teh Software wifout restriction, including without limitation teh rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of teh Software, and to permit persons to whom teh Software is furnished to do so, subject to teh following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of teh Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

