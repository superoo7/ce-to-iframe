import { qs, loadScript } from "./util";

// wc qs
const wcName = qs["wc-name"];
const wcScript = qs["wc-src"];

// main functions
const main = () => {
  const el = document.createElement(wcName);
  Object.keys(qs).forEach(function(name) {
    if (name === "wc-name") return;
    el.setAttribute(name, qs[name]);
  });
  document.body.appendChild(el);
};

// make sure component not exist
if (!document.querySelector(wcName)) {
  loadScript(wcScript);
  main();
}
