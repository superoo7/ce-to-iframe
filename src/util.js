export const debounce = (func, wait, immediate) => {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

export const qsGen = a => {
  if (a == "") return {};
  var b = {};
  for (var i = 0; i < a.length; ++i) {
    var p = a[i].split("=", 2);
    if (p.length == 1) b[p[0]] = "";
    else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
  }
  return b;
};

export const qs = qsGen(window.location.search.substr(1).split("&"));

export const loadScript = (src, resolve = () => {}, reject = () => {}) => {
  var js = document.createElement("script");
  js.src = src;
  js.onload = resolve;
  js.onerror = function() {
    reject(new Error("Failed to load script " + srcObj.src));
  };
  document.head.appendChild(js);
};
