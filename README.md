# HW12: Plot.ly Homework - Belly Button Biodiversity
![alt text](https://github.com/DanielMJones2005/HW12_InteractiveVizDashBoards/blob/master/img/bacteria_by_filterforgedotcom.jpg)

## Task 
*Build an interactive dashboard to explore the Belly Button Biodiversity DataSet

## Files

[Belly_Button_Biodiversity](https://github.com/DanielMJones2005/HW12_InteractiveVizDashBoards/tree/master/Belly_Button_Biodiversity)
  * [db](https://github.com/DanielMJones2005/HW12_InteractiveVizDashBoards/tree/master/Belly_Button_Biodiversity/db)
    * belly_button_biodiversity.sqlite
    * bellybutton.sqlite
  * [static/js](https://github.com/DanielMJones2005/HW12_InteractiveVizDashBoards/tree/master/Belly_Button_Biodiversity/static/js)
    * app.js
    * bonus.js
      - bonus code is in the app.js file
  * [templates](https://github.com/DanielMJones2005/HW12_InteractiveVizDashBoards/tree/master/Belly_Button_Biodiversity/templates)
    * index.html
  * [__init__.py](https://github.com/DanielMJones2005/HW12_InteractiveVizDashBoards/blob/master/Belly_Button_Biodiversity/__init__.py)
  * [app.py](https://github.com/DanielMJones2005/HW12_InteractiveVizDashBoards/blob/master/Belly_Button_Biodiversity/app.py)

[datasets](https://github.com/DanielMJones2005/HW12_InteractiveVizDashBoards/tree/master/datasets)
  * belly_button_data.csv
  * belly_button_metadata.csv
  * bellybutton.sqlite

[img](https://github.com/DanielMJones2005/HW12_InteractiveVizDashBoards/tree/master/img)
  * bacteria_by_filterforgedotcom.jpg
  * bubble_chart.png
  * dashboard_part1.png
  * dashboard_part2.png
  * dropdown.png
  * gauge.png
  * metadata.png
  * pie_chart.png

[.gitignore](https://github.com/DanielMJones2005/HW12_InteractiveVizDashBoards/blob/master/.gitignore)

[Procfile](https://github.com/DanielMJones2005/HW12_InteractiveVizDashBoards/blob/master/Procfile)

[initdb.py](https://github.com/DanielMJones2005/HW12_InteractiveVizDashBoards/blob/master/initdb.py)

[requirements.txt](https://github.com/DanielMJones2005/HW12_InteractiveVizDashBoards/blob/master/requirements.txt)

[run.sh](https://github.com/DanielMJones2005/HW12_InteractiveVizDashBoards/blob/master/run.sh)

[runtime.txt](https://github.com/DanielMJones2005/HW12_InteractiveVizDashBoards/blob/master/runtime.txt)


# Step 1 - Plotly.js
Used Plotly.js to build interactive charts for dashboard
  ## Pie Chart
  Created a PIE chart that used data from samples route (/samples/<sample>) to display the top 10 samples
   * Used sample_values as the values for the PIE chart
   * Used otu_ids as the labels for the pie chart
   * Used otu_labels as the hovertext for the chart

  ## Bubble Chart 
  Created a Bubble Chart that used data from samples route (/samples/<sample>) to display each sample
   * Used otu_ids for the x values
   * Used sample_values for the y values
   * Used sample_values for the marker size
   * Used otu_ids for the marker colors
   * Used otu_labels for the text values

  ## Metadata
  Displayed the sample metadata from the route /metadata/<sample>
  * Displayed each key/value pair from the metadata JSON object somewhere on the page

  ## All of the plots update any time that a new sample is selected

# Step 2 - Heroku
 Deploy Flask app to Heroku
 * [int-act-viz-dashboard](https://int-act-viz-dashboard.herokuapp.com/)

# Advanced Challenge Assignment (Optional): Belly Button Washing Frequency
* Created Gauge Chart to plot the Weekly Washing Frequency obtained from the /metadata/<sample>route
* Gauge code accounted for values ranging from 0 - 9
* Gauge updates whenever a new sample is selected

# Flask API
* Used Flask API to serve the data needed for your plots
* Tested routes by visiting each one in the browser

