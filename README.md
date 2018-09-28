# AllDeviceTarifApp
Sample project to serve mobile, tablet and dsktop depending on device

# Development Environment
1. Angular 6
2. Typescript
3. Bootstrap
4. Font Awesome
5. Scss

# Approach-
I have chosen the window.innerWidth to determine the type of device request is coming from and depending on that I am setting Mobile, Tablet or Desktop mode. Default is desktop mode. I have created the AppStateService which will decide the requesting device based on the width. Following constants will decide the definition of mobile or tablet which can be altered easily. MOBILE_WIDTH_MAX = 425; TABLET_WIDTH_MAX = 1024;
By default, the routing is set for the desktop application. If AppStateService detects that the requesting browser is mobile or tablet it will override the default routing. Depending upon which route is selected respective components will be served to the request.
Note that on some universal platform this window.innerWidth is not available but in this architecture it can easily done by other methods like User-Agent.

# Area of Improvement-
1. Need common place for common code. At the moment same code is repeated at three levels.
2. Need test for the components.
3. Sorting functionality
4. Function to return valid css class for Download/Upload
