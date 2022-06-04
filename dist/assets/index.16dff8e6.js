var b=Object.defineProperty;var x=(e,t,i)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var r=(e,t,i)=>(x(e,typeof t!="symbol"?t+"":t,i),i);const T=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))h(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&h(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function h(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}};T();let v=new Audio("./../media/pop.mp3");v.volume=.2;class E{constructor(t,i,h,s,n){r(this,"video");r(this,"rowIndex");r(this,"columnIndex");r(this,"width");r(this,"height");r(this,"x");r(this,"y");r(this,"rows");r(this,"columns");r(this,"xCorrect");r(this,"yCorrect");r(this,"correct");r(this,"bottom");r(this,"right");r(this,"top");r(this,"left");r(this,"color");this.video=s,this.rowIndex=t,this.columnIndex=i,this.width=h.width/h.columns,this.height=h.height/h.rows,this.rows=h.rows,this.columns=h.columns,this.x=h.x+this.columnIndex*this.width,this.y=h.y+this.rowIndex*this.height,this.xCorrect=this.x,this.yCorrect=this.y,this.correct=!0,this.bottom=null,this.right=null,this.top=null,this.left=null,this.color=n}draw(t,i=!0){t.beginPath();const h=Math.min(this.width,this.height),s=.05*h,n=.2*h,o=.3*h;t.moveTo(this.x,this.y),this.top&&(t.lineTo(this.x+this.width*Math.abs(this.top)-s,this.y),t.bezierCurveTo(this.x+this.width*Math.abs(this.top)-s,this.y-o*Math.sign(this.top)*.2,this.x+this.width*Math.abs(this.top)-n,this.y-o*Math.sign(this.top),this.x+this.width*Math.abs(this.top),this.y-o*Math.sign(this.top)),t.bezierCurveTo(this.x+this.width*Math.abs(this.top)+n,this.y-o*Math.sign(this.top),this.x+this.width*Math.abs(this.top)+s,this.y-o*Math.sign(this.top)*.2,this.x+this.width*Math.abs(this.top)+s,this.y)),t.lineTo(this.x+this.width,this.y),this.right&&(t.lineTo(this.x+this.width,this.y+this.height*Math.abs(this.right)-s),t.bezierCurveTo(this.x+this.width-o*Math.sign(this.right)*.2,this.y+this.height*Math.abs(this.right)-s,this.x+this.width-o*Math.sign(this.right),this.y+this.height*Math.abs(this.right)-n,this.x+this.width-o*Math.sign(this.right),this.y+this.height*Math.abs(this.right)),t.bezierCurveTo(this.x+this.width-o*Math.sign(this.right),this.y+this.height*Math.abs(this.right)+n,this.x+this.width-o*Math.sign(this.right)*.2,this.y+this.height*Math.abs(this.right)+s,this.x+this.width,this.y+this.height*Math.abs(this.right)+s)),t.lineTo(this.x+this.width,this.y+this.height),this.bottom&&(t.lineTo(this.x+this.width*Math.abs(this.bottom)+s,this.y+this.height),t.bezierCurveTo(this.x+this.width*Math.abs(this.bottom)+s,this.y+this.height+o*Math.sign(this.bottom)*.2,this.x+this.width*Math.abs(this.bottom)+n,this.y+this.height+o*Math.sign(this.bottom),this.x+this.width*Math.abs(this.bottom),this.y+this.height+o*Math.sign(this.bottom)),t.bezierCurveTo(this.x+this.width*Math.abs(this.bottom)-n,this.y+this.height+o*Math.sign(this.bottom),this.x+this.width*Math.abs(this.bottom)-s,this.y+this.height+o*Math.sign(this.bottom)*.2,this.x+this.width*Math.abs(this.bottom)-s,this.y+this.height)),t.lineTo(this.x,this.y+this.height),this.left&&(t.lineTo(this.x,this.y+this.height*Math.abs(this.left)+s),t.bezierCurveTo(this.x+o*Math.sign(this.left)*.2,this.y+this.height*Math.abs(this.left)+s,this.x+o*Math.sign(this.left),this.y+this.height*Math.abs(this.left)+n,this.x+o*Math.sign(this.left),this.y+this.height*Math.abs(this.left)),t.bezierCurveTo(this.x+o*Math.sign(this.left),this.y+this.height*Math.abs(this.left)-n,this.x+o*Math.sign(this.left)*.2,this.y+this.height*Math.abs(this.left)-s,this.x,this.y+this.height*Math.abs(this.left)-s)),t.lineTo(this.x,this.y),t.save(),t.clip();const a=Math.min(this.video.videoWidth/this.columns,this.video.videoHeight/this.rows)*o/h;i?t.drawImage(this.video,this.columnIndex*this.video.videoWidth/this.columns-a,this.rowIndex*this.video.videoHeight/this.rows-a,this.video.videoWidth/this.columns+a*2,this.video.videoHeight/this.rows+a*2,this.x-o,this.y-o,this.width+o*2,this.height+o*2):(t.fillStyle=this.color,t.fillRect(this.x-o,this.y-o,this.width+o*2,this.height+o*2)),t.restore(),t.stroke()}isClose(){return C({x:this.x,y:this.y},{x:this.xCorrect,y:this.yCorrect})<this.width/3}snap(){this.x=this.xCorrect,this.y=this.yCorrect,this.correct=!0,v.play()}}function C(e,t){let i=e.x-t.x,h=e.y-t.y;return Math.sqrt(i*i+h*h)}function w(){const e=Math.floor(Math.random()*255),t=Math.floor(Math.random()*255),i=Math.floor(Math.random()*255);return"rgb("+e+","+t+","+i+")"}function I(e,t){let i=[],h=[];for(let n=0;n<e.rows;n++)for(let o=0;o<e.columns;o++){let a=w();for(;h.includes(a);)a=w();h.push(a),i.push(new E(n,o,e,t,a))}let s=0;for(let n=0;n<e.rows;n++)for(let o=0;o<e.columns;o++){const a=i[s];if(n==e.rows-1)a.bottom=null;else{let u=Math.random()-.5<0?-1:1;a.bottom=u*(.3+Math.random()*.4)}if(o==e.columns-1)a.right=null;else{let u=Math.random()-.5<0?-1:1;a.right=u*(.3+Math.random()*.4)}o==0?a.left=null:a.left=-i[s-1].right,n==0?a.top=null:a.top=-i[s-e.columns].bottom,s++}return i}function L(e,t){for(let i=0;i<e.length;i++){let h={x:Math.random()*(t.width-e[i].width),y:Math.random()*(t.height-e[i].height)};e[i].x=h.x,e[i].y=h.y,e[i].correct=!1}}function D(e,t){let i=document.getElementById("time"),h=new Date().getTime();e!=null&&(t!=null?i.innerHTML=M(t-e):i.innerHTML=M(h-e))}function M(e){let t=Math.floor(e/1e3),i=Math.floor(t%60),h=Math.floor(t%(60*60)/60),n=Math.floor(t%(60*60*24)/(60*60)).toString().padStart(2,"0");return n+=":",n+=h.toString().padStart(2,"0"),n+=":",n+=i.toString().padStart(2,"0"),n}let m={DO:261.6,RE:293.7,MI:329.6};function S(){g(m.MI,300),setTimeout(function(){g(m.DO,300)},300),setTimeout(function(){g(m.RE,150)},450),setTimeout(function(){g(m.MI,600)},600)}function g(e,t){let i=new AudioContext,h=i.createOscillator();h.frequency.value=e,h.start(i.currentTime),h.stop(i.currentTime+t/1e3);let s=i.createGain();h.connect(s),h.type="triangle",s.connect(i.destination),s.gain.setValueAtTime(0,i.currentTime),s.gain.linearRampToValueAtTime(.5,i.currentTime+.1),s.gain.linearRampToValueAtTime(0,i.currentTime+t/1e3),setTimeout(function(){h.disconnect()},t)}function A(){let t=document.getElementById("difficulty").value,i=0,h=0;switch(t){case"easy":i=3,h=3;break;case"normal":i=5,h=5;break;case"hard":i=10,h=10;break;case"insane":i=40,h=25;break}return{rowNumber:i,columnNumber:h}}let l=null;function R(e){let t=e.canvas,i=e.helperContext,h=e.PIECES,s=e.END_TIME;t.addEventListener("mousedown",n),t.addEventListener("touchstart",a),t.addEventListener("mousemove",o),t.addEventListener("touchmove",u),t.addEventListener("mouseup",f),t.addEventListener("touchend",f);function n(d){const c=i.getImageData(d.x,d.y,1,1);if(c.data[3]==0)return;const p="rgb("+c.data[0]+","+c.data[1]+","+c.data[2]+")";if(l=N(h,p),l!=null){const y=h.indexOf(l);y>-1&&(h.splice(y,1),h.push(l)),l.offset={x:d.x-l.x,y:d.y-l.y},l.correct=!1}}function o(d){l!=null&&(l.x=d.x-l.offset.x,l.y=d.y-l.offset.y)}function a(d){let c={x:d.touches[0].clientX,y:d.touches[0].clientY};n(c)}function u(d){let c={x:d.touches[0].clientX,y:d.touches[0].clientY};o(c)}function f(){l&&l.isClose()&&(l.snap(),z(h)&&s==null&&e.end()),l=null}}function N(e,t){for(let i=e.length-1;i>=0;i--)if(e[i].color==t)return e[i];return null}function z(e){for(let t=0;t<e.length;t++)if(e[t].correct==!1)return!1;return!0}class H{constructor(){r(this,"canvas");r(this,"context");r(this,"helperCanvas");r(this,"helperContext");r(this,"startButton");r(this,"menuItemsElement");r(this,"videoHasLoaded");r(this,"video");r(this,"SIZE");r(this,"SCALAR");r(this,"PIECES");r(this,"START_TIME");r(this,"END_TIME");this.canvas=document.getElementById("myCanvas"),this.context=this.canvas.getContext("2d"),this.helperCanvas=document.getElementById("helperCanvas"),this.helperContext=this.helperCanvas.getContext("2d"),this.video=document.createElement("video"),this.startButton=document.getElementById("start"),this.menuItemsElement=document.getElementById("menuItems"),this.SIZE={x:0,y:0,width:0,height:0,rows:3,columns:3},this.videoHasLoaded=!1,this.SCALAR=.8,this.PIECES=[],this.START_TIME=null,this.END_TIME=null}start(){navigator.mediaDevices.getUserMedia({video:!0}).then(i=>{this.video.srcObject=i,this.video.play(),this.video.onloadeddata=()=>{this.handleResize(),window.addEventListener("resize",()=>{this.handleResize()}),this.startButton.addEventListener("click",()=>{let h=A();this.SIZE.rows=h.rowNumber,this.SIZE.columns=h.columnNumber,this.PIECES=I(this.SIZE,this.video),this.START_TIME=new Date().getTime(),this.END_TIME=null,L(this.PIECES,this.canvas),R(this),this.menuItemsElement.style.display="none"}),this.update()}}).catch(i=>{console.log("Camera Error"+i)})}update(){this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.helperContext.clearRect(0,0,this.helperCanvas.width,this.helperCanvas.height),this.context.globalAlpha=.5,this.context.drawImage(this.video,this.SIZE.x,this.SIZE.y,this.SIZE.width,this.SIZE.height),this.context.globalAlpha=1;for(let t=0;t<this.PIECES.length;t++)this.PIECES[t].draw(this.context),this.PIECES[t].draw(this.helperContext,!1);D(this.START_TIME,this.END_TIME),window.requestAnimationFrame(()=>{this.update()})}end(){let t=new Date().getTime();this.END_TIME=t,setTimeout(S,500),setTimeout(this.menuItemsElement.style.display="block",1e3)}handleResize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.helperCanvas.width=window.innerWidth,this.helperCanvas.height=window.innerHeight;let t=this.SCALAR*Math.min(window.innerWidth/this.video.videoWidth,window.innerHeight/this.video.videoHeight);this.SIZE.width=t*this.video.videoWidth,this.SIZE.height=t*this.video.videoHeight,this.SIZE.x=window.innerWidth/2-this.SIZE.width/2,this.SIZE.y=window.innerHeight/2-this.SIZE.height/2}}const O=new H;O.start();
