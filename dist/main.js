/*! For license information please see main.js.LICENSE.txt */
(()=>{var __webpack_modules__={"./src/index.js":()=>{eval("// import \"./style.css\";\n\nconst btn = document.querySelector('.btn-get-json');\nconst content = document.querySelector('.json-info');\n\nbtn.addEventListener('click', ()=>{\n  fetch('http://localhost:3000/profiles/')\n    .then(response => response.json())\n    .then(json => {\n      json.forEach(element => {\n        const p = document.createElement('p');\n        p.innerHTML = `Id ${element.id} - Name ${element.name}`;\n        content.appendChild(p);\n      });\n  }\n)\n\n});\n\n\n\n//# sourceURL=webpack://e13/./src/index.js?")}},__webpack_exports__={};__webpack_modules__["./src/index.js"]()})();