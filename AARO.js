/**
@timeandTid

AAron

AARO.js a moudle importer for khan academy
**/

//Mian 

var _S = document.createElement("script");
_S.src = "https://www.khanacademy.org/api/internal/scratchpads/" + pgid + "?callback=_m";
document.body.appendChild(_S);
var _s = sessionStorage,
	_c, _m = d => _s.setItem("_", d.revision.code);
_c = _s.getItem `_`;
eval(_c);
_s.removeItem `_`;

console.error("not done just in 0.000000001 sec:D");
console.error("%chehehehe", "background-color: green;");
console.log("%cimported sucess", "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)");
