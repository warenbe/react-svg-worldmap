"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[581],{8922:function(e,n,t){t.d(n,{B:function(){return a},t:function(){return u}});var a=[{country:"cn",value:1389618778},{country:"in",value:1311559204},{country:"us",value:331883986},{country:"id",value:264935824},{country:"br",value:210301591},{country:"ng",value:208679114},{country:"ru",value:141944641},{country:"mx",value:127318112}],u=[{country:"cn",value:9770.8},{country:"in",value:2010},{country:"us",value:62794.6},{country:"id",value:3893.6},{country:"br",value:8920.8},{country:"ng",value:2028.2},{country:"ru",value:11288.9},{country:"mx",value:9673.4}]},334:function(e,n,t){t.r(n),t.d(n,{default:function(){return s}});var a=t(7378),u=t(5875),l=t(5644),r=t(5646),o=t(8922);function i(){var e=(0,a.useState)({cName:"Select Country",iso:"",val:"",pre:"",suff:""}),n=e[0],t=e[1];return a.createElement(a.Fragment,null,a.createElement(r.ZP,{title:"The ten highest GDP per capita countries",data:o.B,onClickFunction:function(e,n,a,u){var l=function(e,n){for(var t=[{value:1,symbol:""},{value:1e3,symbol:" thousand "},{value:1e6,symbol:" million "},{value:1e9,symbol:" billion "}],a=/\.0+$|(\.[0-9]*[1-9])0+$/,u=t.length-1;u>0;u--)if(e>=t[u].value)return(e/t[u].value).toFixed(n).replace(a,"$1")+t[u].symbol}(parseInt(u,10),2);t({cName:n,iso:a,val:l,pre:"",suff:""})}}),a.createElement("ul",null,a.createElement("li",null,"Country: ",n.cName),a.createElement("li",null,"ISO Code: ",n.iso),a.createElement("li",null,"GDP per capita: ",n.val)))}var c=t(2496);function s(){return a.createElement(u.Z,{title:"Onclick action example"},a.createElement("div",{className:c.Z.main},a.createElement(i,null),a.createElement("div",{className:c.Z.code},a.createElement(l.Z,{className:"language-tsx"},"import React, {useState} from 'react';\nimport WorldMap from 'react-svg-worldmap';\nimport {populationData} from '../data/CountryData';\n\n// E.g. format the number 1000000 to \"1 thousand\"\nconst formattedNumber = (num: number, digits: number) => {\n  const si = [\n    {value: 1, symbol: ''},\n    {value: 1e3, symbol: ' thousand '},\n    {value: 1e6, symbol: ' million '},\n    {value: 1e9, symbol: ' billion '},\n  ];\n  const rx = /\\.0+$|(\\.[0-9]*[1-9])0+$/;\n  for (let i = si.length - 1; i > 0; i--) {\n    if (num >= si[i].value) {\n      return (\n        (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol\n      );\n    }\n  }\n};\n\nexport default function App(): JSX.Element {\n  const [state, setState] = useState({\n    cName: 'Select Country',\n    iso: '',\n    val: '',\n    pre: '',\n    suff: '',\n  });\n\n  const clickAction = (\n    event: React.MouseEvent<SVGElement, MouseEvent>,\n    countryName: string,\n    isoCode: string,\n    value: string,\n  ) => {\n    const numberValue = parseInt(value, 10);\n    const fNumber = formattedNumber(numberValue, 2);\n    setState({\n      cName: countryName,\n      iso: isoCode,\n      val: fNumber,\n      pre: '',\n      suff: '',\n    });\n  };\n\n  return (\n    <>\n      <WorldMap\n        title=\"The ten highest GDP per capita countries\"\n        data={populationData}\n        onClickFunction={clickAction}\n      />\n      <ul>\n        <li>Country: {state.cName}</li>\n        <li>ISO Code: {state.iso}</li>\n        <li>GDP per capita: {state.val}</li>\n      </ul>\n    </>\n  );\n}\n"))))}}}]);