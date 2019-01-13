import Vue from "vue";

new Vue({
  data: function() {
    return {
      url: "https://widgets.coingecko.com/coingecko-coin-converter-widget.js",
      ceName: "coingecko-coin-converter-widget",
      inputs: []
    };
  },
  methods: {
    addInput: function() {
      this.inputs.push({
        key: this.inputs.length,
        name: "",
        value: ""
      });
    },
    selectAll: function(e) {
      e.target.focus();
      e.target.select();
    }
  },
  computed: {
    iframeUrl: function() {
      const defaultLoc = [
        { name: "wc-name", value: encodeURIComponent(this.ceName) },
        { name: "wc-src", value: encodeURIComponent(this.url) },
        ...this.inputs.filter(d => d.name !== "")
      ];
      let encoded = defaultLoc.map(d => `${d.name}=${d.value}`).join("&");
      return `${window.location.origin}/?${encoded}`;
    },
    iframeCode: function() {
      return `<iframe src="${this.iframeUrl}" />`;
    }
  }
}).$mount("#generator");
