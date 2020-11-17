am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.dataSource.url =
	"https://uat.4pointx.com:12361/ems_dashboard_get_plantkwhchart?plant=Pellet%20Plant&time=Last%20365%20days";

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "ts";
categoryAxis.title.text = "Date";

// First value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "kWh/ton";

// Second value axis
var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis2.title.text = "production";
valueAxis2.renderer.opposite = true;

// First series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "kWh/ton";
series.dataFields.categoryX = "ts";
series.name = "KW/ton";
series.tooltipText = "{name}: [bold]{valueY}[/]";
series.columns.template.fill = am4core.color("#A3BAC3");

// Second series
var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "production";
series2.dataFields.categoryX = "ts";
series2.name = "Production";
series2.tooltipText = "{name}: [bold]{valueY}[/]";
series2.strokeWidth = 3;
series2.yAxis = valueAxis2;

// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();
