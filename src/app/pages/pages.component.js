"use strict";
var core_1 = require('@angular/core');
var Pages = (function () {
    function Pages() {
    }
    Pages.prototype.ngOnInit = function () {
    };
    Pages = __decorate([
        core_1.Component({
            selector: 'pages',
            encapsulation: core_1.ViewEncapsulation.None,
            styles: [],
            template: "\n    <ba-sidebar></ba-sidebar>\n    <ba-page-top></ba-page-top>\n    <div class=\"al-main\">\n      <div class=\"al-content\">\n        <ba-content-top></ba-content-top>\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n    <footer class=\"al-footer clearfix\">\n      <div class=\"al-footer-right\">Created with <i class=\"ion-heart\"></i></div>\n      <div class=\"al-footer-main clearfix\">\n        <div class=\"al-copy\">&copy; <a href=\"http://akveo.com\">Akveo</a> 2016</div>\n        <ul class=\"al-share clearfix\">\n          <li><i class=\"socicon socicon-facebook\"></i></li>\n          <li><i class=\"socicon socicon-twitter\"></i></li>\n          <li><i class=\"socicon socicon-google\"></i></li>\n          <li><i class=\"socicon socicon-github\"></i></li>\n        </ul>\n      </div>\n    </footer>\n    <ba-back-top position=\"200\"></ba-back-top>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Pages);
    return Pages;
}());
exports.Pages = Pages;
//# sourceMappingURL=pages.component.js.map