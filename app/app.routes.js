"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var features_component_1 = require('./features.component');
var pricing_component_1 = require('./pricing.component');
var about_component_1 = require('./about.component');
var routes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'features',
        component: features_component_1.FeaturesComponent
    },
    {
        path: 'pricing',
        component: pricing_component_1.PricingComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map