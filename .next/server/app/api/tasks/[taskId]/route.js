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
exports.id = "app/api/tasks/[taskId]/route";
exports.ids = ["app/api/tasks/[taskId]/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute&page=%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute.js&appDir=F%3A%5CGitHub%5Cnet-work-manager%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CGitHub%5Cnet-work-manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute&page=%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute.js&appDir=F%3A%5CGitHub%5Cnet-work-manager%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CGitHub%5Cnet-work-manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var F_GitHub_net_work_manager_src_app_api_tasks_taskId_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/tasks/[taskId]/route.js */ \"(rsc)/./src/app/api/tasks/[taskId]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/tasks/[taskId]/route\",\n        pathname: \"/api/tasks/[taskId]\",\n        filename: \"route\",\n        bundlePath: \"app/api/tasks/[taskId]/route\"\n    },\n    resolvedPagePath: \"F:\\\\GitHub\\\\net-work-manager\\\\src\\\\app\\\\api\\\\tasks\\\\[taskId]\\\\route.js\",\n    nextConfigOutput,\n    userland: F_GitHub_net_work_manager_src_app_api_tasks_taskId_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ0YXNrcyUyRiU1QnRhc2tJZCU1RCUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGdGFza3MlMkYlNUJ0YXNrSWQlNUQlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZ0YXNrcyUyRiU1QnRhc2tJZCU1RCUyRnJvdXRlLmpzJmFwcERpcj1GJTNBJTVDR2l0SHViJTVDbmV0LXdvcmstbWFuYWdlciU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9RiUzQSU1Q0dpdEh1YiU1Q25ldC13b3JrLW1hbmFnZXImaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3NCO0FBQ25HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJGOlxcXFxHaXRIdWJcXFxcbmV0LXdvcmstbWFuYWdlclxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx0YXNrc1xcXFxbdGFza0lkXVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdGFza3MvW3Rhc2tJZF0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS90YXNrcy9bdGFza0lkXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvdGFza3MvW3Rhc2tJZF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJGOlxcXFxHaXRIdWJcXFxcbmV0LXdvcmstbWFuYWdlclxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx0YXNrc1xcXFxbdGFza0lkXVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute&page=%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute.js&appDir=F%3A%5CGitHub%5Cnet-work-manager%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CGitHub%5Cnet-work-manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ "(rsc)/./src/app/api/tasks/[taskId]/route.js":
/*!*********************************************!*\
  !*** ./src/app/api/tasks/[taskId]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _app_helper_messageResponse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/helper/messageResponse */ \"(rsc)/./src/app/helper/messageResponse.js\");\n/* harmony import */ var _app_model_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/model/task */ \"(rsc)/./src/app/model/task.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _app_helper_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/helper/db */ \"(rsc)/./src/app/helper/db.js\");\n\n\n\n\n// get single tasks\nasync function GET(request, { params }) {\n    await (0,_app_helper_db__WEBPACK_IMPORTED_MODULE_3__.connectDB)();\n    const { taskId } = params;\n    const task = await _app_model_task__WEBPACK_IMPORTED_MODULE_1__.Tasks.findById(taskId);\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json(task);\n}\n//update task by id\nasync function PUT(request, { params }) {\n    await (0,_app_helper_db__WEBPACK_IMPORTED_MODULE_3__.connectDB)();\n    const { taskId } = await params;\n    console.log(taskId);\n    const { title, content, status } = await request.json();\n    try {\n        const task = await _app_model_task__WEBPACK_IMPORTED_MODULE_1__.Tasks.findById(taskId);\n        console.log(task, 'task from db');\n        if (!task) {\n            return (0,_app_helper_messageResponse__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Task not found', 404, false);\n        }\n        task.title = title;\n        task.content = content;\n        task.status = status;\n        const updateTask = await task.save();\n        return (0,_app_helper_messageResponse__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Task updated successfully', 201, true);\n    } catch (error) {\n        console.log(error);\n        console.log(error);\n        return (0,_app_helper_messageResponse__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Task updated failed', 404, false);\n    }\n}\n//delete task by id\nasync function DELETE(request, { params }) {\n    await (0,_app_helper_db__WEBPACK_IMPORTED_MODULE_3__.connectDB)();\n    const { taskId } = params;\n    try {\n        await _app_model_task__WEBPACK_IMPORTED_MODULE_1__.Tasks.findByIdAndDelete(taskId);\n        return (0,_app_helper_messageResponse__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Task deleted successfully', 201, true);\n    } catch (error) {\n        return (0,_app_helper_messageResponse__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Task deleted failed', 404, false);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS90YXNrcy9bdGFza0lkXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJEO0FBQ2xCO0FBQ0U7QUFDQztBQUU1QyxtQkFBbUI7QUFDWixlQUFnQkksSUFBSUMsT0FBTyxFQUFHLEVBQUNDLE1BQU0sRUFBQztJQUMzQyxNQUFNSCx5REFBU0E7SUFDakIsTUFBTSxFQUFDSSxNQUFNLEVBQUMsR0FBR0Q7SUFFakIsTUFBTUUsT0FBTyxNQUFNUCxrREFBS0EsQ0FBQ1EsUUFBUSxDQUFDRjtJQUVsQyxPQUFPTCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDRjtBQUN6QjtBQUdBLG1CQUFtQjtBQUNaLGVBQWVHLElBQUlOLE9BQU8sRUFBRSxFQUFDQyxNQUFNLEVBQUM7SUFDekMsTUFBTUgseURBQVNBO0lBQ2YsTUFBTSxFQUFDSSxNQUFNLEVBQUMsR0FBRyxNQUFNRDtJQUN6Qk0sUUFBUUMsR0FBRyxDQUFDTjtJQUNWLE1BQU0sRUFBQ08sS0FBSyxFQUFHQyxPQUFPLEVBQUVDLE1BQU0sRUFBQyxHQUFHLE1BQU1YLFFBQVFLLElBQUk7SUFFcEQsSUFBSTtRQUNGLE1BQU1GLE9BQU8sTUFBTVAsa0RBQUtBLENBQUNRLFFBQVEsQ0FBQ0Y7UUFDbENLLFFBQVFDLEdBQUcsQ0FBQ0wsTUFBTztRQUNuQixJQUFJLENBQUNBLE1BQU07WUFDVCxPQUFPUix1RUFBZUEsQ0FBQyxrQkFBa0IsS0FBSztRQUNoRDtRQUVBUSxLQUFLTSxLQUFLLEdBQUdBO1FBQ2JOLEtBQUtPLE9BQU8sR0FBR0E7UUFDZlAsS0FBS1EsTUFBTSxHQUFHQTtRQUVkLE1BQU1DLGFBQWEsTUFBTVQsS0FBS1UsSUFBSTtRQUVsQyxPQUFPbEIsdUVBQWVBLENBQUMsNkJBQTZCLEtBQUs7SUFDM0QsRUFBRSxPQUFPbUIsT0FBTztRQUNkUCxRQUFRQyxHQUFHLENBQUNNO1FBQ1pQLFFBQVFDLEdBQUcsQ0FBQ007UUFDWixPQUFPbkIsdUVBQWVBLENBQUMsdUJBQXVCLEtBQUs7SUFDckQ7QUFDRjtBQUVBLG1CQUFtQjtBQUVaLGVBQWdCb0IsT0FBT2YsT0FBTyxFQUFHLEVBQUNDLE1BQU0sRUFBQztJQUM5QyxNQUFNSCx5REFBU0E7SUFDZixNQUFNLEVBQUNJLE1BQU0sRUFBQyxHQUFHRDtJQUVqQixJQUFJO1FBQ0osTUFBTUwsa0RBQUtBLENBQUNvQixpQkFBaUIsQ0FBQ2Q7UUFDOUIsT0FBT1AsdUVBQWVBLENBQUMsNkJBQTZCLEtBQUs7SUFDekQsRUFBRSxPQUFPbUIsT0FBTztRQUNkLE9BQU9uQix1RUFBZUEsQ0FBQyx1QkFBdUIsS0FBSztJQUNyRDtBQUNBIiwic291cmNlcyI6WyJGOlxcR2l0SHViXFxuZXQtd29yay1tYW5hZ2VyXFxzcmNcXGFwcFxcYXBpXFx0YXNrc1xcW3Rhc2tJZF1cXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZXNzYWdlUmVzcG9uc2UgZnJvbSBcIkAvYXBwL2hlbHBlci9tZXNzYWdlUmVzcG9uc2VcIjtcclxuaW1wb3J0IHsgVGFza3MgfSBmcm9tIFwiQC9hcHAvbW9kZWwvdGFza1wiO1xyXG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSBcIkAvYXBwL2hlbHBlci9kYlwiO1xyXG5cclxuLy8gZ2V0IHNpbmdsZSB0YXNrc1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gIEdFVChyZXF1ZXN0ICwge3BhcmFtc30pe1xyXG4gIGF3YWl0IGNvbm5lY3REQigpO1xyXG5jb25zdCB7dGFza0lkfSA9IHBhcmFtcztcclxuXHJcbmNvbnN0IHRhc2sgPSBhd2FpdCBUYXNrcy5maW5kQnlJZCh0YXNrSWQpO1xyXG5cclxucmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHRhc2spO1xyXG59XHJcblxyXG5cclxuLy91cGRhdGUgdGFzayBieSBpZFxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcXVlc3QgLHtwYXJhbXN9KSB7XHJcbiAgYXdhaXQgY29ubmVjdERCKCk7XHJcbiAgY29uc3Qge3Rhc2tJZH0gPSBhd2FpdCBwYXJhbXM7XHJcbmNvbnNvbGUubG9nKHRhc2tJZCk7XHJcbiAgY29uc3Qge3RpdGxlICwgY29udGVudCwgc3RhdHVzfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgdGFzayA9IGF3YWl0IFRhc2tzLmZpbmRCeUlkKHRhc2tJZCk7XHJcbiAgICBjb25zb2xlLmxvZyh0YXNrICwgJ3Rhc2sgZnJvbSBkYicpO1xyXG4gICAgaWYgKCF0YXNrKSB7XHJcbiAgICAgIHJldHVybiBtZXNzYWdlUmVzcG9uc2UoJ1Rhc2sgbm90IGZvdW5kJywgNDA0LCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGFzay50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGFzay5jb250ZW50ID0gY29udGVudDtcclxuICAgIHRhc2suc3RhdHVzID0gc3RhdHVzO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVRhc2sgPSBhd2FpdCB0YXNrLnNhdmUoKTtcclxuXHJcbiAgICByZXR1cm4gbWVzc2FnZVJlc3BvbnNlKCdUYXNrIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5JywgMjAxLCB0cnVlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICByZXR1cm4gbWVzc2FnZVJlc3BvbnNlKCdUYXNrIHVwZGF0ZWQgZmFpbGVkJywgNDA0LCBmYWxzZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vL2RlbGV0ZSB0YXNrIGJ5IGlkXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gIERFTEVURShyZXF1ZXN0ICwge3BhcmFtc30pe1xyXG4gIGF3YWl0IGNvbm5lY3REQigpO1xyXG4gIGNvbnN0IHt0YXNrSWR9ID0gcGFyYW1zO1xyXG4gIFxyXG4gIHRyeSB7XHJcbiAgYXdhaXQgVGFza3MuZmluZEJ5SWRBbmREZWxldGUodGFza0lkKTtcclxuICByZXR1cm4gbWVzc2FnZVJlc3BvbnNlKCdUYXNrIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5JywgMjAxLCB0cnVlKTsgIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4gbWVzc2FnZVJlc3BvbnNlKCdUYXNrIGRlbGV0ZWQgZmFpbGVkJywgNDA0LCBmYWxzZSk7XHJcbiAgfVxyXG4gIH0iXSwibmFtZXMiOlsibWVzc2FnZVJlc3BvbnNlIiwiVGFza3MiLCJOZXh0UmVzcG9uc2UiLCJjb25uZWN0REIiLCJHRVQiLCJyZXF1ZXN0IiwicGFyYW1zIiwidGFza0lkIiwidGFzayIsImZpbmRCeUlkIiwianNvbiIsIlBVVCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsImNvbnRlbnQiLCJzdGF0dXMiLCJ1cGRhdGVUYXNrIiwic2F2ZSIsImVycm9yIiwiREVMRVRFIiwiZmluZEJ5SWRBbmREZWxldGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/tasks/[taskId]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/helper/db.js":
/*!******************************!*\
  !*** ./src/app/helper/db.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\n// export const connectDb = async (request)=>{\n//   // Connect to MongoDB\n//   try {\n//   const {connection} = await mongoose.connect(process.env.MONGO_DB_URL ,{dbName: \"work-manager\"})\n//     console.log(\"Db connection established .............,\");\n//   } catch (error) {\n//   console.log(error , \"Error connecting to MongoDB\");\n//   }\n// }\nconst connectDB = async ()=>{\n    try {\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) {\n            console.log((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState);\n            console.log('Already connected to MongoDB');\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_DB_URL, {\n            dbName: \"work-manager\"\n        }, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true\n        });\n        console.log('MongoDB connected');\n    } catch (error) {\n        console.error('MongoDB connection error:', error);\n        throw new Error('Database connection failed');\n    }\n};\nconnectDB();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2hlbHBlci9kYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUM7QUFHakMsOENBQThDO0FBQzlDLDBCQUEwQjtBQUMxQixVQUFVO0FBQ1Ysb0dBQW9HO0FBQ3BHLCtEQUErRDtBQUUvRCxzQkFBc0I7QUFDdEIsd0RBQXdEO0FBQ3hELE1BQU07QUFFTixJQUFJO0FBR0ksTUFBTUMsWUFBWTtJQUN4QixJQUFJO1FBQ0YsSUFBSUQsNkRBQW9CLENBQUMsRUFBRSxDQUFDRyxVQUFVLEVBQUU7WUFDdENDLFFBQVFDLEdBQUcsQ0FBQ0wsNkRBQW9CLENBQUMsRUFBRSxDQUFDRyxVQUFVO1lBQzlDQyxRQUFRQyxHQUFHLENBQUM7WUFDWjtRQUNGO1FBQ0EsTUFBTUwsdURBQWdCLENBQUNPLFFBQVFDLEdBQUcsQ0FBQ0MsWUFBWSxFQUFFO1lBQUNDLFFBQVE7UUFBYyxHQUFHO1lBQ3pFQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtRQUN0QjtRQUNBUixRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9RLE9BQU87UUFDZFQsUUFBUVMsS0FBSyxDQUFDLDZCQUE2QkE7UUFDM0MsTUFBTSxJQUFJQyxNQUFNO0lBQ2xCO0FBQ0YsRUFBRTtBQUVGYiIsInNvdXJjZXMiOlsiRjpcXEdpdEh1YlxcbmV0LXdvcmstbWFuYWdlclxcc3JjXFxhcHBcXGhlbHBlclxcZGIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuXG4vLyBleHBvcnQgY29uc3QgY29ubmVjdERiID0gYXN5bmMgKHJlcXVlc3QpPT57XG4vLyAgIC8vIENvbm5lY3QgdG8gTW9uZ29EQlxuLy8gICB0cnkge1xuLy8gICBjb25zdCB7Y29ubmVjdGlvbn0gPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX0RCX1VSTCAse2RiTmFtZTogXCJ3b3JrLW1hbmFnZXJcIn0pXG4vLyAgICAgY29uc29sZS5sb2coXCJEYiBjb25uZWN0aW9uIGVzdGFibGlzaGVkIC4uLi4uLi4uLi4uLi4sXCIpO1xuICAgIFxuLy8gICB9IGNhdGNoIChlcnJvcikge1xuLy8gICBjb25zb2xlLmxvZyhlcnJvciAsIFwiRXJyb3IgY29ubmVjdGluZyB0byBNb25nb0RCXCIpO1xuLy8gICB9XG5cbi8vIH1cblxuXG4gZXhwb3J0IGNvbnN0IGNvbm5lY3REQiA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xuICAgICAgY29uc29sZS5sb2cobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSlcbiAgICAgIGNvbnNvbGUubG9nKCdBbHJlYWR5IGNvbm5lY3RlZCB0byBNb25nb0RCJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fREJfVVJMICx7ZGJOYW1lOiBcIndvcmstbWFuYWdlclwifSAse1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdNb25nb0RCIGNvbm5lY3RlZCcpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ01vbmdvREIgY29ubmVjdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdEYXRhYmFzZSBjb25uZWN0aW9uIGZhaWxlZCcpO1xuICB9XG59O1xuXG5jb25uZWN0REIoKTsgIFxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdERCIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09fREJfVVJMIiwiZGJOYW1lIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwiZXJyb3IiLCJFcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/helper/db.js\n");

/***/ }),

/***/ "(rsc)/./src/app/helper/messageResponse.js":
/*!*******************************************!*\
  !*** ./src/app/helper/messageResponse.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\nconst messageResponse = (message, statusCode, successCode)=>{\n    return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n        success: successCode,\n        message: message\n    }, {\n        status: statusCode\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (messageResponse);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2hlbHBlci9tZXNzYWdlUmVzcG9uc2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkM7QUFFM0MsTUFBTUMsa0JBQWtCLENBQUNDLFNBQVFDLFlBQWNDO0lBQzdDLE9BQ0VKLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7UUFDaEJDLFNBQVFGO1FBQ1BGLFNBQVFBO0lBQ1QsR0FBRztRQUNESyxRQUFRSjtJQUNWO0FBRU47QUFDQSxpRUFBZUYsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsiRjpcXEdpdEh1YlxcbmV0LXdvcmstbWFuYWdlclxcc3JjXFxhcHBcXGhlbHBlclxcbWVzc2FnZVJlc3BvbnNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuY29uc3QgbWVzc2FnZVJlc3BvbnNlID0gKG1lc3NhZ2Usc3RhdHVzQ29kZSAgLCBzdWNjZXNzQ29kZSkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIE5leHRSZXNwb25zZS5qc29uKHtcclxuICAgICAgc3VjY2VzczpzdWNjZXNzQ29kZSxcclxuICAgICAgIG1lc3NhZ2U6bWVzc2FnZSxcclxuICAgICAgfSwge1xyXG4gICAgICAgIHN0YXR1czogc3RhdHVzQ29kZSxcclxuICAgICAgfSlcclxuICApXHJcbn07ICBcclxuZXhwb3J0IGRlZmF1bHQgbWVzc2FnZVJlc3BvbnNlOyJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJtZXNzYWdlUmVzcG9uc2UiLCJtZXNzYWdlIiwic3RhdHVzQ29kZSIsInN1Y2Nlc3NDb2RlIiwianNvbiIsInN1Y2Nlc3MiLCJzdGF0dXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/helper/messageResponse.js\n");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute&page=%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftasks%2F%5BtaskId%5D%2Froute.js&appDir=F%3A%5CGitHub%5Cnet-work-manager%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CGitHub%5Cnet-work-manager&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();