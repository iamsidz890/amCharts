am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.dataSource.url =
	"https://uat.4pointx.com:12361/ems_dashboard_get_plantkwhchart?plant=Pellet%20Plant&time=Last%20365%20days";

// Create axes
// var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.gridIntervals.setAll([
	{ timeUnit: "day", count: 1 },
	{ timeUnit: "day", count: 3 },
]);

// categoryAxis.dataFields.category = "ts";
// categoryAxis.title.text = "Date";

// First value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "kWh/ton";
valueAxis.renderer.minGridDistance = 20;

// Second value axis
var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());

valueAxis2.title.text = "production";
valueAxis2.renderer.opposite = true;
valueAxis2.renderer.minGridDistance = 20;

// First series
var series = chart.series.push(new am4charts.ColumnSeries());
series.columns.template.width = am4core.percent(30);
series.dataFields.valueY = "kWh/ton";
series.dataFields.dateX = "ts";
series.name = "Energy";
series.tooltipText = "{name}: [bold]{valueY}[/]";
series.columns.template.fill = am4core.color("#457B9D");

// Second series
var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "production";
series2.dataFields.dateX = "ts";
series2.name = "Production";
series2.tooltipText = "{name}: [bold]{valueY}[/]";
series2.stroke = am4core.color("#E9C46A");
series2.strokeWidth = 3;
series2.yAxis = valueAxis2;
// series2.bullets.push(new am4charts.CircleBullet());
let bullet = series2.bullets.push(new am4charts.CircleBullet());
bullet.circle.fill = am4core.color("#fff");
bullet.circle.strokeWidth = 3;

// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();
