/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ (() => {

eval("\n//  kaart :  https://opendata.brussel.be/explore/embed/dataset/musea-in-brussel/map/?location=12,50.87997,4.36569\n\nasync function getAllinfo() {\n    let response = await fetch('https://opendata.brussels.be/api/records/1.0/search/?dataset=museums-in-brussels&q=')\n    return await response.json()\n    .then(data => {\n    console.log(data)\n    let content = document.getElementById(\"data\")\n    let info = data.records[0]\n    \n    content.innerHTML += `\n    <h1> ${info.fields.naam_van_het_museum}</h1>\n    <p> ${info.fields.adres}</p>\n    <p> ${info.fields.adresse}</p>\n    <p> ${info.fields.e_mail}</p>\n    <p> ${info.fields.facebook}</p>`\n    \n    })\n    }\n    \n    getAllinfo();\n\n\n    \n\n//# sourceURL=webpack://web2-frontend-hajarlamrisaifi/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/script.js"]();
/******/ 	
/******/ })()
;