webpackJsonp([2],{0:function(t,e){},1:function(t,e){},"1uuo":function(t,e){},2:function(t,e){},3:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),o=i("Dd8w"),n=i.n(o),a=i("nKpR"),h=i.n(a),r=(i("t4zo"),i("pFYg"),{data:function(){return{fileInfo:{size:0,name:"",type:"",pageNums:0},boxBasicInfo:{x:50,y:50,width:80,height:20,isSelected:!1,lineWidth:3},boxes:[],pdfData:null,pageNum:1,canvasPdf:"",context:"",viewport:{},previousSelectedBox:{},isDragging:!1,imgDataUrl:"",pdfImg:null,lastStopPosition:{leftTop:{x:0,y:0},leftBottom:{x:0,y:0}}}},mounted:function(){this.canvasPdf=this.$refs.pdf_canvas,this.context=this.canvasPdf.getContext("2d"),this.canvasPdf.onmousedown=this.clickBox,this.canvasPdf.onmouseup=this.stopDragging,this.canvasPdf.onmouseout=this.stopDragging,this.canvasPdf.onmousemove=this.dragBox},methods:{upload:function(t){this.clearCanvas();var e=t.target.files[0],i=e.size,s=e.name,o=e.type;this.fileInfo.size=(i/1048576).toFixed(2),this.fileInfo.name=s,this.fileInfo.type=o,this.filereader(t.target.files[0])},filereader:function(t){var e=this,i=new FileReader;i.readAsArrayBuffer(t),i.onload=function(t){var i=new Uint8Array(t.target.result);h.a.getDocument(i).then(function(t){t&&(console.log(t),e.fileInfo.pageNums=t.numPages,e.pdfData=t,e.renderPDF(1))})}},renderPDF:function(t){var e=this;this.pdfData.getPage(t).then(function(i){e.viewport=i.getViewport(1),e.canvasPdf.id="num"+t;var s=e.context.canvas;s.width=e.viewport.width,s.height=e.viewport.height,s.style.width="100%",s.style.height="100%";var o={canvasContext:e.context,viewport:e.viewport};i.render(o),setTimeout(function(){e.imgDataUrl=e.canvasPdf.toDataURL("image/png"),e.pdfImg=new Image,e.pdfImg.src=e.imgDataUrl},100)})},generateBox:function(){this.setBoxInfo(),this.drawCanvas()},setBoxInfo:function(){var t=n()({},this.boxBasicInfo,{width:parseInt(this.boxBasicInfo.width),height:parseInt(this.boxBasicInfo.height)});t.x=this.randomFromTo(10,500),t.y=10,this.boxes.push(t)},drawBoxes:function(){for(var t=0;t<this.boxes.length;t++){var e=this.boxes[t],i=e.x,s=e.y,o=e.width,n=e.height,a=e.isSelected;this.context.lineWidth=a?parseInt(this.boxBasicInfo.lineWidth):1,this.context.strokeRect(i,s,o,n)}},drawCanvas:function(){this.clearRect(),this.context.drawImage(this.pdfImg,0,0),this.drawBoxes()},clearRect:function(){this.context.clearRect(0,0,this.canvasPdf.width,this.canvasPdf.height)},clearCanvas:function(){this.boxes=[],this.context.clearRect(0,0,this.canvasPdf.width,this.canvasPdf.height)},getPosition:function(t){var e=void 0,i=void 0;return t.pageX||0==t.pageX?(e=t.pageX,i=t.pageY):(t.offsetX||0==t.offsetX)&&(e=t.offsetX,i=t.offsetY),{x:e,y:i}},clickBox:function(t){this.canvasPdf.getBoundingClientRect();for(var e=(t.pageX-this.canvasPdf.offsetLeft)*this.viewport.width/this.canvasPdf.clientWidth,i=(t.pageY-this.canvasPdf.offsetTop)*this.viewport.height/this.canvasPdf.clientHeight,s=0;s<this.boxes.length;s++){var o=this.boxes[s];console.log(o);var n=o.x,a=o.x+o.width,h=o.y,r=o.y+o.height;console.log("clickX, clickY",e,i),console.log("minX, maxX, minY, maxY",n,a,h,r),e>=n&&e<=a&&i>=h&&i<=r&&(this.previousSelectedBox&&(this.previousSelectedBox.isSelected=!1),this.previousSelectedBox=o,this.$set(this.boxes[s],"isSelected",!0),this.isDragging=!0,this.drawCanvas())}},stopDragging:function(){this.isDragging=!1},dragBox:function(t){this.isDragging&&this.previousSelectedBox&&(this.previousSelectedBox.x=(t.pageX-this.canvasPdf.offsetLeft)*this.viewport.width/this.canvasPdf.clientWidth,this.previousSelectedBox.y=(t.pageY-this.canvasPdf.offsetTop)*this.viewport.height/this.canvasPdf.clientHeight,this.lastStopPosition.leftTop.x=(t.pageX-this.canvasPdf.offsetLeft)*this.viewport.width/this.canvasPdf.clientWidth,this.lastStopPosition.leftTop.y=(t.pageY-this.canvasPdf.offsetTop)*this.viewport.height/this.canvasPdf.clientHeight,this.lastStopPosition.leftTop.x=this.lastStopPosition.leftTop.x.toFixed(2),this.lastStopPosition.leftTop.y=this.lastStopPosition.leftTop.y.toFixed(2),this.lastStopPosition.leftBottom.y=(t.pageY-this.canvasPdf.offsetTop+this.previousSelectedBox.height)*this.viewport.height/this.canvasPdf.clientHeight,this.lastStopPosition.leftBottom.x=this.lastStopPosition.leftTop.x,this.lastStopPosition.leftBottom.y=this.lastStopPosition.leftBottom.y.toFixed(2),this.drawCanvas())},deleteBox:function(t){this.boxes.splice(t,1),console.log("-----",this.boxes),this.drawCanvas()},randomFromTo:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},prePage:function(){1!==this.pageNum?(this.clearCanvas(),this.pageNum=this.pageNum-1,this.renderPDF(this.pageNum)):alert("已经是第一页了")},nextPage:function(){this.pageNum!==this.fileInfo.pageNums?(this.clearCanvas(),this.pageNum=this.pageNum+1,this.renderPDF(this.pageNum)):alert("已经是最后一页了")}}}),l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"main"},[i("div",{staticStyle:{width:"300px",float:"left"}},[i("p",[t._v("\n        上传pdf"),i("input",{attrs:{type:"file",name:"pdf",id:"pdf_id"},on:{change:t.upload}})]),t._v(" "),i("button",{staticClass:"pre",on:{click:t.prePage}},[t._v("上一页")]),t._v(" "),i("button",{staticClass:"next",on:{click:t.nextPage}},[t._v("下一页")]),t._v(" "),i("button",{on:{click:t.generateBox}},[t._v("生成box")]),t._v(" "),i("p",[t._v("\n        box width"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.boxBasicInfo.width,expression:"boxBasicInfo.width"}],attrs:{type:"text"},domProps:{value:t.boxBasicInfo.width},on:{input:function(e){e.target.composing||t.$set(t.boxBasicInfo,"width",e.target.value)}}})]),t._v(" "),i("p",[t._v("\n        box height"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.boxBasicInfo.height,expression:"boxBasicInfo.height"}],attrs:{type:"text"},domProps:{value:t.boxBasicInfo.height},on:{input:function(e){e.target.composing||t.$set(t.boxBasicInfo,"height",e.target.value)}}})]),t._v(" "),i("p",[t._v("\n        box active line width"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.boxBasicInfo.lineWidth,expression:"boxBasicInfo.lineWidth"}],attrs:{type:"text"},domProps:{value:t.boxBasicInfo.lineWidth},on:{input:function(e){e.target.composing||t.$set(t.boxBasicInfo,"lineWidth",e.target.value)}}})]),t._v(" "),i("p",[t._v("-----")]),t._v(" "),i("p",[t._v("file size: "+t._s(t.fileInfo.size)+"mb")]),t._v(" "),i("p",[t._v("file name: "+t._s(t.fileInfo.name))]),t._v(" "),i("p",[t._v("file type: "+t._s(t.fileInfo.type))]),t._v(" "),i("p",[t._v("file pageNums: "+t._s(t.fileInfo.pageNums))]),t._v(" "),i("p",[t._v("----")]),t._v(" "),i("p",[t._v("左上角 x: "+t._s(t.lastStopPosition.leftTop.x)+", y: "+t._s(t.lastStopPosition.leftTop.y))]),t._v(" "),i("p",[t._v("左下角 x: "+t._s(t.lastStopPosition.leftBottom.x)+", y: "+t._s(t.lastStopPosition.leftBottom.y))]),t._v(" "),i("p",[t._v("-----")]),t._v(" "),t._l(this.boxes,function(e,s){return i("div",{key:s},[i("button",{on:{click:function(e){return t.deleteBox(s)}}},[t._v("删除")]),t._v(t._s(e)+"\n      ")])})],2),t._v(" "),i("div",{staticClass:"pdf_main"},[i("canvas",{ref:"pdf_canvas"})])])])},staticRenderFns:[]};var c=i("VU/8")(r,l,!1,function(t){i("NZ+1")},"data-v-002cafa5",null).exports,f=i("/ocq"),v={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),i("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),i("br"),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var p=i("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},v,!1,function(t){i("1uuo")},"data-v-d8ec41bc",null).exports;s.a.use(f.a);var d=new f.a({routes:[{path:"/",name:"HelloWorld",component:p}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:d,components:{App:c},template:"<App/>"})},"NZ+1":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f594de30e8f9927dca79.js.map