const calculateMetrics = (arr: any) => {
  const apis = {};
  let latencySum = 0;
  let latencyMax = 0;
  let sizeSum = 0;
  let sizeMax = 0;
  const successfulArr = [];
  const errorArr = [];
  arr.forEach((el: object) => {
    //Queries per API
    if (!apis.hasOwnProperty(el.api)) {
      apis[el.api] = 1;
    } else {
      apis[el.api]++;
    }
    if (el.successfulQuery) {
      //Latency
      latencySum += el.latency;
      if (el.latency > latencyMax) {
        latencyMax = el.latency;
      }
      //Size
      sizeSum += el.dataSize;
      if (el.dataSize > sizeMax) {
        sizeMax = el.dataSize;
      }
      //Query vs. Error Frequency
      successfulArr.push(el.successfulQuery);
    } else {
      errorArr.push(el.successfulQuery);
    }
  });
  return {
    apis,
    latencyAvg: (latencySum / arr.length).toFixed(3),
    latencyMax: latencyMax.toFixed(3),
    sizeAvg: (sizeSum / arr.length).toFixed(3),
    sizeMax: sizeMax.toFixed(3),
    queryTotal: arr.length,
    queryFrequency: successfulArr.length,
    errorFrequency: errorArr.length,
  };
};

export default calculateMetrics;
