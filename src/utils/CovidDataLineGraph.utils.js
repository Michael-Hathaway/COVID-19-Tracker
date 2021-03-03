export const createWorldwideChartData = (data, caseType = 'cases') => {
  const chartData = [];

  for (let point in data[caseType]) {
    const newDataPoint = {
      x: point,
      y: data[caseType][point],
    };
    chartData.push(newDataPoint);
  }

  return chartData;
};

export const createCountryChartData = (data, caseType = 'cases') => {
  const chartData = [];

  if (data === [] || !data?.timeline) return [];

  for (let point in data?.timeline[caseType]) {
    const newDataPoint = {
      x: point,
      y: data?.timeline[caseType][point],
    };

    if (newDataPoint?.y) {
      chartData.push(newDataPoint);
    }
  }

  return chartData;
};
