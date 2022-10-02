import { getWindowSize } from "utils/Helpers";
import "../App.css";

const BarChart = ({ data }) => {
  const smallWidth = getWindowSize().innerWidth < 400;
  const smallHeight = getWindowSize().innerHeight < 700;

  const SVG_WIDTH = smallWidth ? 400 : 650;
  const SVG_HEIGHT = smallHeight ? 200 : 400;

  const x0 = 50;
  const xAxisLength = SVG_WIDTH - x0 * 4;

  const y0 = 50;
  const yAxisLength = SVG_HEIGHT - y0 * 2;

  const xAxisY = y0 + yAxisLength;

  const dataYMax = 60;
  const dataYMin = 0;
  const dataYRange = dataYMax - dataYMin;

  const numYTicks = 6;

  const barPlotWidth = xAxisLength / data.length;

  return (
    <svg width={SVG_WIDTH} height={SVG_HEIGHT}>
      {/* X axis */}
      <line
        x1={x0}
        y1={xAxisY}
        x2={x0 + xAxisLength}
        y2={xAxisY}
        stroke="grey"
      />
      <text x={x0 + xAxisLength + 5} y={xAxisY + 4}>
        characters
      </text>

      {/* Y axis */}
      <line x1={x0} y1={y0} x2={x0} y2={y0 + yAxisLength} stroke="grey" />
      {Array.from({ length: numYTicks }).map((_, index) => {
        const y = y0 + index * (yAxisLength / numYTicks);

        const yValue = Math.round(dataYMax - index * (dataYRange / numYTicks));

        return (
          <g key={index}>
            <line x1={x0} y1={y} x2={x0 + xAxisLength} y2={y} stroke="grey" />
            <text x={x0 - 5} y={y + 5} textAnchor="end">
              {yValue}
            </text>
          </g>
        );
      })}
      <text x={x0} y={y0 - 8} textAnchor="start">
        episodes
      </text>

      {/* Bar plots */}
      {data.map(([character, dataY, color], index) => {
        const x = x0 + index * barPlotWidth;

        const yRatio = (dataY - dataYMin) / dataYRange;

        const y = y0 + (1 - yRatio) * yAxisLength;
        const height = yRatio * yAxisLength;

        const sidePadding = 30;

        return (
          <g key={index}>
            <rect
              fill={color}
              x={x + sidePadding / 2}
              y={y}
              width={barPlotWidth - sidePadding}
              height={height}
            />
            <text x={x + barPlotWidth / 2} y={xAxisY + 16} textAnchor="middle">
              {character}
            </text>
          </g>
        );
      })}
    </svg>
  );
};
export default BarChart;
