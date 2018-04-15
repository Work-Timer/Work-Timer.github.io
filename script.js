this.onmessage = function(m) {
  if (m.data.current !== undefined) {
    this.postMessage({result: (+m.data.current + 1)});
  }
}