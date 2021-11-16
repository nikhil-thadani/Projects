/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/http.ts":
/*!*********************!*\
  !*** ./src/http.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendRequest": () => (/* binding */ SendRequest)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class SendRequest {
    constructor() {
        this.data = [];
        this.fetchData = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`https://covid-19-coronavirus-statistics2.p.rapidapi.com/countriesData`, {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "covid-19-coronavirus-statistics2.p.rapidapi.com",
                    "x-rapidapi-key": "f978026baemsh05e1104ea025665p14e7e1jsnab4674ce7e6a",
                },
            })
                .then((res) => res.json())
                // .then((rec) => console.log(rec.result[0]))
                .then((rec) => {
                return rec.result.map((d) => this.setData(d));
            })
                .catch((err) => console.error(err));
            return this.getData();
        });
    }
    getData() {
        return this.data;
    }
    setData(p) {
        this.data.push(p);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http */ "./src/http.ts");

// const req = new SendRequest();
// const d = req.fetchData().then((d) => JSON.stringify(d)).then(d);
// d.then(data => {
//     data.for
// })
const req = new _http__WEBPACK_IMPORTED_MODULE_0__.SendRequest();
const d = req.fetchData().then((d) => {
    //   d.map((da) => console.log(da));
    JSON.stringify(d);
    const keys = Object.keys(d[0]);
    const topRow = document.createElement("tr");
    topRow.style.background = "#2e2d4d";
    topRow.style.color = "#fff";
    const table = document.getElementById("table");
    table === null || table === void 0 ? void 0 : table.appendChild(topRow);
    keys.forEach((key) => {
        const th = document.createElement("th");
        th.style.background = "#337357";
        th.style.textTransform = "capitalize";
        th.style.padding = "10px";
        th.textContent = key;
        topRow.appendChild(th);
    });
    d.forEach((elm) => {
        const keys = Object.keys(elm);
        const row = document.createElement("tr");
        row.style.background = "#eeeee4";
        // row.style.color = "#FFF";
        keys.forEach((key) => {
            const td = document.createElement("td");
            td.textContent = elm[key];
            row.appendChild(td);
        });
        table === null || table === void 0 ? void 0 : table.appendChild(row);
    });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsNEJBQTRCLCtEQUErRCxpQkFBaUI7QUFDNUc7QUFDQSxvQ0FBb0MsTUFBTSwrQkFBK0IsWUFBWTtBQUNyRixtQ0FBbUMsTUFBTSxtQ0FBbUMsWUFBWTtBQUN4RixnQ0FBZ0M7QUFDaEM7QUFDQSxLQUFLO0FBQ0w7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ25DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLGdCQUFnQiw4Q0FBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbnZhcy8uL3NyYy9odHRwLnRzIiwid2VicGFjazovL2NhbnZhcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYW52YXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhbnZhcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhbnZhcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NhbnZhcy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbmV4cG9ydCBjbGFzcyBTZW5kUmVxdWVzdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmRhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLmZldGNoRGF0YSA9ICgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB5aWVsZCBmZXRjaChgaHR0cHM6Ly9jb3ZpZC0xOS1jb3JvbmF2aXJ1cy1zdGF0aXN0aWNzMi5wLnJhcGlkYXBpLmNvbS9jb3VudHJpZXNEYXRhYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwieC1yYXBpZGFwaS1ob3N0XCI6IFwiY292aWQtMTktY29yb25hdmlydXMtc3RhdGlzdGljczIucC5yYXBpZGFwaS5jb21cIixcclxuICAgICAgICAgICAgICAgICAgICBcIngtcmFwaWRhcGkta2V5XCI6IFwiZjk3ODAyNmJhZW1zaDA1ZTExMDRlYTAyNTY2NXAxNGU3ZTFqc25hYjQ2NzRjZTdlNmFcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLy8gLnRoZW4oKHJlYykgPT4gY29uc29sZS5sb2cocmVjLnJlc3VsdFswXSkpXHJcbiAgICAgICAgICAgICAgICAudGhlbigocmVjKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVjLnJlc3VsdC5tYXAoKGQpID0+IHRoaXMuc2V0RGF0YShkKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShwKSB7XHJcbiAgICAgICAgdGhpcy5kYXRhLnB1c2gocCk7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBTZW5kUmVxdWVzdCB9IGZyb20gXCIuL2h0dHBcIjtcclxuLy8gY29uc3QgcmVxID0gbmV3IFNlbmRSZXF1ZXN0KCk7XHJcbi8vIGNvbnN0IGQgPSByZXEuZmV0Y2hEYXRhKCkudGhlbigoZCkgPT4gSlNPTi5zdHJpbmdpZnkoZCkpLnRoZW4oZCk7XHJcbi8vIGQudGhlbihkYXRhID0+IHtcclxuLy8gICAgIGRhdGEuZm9yXHJcbi8vIH0pXHJcbmNvbnN0IHJlcSA9IG5ldyBTZW5kUmVxdWVzdCgpO1xyXG5jb25zdCBkID0gcmVxLmZldGNoRGF0YSgpLnRoZW4oKGQpID0+IHtcclxuICAgIC8vICAgZC5tYXAoKGRhKSA9PiBjb25zb2xlLmxvZyhkYSkpO1xyXG4gICAgSlNPTi5zdHJpbmdpZnkoZCk7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZFswXSk7XHJcbiAgICBjb25zdCB0b3BSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICB0b3BSb3cuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzJlMmQ0ZFwiO1xyXG4gICAgdG9wUm93LnN0eWxlLmNvbG9yID0gXCIjZmZmXCI7XHJcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFibGVcIik7XHJcbiAgICB0YWJsZSA9PT0gbnVsbCB8fCB0YWJsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFibGUuYXBwZW5kQ2hpbGQodG9wUm93KTtcclxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgdGguc3R5bGUuYmFja2dyb3VuZCA9IFwiIzMzNzM1N1wiO1xyXG4gICAgICAgIHRoLnN0eWxlLnRleHRUcmFuc2Zvcm0gPSBcImNhcGl0YWxpemVcIjtcclxuICAgICAgICB0aC5zdHlsZS5wYWRkaW5nID0gXCIxMHB4XCI7XHJcbiAgICAgICAgdGgudGV4dENvbnRlbnQgPSBrZXk7XHJcbiAgICAgICAgdG9wUm93LmFwcGVuZENoaWxkKHRoKTtcclxuICAgIH0pO1xyXG4gICAgZC5mb3JFYWNoKChlbG0pID0+IHtcclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZWxtKTtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgcm93LnN0eWxlLmJhY2tncm91bmQgPSBcIiNlZWVlZTRcIjtcclxuICAgICAgICAvLyByb3cuc3R5bGUuY29sb3IgPSBcIiNGRkZcIjtcclxuICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgdGQudGV4dENvbnRlbnQgPSBlbG1ba2V5XTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YWJsZSA9PT0gbnVsbCB8fCB0YWJsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFibGUuYXBwZW5kQ2hpbGQocm93KTtcclxuICAgIH0pO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9