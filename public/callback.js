// Sonos widget OAuth callback: hand the query string back to the Android app
// via an intent URL. External file (not inline) so it passes the site CSP.
var params = window.location.search;
var intentUrl = 'intent://sycamorecreekconsulting.com/callback' + params + '#Intent;scheme=https;package=com.sycamorecreek.sonoswidget;end';
document.getElementById('manual').href = intentUrl;
window.location.href = intentUrl;
