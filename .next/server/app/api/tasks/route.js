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
exports.id = "app/api/tasks/route";
exports.ids = ["app/api/tasks/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftasks%2Froute&page=%2Fapi%2Ftasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Froute.js&appDir=F%3A%5CGitHub%5Cnet-work-manager%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CGitHub%5Cnet-work-manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftasks%2Froute&page=%2Fapi%2Ftasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Froute.js&appDir=F%3A%5CGitHub%5Cnet-work-manager%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CGitHub%5Cnet-work-manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var F_GitHub_net_work_manager_src_app_api_tasks_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/tasks/route.js */ \"(rsc)/./src/app/api/tasks/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/tasks/route\",\n        pathname: \"/api/tasks\",\n        filename: \"route\",\n        bundlePath: \"app/api/tasks/route\"\n    },\n    resolvedPagePath: \"F:\\\\GitHub\\\\net-work-manager\\\\src\\\\app\\\\api\\\\tasks\\\\route.js\",\n    nextConfigOutput,\n    userland: F_GitHub_net_work_manager_src_app_api_tasks_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ0YXNrcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdGFza3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0YXNrcyUyRnJvdXRlLmpzJmFwcERpcj1GJTNBJTVDR2l0SHViJTVDbmV0LXdvcmstbWFuYWdlciU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RiUzQSU1Q0dpdEh1YiU1Q25ldC13b3JrLW1hbmFnZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ1k7QUFDekY7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkY6XFxcXEdpdEh1YlxcXFxuZXQtd29yay1tYW5hZ2VyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHRhc2tzXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS90YXNrcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3Rhc2tzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS90YXNrcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkY6XFxcXEdpdEh1YlxcXFxuZXQtd29yay1tYW5hZ2VyXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHRhc2tzXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftasks%2Froute&page=%2Fapi%2Ftasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Froute.js&appDir=F%3A%5CGitHub%5Cnet-work-manager%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CGitHub%5Cnet-work-manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/tasks/route.js":
/*!************************************!*\
  !*** ./src/app/api/tasks/route.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _app_model_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/model/task */ \"(rsc)/./src/app/model/task.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_helper_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/helper/db */ \"(rsc)/./src/app/helper/db.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// Get all tasks\nasync function GET(request) {\n    try {\n        await (0,_app_helper_db__WEBPACK_IMPORTED_MODULE_2__.connectDB)();\n        const tasks = await _app_model_task__WEBPACK_IMPORTED_MODULE_0__.Tasks.find({}).select(\"-password\");\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(tasks, {\n            status: 200\n        });\n    } catch (error) {\n        console.error('Error during GET request:', error); // Log the full error\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Failed to fetch tasks\",\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n// Create a new task\nasync function POST(request) {\n    await (0,_app_helper_db__WEBPACK_IMPORTED_MODULE_2__.connectDB)();\n    const { title, content, status } = await request.json();\n    //fetch current user id \n    const authToken = request.cookies.get('authToken')?.value;\n    const data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().verify(authToken, process.env.JWT_SECRET);\n    try {\n        const task = new _app_model_task__WEBPACK_IMPORTED_MODULE_0__.Tasks({\n            title,\n            content,\n            userId: data._id,\n            status\n        });\n        await task.save();\n        // Return success response using NextResponse\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: 'Task created successfully'\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error('Error during POST request:', error); // Log the full error\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: 'Task creation failed',\n            error: error.message\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90YXNrcy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlDO0FBQ0U7QUFDQztBQUNiO0FBRS9CLGdCQUFnQjtBQUNULGVBQWVJLElBQUlDLE9BQU87SUFDL0IsSUFBSTtRQUNGLE1BQU1ILHlEQUFTQTtRQUNmLE1BQU1JLFFBQVEsTUFBTU4sa0RBQUtBLENBQUNPLElBQUksQ0FBQyxDQUFDLEdBQUdDLE1BQU0sQ0FBQztRQUMxQyxPQUFPUCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDSCxPQUFPO1lBQUVJLFFBQVE7UUFBSTtJQUNoRCxFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkEsUUFBUyxxQkFBcUI7UUFDekUsT0FBT1YscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFSSxTQUFTO1lBQXlCRixPQUFPQSxNQUFNRSxPQUFPO1FBQUMsR0FBRztZQUFFSCxRQUFRO1FBQUk7SUFDckc7QUFDRjtBQUVBLG9CQUFvQjtBQUNiLGVBQWVJLEtBQUtULE9BQU87SUFDaEMsTUFBTUgseURBQVNBO0lBRWYsTUFBTSxFQUFFYSxLQUFLLEVBQUVDLE9BQU8sRUFBR04sTUFBTSxFQUFFLEdBQUcsTUFBTUwsUUFBUUksSUFBSTtJQUV0RCx3QkFBd0I7SUFDeEIsTUFBTVEsWUFBWVosUUFBUWEsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBY0M7SUFDcEQsTUFBTUMsT0FBT2xCLDBEQUFVLENBQUNjLFdBQVdNLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVTtJQUV6RCxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxJQUFJMUIsa0RBQUtBLENBQUM7WUFBRWU7WUFBT0M7WUFBU1csUUFBT04sS0FBS08sR0FBRztZQUFFbEI7UUFBTztRQUNqRSxNQUFNZ0IsS0FBS0csSUFBSTtRQUVmLDZDQUE2QztRQUM3QyxPQUFPNUIscURBQVlBLENBQUNRLElBQUksQ0FBQztZQUFFSSxTQUFTO1FBQTRCLEdBQUc7WUFBRUgsUUFBUTtRQUFJO0lBQ25GLEVBQUUsT0FBT0MsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsOEJBQThCQSxRQUFTLHFCQUFxQjtRQUMxRSxPQUFPVixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQUVJLFNBQVM7WUFBd0JGLE9BQU9BLE1BQU1FLE9BQU87UUFBQyxHQUFHO1lBQUVILFFBQVE7UUFBSTtJQUNwRztBQUNGIiwic291cmNlcyI6WyJGOlxcR2l0SHViXFxuZXQtd29yay1tYW5hZ2VyXFxzcmNcXGFwcFxcYXBpXFx0YXNrc1xccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGFza3MgfSBmcm9tIFwiQC9hcHAvbW9kZWwvdGFza1wiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSBcIkAvYXBwL2hlbHBlci9kYlwiO1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcblxyXG4vLyBHZXQgYWxsIHRhc2tzXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdCkge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBjb25uZWN0REIoKTsgIFxyXG4gICAgY29uc3QgdGFza3MgPSBhd2FpdCBUYXNrcy5maW5kKHt9KS5zZWxlY3QoXCItcGFzc3dvcmRcIik7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24odGFza3MsIHsgc3RhdHVzOiAyMDAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBHRVQgcmVxdWVzdDonLCBlcnJvcik7ICAvLyBMb2cgdGhlIGZ1bGwgZXJyb3JcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGZldGNoIHRhc2tzXCIsIGVycm9yOiBlcnJvci5tZXNzYWdlIH0sIHsgc3RhdHVzOiA1MDAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDcmVhdGUgYSBuZXcgdGFza1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XHJcbiAgYXdhaXQgY29ubmVjdERCKCk7ICBcclxuXHJcbiAgY29uc3QgeyB0aXRsZSwgY29udGVudCwgIHN0YXR1cyB9ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XHJcblxyXG4gIC8vZmV0Y2ggY3VycmVudCB1c2VyIGlkIFxyXG4gIGNvbnN0IGF1dGhUb2tlbiA9IHJlcXVlc3QuY29va2llcy5nZXQoJ2F1dGhUb2tlbicpPy52YWx1ZTtcclxuICBjb25zdCBkYXRhID0gand0LnZlcmlmeShhdXRoVG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrcyh7IHRpdGxlLCBjb250ZW50LCB1c2VySWQ6ZGF0YS5faWQsIHN0YXR1cyB9KTtcclxuICAgIGF3YWl0IHRhc2suc2F2ZSgpO1xyXG4gICAgXHJcbiAgICAvLyBSZXR1cm4gc3VjY2VzcyByZXNwb25zZSB1c2luZyBOZXh0UmVzcG9uc2VcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdUYXNrIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JyB9LCB7IHN0YXR1czogMjAxIH0pO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgUE9TVCByZXF1ZXN0OicsIGVycm9yKTsgIC8vIExvZyB0aGUgZnVsbCBlcnJvclxyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ1Rhc2sgY3JlYXRpb24gZmFpbGVkJywgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSwgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIlRhc2tzIiwiTmV4dFJlc3BvbnNlIiwiY29ubmVjdERCIiwiand0IiwiR0VUIiwicmVxdWVzdCIsInRhc2tzIiwiZmluZCIsInNlbGVjdCIsImpzb24iLCJzdGF0dXMiLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwiUE9TVCIsInRpdGxlIiwiY29udGVudCIsImF1dGhUb2tlbiIsImNvb2tpZXMiLCJnZXQiLCJ2YWx1ZSIsImRhdGEiLCJ2ZXJpZnkiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsInRhc2siLCJ1c2VySWQiLCJfaWQiLCJzYXZlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/tasks/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/helper/db.js":
/*!******************************!*\
  !*** ./src/app/helper/db.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// export const connectDb = async (request)=>{\n//   // Connect to MongoDB\n//   try {\n//   const {connection} = await mongoose.connect(process.env.MONGO_DB_URL ,{dbName: \"work-manager\"})\n//     console.log(\"Db connection established .............,\");\n//   } catch (error) {\n//   console.log(error , \"Error connecting to MongoDB\");\n//   }\n// }\nconst connectDB = async ()=>{\n    try {\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) {\n            console.log((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState);\n            console.log('Already connected to MongoDB');\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_DB_URL, {\n            dbName: \"work-manager\"\n        }, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log('MongoDB connected');\n    } catch (error) {\n        console.error('MongoDB connection error:', error);\n        throw new Error('Database connection failed');\n    }\n};\nconnectDB();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2hlbHBlci9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFHakMsOENBQThDO0FBQzlDLDBCQUEwQjtBQUMxQixVQUFVO0FBQ1Ysb0dBQW9HO0FBQ3BHLCtEQUErRDtBQUUvRCxzQkFBc0I7QUFDdEIsd0RBQXdEO0FBQ3hELE1BQU07QUFFTixJQUFJO0FBR0ksTUFBTUMsWUFBWTtJQUN4QixJQUFJO1FBQ0YsSUFBSUQsNkRBQW9CLENBQUMsRUFBRSxDQUFDRyxVQUFVLEVBQUU7WUFDdENDLFFBQVFDLEdBQUcsQ0FBQ0wsNkRBQW9CLENBQUMsRUFBRSxDQUFDRyxVQUFVO1lBQzlDQyxRQUFRQyxHQUFHLENBQUM7WUFDWjtRQUNGO1FBQ0EsTUFBTUwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxFQUFFO1lBQUNDLFFBQVE7UUFBYyxHQUFHO1lBQ3pFQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN0QjtRQUNBUixRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9RLE9BQU87UUFDZFQsUUFBUVMsS0FBSyxDQUFDLDZCQUE2QkE7UUFDM0MsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0FBQ0YsRUFBRTtBQUVGYiIsInNvdXJjZXMiOlsiRjpcXEdpdEh1YlxcbmV0LXdvcmstbWFuYWdlclxcc3JjXFxhcHBcXGhlbHBlclxcZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuXG4vLyBleHBvcnQgY29uc3QgY29ubmVjdERiID0gYXN5bmMgKHJlcXVlc3QpPT57XG4vLyAgIC8vIENvbm5lY3QgdG8gTW9uZ29EQlxuLy8gICB0cnkge1xuLy8gICBjb25zdCB7Y29ubmVjdGlvbn0gPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX0RCX1VSTCAse2RiTmFtZTogXCJ3b3JrLW1hbmFnZXJcIn0pXG4vLyAgICAgY29uc29sZS5sb2coXCJEYiBjb25uZWN0aW9uIGVzdGFibGlzaGVkIC4uLi4uLi4uLi4uLi4sXCIpO1xuICAgIFxuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICBjb25zb2xlLmxvZyhlcnJvciAsIFwiRXJyb3IgY29ubmVjdGluZyB0byBNb25nb0RCXCIpO1xuLy8gICB9XG5cbi8vIH1cblxuXG4gZXhwb3J0IGNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xuICAgICAgY29uc29sZS5sb2cobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSlcbiAgICAgIGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZCB0byBNb25nb0RCJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fREJfVVJMICx7ZGJOYW1lOiBcIndvcmstbWFuYWdlclwifSAse1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3RlZCcpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01vbmdvREIgY29ubmVjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhYmFzZSBjb25uZWN0aW9uIGZhaWxlZCcpO1xuICB9XG59O1xuXG5jb25uZWN0REIoKTsgIFxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERCIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fREJfVVJMIiwiZGJOYW1lIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZXJyb3IiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/helper/db.js\n");

/***/ }),

/***/ "(rsc)/./src/app/model/task.js":
/*!*******************************!*\
  !*** ./src/app/model/task.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tasks: () => (/* binding */ Tasks)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst taskSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        required: true\n    },\n    content: {\n        type: String,\n        required: true\n    },\n    status: {\n        type: String,\n        enum: [\n            'pending',\n            'in progress',\n            'completed',\n            'cancelled'\n        ],\n        default: 'pending'\n    },\n    userId: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: 'User',\n        required: true\n    },\n    addTime: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst Tasks = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Task || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Task', taskSchema);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVsL3Rhc2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBR2hDLE1BQU1DLGFBQWEsSUFBSUQsd0RBQWUsQ0FBQztJQUNyQ0csT0FBTTtRQUNKQyxNQUFLQztRQUNMQyxVQUFTO0lBQ1g7SUFDQUMsU0FBUTtRQUNOSCxNQUFLQztRQUNMQyxVQUFTO0lBQ1g7SUFDQUUsUUFBTztRQUNMSixNQUFLQztRQUNMSSxNQUFLO1lBQUM7WUFBVztZQUFlO1lBQWE7U0FBWTtRQUN6REMsU0FBUTtJQUNWO0lBQ0FDLFFBQU87UUFDTFAsTUFBS0osd0RBQWUsQ0FBQ1ksS0FBSyxDQUFDQyxRQUFRO1FBQ25DQyxLQUFJO1FBQ0pSLFVBQVM7SUFDWDtJQUNBUyxTQUFRO1FBQ05YLE1BQUtZO1FBQ0xOLFNBQVFNLEtBQUtDLEdBQUc7SUFDbEI7QUFDRjtBQUVDLE1BQU1DLFFBQVFsQix3REFBZSxDQUFDb0IsSUFBSSxJQUFJcEIscURBQWMsQ0FBQyxRQUFRQztBQUM5QyIsInNvdXJjZXMiOlsiRjpcXEdpdEh1YlxcbmV0LXdvcmstbWFuYWdlclxcc3JjXFxhcHBcXG1vZGVsXFx0YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcblxyXG5jb25zdCB0YXNrU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XHJcbiAgdGl0bGU6e1xyXG4gICAgdHlwZTpTdHJpbmcsXHJcbiAgICByZXF1aXJlZDp0cnVlXHJcbiAgfSxcclxuICBjb250ZW50OntcclxuICAgIHR5cGU6U3RyaW5nLCBcclxuICAgIHJlcXVpcmVkOnRydWVcclxuICB9LFxyXG4gIHN0YXR1czp7XHJcbiAgICB0eXBlOlN0cmluZyxcclxuICAgIGVudW06WydwZW5kaW5nJywgJ2luIHByb2dyZXNzJywgJ2NvbXBsZXRlZCcsICdjYW5jZWxsZWQnXSxcclxuICAgIGRlZmF1bHQ6J3BlbmRpbmcnXHJcbiAgfSxcclxuICB1c2VySWQ6e1xyXG4gICAgdHlwZTptb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsXHJcbiAgICByZWY6J1VzZXInLFxyXG4gICAgcmVxdWlyZWQ6dHJ1ZVxyXG4gIH0sXHJcbiAgYWRkVGltZTp7XHJcbiAgICB0eXBlOkRhdGUsXHJcbiAgICBkZWZhdWx0OkRhdGUubm93XHJcbiAgfVxyXG59KVxyXG5cclxuIGNvbnN0IFRhc2tzID0gbW9uZ29vc2UubW9kZWxzLlRhc2sgfHwgbW9uZ29vc2UubW9kZWwoJ1Rhc2snLCB0YXNrU2NoZW1hKTtcclxuIGV4cG9ydCB7VGFza3N9OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInRhc2tTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImNvbnRlbnQiLCJzdGF0dXMiLCJlbnVtIiwiZGVmYXVsdCIsInVzZXJJZCIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJhZGRUaW1lIiwiRGF0ZSIsIm5vdyIsIlRhc2tzIiwibW9kZWxzIiwiVGFzayIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/model/task.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/ms","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/jws","vendor-chunks/lodash.once","vendor-chunks/jwa","vendor-chunks/lodash.isinteger","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftasks%2Froute&page=%2Fapi%2Ftasks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2Froute.js&appDir=F%3A%5CGitHub%5Cnet-work-manager%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CGitHub%5Cnet-work-manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();