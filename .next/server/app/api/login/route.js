/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/login/route";
exports.ids = ["app/api/login/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=F%3A%5CGitHub%5Cnet-work-manager%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CGitHub%5Cnet-work-manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=F%3A%5CGitHub%5Cnet-work-manager%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CGitHub%5Cnet-work-manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var F_GitHub_net_work_manager_src_app_api_login_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/login/route.js */ \"(rsc)/./src/app/api/login/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/login/route\",\n        pathname: \"/api/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/login/route\"\n    },\n    resolvedPagePath: \"F:\\\\GitHub\\\\net-work-manager\\\\src\\\\app\\\\api\\\\login\\\\route.js\",\n    nextConfigOutput,\n    userland: F_GitHub_net_work_manager_src_app_api_login_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsb2dpbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9naW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2dpbiUyRnJvdXRlLmpzJmFwcERpcj1GJTNBJTVDR2l0SHViJTVDbmV0LXdvcmstbWFuYWdlciU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RiUzQSU1Q0dpdEh1YiU1Q25ldC13b3JrLW1hbmFnZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ1k7QUFDekY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkY6XFxcXEdpdEh1YlxcXFxuZXQtd29yay1tYW5hZ2VyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGxvZ2luXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9sb2dpbi9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9sb2dpbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkY6XFxcXEdpdEh1YlxcXFxuZXQtd29yay1tYW5hZ2VyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGxvZ2luXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=F%3A%5CGitHub%5Cnet-work-manager%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CGitHub%5Cnet-work-manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/login/route.js":
/*!************************************!*\
  !*** ./src/app/api/login/route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_model_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/model/user */ \"(rsc)/./src/app/model/user.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_helper_db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/helper/db */ \"(rsc)/./src/app/helper/db.js\");\n\n\n\n\n\nasync function POST(request) {\n    await (0,_app_helper_db__WEBPACK_IMPORTED_MODULE_4__.connectDB)();\n    try {\n        const { email, password } = await request.json();\n        console.log(email, password);\n        const user = await _app_model_user__WEBPACK_IMPORTED_MODULE_0__.User.findOne({\n            email: email\n        });\n        console.log(user);\n        //if user not found\n        if (user === null) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                message: 'User not found',\n                success: false\n            }, {\n                status: 404\n            });\n        }\n        //compare password\n        const isPasswordMatch = bcryptjs__WEBPACK_IMPORTED_MODULE_2___default().compareSync(password, user.password);\n        if (!isPasswordMatch) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                message: 'Invalid password',\n                success: false\n            }, {\n                status: 401\n            });\n        }\n        // generate token\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({\n            _id: user.id,\n            name: user.name\n        }, process.env.JWT_SECRET);\n        const response = next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: 'User Login succesfuly',\n            status: 200,\n            user: user\n        });\n        //send cookie\n        response.cookies.set(\"authToken\", token, {\n            httpOnly: true,\n            expiresIn: \"1d\"\n        });\n        return response;\n    } catch (error) {\n        console.error(\"Error during login:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: 'server error',\n            success: false,\n            error: error.message || error\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9sb2dpbi9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QztBQUNHO0FBQ2I7QUFDQztBQUNhO0FBRXJDLGVBQWVLLEtBQUtDLE9BQU87SUFDaEMsTUFBTUYseURBQVNBO0lBQ2YsSUFBSTtRQUNKLE1BQU0sRUFBQ0csS0FBSyxFQUFFQyxRQUFRLEVBQUUsR0FBRyxNQUFNRixRQUFRRyxJQUFJO1FBQzdDQyxRQUFRQyxHQUFHLENBQUNKLE9BQU9DO1FBQ25CLE1BQU1JLE9BQU8sTUFBTVosaURBQUlBLENBQUNhLE9BQU8sQ0FBQztZQUFDTixPQUFRQTtRQUFLO1FBQzlDRyxRQUFRQyxHQUFHLENBQUNDO1FBRVosbUJBQW1CO1FBQ25CLElBQUdBLFNBQVMsTUFBTTtZQUNqQixPQUFPWCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO2dCQUN4QkssU0FBUTtnQkFDUkMsU0FBUTtZQUNWLEdBQUk7Z0JBQUNDLFFBQU87WUFBRztRQUNmO1FBRUEsa0JBQWtCO1FBQ2xCLE1BQU1DLGtCQUFrQmYsMkRBQWtCLENBQUNNLFVBQVdJLEtBQUtKLFFBQVE7UUFFbkUsSUFBRyxDQUFDUyxpQkFBaUI7WUFDbkIsT0FBT2hCLHFEQUFZQSxDQUFDUSxJQUFJLENBQUM7Z0JBQ3ZCSyxTQUFRO2dCQUNSQyxTQUFRO1lBQ1YsR0FBSTtnQkFDRkMsUUFBTztZQUNUO1FBQ0Y7UUFFQSxpQkFBaUI7UUFDakIsTUFBTUcsUUFBUWhCLHdEQUFRLENBQUM7WUFDckJrQixLQUFNVCxLQUFLVSxFQUFFO1lBQ2JDLE1BQU9YLEtBQUtXLElBQUk7UUFDbEIsR0FBSUMsUUFBUUMsR0FBRyxDQUFDQyxVQUFVO1FBRTFCLE1BQU1DLFdBQVcxQixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQ25DSyxTQUFRO1lBQ1JFLFFBQU87WUFDUEosTUFBS0E7UUFDUDtRQUdBLGFBQWE7UUFDYmUsU0FBU0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBY1YsT0FBTztZQUN4Q1csVUFBVTtZQUNYQyxXQUFXO1FBQ1o7UUFFQSxPQUFPSjtJQUVQLEVBQUUsT0FBT0ssT0FBTztRQUNkdEIsUUFBUXNCLEtBQUssQ0FBQyx1QkFBdUJBO1FBQ3JDLE9BQU8vQixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQ3ZCSyxTQUFRO1lBQ1JDLFNBQVE7WUFDUmlCLE9BQU9BLE1BQU1sQixPQUFPLElBQUlrQjtRQUM1QixHQUFFO1lBQ0FoQixRQUFPO1FBQ1Q7SUFDQTtBQUVBIiwic291cmNlcyI6WyJGOlxcR2l0SHViXFxuZXQtd29yay1tYW5hZ2VyXFxzcmNcXGFwcFxcYXBpXFxsb2dpblxccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlciB9IGZyb20gXCJAL2FwcC9tb2RlbC91c2VyXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQgeyBjb25uZWN0REIgfSBmcm9tIFwiQC9hcHAvaGVscGVyL2RiXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XHJcbiAgYXdhaXQgY29ubmVjdERCKCk7XHJcbiAgdHJ5IHtcclxuICBjb25zdCB7ZW1haWwsIHBhc3N3b3JkIH0gPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7ZW1haWwgOiBlbWFpbH0pO1xyXG4gIGNvbnNvbGUubG9nKHVzZXIpXHJcblxyXG4gIC8vaWYgdXNlciBub3QgZm91bmRcclxuICBpZih1c2VyID09PSBudWxsKSB7XHJcbiAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgICBtZXNzYWdlOidVc2VyIG5vdCBmb3VuZCcsXHJcbiAgICBzdWNjZXNzOmZhbHNlLFxyXG4gIH0gLCB7c3RhdHVzOjQwNH0pO1xyXG4gIH1cclxuICBcclxuICAvL2NvbXBhcmUgcGFzc3dvcmRcclxuICBjb25zdCBpc1Bhc3N3b3JkTWF0Y2ggPSBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQgLCB1c2VyLnBhc3N3b3JkKVxyXG5cclxuICBpZighaXNQYXNzd29yZE1hdGNoKSB7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgICBtZXNzYWdlOidJbnZhbGlkIHBhc3N3b3JkJyxcclxuICAgICAgc3VjY2VzczpmYWxzZSxcclxuICAgIH0gLCB7XHJcbiAgICAgIHN0YXR1czo0MDFcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gZ2VuZXJhdGUgdG9rZW5cclxuICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKHtcclxuICAgIF9pZCA6IHVzZXIuaWQsIFxyXG4gICAgbmFtZSA6IHVzZXIubmFtZVxyXG4gIH0gLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVUKTtcclxuXHJcbiAgY29uc3QgcmVzcG9uc2UgPSBOZXh0UmVzcG9uc2UuanNvbih7XHJcbiAgbWVzc2FnZTonVXNlciBMb2dpbiBzdWNjZXNmdWx5JyxcclxuICBzdGF0dXM6MjAwLFxyXG4gIHVzZXI6dXNlcixcclxufSk7XHJcblxyXG5cclxuLy9zZW5kIGNvb2tpZVxyXG5yZXNwb25zZS5jb29raWVzLnNldChcImF1dGhUb2tlblwiICwgdG9rZW4sIHtcclxuICBodHRwT25seTogdHJ1ZSxcclxuIGV4cGlyZXNJbjogXCIxZFwiXHJcbn0pXHJcblxyXG5yZXR1cm4gcmVzcG9uc2U7XHJcblxyXG59IGNhdGNoIChlcnJvcikge1xyXG4gIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkdXJpbmcgbG9naW46XCIsIGVycm9yKTtcclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xyXG4gICAgbWVzc2FnZTonc2VydmVyIGVycm9yJyxcclxuICAgIHN1Y2Nlc3M6ZmFsc2UsXHJcbiAgICBlcnJvcjogZXJyb3IubWVzc2FnZSB8fCBlcnJvcixcclxufSx7XHJcbiAgc3RhdHVzOjUwMFxyXG59KVxyXG59XHJcblxyXG59XHJcbiJdLCJuYW1lcyI6WyJVc2VyIiwiTmV4dFJlc3BvbnNlIiwiYmNyeXB0Iiwiand0IiwiY29ubmVjdERCIiwiUE9TVCIsInJlcXVlc3QiLCJlbWFpbCIsInBhc3N3b3JkIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiZmluZE9uZSIsIm1lc3NhZ2UiLCJzdWNjZXNzIiwic3RhdHVzIiwiaXNQYXNzd29yZE1hdGNoIiwiY29tcGFyZVN5bmMiLCJ0b2tlbiIsInNpZ24iLCJfaWQiLCJpZCIsIm5hbWUiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInJlc3BvbnNlIiwiY29va2llcyIsInNldCIsImh0dHBPbmx5IiwiZXhwaXJlc0luIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/login/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/helper/db.js":
/*!******************************!*\
  !*** ./src/app/helper/db.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// export const connectDb = async (request)=>{\n//   // Connect to MongoDB\n//   try {\n//   const {connection} = await mongoose.connect(process.env.MONGO_DB_URL ,{dbName: \"work-manager\"})\n//     console.log(\"Db connection established .............,\");\n//   } catch (error) {\n//   console.log(error , \"Error connecting to MongoDB\");\n//   }\n// }\nconst connectDB = async ()=>{\n    try {\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) {\n            console.log((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState);\n            console.log('Already connected to MongoDB');\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_DB_URL, {\n            dbName: \"work-manager\"\n        }, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log('MongoDB connected');\n    } catch (error) {\n        console.error('MongoDB connection error:', error);\n        throw new Error('Database connection failed');\n    }\n};\nconnectDB();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2hlbHBlci9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFHakMsOENBQThDO0FBQzlDLDBCQUEwQjtBQUMxQixVQUFVO0FBQ1Ysb0dBQW9HO0FBQ3BHLCtEQUErRDtBQUUvRCxzQkFBc0I7QUFDdEIsd0RBQXdEO0FBQ3hELE1BQU07QUFFTixJQUFJO0FBR0ksTUFBTUMsWUFBWTtJQUN4QixJQUFJO1FBQ0YsSUFBSUQsNkRBQW9CLENBQUMsRUFBRSxDQUFDRyxVQUFVLEVBQUU7WUFDdENDLFFBQVFDLEdBQUcsQ0FBQ0wsNkRBQW9CLENBQUMsRUFBRSxDQUFDRyxVQUFVO1lBQzlDQyxRQUFRQyxHQUFHLENBQUM7WUFDWjtRQUNGO1FBQ0EsTUFBTUwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxFQUFFO1lBQUNDLFFBQVE7UUFBYyxHQUFHO1lBQ3pFQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN0QjtRQUNBUixRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9RLE9BQU87UUFDZFQsUUFBUVMsS0FBSyxDQUFDLDZCQUE2QkE7UUFDM0MsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0FBQ0YsRUFBRTtBQUVGYiIsInNvdXJjZXMiOlsiRjpcXEdpdEh1YlxcbmV0LXdvcmstbWFuYWdlclxcc3JjXFxhcHBcXGhlbHBlclxcZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuXG4vLyBleHBvcnQgY29uc3QgY29ubmVjdERiID0gYXN5bmMgKHJlcXVlc3QpPT57XG4vLyAgIC8vIENvbm5lY3QgdG8gTW9uZ29EQlxuLy8gICB0cnkge1xuLy8gICBjb25zdCB7Y29ubmVjdGlvbn0gPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX0RCX1VSTCAse2RiTmFtZTogXCJ3b3JrLW1hbmFnZXJcIn0pXG4vLyAgICAgY29uc29sZS5sb2coXCJEYiBjb25uZWN0aW9uIGVzdGFibGlzaGVkIC4uLi4uLi4uLi4uLi4sXCIpO1xuICAgIFxuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICBjb25zb2xlLmxvZyhlcnJvciAsIFwiRXJyb3IgY29ubmVjdGluZyB0byBNb25nb0RCXCIpO1xuLy8gICB9XG5cbi8vIH1cblxuXG4gZXhwb3J0IGNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xuICAgICAgY29uc29sZS5sb2cobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSlcbiAgICAgIGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZCB0byBNb25nb0RCJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fREJfVVJMICx7ZGJOYW1lOiBcIndvcmstbWFuYWdlclwifSAse1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3RlZCcpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01vbmdvREIgY29ubmVjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhYmFzZSBjb25uZWN0aW9uIGZhaWxlZCcpO1xuICB9XG59O1xuXG5jb25uZWN0REIoKTsgIFxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERCIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fREJfVVJMIiwiZGJOYW1lIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZXJyb3IiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/helper/db.js\n");

/***/ }),

/***/ "(rsc)/./src/app/model/user.js":
/*!*******************************!*\
  !*** ./src/app/model/user.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true,\n        match: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    about: {\n        type: String,\n        required: true\n    },\n    profileUrl: String\n}, {\n    timestamps: true\n});\n// Prevent overwriting the model if it already exists in mongoose.models\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Users || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Users\", userSchema);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVsL3VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FDcEM7SUFDRUcsTUFBTTtRQUNKQyxNQUFNQztRQUNOQyxVQUFVO0lBQ1o7SUFDQUMsT0FBTztRQUNMSCxNQUFNQztRQUNOQyxVQUFVO1FBQ1ZFLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0FDLFVBQVU7UUFDUk4sTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FLLE9BQU87UUFDTFAsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FNLFlBQVlQO0FBS2QsR0FDQTtJQUFFUSxZQUFZO0FBQUs7QUFHckIsd0VBQXdFO0FBQ3hFLE1BQU1DLE9BQU9kLHdEQUFlLENBQUNnQixLQUFLLElBQUloQixxREFBYyxDQUFDLFNBQVNDO0FBRTlDIiwic291cmNlcyI6WyJGOlxcR2l0SHViXFxuZXQtd29yay1tYW5hZ2VyXFxzcmNcXGFwcFxcbW9kZWxcXHVzZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxuY29uc3QgdXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgbmFtZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgICAgbWF0Y2g6IC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgYWJvdXQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBwcm9maWxlVXJsOiBTdHJpbmcsXHJcbiAgICAvLyBhZGRyZXNzOiB7XHJcbiAgICAvLyAgIHR5cGU6IFN0cmluZyxcclxuICAgIC8vICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAvLyB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbi8vIFByZXZlbnQgb3ZlcndyaXRpbmcgdGhlIG1vZGVsIGlmIGl0IGFscmVhZHkgZXhpc3RzIGluIG1vbmdvb3NlLm1vZGVsc1xyXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXJzIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlcnNcIiwgdXNlclNjaGVtYSk7XHJcblxyXG5leHBvcnQgeyBVc2VyIH07XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJtYXRjaCIsInBhc3N3b3JkIiwiYWJvdXQiLCJwcm9maWxlVXJsIiwidGltZXN0YW1wcyIsIlVzZXIiLCJtb2RlbHMiLCJVc2VycyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/model/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/bcryptjs","vendor-chunks/safe-buffer","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=F%3A%5CGitHub%5Cnet-work-manager%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CGitHub%5Cnet-work-manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();