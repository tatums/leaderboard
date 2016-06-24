import jQuery from 'jquery/src/jquery.js'

// import 'bootstrap-material-design/dist/css/bootstrap-material-design.css'
import 'material-design-lite/dist/material.cyan-deep_orange.min.css'

import angular from 'angular'
import uiRouter from 'angular-ui-router'
import websocket from './websocket'


import home from './home/index'

import about from './about/index'
import config from './config'

import './css/style.css'
angular.module('app', [uiRouter, home, about])
.config(config);

