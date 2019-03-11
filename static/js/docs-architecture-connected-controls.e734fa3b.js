(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"./src/replay/docs/architecture/connected-controls.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d});var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function m(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,n){return!n||"object"!==p(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=s(this,l(n).call(this,e))).layout=null,t}var t,a,p;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;c(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"connected-player-controls"}},"Connected player controls"),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"generic-components-and-specialised-player-controls"}},"Generic components and specialised player controls"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The core building blocks are a few generic components: ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Button/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<ToggleButton/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Selector/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Slider/>"),", and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Container/>"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"From this, dedicated player controls are built. These are the ones currently included in the Replay component library, and also in the defult player:"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<PlayPauseButton/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<SkipButton/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<GotoLiveButton/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<ExitButton/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<FullscreenButton/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<PipButton/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<AirPlayButton/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Volume/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Timeline/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<TimeDisplay/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<QualitySelector/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<SubtitlesSelector/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<AudioSelector/>"),"."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"containers-and-helpers"}},"Containers and helpers"),o.a.createElement(r.MDXTag,{name:"p",components:n},"In addition to this, several helper components and container components, are essential when building a player UI:"),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<AspectRatio/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Fullscreen/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<InteractionDetector/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<KeyboardShortcuts/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<ResponsiveClassNames/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<PlayerStateClassNames/>"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<PreferredSettingsApplicator/>"),"."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"a-common-control-api-pattern"}},"A common control API pattern"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The different controls expose props that should be recognisable and consistent:"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Props with names matching one or several playback state properties related to the control purpose."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Callback prop setProperties for manipulating the playback state (when connected, see below)."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"Appearance props for control content (graphics, text) and styling/class names."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"In some cases, simple configuration props for alternative control behaviour/appearance")),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"connecting-the-controls"}},"Connecting the controls"),o.a.createElement(r.MDXTag,{name:"p",components:n},"The controls are on its own not communicating wiht the video streamer performing the playback. Through a higher order component (HOC), all Replay controls are connected to the player controller context. Custom controls can also get connected by applying the same higher order component, ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"connectControl()"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"The player controller provides the context, and also connects the video streamer so that there can be two-way updates between controls and the video streamer."),o.a.createElement(r.MDXTag,{name:"p",components:n},"What playback state properties a component is consuming, is specified when applying the HOC. This ensures that the rendered component is only updated when the desired properties are changed. This prevents frequent updates coming mainly from playback position updates."),o.a.createElement(r.MDXTag,{name:"p",components:n},"In addition to passing down the video stream state properties registered for consumption when connecting the control, this HOC passes down a couple of methods (callback props): ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"setProperties()"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"inspect()"),". "),o.a.createElement(r.MDXTag,{name:"p",components:n},"The first one enables a control to, eh, control the playback. For instance can playback be paused by the control through invoking ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"setProperties({ isPaused: true })"),". In other words, this is the communication or state updates going back to the video streamer."),o.a.createElement(r.MDXTag,{name:"p",components:n},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"inspect()")," can be used to get all the latest state properties reported from the playback. This is an alternative to registering for state property updates when the control isn't needing a rerender on every change of that state property."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Not all controls and containers/helpers need to be connected, but most of them are."),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"example-toggling-pause-state-with-the-playpausebutton"}},"Example: Toggling pause state with the PlayPauseButton"))}}])&&m(t.prototype,a),p&&m(t,p),n}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-architecture-connected-controls.13ccfb395d915e30e453.js.map