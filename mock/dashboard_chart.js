function chart(method) {
  let res = null
  switch(method) {
    case "GET":
      res = [100, 40, 88, 10, 35, 48];
      break;
    default:
      res = null;
  }
  return res
}

module.exports = chart;