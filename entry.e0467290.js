import{S as V,i as S,s as F,e as T,a as L,t as ee,c as y,b as A,d as b,f as k,g as te,h as N,j as Z,k as I,l as m,m as ce,n as q,o as se,p as ne,q as re,r as C,u as $,v as ie,w as de,x as he,y as ge,z as pe}from"./chunks/chunk.890f7155.js";/* empty css                     */var M={},R={};(function(e){const t=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",s=t+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",i="["+t+"]["+s+"]*",n=new RegExp("^"+i+"$"),r=function(l,o){const u=[];let f=o.exec(l);for(;f;){const c=[];c.startIndex=o.lastIndex-f[0].length;const d=f.length;for(let h=0;h<d;h++)c.push(f[h]);u.push(c),f=o.exec(l)}return u},a=function(l){const o=n.exec(l);return!(o===null||typeof o>"u")};e.isExist=function(l){return typeof l<"u"},e.isEmptyObject=function(l){return Object.keys(l).length===0},e.merge=function(l,o,u){if(o){const f=Object.keys(o),c=f.length;for(let d=0;d<c;d++)u==="strict"?l[f[d]]=[o[f[d]]]:l[f[d]]=o[f[d]]}},e.getValue=function(l){return e.isExist(l)?l:""},e.isName=a,e.getAllMatches=r,e.nameRegexp=i})(R);const B=R,Ne={allowBooleanAttributes:!1,unpairedTags:[]};M.validate=function(e,t){t=Object.assign({},Ne,t);const s=[];let i=!1,n=!1;e[0]==="\uFEFF"&&(e=e.substr(1));for(let r=0;r<e.length;r++)if(e[r]==="<"&&e[r+1]==="?"){if(r+=2,r=z(e,r),r.err)return r}else if(e[r]==="<"){let a=r;if(r++,e[r]==="!"){r=J(e,r);continue}else{let l=!1;e[r]==="/"&&(l=!0,r++);let o="";for(;r<e.length&&e[r]!==">"&&e[r]!==" "&&e[r]!=="	"&&e[r]!==`
`&&e[r]!=="\r";r++)o+=e[r];if(o=o.trim(),o[o.length-1]==="/"&&(o=o.substring(0,o.length-1),r--),!we(o)){let c;return o.trim().length===0?c="Invalid space after '<'.":c="Tag '"+o+"' is an invalid name.",g("InvalidTag",c,p(e,r))}const u=me(e,r);if(u===!1)return g("InvalidAttr","Attributes for '"+o+"' have open quote.",p(e,r));let f=u.value;if(r=u.index,f[f.length-1]==="/"){const c=r-f.length;f=f.substring(0,f.length-1);const d=j(f,t);if(d===!0)i=!0;else return g(d.err.code,d.err.msg,p(e,c+d.err.line))}else if(l)if(u.tagClosed){if(f.trim().length>0)return g("InvalidTag","Closing tag '"+o+"' can't have attributes or invalid starting.",p(e,a));{const c=s.pop();if(o!==c.tagName){let d=p(e,c.tagStartPos);return g("InvalidTag","Expected closing tag '"+c.tagName+"' (opened in line "+d.line+", col "+d.col+") instead of closing tag '"+o+"'.",p(e,a))}s.length==0&&(n=!0)}}else return g("InvalidTag","Closing tag '"+o+"' doesn't have proper closing.",p(e,r));else{const c=j(f,t);if(c!==!0)return g(c.err.code,c.err.msg,p(e,r-f.length+c.err.line));if(n===!0)return g("InvalidXml","Multiple possible root nodes found.",p(e,r));t.unpairedTags.indexOf(o)!==-1||s.push({tagName:o,tagStartPos:a}),i=!0}for(r++;r<e.length;r++)if(e[r]==="<")if(e[r+1]==="!"){r++,r=J(e,r);continue}else if(e[r+1]==="?"){if(r=z(e,++r),r.err)return r}else break;else if(e[r]==="&"){const c=Ae(e,r);if(c==-1)return g("InvalidChar","char '&' is not expected.",p(e,r));r=c}else if(n===!0&&!Y(e[r]))return g("InvalidXml","Extra text at the end",p(e,r));e[r]==="<"&&r--}}else{if(Y(e[r]))continue;return g("InvalidChar","char '"+e[r]+"' is not expected.",p(e,r))}if(i){if(s.length==1)return g("InvalidTag","Unclosed tag '"+s[0].tagName+"'.",p(e,s[0].tagStartPos));if(s.length>0)return g("InvalidXml","Invalid '"+JSON.stringify(s.map(r=>r.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1})}else return g("InvalidXml","Start tag expected.",1);return!0};function Y(e){return e===" "||e==="	"||e===`
`||e==="\r"}function z(e,t){const s=t;for(;t<e.length;t++)if(e[t]=="?"||e[t]==" "){const i=e.substr(s,t-s);if(t>5&&i==="xml")return g("InvalidXml","XML declaration allowed only at the start of the document.",p(e,t));if(e[t]=="?"&&e[t+1]==">"){t++;break}else continue}return t}function J(e,t){if(e.length>t+5&&e[t+1]==="-"&&e[t+2]==="-"){for(t+=3;t<e.length;t++)if(e[t]==="-"&&e[t+1]==="-"&&e[t+2]===">"){t+=2;break}}else if(e.length>t+8&&e[t+1]==="D"&&e[t+2]==="O"&&e[t+3]==="C"&&e[t+4]==="T"&&e[t+5]==="Y"&&e[t+6]==="P"&&e[t+7]==="E"){let s=1;for(t+=8;t<e.length;t++)if(e[t]==="<")s++;else if(e[t]===">"&&(s--,s===0))break}else if(e.length>t+9&&e[t+1]==="["&&e[t+2]==="C"&&e[t+3]==="D"&&e[t+4]==="A"&&e[t+5]==="T"&&e[t+6]==="A"&&e[t+7]==="["){for(t+=8;t<e.length;t++)if(e[t]==="]"&&e[t+1]==="]"&&e[t+2]===">"){t+=2;break}}return t}const be='"',Ee="'";function me(e,t){let s="",i="",n=!1;for(;t<e.length;t++){if(e[t]===be||e[t]===Ee)i===""?i=e[t]:i!==e[t]||(i="");else if(e[t]===">"&&i===""){n=!0;break}s+=e[t]}return i!==""?!1:{value:s,index:t,tagClosed:n}}const Te=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");function j(e,t){const s=B.getAllMatches(e,Te),i={};for(let n=0;n<s.length;n++){if(s[n][1].length===0)return g("InvalidAttr","Attribute '"+s[n][2]+"' has no space in starting.",w(s[n]));if(s[n][3]!==void 0&&s[n][4]===void 0)return g("InvalidAttr","Attribute '"+s[n][2]+"' is without value.",w(s[n]));if(s[n][3]===void 0&&!t.allowBooleanAttributes)return g("InvalidAttr","boolean attribute '"+s[n][2]+"' is not allowed.",w(s[n]));const r=s[n][2];if(!Pe(r))return g("InvalidAttr","Attribute '"+r+"' is an invalid name.",w(s[n]));if(!i.hasOwnProperty(r))i[r]=1;else return g("InvalidAttr","Attribute '"+r+"' is repeated.",w(s[n]))}return!0}function ye(e,t){let s=/\d/;for(e[t]==="x"&&(t++,s=/[\da-fA-F]/);t<e.length;t++){if(e[t]===";")return t;if(!e[t].match(s))break}return-1}function Ae(e,t){if(t++,e[t]===";")return-1;if(e[t]==="#")return t++,ye(e,t);let s=0;for(;t<e.length;t++,s++)if(!(e[t].match(/\w/)&&s<20)){if(e[t]===";")break;return-1}return t}function g(e,t,s){return{err:{code:e,msg:t,line:s.line||s,col:s.col}}}function Pe(e){return B.isName(e)}function we(e){return B.isName(e)}function p(e,t){const s=e.substring(0,t).split(/\r?\n/);return{line:s.length,col:s[s.length-1].length+1}}function w(e){return e.startIndex+e[1].length}var X={};const oe={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0},tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1},Oe=function(e){return Object.assign({},oe,e)};X.buildOptions=Oe;X.defaultOptions=oe;class Ce{constructor(t){this.tagname=t,this.child=[],this[":@"]={}}add(t,s){this.child.push({[t]:s})}addChild(t){t[":@"]&&Object.keys(t[":@"]).length>0?this.child.push({[t.tagname]:t.child,[":@"]:t[":@"]}):this.child.push({[t.tagname]:t.child})}}var xe=Ce;function $e(e,t){const s={};if(e[t+3]==="O"&&e[t+4]==="C"&&e[t+5]==="T"&&e[t+6]==="Y"&&e[t+7]==="P"&&e[t+8]==="E"){t=t+9;let i=1,n=!1,r=!1,a=!1,l="";for(;t<e.length;t++)if(e[t]==="<"){if(n&&e[t+1]==="!"&&e[t+2]==="E"&&e[t+3]==="N"&&e[t+4]==="T"&&e[t+5]==="I"&&e[t+6]==="T"&&e[t+7]==="Y")t+=7,r=!0;else if(n&&e[t+1]==="!"&&e[t+2]==="E"&&e[t+3]==="L"&&e[t+4]==="E"&&e[t+5]==="M"&&e[t+6]==="E"&&e[t+7]==="N"&&e[t+8]==="T")t+=8;else if(e[t+1]==="!"&&e[t+2]==="-"&&e[t+3]==="-")a=!0;else throw new Error("Invalid DOCTYPE");i++,l=""}else if(e[t]===">"){if(a)if(e[t-1]==="-"&&e[t-2]==="-")a=!1;else throw new Error("Invalid XML comment in DOCTYPE");else r&&(ve(l,s),r=!1);if(i--,i===0)break}else e[t]==="["?n=!0:l+=e[t];if(i!==0)throw new Error("Unclosed DOCTYPE")}else throw new Error("Invalid Tag instead of DOCTYPE");return{entities:s,i:t}}const Ie=RegExp(`^\\s([a-zA-z0-0]+)[ 	](['"])([^&]+)\\2`);function ve(e,t){const s=Ie.exec(e);s&&(t[s[1]]={regx:RegExp(`&${s[1]};`,"g"),val:s[3]})}var _e=$e;const Ve=/^[-+]?0x[a-fA-F0-9]+$/,Se=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt);!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);const Fe={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};function Le(e,t={}){if(t=Object.assign({},Fe,t),!e||typeof e!="string")return e;let s=e.trim();if(t.skipLike!==void 0&&t.skipLike.test(s))return e;if(t.hex&&Ve.test(s))return Number.parseInt(s,16);{const i=Se.exec(s);if(i){const n=i[1],r=i[2];let a=ke(i[3]);const l=i[4]||i[6];if(!t.leadingZeros&&r.length>0&&n&&s[2]!==".")return e;if(!t.leadingZeros&&r.length>0&&!n&&s[1]!==".")return e;{const o=Number(s),u=""+o;return u.search(/[eE]/)!==-1||l?t.eNotation?o:e:s.indexOf(".")!==-1?u==="0"&&a===""||u===a||n&&u==="-"+a?o:e:r?a===u||n+a===u?o:e:s===u||s===n+u?o:e}}else return e}}function ke(e){return e&&e.indexOf(".")!==-1&&(e=e.replace(/0+$/,""),e==="."?e="0":e[0]==="."?e="0"+e:e[e.length-1]==="."&&(e=e.substr(0,e.length-1))),e}var Me=Le;const U=R,O=xe,Re=_e,Be=Me;"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,U.nameRegexp);class Xe{constructor(t){this.options=t,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={amp:{regex:/&(amp|#38|#x26);/g,val:"&"},apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"\xA2"},pound:{regex:/&(pound|#163);/g,val:"\xA3"},yen:{regex:/&(yen|#165);/g,val:"\xA5"},euro:{regex:/&(euro|#8364);/g,val:"\u20AC"},copyright:{regex:/&(copy|#169);/g,val:"\xA9"},reg:{regex:/&(reg|#174);/g,val:"\xAE"},inr:{regex:/&(inr|#8377);/g,val:"\u20B9"}},this.addExternalEntities=Ue,this.parseXml=ze,this.parseTextData=Ge,this.resolveNameSpace=Ze,this.buildAttributesMap=Ye,this.isItStopNode=We,this.replaceEntitiesValue=Je,this.readStopNodeData=Ke,this.saveTextToParentTag=je}}function Ue(e){const t=Object.keys(e);for(let s=0;s<t.length;s++){const i=t[s];this.lastEntities[i]={regex:new RegExp("&"+i+";","g"),val:e[i]}}}function Ge(e,t,s,i,n,r,a){if(e!==void 0&&(this.options.trimValues&&!i&&(e=e.trim()),e.length>0)){a||(e=this.replaceEntitiesValue(e));const l=this.options.tagValueProcessor(t,e,s,n,r);return l==null?e:typeof l!=typeof e||l!==e?l:this.options.trimValues?_(e,this.options.parseTagValue,this.options.numberParseOptions):e.trim()===e?_(e,this.options.parseTagValue,this.options.numberParseOptions):e}}function Ze(e){if(this.options.removeNSPrefix){const t=e.split(":"),s=e.charAt(0)==="/"?"/":"";if(t[0]==="xmlns")return"";t.length===2&&(e=s+t[1])}return e}const qe=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");function Ye(e,t){if(!this.options.ignoreAttributes&&typeof e=="string"){const s=U.getAllMatches(e,qe),i=s.length,n={};for(let r=0;r<i;r++){const a=this.resolveNameSpace(s[r][1]);let l=s[r][4];const o=this.options.attributeNamePrefix+a;if(a.length)if(l!==void 0){this.options.trimValues&&(l=l.trim()),l=this.replaceEntitiesValue(l);const u=this.options.attributeValueProcessor(a,l,t);u==null?n[o]=l:typeof u!=typeof l||u!==l?n[o]=u:n[o]=_(l,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(n[o]=!0)}if(!Object.keys(n).length)return;if(this.options.attributesGroupName){const r={};return r[this.options.attributesGroupName]=n,r}return n}}const ze=function(e){e=e.replace(/\r\n?/g,`
`);const t=new O("!xml");let s=t,i="",n="";for(let r=0;r<e.length;r++)if(e[r]==="<")if(e[r+1]==="/"){const l=x(e,">",r,"Closing Tag is not closed.");let o=e.substring(r+2,l).trim();if(this.options.removeNSPrefix){const u=o.indexOf(":");u!==-1&&(o=o.substr(u+1))}s&&(i=this.saveTextToParentTag(i,s,n)),n=n.substr(0,n.lastIndexOf(".")),s=this.tagsNodeStack.pop(),i="",r=l}else if(e[r+1]==="?"){let l=v(e,r,!1,"?>");if(!l)throw new Error("Pi Tag is not closed.");if(i=this.saveTextToParentTag(i,s,n),!(this.options.ignoreDeclaration&&l.tagName==="?xml"||this.options.ignorePiTags)){const o=new O(l.tagName);o.add(this.options.textNodeName,""),l.tagName!==l.tagExp&&l.attrExpPresent&&(o[":@"]=this.buildAttributesMap(l.tagExp,n)),s.addChild(o)}r=l.closeIndex+1}else if(e.substr(r+1,3)==="!--"){const l=x(e,"-->",r+4,"Comment is not closed.");if(this.options.commentPropName){const o=e.substring(r+4,l-2);i=this.saveTextToParentTag(i,s,n),s.add(this.options.commentPropName,[{[this.options.textNodeName]:o}])}r=l}else if(e.substr(r+1,2)==="!D"){const l=Re(e,r);this.docTypeEntities=l.entities,r=l.i}else if(e.substr(r+1,2)==="!["){const l=x(e,"]]>",r,"CDATA is not closed.")-2,o=e.substring(r+9,l);if(i=this.saveTextToParentTag(i,s,n),this.options.cdataPropName)s.add(this.options.cdataPropName,[{[this.options.textNodeName]:o}]);else{let u=this.parseTextData(o,s.tagname,n,!0,!1,!0);u==null&&(u=""),s.add(this.options.textNodeName,u)}r=l+2}else{let l=v(e,r,this.options.removeNSPrefix),o=l.tagName,u=l.tagExp,f=l.attrExpPresent,c=l.closeIndex;s&&i&&s.tagname!=="!xml"&&(i=this.saveTextToParentTag(i,s,n,!1)),o!==t.tagname&&(n+=n?"."+o:o);const d=s;if(d&&this.options.unpairedTags.indexOf(d.tagname)!==-1&&(s=this.tagsNodeStack.pop()),this.isItStopNode(this.options.stopNodes,n,o)){let h="";if(u.length>0&&u.lastIndexOf("/")===u.length-1)r=l.closeIndex;else if(this.options.unpairedTags.indexOf(o)!==-1)r=l.closeIndex;else{const E=this.readStopNodeData(e,o,c+1);if(!E)throw new Error(`Unexpected end of ${o}`);r=E.i,h=E.tagContent}const P=new O(o);o!==u&&f&&(P[":@"]=this.buildAttributesMap(u,n)),h&&(h=this.parseTextData(h,o,n,!0,f,!0,!0)),n=n.substr(0,n.lastIndexOf(".")),P.add(this.options.textNodeName,h),s.addChild(P)}else{if(u.length>0&&u.lastIndexOf("/")===u.length-1){o[o.length-1]==="/"?(o=o.substr(0,o.length-1),u=o):u=u.substr(0,u.length-1);const h=new O(o);o!==u&&f&&(h[":@"]=this.buildAttributesMap(u,n)),n=n.substr(0,n.lastIndexOf(".")),s.addChild(h)}else{const h=new O(o);this.tagsNodeStack.push(s),o!==u&&f&&(h[":@"]=this.buildAttributesMap(u,n)),s.addChild(h),s=h}i="",r=c}}else i+=e[r];return t.child},Je=function(e){if(this.options.processEntities){for(let t in this.docTypeEntities){const s=this.docTypeEntities[t];e=e.replace(s.regx,s.val)}for(let t in this.lastEntities){const s=this.lastEntities[t];e=e.replace(s.regex,s.val)}if(this.options.htmlEntities)for(let t in this.htmlEntities){const s=this.htmlEntities[t];e=e.replace(s.regex,s.val)}}return e};function je(e,t,s,i){return e&&(i===void 0&&(i=Object.keys(t.child).length===0),e=this.parseTextData(e,t.tagname,s,!1,t[":@"]?Object.keys(t[":@"]).length!==0:!1,i),e!==void 0&&e!==""&&t.add(this.options.textNodeName,e),e=""),e}function We(e,t,s){const i="*."+s;for(const n in e){const r=e[n];if(i===r||t===r)return!0}return!1}function He(e,t,s=">"){let i,n="";for(let r=t;r<e.length;r++){let a=e[r];if(i)a===i&&(i="");else if(a==='"'||a==="'")i=a;else if(a===s[0])if(s[1]){if(e[r+1]===s[1])return{data:n,index:r}}else return{data:n,index:r};else a==="	"&&(a=" ");n+=a}}function x(e,t,s,i){const n=e.indexOf(t,s);if(n===-1)throw new Error(i);return n+t.length-1}function v(e,t,s,i=">"){const n=He(e,t+1,i);if(!n)return;let r=n.data;const a=n.index,l=r.search(/\s/);let o=r,u=!0;if(l!==-1&&(o=r.substr(0,l).replace(/\s\s*$/,""),r=r.substr(l+1)),s){const f=o.indexOf(":");f!==-1&&(o=o.substr(f+1),u=o!==n.data.substr(f+1))}return{tagName:o,tagExp:r,closeIndex:a,attrExpPresent:u}}function Ke(e,t,s){const i=s;let n=1;for(;s<e.length;s++)if(e[s]==="<")if(e[s+1]==="/"){const r=x(e,">",s,`${t} is not closed`);if(e.substring(s+2,r).trim()===t&&(n--,n===0))return{tagContent:e.substring(i,s),i:r};s=r}else{const r=v(e,s,">");r&&((r&&r.tagName)===t&&n++,s=r.closeIndex)}}function _(e,t,s){if(t&&typeof e=="string"){const i=e.trim();return i==="true"?!0:i==="false"?!1:Be(e,s)}else return U.isExist(e)?e:""}var Qe=Xe,le={};function De(e,t){return ae(e,t)}function ae(e,t,s){let i;const n={};for(let r=0;r<e.length;r++){const a=e[r],l=et(a);let o="";if(s===void 0?o=l:o=s+"."+l,l===t.textNodeName)i===void 0?i=a[l]:i+=""+a[l];else{if(l===void 0)continue;if(a[l]){let u=ae(a[l],t,o);const f=st(u,t);a[":@"]?tt(u,a[":@"],o,t):Object.keys(u).length===1&&u[t.textNodeName]!==void 0&&!t.alwaysCreateTextNode?u=u[t.textNodeName]:Object.keys(u).length===0&&(t.alwaysCreateTextNode?u[t.textNodeName]="":u=""),n[l]!==void 0&&n.hasOwnProperty(l)?(Array.isArray(n[l])||(n[l]=[n[l]]),n[l].push(u)):t.isArray(l,o,f)?n[l]=[u]:n[l]=u}}}return typeof i=="string"?i.length>0&&(n[t.textNodeName]=i):i!==void 0&&(n[t.textNodeName]=i),n}function et(e){const t=Object.keys(e);for(let s=0;s<t.length;s++){const i=t[s];if(i!==":@")return i}}function tt(e,t,s,i){if(t){const n=Object.keys(t),r=n.length;for(let a=0;a<r;a++){const l=n[a];i.isArray(l,s+"."+l,!0,!0)?e[l]=[t[l]]:e[l]=t[l]}}}function st(e,t){const s=Object.keys(e).length;return!!(s===0||s===1&&e[t.textNodeName])}le.prettify=De;const{buildOptions:nt}=X,rt=Qe,{prettify:it}=le,ot=M;class lt{constructor(t){this.externalEntities={},this.options=nt(t)}parse(t,s){if(typeof t!="string")if(t.toString)t=t.toString();else throw new Error("XML data is accepted in String or Bytes[] form.");if(s){s===!0&&(s={});const r=ot.validate(t,s);if(r!==!0)throw Error(`${r.err.msg}:${r.err.line}:${r.err.col}`)}const i=new rt(this.options);i.addExternalEntities(this.externalEntities);const n=i.parseXml(t);return this.options.preserveOrder||n===void 0?n:it(n,this.options)}addEntity(t,s){if(s.indexOf("&")!==-1)throw new Error("Entity value can't have '&'");if(t.indexOf("&")!==-1||t.indexOf(";")!==-1)throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");this.externalEntities[t]=s}}var at=lt;const ut=`
`;function ft(e,t){return ue(e,t,"",0)}function ue(e,t,s,i){let n="",r="";t.format&&t.indentBy.length>0&&(r=ut+""+t.indentBy.repeat(i));for(let a=0;a<e.length;a++){const l=e[a],o=ct(l);let u="";if(s.length===0?u=o:u=`${s}.${o}`,o===t.textNodeName){let h=l[o];dt(u,t)||(h=t.tagValueProcessor(o,h),h=fe(h,t)),n+=r+h;continue}else if(o===t.cdataPropName){n+=r+`<![CDATA[${l[o][0][t.textNodeName]}]]>`;continue}else if(o===t.commentPropName){n+=r+`<!--${l[o][0][t.textNodeName]}-->`;continue}else if(o[0]==="?"){const h=W(l[":@"],t),P=o==="?xml"?"":r;let E=l[o][0][t.textNodeName];E=E.length!==0?" "+E:"",n+=P+`<${o}${E}${h}?>`;continue}const f=W(l[":@"],t);let c=r+`<${o}${f}`,d=ue(l[o],t,u,i+1);t.unpairedTags.indexOf(o)!==-1?t.suppressUnpairedNode?n+=c+">":n+=c+"/>":(!d||d.length===0)&&t.suppressEmptyNode?n+=c+"/>":n+=c+`>${d}${r}</${o}>`}return n}function ct(e){const t=Object.keys(e);for(let s=0;s<t.length;s++){const i=t[s];if(i!==":@")return i}}function W(e,t){let s="";if(e&&!t.ignoreAttributes)for(let i in e){let n=t.attributeValueProcessor(i,e[i]);n=fe(n,t),n===!0&&t.suppressBooleanAttributes?s+=` ${i.substr(t.attributeNamePrefix.length)}`:s+=` ${i.substr(t.attributeNamePrefix.length)}="${n}"`}return s}function dt(e,t){e=e.substr(0,e.length-t.textNodeName.length-1);let s=e.substr(e.lastIndexOf(".")+1);for(let i in t.stopNodes)if(t.stopNodes[i]===e||t.stopNodes[i]==="*."+s)return!0;return!1}function fe(e,t){if(e&&e.length>0&&t.processEntities)for(let s=0;s<t.entities.length;s++){const i=t.entities[s];e=e.replace(i.regex,i.val)}return e}var ht=ft;const gt=ht,pt={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[]};function G(e){this.options=Object.assign({},pt,e),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=At),this.processTextOrObjNode=bt,this.options.format?(this.indentate=yt,this.tagEndChar=`>
`,this.newLine=`
`):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine=""),this.options.suppressEmptyNode?(this.buildTextNode=Tt,this.buildObjNode=Et):(this.buildTextNode=K,this.buildObjNode=H),this.buildTextValNode=K,this.buildObjectNode=H,this.replaceEntitiesValue=mt,this.buildAttrPairStr=Nt}G.prototype.build=function(e){return this.options.preserveOrder?gt(e,this.options):(Array.isArray(e)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(e={[this.options.arrayNodeName]:e}),this.j2x(e,0).val)};G.prototype.j2x=function(e,t){let s="",i="";for(let n in e)if(!(typeof e[n]>"u"))if(e[n]===null)n[0]==="?"?i+=this.indentate(t)+"<"+n+"?"+this.tagEndChar:i+=this.indentate(t)+"<"+n+"/"+this.tagEndChar;else if(e[n]instanceof Date)i+=this.buildTextNode(e[n],n,"",t);else if(typeof e[n]!="object"){const r=this.isAttribute(n);if(r)s+=this.buildAttrPairStr(r,""+e[n]);else if(n===this.options.textNodeName){let a=this.options.tagValueProcessor(n,""+e[n]);i+=this.replaceEntitiesValue(a)}else i+=this.buildTextNode(e[n],n,"",t)}else if(Array.isArray(e[n])){const r=e[n].length;for(let a=0;a<r;a++){const l=e[n][a];typeof l>"u"||(l===null?n[0]==="?"?i+=this.indentate(t)+"<"+n+"?"+this.tagEndChar:i+=this.indentate(t)+"<"+n+"/"+this.tagEndChar:typeof l=="object"?i+=this.processTextOrObjNode(l,n,t):i+=this.buildTextNode(l,n,"",t))}}else if(this.options.attributesGroupName&&n===this.options.attributesGroupName){const r=Object.keys(e[n]),a=r.length;for(let l=0;l<a;l++)s+=this.buildAttrPairStr(r[l],""+e[n][r[l]])}else i+=this.processTextOrObjNode(e[n],n,t);return{attrStr:s,val:i}};function Nt(e,t){return t=this.options.attributeValueProcessor(e,""+t),t=this.replaceEntitiesValue(t),this.options.suppressBooleanAttributes&&t==="true"?" "+e:" "+e+'="'+t+'"'}function bt(e,t,s){const i=this.j2x(e,s+1);return e[this.options.textNodeName]!==void 0&&Object.keys(e).length===1?this.buildTextNode(e[this.options.textNodeName],t,i.attrStr,s):this.buildObjNode(i.val,t,i.attrStr,s)}function H(e,t,s,i){let n="</"+t+this.tagEndChar,r="";return t[0]==="?"&&(r="?",n=""),s&&e.indexOf("<")===-1?this.indentate(i)+"<"+t+s+r+">"+e+n:this.options.commentPropName!==!1&&t===this.options.commentPropName&&r.length===0?this.indentate(i)+`<!--${e}-->`+this.newLine:this.indentate(i)+"<"+t+s+r+this.tagEndChar+e+this.indentate(i)+n}function Et(e,t,s,i){return e!==""?this.buildObjectNode(e,t,s,i):t[0]==="?"?this.indentate(i)+"<"+t+s+"?"+this.tagEndChar:this.indentate(i)+"<"+t+s+"/"+this.tagEndChar}function K(e,t,s,i){if(this.options.cdataPropName!==!1&&t===this.options.cdataPropName)return this.indentate(i)+`<![CDATA[${e}]]>`+this.newLine;if(this.options.commentPropName!==!1&&t===this.options.commentPropName)return this.indentate(i)+`<!--${e}-->`+this.newLine;{let n=this.options.tagValueProcessor(t,e);return n=this.replaceEntitiesValue(n),n===""&&this.options.unpairedTags.indexOf(t)!==-1?this.options.suppressUnpairedNode?this.indentate(i)+"<"+t+this.tagEndChar:this.indentate(i)+"<"+t+"/"+this.tagEndChar:this.indentate(i)+"<"+t+s+">"+n+"</"+t+this.tagEndChar}}function mt(e){if(e&&e.length>0&&this.options.processEntities)for(let t=0;t<this.options.entities.length;t++){const s=this.options.entities[t];e=e.replace(s.regex,s.val)}return e}function Tt(e,t,s,i){return e===""&&this.options.unpairedTags.indexOf(t)!==-1?this.options.suppressUnpairedNode?this.indentate(i)+"<"+t+this.tagEndChar:this.indentate(i)+"<"+t+"/"+this.tagEndChar:e!==""?this.buildTextValNode(e,t,s,i):t[0]==="?"?this.indentate(i)+"<"+t+s+"?"+this.tagEndChar:this.indentate(i)+"<"+t+s+"/"+this.tagEndChar}function yt(e){return this.options.indentBy.repeat(e)}function At(e){return e.startsWith(this.options.attributeNamePrefix)?e.substr(this.attrPrefixLen):!1}var Pt=G;const wt=M,Ot=at,Ct=Pt;var xt={XMLParser:Ot,XMLValidator:wt,XMLBuilder:Ct};function $t(e){let t,s,i,n,r,a,l,o=e[0].title+"",u,f;return{c(){t=T("a"),s=T("article"),i=T("figure"),n=T("img"),a=L(),l=T("h1"),u=ee(o),this.h()},l(c){t=y(c,"A",{href:!0,class:!0});var d=A(t);s=y(d,"ARTICLE",{class:!0});var h=A(s);i=y(h,"FIGURE",{});var P=A(i);n=y(P,"IMG",{class:!0,src:!0,alt:!0}),P.forEach(b),a=k(h),l=y(h,"H1",{class:!0});var E=A(l);u=te(E,o),E.forEach(b),h.forEach(b),d.forEach(b),this.h()},h(){N(n,"class","aspect-[3/2]"),Z(n.src,r=e[0].thumbnail)||N(n,"src",r),N(n,"alt",""),N(l,"class","px-4 py-3 text-md italic font-semibold"),N(s,"class","border border-current hover:bg-purple-50 h-full"),N(t,"href",f=e[0].url),N(t,"class","h-full")},m(c,d){I(c,t,d),m(t,s),m(s,i),m(i,n),m(s,a),m(s,l),m(l,u)},p(c,[d]){d&1&&!Z(n.src,r=c[0].thumbnail)&&N(n,"src",r),d&1&&o!==(o=c[0].title+"")&&ce(u,o),d&1&&f!==(f=c[0].url)&&N(t,"href",f)},i:q,o:q,d(c){c&&b(t)}}}function It(e,t,s){let{data:i}=t;return e.$$set=n=>{"data"in n&&s(0,i=n.data)},[i]}class vt extends V{constructor(t){super(),S(this,t,It,$t,F,{data:0})}}function Q(e,t,s){const i=e.slice();return i[1]=t[s],i}function D(e){let t,s,i,n;return s=new vt({props:{data:e[1]}}),{c(){t=T("li"),se(s.$$.fragment),i=L(),this.h()},l(r){t=y(r,"LI",{class:!0});var a=A(t);ne(s.$$.fragment,a),i=k(a),a.forEach(b),this.h()},h(){N(t,"class","h-full")},m(r,a){I(r,t,a),re(s,t,null),m(t,i),n=!0},p(r,a){const l={};a&1&&(l.data=r[1]),s.$set(l)},i(r){n||(C(s.$$.fragment,r),n=!0)},o(r){$(s.$$.fragment,r),n=!1},d(r){r&&b(t),ie(s)}}}function _t(e){let t,s,i=e[0],n=[];for(let a=0;a<i.length;a+=1)n[a]=D(Q(e,i,a));const r=a=>$(n[a],1,1,()=>{n[a]=null});return{c(){t=T("ul");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){t=y(a,"UL",{class:!0});var l=A(t);for(let o=0;o<n.length;o+=1)n[o].l(l);l.forEach(b),this.h()},h(){N(t,"class","grid grid-cols-3 gap-6 w-full")},m(a,l){I(a,t,l);for(let o=0;o<n.length;o+=1)n[o].m(t,null);s=!0},p(a,[l]){if(l&1){i=a[0];let o;for(o=0;o<i.length;o+=1){const u=Q(a,i,o);n[o]?(n[o].p(u,l),C(n[o],1)):(n[o]=D(u),n[o].c(),C(n[o],1),n[o].m(t,null))}for(de(),o=i.length;o<n.length;o+=1)r(o);he()}},i(a){if(!s){for(let l=0;l<i.length;l+=1)C(n[l]);s=!0}},o(a){n=n.filter(Boolean);for(let l=0;l<n.length;l+=1)$(n[l]);s=!1},d(a){a&&b(t),ge(n,a)}}}function Vt(e,t,s){let{items:i=[]}=t;return e.$$set=n=>{"items"in n&&s(0,i=n.items)},[i]}class St extends V{constructor(t){super(),S(this,t,Vt,_t,F,{items:0})}}function Ft(e){let t,s,i,n,r,a,l;return a=new St({props:{items:e[0]}}),{c(){t=T("section"),s=T("h1"),i=ee("blog"),n=L(),r=T("div"),se(a.$$.fragment),this.h()},l(o){t=y(o,"SECTION",{});var u=A(t);s=y(u,"H1",{class:!0});var f=A(s);i=te(f,"blog"),f.forEach(b),n=k(u),r=y(u,"DIV",{class:!0});var c=A(r);ne(a.$$.fragment,c),c.forEach(b),u.forEach(b),this.h()},h(){N(s,"class","text-3xl font-medium section-heading svelte-1vdsm8k"),N(r,"class","mt-4")},m(o,u){I(o,t,u),m(t,s),m(s,i),m(t,n),m(t,r),re(a,r,null),l=!0},p(o,[u]){const f={};u&1&&(f.items=o[0]),a.$set(f)},i(o){l||(C(a.$$.fragment,o),l=!0)},o(o){$(a.$$.fragment,o),l=!1},d(o){o&&b(t),ie(a)}}}const Lt="https://us-central1-izakikazuho-net.cloudfunctions.net/api/all";function kt(e,t,s){let i=[];const n=async()=>await fetch(Lt).then(r=>r.text());return pe(async()=>{const r=await n(),l=new xt.XMLParser().parse(r);s(0,i=l.rss.channel.item),s(0,i=i.map(o=>({thumbnail:o["media:thumbnail"],title:o.title,url:o.link})))}),[i]}class Bt extends V{constructor(t){super(),S(this,t,kt,Ft,F,{})}}export{Bt as default};
