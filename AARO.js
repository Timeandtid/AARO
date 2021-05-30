/**
@timeandTid

AAron

AARO.js a moudle importer for khan academy
**/

//Mian 

 var _S = document.createElement("script");
 _S.src = "https://www.khanacademy.org/api/internal/scratchpads/6119752722235392?callback=_m";
 document.body.appendChild(_S);
 var _s = sessionStorage,
 	_c, _m = d => _s.setItem("_", d.revision.code);
 _c = _s.getItem `_`;
 eval(_c);
 _s.removeItem `_`;
