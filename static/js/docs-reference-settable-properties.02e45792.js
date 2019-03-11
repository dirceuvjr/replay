(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"./src/replay/docs/reference/settable-properties.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function l(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=l(this,s(t).call(this,e))).layout=null,n}var n,a,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;p(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"settable-properties-reference"}},"Settable properties reference"),r.a.createElement(o.MDXTag,{name:"p",components:t},"The Replay player or player controller provides the method ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties(PlaybackProps): void"),"."),r.a.createElement(o.MDXTag,{name:"p",components:t},"This is used for manipulating and controlling a playback."),r.a.createElement(o.MDXTag,{name:"p",components:t},"Instead of passing regular props to a component, such properties need to be applied through a method call. This is because what's specified through React props might get out of sync with the actual playback state. If the component is rendered as ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Replay isPaused={true}/>"),", and the playback resumes due to events or operations inside the player (e.g. by using the player controls), it will not have an effect replaying the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"true")," value for an ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"isPaused")," prop. It will be considered unchanged. "),r.a.createElement(o.MDXTag,{name:"p",components:t},"The following properties can be set through a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties()")," call. Only include the relevant property/ies in the object passed as the argument. E.g. ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setProperties({ isPaused: true })")," pauses the playback."),r.a.createElement(o.MDXTag,{name:"pre",components:t},r.a.createElement(o.MDXTag,{name:"code",components:t,parentName:"pre",props:{}},"type PlaybackProps = {\n  isMuted?: boolean,\n  volume?: number,\n  isPaused?: boolean,\n  bitrateCap?: number,\n  bitrateFix?: number | 'max' | 'min',\n  position?: number,\n  isAtLiveEdge?: true,\n  isPipActive?: boolean,\n  isAirPlayTargetPickerVisible?: true,\n  selectedTextTrack?: ?AvailableTrack,\n  selectedAudioTrack?: AvailableTrack\n};\n")),r.a.createElement(o.MDXTag,{name:"table",components:t},r.a.createElement(o.MDXTag,{name:"thead",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"thead"},r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Property"),r.a.createElement(o.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"))),r.a.createElement(o.MDXTag,{name:"tbody",components:t,parentName:"table"},r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"isMuted"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Changes the mute state without affecting the volume setting. Use the value ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"true")," for muting, and ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"false")," for unmuting.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"volume"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Updates the volume specified as a number within the range 0 (muted) to 1 (maximum).")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"isPaused"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Use the value ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"true")," for pausing playback, and ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"false")," for resuming it.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"bitrateCap"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Only relevant for adaptive streaming. Specifies a maximum bitrate to be considered for adaptive bitrate switching. The number states such a bitrate in kbps.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"bitrateFix"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Only relevant for adaptive streaming. Deactivates adaptive bitrate switching and fixes the bitrate selection. The number is given as an integer of kbps, and must correspond exactly to one of the bitrates reported in the video stream state property ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"bitrates"),".")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"position"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Sets a different playback position. The number argument is the relative position between 0 as the start of the stream, and the duration of the stream. For live streams, 0 is the earliest timeshifting position available, while a position equal to duration is the live edge.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"isAtLiveEdge"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Only the value ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"true")," has effect for this property, and only when playback is timeshifted. Setting ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"{ isAtLiveEdge: true }")," cancels timeshifting and resumes playback from the live edge.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"isPipActive"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Setting ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"{ isPipActive: true }")," requests the browser's picture-in-picture mode for the video playback. The corresponding video stream state property ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"isPipActive")," will be updated with the value ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"true")," if entering Pip mode was successful. The value ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"false")," reverts an ongoing picture-in-picture video display back to normal mode. Before attempting setting this property to true, use the browser's feature detection for Pip.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"isAirPlayTargetPickerVisible"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Setting ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"{ isAirPlayTargetPickerVisible: true }")," invokes Safari's AirPlay target device picker. The corresponding video stream state property ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"isAirPlayActive")," will be updated with the value ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"true")," if the video playback was transferred to an AirPlay device. The value ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"false")," has no effect, as the AirPlay picker only can be hidden by direct user gestures. Before attempting setting this property to true, use the browser's feature detection for AirPlay.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"selectedTextTrack"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Set this property with a value identical to one of the items in the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"textTracks")," stream state property, in order to display that subtitle track. Set this property to ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"null")," to not display any subtitles.")),r.a.createElement(o.MDXTag,{name:"tr",components:t,parentName:"tbody"},r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"selectedAudioTrack"),r.a.createElement(o.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"With more than one audio track available, the one to be audible can be selected by setting this property with a value identical to one of the items in the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"audioTracks")," stream state property.")))))}}])&&m(n.prototype,a),i&&m(n,i),t}();d.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-reference-settable-properties.13ccfb395d915e30e453.js.map