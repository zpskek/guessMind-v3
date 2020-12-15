(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMsg = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");
var USERNAME = "username";

var appendMsg = function appendMsg(message, username) {
  var li = document.createElement("li");
  li.innerHTML = "\n  <span class=\"author ".concat(username ? "other" : "self", "\">").concat(username ? username : "You", ":</span> ").concat(message, "\n  ");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(e) {
  e.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  var username = localStorage.getItem(USERNAME);
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value,
    username: username
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMsg = function handleNewMsg(_ref) {
  var message = _ref.message,
      username = _ref.username;
  appendMsg(message, username);
};

exports.handleNewMsg = handleNewMsg;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsIlVTRVJOQU1FIiwiYXBwZW5kTXNnIiwibWVzc2FnZSIsInVzZXJuYW1lIiwibGkiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVTZW5kTXNnIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZW1pdCIsIndpbmRvdyIsImV2ZW50cyIsImhhbmRsZU5ld01zZyIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCO0FBQ0EsSUFBTUUsUUFBUSxHQUFHLFVBQWpCOztBQUVBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE9BQUQsRUFBVUMsUUFBVixFQUF1QjtBQUN2QyxNQUFNQyxFQUFFLEdBQUdQLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCxzQ0FDc0JILFFBQVEsR0FBRyxPQUFILEdBQWEsTUFEM0MsZ0JBRUVBLFFBQVEsR0FBR0EsUUFBSCxHQUFjLEtBRnhCLHNCQUdZRCxPQUhaO0FBS0FOLEVBQUFBLFFBQVEsQ0FBQ1csV0FBVCxDQUFxQkgsRUFBckI7QUFDRCxDQVJEOztBQVVBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQzNCQSxFQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFNQyxLQUFLLEdBQUdaLE9BQU8sQ0FBQ2EsYUFBUixDQUFzQixPQUF0QixDQUFkO0FBRjJCLE1BR25CQyxLQUhtQixHQUdURixLQUhTLENBR25CRSxLQUhtQjtBQUkzQixNQUFJVixRQUFRLEdBQUdXLFlBQVksQ0FBQ0MsT0FBYixDQUFxQmYsUUFBckIsQ0FBZjtBQUNBLDRCQUFZZ0IsSUFBWixDQUFpQkMsTUFBTSxDQUFDQyxNQUFQLENBQWNuQixPQUEvQixFQUF3QztBQUN0Q0csSUFBQUEsT0FBTyxFQUFFVyxLQUQ2QjtBQUV0Q1YsSUFBQUEsUUFBUSxFQUFSQTtBQUZzQyxHQUF4QztBQUlBUSxFQUFBQSxLQUFLLENBQUNFLEtBQU4sR0FBYyxFQUFkO0FBQ0FaLEVBQUFBLFNBQVMsQ0FBQ1ksS0FBRCxDQUFUO0FBQ0QsQ0FYRDs7QUFhTyxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUEyQjtBQUFBLE1BQXhCakIsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3JERixFQUFBQSxTQUFTLENBQUNDLE9BQUQsRUFBVUMsUUFBVixDQUFUO0FBQ0QsQ0FGTTs7OztBQUlQLElBQUlKLE9BQUosRUFBYTtBQUNYQSxFQUFBQSxPQUFPLENBQUNxQixnQkFBUixDQUF5QixRQUF6QixFQUFtQ1osYUFBbkM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcblxuY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTWVzc2FnZXNcIik7XG5jb25zdCBzZW5kTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1NlbmRNc2dcIik7XG5jb25zdCBVU0VSTkFNRSA9IFwidXNlcm5hbWVcIjtcblxuY29uc3QgYXBwZW5kTXNnID0gKG1lc3NhZ2UsIHVzZXJuYW1lKSA9PiB7XG4gIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICBsaS5pbm5lckhUTUwgPSBgXG4gIDxzcGFuIGNsYXNzPVwiYXV0aG9yICR7dXNlcm5hbWUgPyBcIm90aGVyXCIgOiBcInNlbGZcIn1cIj4ke1xuICAgIHVzZXJuYW1lID8gdXNlcm5hbWUgOiBcIllvdVwiXG4gIH06PC9zcGFuPiAke21lc3NhZ2V9XG4gIGA7XG4gIG1lc3NhZ2VzLmFwcGVuZENoaWxkKGxpKTtcbn07XG5cbmNvbnN0IGhhbmRsZVNlbmRNc2cgPSAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gc2VuZE1zZy5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gIGNvbnN0IHsgdmFsdWUgfSA9IGlucHV0O1xuICBsZXQgdXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShVU0VSTkFNRSk7XG4gIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5zZW5kTXNnLCB7XG4gICAgbWVzc2FnZTogdmFsdWUsXG4gICAgdXNlcm5hbWUsXG4gIH0pO1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIGFwcGVuZE1zZyh2YWx1ZSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3TXNnID0gKHsgbWVzc2FnZSwgdXNlcm5hbWUgfSkgPT4ge1xuICBhcHBlbmRNc2cobWVzc2FnZSwgdXNlcm5hbWUpO1xufTtcblxuaWYgKHNlbmRNc2cpIHtcbiAgc2VuZE1zZy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVNlbmRNc2cpO1xufVxuIl19
},{"./sockets":6}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./notifications");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOTJkMGQwZTMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpblwiO1xuaW1wb3J0IFwiLi9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgXCIuL2NoYXRcIjtcbmltcG9ydCBcIi4vcGFpbnRcIjtcbiJdfQ==
},{"./chat":1,"./login":3,"./notifications":4,"./paint":5,"./sockets":6}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var socket = io("/");
var logout = document.getElementById("jsLogOut");
var USERNAME = "username";
(0, _sockets.initSocket)(socket);

var handleLogout = function handleLogout() {
  localStorage.removeItem(USERNAME);
};

if (logout) {
  logout.addEventListener("click", handleLogout);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbInNvY2tldCIsImlvIiwibG9nb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIlVTRVJOQU1FIiwiaGFuZGxlTG9nb3V0IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjtBQUNBLElBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLENBQWY7QUFFQSxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFFQSx5QkFBV0wsTUFBWDs7QUFFQSxJQUFNTSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCQyxFQUFBQSxZQUFZLENBQUNDLFVBQWIsQ0FBd0JILFFBQXhCO0FBQ0QsQ0FGRDs7QUFJQSxJQUFJSCxNQUFKLEVBQVk7QUFDVkEsRUFBQUEsTUFBTSxDQUFDTyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0gsWUFBakM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcbmNvbnN0IGxvZ291dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMb2dPdXRcIik7XG5cbmNvbnN0IFVTRVJOQU1FID0gXCJ1c2VybmFtZVwiO1xuXG5pbml0U29ja2V0KHNvY2tldCk7XG5cbmNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oVVNFUk5BTUUpO1xufTtcblxuaWYgKGxvZ291dCkge1xuICBsb2dvdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUxvZ291dCk7XG59XG4iXX0=
},{"./sockets":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleLogin = exports.handleNewuser = void 0;

var _sockets = require("./sockets");

var body = document.querySelector("body");
var USERANME = "username";

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerHTML = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var userNoti = function userNoti(username) {
  var text = "".concat(username, " just joined!");
  var color = "rgb(0, 122, 255)";
  fireNotification(text, color);
};

var handleNewuser = function handleNewuser(_ref) {
  var username = _ref.username;
  userNoti(username);
};

exports.handleNewuser = handleNewuser;

var handleLogin = function handleLogin(_ref2) {
  var username = _ref2.username;
  localStorage.setItem(USERANME, username);
  userNoti(username);
};

exports.handleLogin = handleLogin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIlVTRVJBTk1FIiwiZmlyZU5vdGlmaWNhdGlvbiIsInRleHQiLCJjb2xvciIsIm5vdGlmaWNhdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwidXNlck5vdGkiLCJ1c2VybmFtZSIsImhhbmRsZU5ld3VzZXIiLCJoYW5kbGVMb2dpbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLFVBQWpCOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3hDLE1BQU1DLFlBQVksR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0FELEVBQUFBLFlBQVksQ0FBQ0UsU0FBYixHQUF5QkosSUFBekI7QUFDQUUsRUFBQUEsWUFBWSxDQUFDRyxLQUFiLENBQW1CQyxlQUFuQixHQUFxQ0wsS0FBckM7QUFDQUMsRUFBQUEsWUFBWSxDQUFDSyxTQUFiLEdBQXlCLGNBQXpCO0FBQ0FaLEVBQUFBLElBQUksQ0FBQ2EsV0FBTCxDQUFpQk4sWUFBakI7QUFDRCxDQU5EOztBQVFBLElBQU1PLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFFBQUQsRUFBYztBQUM3QixNQUFNVixJQUFJLGFBQU1VLFFBQU4sa0JBQVY7QUFDQSxNQUFNVCxLQUFLLEdBQUcsa0JBQWQ7QUFFQUYsRUFBQUEsZ0JBQWdCLENBQUNDLElBQUQsRUFBT0MsS0FBUCxDQUFoQjtBQUNELENBTEQ7O0FBT08sSUFBTVUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFrQjtBQUFBLE1BQWZELFFBQWUsUUFBZkEsUUFBZTtBQUM3Q0QsRUFBQUEsUUFBUSxDQUFDQyxRQUFELENBQVI7QUFDRCxDQUZNOzs7O0FBSUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsUUFBa0I7QUFBQSxNQUFmRixRQUFlLFNBQWZBLFFBQWU7QUFDM0NHLEVBQUFBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQmhCLFFBQXJCLEVBQStCWSxRQUEvQjtBQUNBRCxFQUFBQSxRQUFRLENBQUNDLFFBQUQsQ0FBUjtBQUNELENBSE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IFVTRVJBTk1FID0gXCJ1c2VybmFtZVwiO1xuXG5jb25zdCBmaXJlTm90aWZpY2F0aW9uID0gKHRleHQsIGNvbG9yKSA9PiB7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5vdGlmaWNhdGlvbi5pbm5lckhUTUwgPSB0ZXh0O1xuICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xuICBib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG59O1xuXG5jb25zdCB1c2VyTm90aSA9ICh1c2VybmFtZSkgPT4ge1xuICBjb25zdCB0ZXh0ID0gYCR7dXNlcm5hbWV9IGp1c3Qgam9pbmVkIWA7XG4gIGNvbnN0IGNvbG9yID0gXCJyZ2IoMCwgMTIyLCAyNTUpXCI7XG5cbiAgZmlyZU5vdGlmaWNhdGlvbih0ZXh0LCBjb2xvcik7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3dXNlciA9ICh7IHVzZXJuYW1lIH0pID0+IHtcbiAgdXNlck5vdGkodXNlcm5hbWUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZUxvZ2luID0gKHsgdXNlcm5hbWUgfSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShVU0VSQU5NRSwgdXNlcm5hbWUpO1xuICB1c2VyTm90aSh1c2VybmFtZSk7XG59O1xuIl19
},{"./sockets":6}],5:[function(require,module,exports){
"use strict";

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var boldRange = document.getElementById("jsRangeFill");
var mode = document.getElementById("jsMode");
var eraser = document.getElementById("jsEraser");
var eraserRange = document.getElementById("jsRangeEraser");
var save = document.getElementById("jsSave");
var INITIAL_COLOR = "#2c2c2c";
var CANVAS_SIZE = 700;
var INITIAL_LINE_WIDTH = 2.5;
var painting = false;
var filling = false;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.lineWidth = INITIAL_LINE_WIDTH;
ctx.strokeStyle = INITIAL_COLOR;

function handleMousemove(e) {
  var x = e.offsetX;
  var y = e.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

var startPaint = function startPaint() {
  painting = true;
};

var stopPaint = function stopPaint() {
  painting = false;
};

var handleMouseDown = function handleMouseDown() {
  startPaint();
};

var handleMouseUp = function handleMouseUp() {
  stopPaint();
};

var handleMouseLeave = function handleMouseLeave() {
  stopPaint();
};

function handleClickColor(e) {
  var color = e.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleInputRangeFill(e) {
  var size = e.target.value;
  ctx.lineWidth = size;
}

function handleClickFill() {
  if (filling) ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

var handleClickMode = function handleClickMode() {
  if (!filling) {
    mode.innerHTML = "Paint";
    filling = true;
  } else {
    mode.innerHTML = "Fill";
    filling = false;
  }
};

function handleInputRangeEraser(e) {
  var size = e.target.value;
  ctx.lineWidth = size;
}

function handleClickEraser() {
  ctx.globalCompositeOperation = "destination-out";
}

function handleClickSave() {
  var image = canvas.toDataURL();
  var link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS[🎨]";
  link.click();
}

if (canvas) {
  canvas.addEventListener("mousemove", handleMousemove);
  canvas.addEventListener("mousedown", handleMouseDown);
  canvas.addEventListener("mouseup", handleMouseUp);
  canvas.addEventListener("mouseleave", handleMouseLeave);
  canvas.addEventListener("click", handleClickFill);
  Array.from(colors).forEach(function (color) {
    return color.addEventListener("click", handleClickColor);
  });
  boldRange.addEventListener("input", handleInputRangeFill);
  mode.addEventListener("click", handleClickMode);
  eraser.addEventListener("click", handleClickEraser);
  eraserRange.addEventListener("input", handleInputRangeEraser);
  save.addEventListener("click", handleClickSave);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImJvbGRSYW5nZSIsIm1vZGUiLCJlcmFzZXIiLCJlcmFzZXJSYW5nZSIsInNhdmUiLCJJTklUSUFMX0NPTE9SIiwiQ0FOVkFTX1NJWkUiLCJJTklUSUFMX0xJTkVfV0lEVEgiLCJwYWludGluZyIsImZpbGxpbmciLCJ3aWR0aCIsImhlaWdodCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwiaGFuZGxlTW91c2Vtb3ZlIiwiZSIsIngiLCJvZmZzZXRYIiwieSIsIm9mZnNldFkiLCJiZWdpblBhdGgiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJzdGFydFBhaW50Iiwic3RvcFBhaW50IiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZU1vdXNlTGVhdmUiLCJoYW5kbGVDbGlja0NvbG9yIiwiY29sb3IiLCJ0YXJnZXQiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImZpbGxTdHlsZSIsImhhbmRsZUlucHV0UmFuZ2VGaWxsIiwic2l6ZSIsInZhbHVlIiwiaGFuZGxlQ2xpY2tGaWxsIiwiZmlsbFJlY3QiLCJoYW5kbGVDbGlja01vZGUiLCJpbm5lckhUTUwiLCJoYW5kbGVJbnB1dFJhbmdlRXJhc2VyIiwiaGFuZGxlQ2xpY2tFcmFzZXIiLCJnbG9iYWxDb21wb3NpdGVPcGVyYXRpb24iLCJoYW5kbGVDbGlja1NhdmUiLCJpbWFnZSIsInRvRGF0YVVSTCIsImxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJhZGRFdmVudExpc3RlbmVyIiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixV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bkM7QUFDQWxDLEVBQUFBLE1BQU0sQ0FBQzRELGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDekIsZ0JBQXRDO0FBQ0FuQyxFQUFBQSxNQUFNLENBQUM0RCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ2YsZUFBakM7QUFFQWdCLEVBQUFBLEtBQUssQ0FBQ0MsSUFBTixDQUFXekQsTUFBWCxFQUFtQjBELE9BQW5CLENBQTJCLFVBQUMxQixLQUFEO0FBQUEsV0FDekJBLEtBQUssQ0FBQ3VCLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDeEIsZ0JBQWhDLENBRHlCO0FBQUEsR0FBM0I7QUFJQTdCLEVBQUFBLFNBQVMsQ0FBQ3FELGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DbEIsb0JBQXBDO0FBQ0FsQyxFQUFBQSxJQUFJLENBQUNvRCxnQkFBTCxDQUFzQixPQUF0QixFQUErQmIsZUFBL0I7QUFDQXRDLEVBQUFBLE1BQU0sQ0FBQ21ELGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDVixpQkFBakM7QUFDQXhDLEVBQUFBLFdBQVcsQ0FBQ2tELGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDWCxzQkFBdEM7QUFDQXRDLEVBQUFBLElBQUksQ0FBQ2lELGdCQUFMLENBQXNCLE9BQXRCLEVBQStCUixlQUEvQjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5jb25zdCBjb2xvcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianNDb2xvclwiKTtcbmNvbnN0IGJvbGRSYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNSYW5nZUZpbGxcIik7XG5jb25zdCBtb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01vZGVcIik7XG5jb25zdCBlcmFzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzRXJhc2VyXCIpO1xuY29uc3QgZXJhc2VyUmFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUmFuZ2VFcmFzZXJcIik7XG5cbmNvbnN0IHNhdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzU2F2ZVwiKTtcblxuY29uc3QgSU5JVElBTF9DT0xPUiA9IFwiIzJjMmMyY1wiO1xuY29uc3QgQ0FOVkFTX1NJWkUgPSA3MDA7XG5jb25zdCBJTklUSUFMX0xJTkVfV0lEVEggPSAyLjU7XG5cbmxldCBwYWludGluZyA9IGZhbHNlO1xubGV0IGZpbGxpbmcgPSBmYWxzZTtcblxuY2FudmFzLndpZHRoID0gQ0FOVkFTX1NJWkU7XG5jYW52YXMuaGVpZ2h0ID0gQ0FOVkFTX1NJWkU7XG5cbmN0eC5saW5lV2lkdGggPSBJTklUSUFMX0xJTkVfV0lEVEg7XG5jdHguc3Ryb2tlU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZW1vdmUoZSkge1xuICBjb25zdCB4ID0gZS5vZmZzZXRYO1xuICBjb25zdCB5ID0gZS5vZmZzZXRZO1xuICBpZiAoIXBhaW50aW5nKSB7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gIH0gZWxzZSB7XG4gICAgY3R4LmxpbmVUbyh4LCB5KTtcbiAgICBjdHguc3Ryb2tlKCk7XG4gIH1cbn1cblxuY29uc3Qgc3RhcnRQYWludCA9ICgpID0+IHtcbiAgcGFpbnRpbmcgPSB0cnVlO1xufTtcblxuY29uc3Qgc3RvcFBhaW50ID0gKCkgPT4ge1xuICBwYWludGluZyA9IGZhbHNlO1xufTtcblxuY29uc3QgaGFuZGxlTW91c2VEb3duID0gKCkgPT4ge1xuICBzdGFydFBhaW50KCk7XG59O1xuXG5jb25zdCBoYW5kbGVNb3VzZVVwID0gKCkgPT4ge1xuICBzdG9wUGFpbnQoKTtcbn07XG5cbmNvbnN0IGhhbmRsZU1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gIHN0b3BQYWludCgpO1xufTtcblxuZnVuY3Rpb24gaGFuZGxlQ2xpY2tDb2xvcihlKSB7XG4gIGNvbnN0IGNvbG9yID0gZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVJbnB1dFJhbmdlRmlsbChlKSB7XG4gIGNvbnN0IHNpemUgPSBlLnRhcmdldC52YWx1ZTtcbiAgY3R4LmxpbmVXaWR0aCA9IHNpemU7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrRmlsbCgpIHtcbiAgaWYgKGZpbGxpbmcpIGN0eC5maWxsUmVjdCgwLCAwLCBDQU5WQVNfU0laRSwgQ0FOVkFTX1NJWkUpO1xufVxuXG5jb25zdCBoYW5kbGVDbGlja01vZGUgPSAoKSA9PiB7XG4gIGlmICghZmlsbGluZykge1xuICAgIG1vZGUuaW5uZXJIVE1MID0gXCJQYWludFwiO1xuICAgIGZpbGxpbmcgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZGUuaW5uZXJIVE1MID0gXCJGaWxsXCI7XG4gICAgZmlsbGluZyA9IGZhbHNlO1xuICB9XG59O1xuXG5mdW5jdGlvbiBoYW5kbGVJbnB1dFJhbmdlRXJhc2VyKGUpIHtcbiAgY29uc3Qgc2l6ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICBjdHgubGluZVdpZHRoID0gc2l6ZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2xpY2tFcmFzZXIoKSB7XG4gIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImRlc3RpbmF0aW9uLW91dFwiO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGlja1NhdmUoKSB7XG4gIGNvbnN0IGltYWdlID0gY2FudmFzLnRvRGF0YVVSTCgpO1xuICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gIGxpbmsuaHJlZiA9IGltYWdlO1xuICBsaW5rLmRvd25sb2FkID0gXCJQYWludEpTW/CfjqhdXCI7XG4gIGxpbmsuY2xpY2soKTtcbn1cblxuaWYgKGNhbnZhcykge1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZW1vdmUpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBoYW5kbGVNb3VzZUxlYXZlKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja0ZpbGwpO1xuXG4gIEFycmF5LmZyb20oY29sb3JzKS5mb3JFYWNoKChjb2xvcikgPT5cbiAgICBjb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tDb2xvcilcbiAgKTtcblxuICBib2xkUmFuZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGhhbmRsZUlucHV0UmFuZ2VGaWxsKTtcbiAgbW9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tNb2RlKTtcbiAgZXJhc2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGlja0VyYXNlcik7XG4gIGVyYXNlclJhbmdlLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBoYW5kbGVJbnB1dFJhbmdlRXJhc2VyKTtcbiAgc2F2ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2tTYXZlKTtcbn1cbiJdfQ==
},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSocket = exports.getSocket = void 0;

var _chat = require("./chat");

var _notifications = require("./notifications");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSocket = function initSocket(aSocket) {
  var _window = window,
      events = _window.events;
  socket = aSocket;
  socket.on(events.login, _notifications.handleLogin);
  socket.on(events.newUser, _notifications.handleNewuser);
  socket.on(events.newMsg, _chat.handleNewMsg);
};

exports.initSocket = initSocket;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldCIsImFTb2NrZXQiLCJ3aW5kb3ciLCJldmVudHMiLCJvbiIsImxvZ2luIiwiaGFuZGxlTG9naW4iLCJuZXdVc2VyIiwiaGFuZGxlTmV3dXNlciIsIm5ld01zZyIsImhhbmRsZU5ld01zZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQUlBLE1BQU0sR0FBRyxJQUFiOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCOzs7O0FBRUEsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsT0FBRCxFQUFhO0FBQUEsZ0JBQ2xCQyxNQURrQjtBQUFBLE1BQzdCQyxNQUQ2QixXQUM3QkEsTUFENkI7QUFFckNMLEVBQUFBLE1BQU0sR0FBR0csT0FBVDtBQUNBSCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDRSxLQUFqQixFQUF3QkMsMEJBQXhCO0FBQ0FSLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNJLE9BQWpCLEVBQTBCQyw0QkFBMUI7QUFDQVYsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ00sTUFBakIsRUFBeUJDLGtCQUF6QjtBQUNELENBTk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVOZXdNc2cgfSBmcm9tIFwiLi9jaGF0XCI7XG5pbXBvcnQgeyBoYW5kbGVMb2dpbiwgaGFuZGxlTmV3dXNlciB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcblxubGV0IHNvY2tldCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XG5cbmV4cG9ydCBjb25zdCBpbml0U29ja2V0ID0gKGFTb2NrZXQpID0+IHtcbiAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcbiAgc29ja2V0ID0gYVNvY2tldDtcbiAgc29ja2V0Lm9uKGV2ZW50cy5sb2dpbiwgaGFuZGxlTG9naW4pO1xuICBzb2NrZXQub24oZXZlbnRzLm5ld1VzZXIsIGhhbmRsZU5ld3VzZXIpO1xuICBzb2NrZXQub24oZXZlbnRzLm5ld01zZywgaGFuZGxlTmV3TXNnKTtcbn07XG4iXX0=
},{"./chat":1,"./notifications":4}]},{},[2])