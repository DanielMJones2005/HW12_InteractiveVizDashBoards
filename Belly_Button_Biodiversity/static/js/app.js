function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel
  const metaUrl = `metadata/${sample}`;
  let metaPanel = d3.select("#sample-metadata");

  // Use `d3.json` to fetch the metadata for a sample
  d3.json(metaUrl).then((sample) => { 
    // Use d3 to select the panel with id of `#sample-metadata`
    // Use `.html("") to clear any existing metadata
    metaPanel.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(sample).forEach(([key, value]) => {
      metaPanel
        .append("p")
        .text(`${key}: ${value}`);
    });
  
  });
    

       
    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
}

function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
  const sampleData = `samples/${sample}`;
  
    // @TODO: Build a Bubble Chart using the sample data
  d3.json(sampleData).then((sample) => {
    let xValues = sample.otu_ids;
    let yValues = sample.sample_values;
    let markSize = sample.sample_values;
    let markColor = sample.otu_ids;
    let textLabels = sample.otu_labels

    var bubbleTrace = {
      x: xValues,
      y: yValues,
      text: textLabels,
      mode: 'markers',
      marker: {
        color: markColor,
        size: markSize
      }
    };
    
    var bubbleLayout = {
      title: 'Marker Size',
      showlegend: false,
      //height: 600,
      //width: 600
    };
    
    Plotly.newPlot("bubble", bubbleTrace, bubbleLayout);
  });
  

    // @TODO: Build a Pie Chart
  d3.json(sampleData).then((sample) => {
    let sampleValues  = sample.sample_values.slice(0,10);
    let sampleLabels = sample.otu_ids.slice(0,10);
    let sampleText = sample.otu_labels.slice(0,10)

    let pieTrace = [{
      values: sampleValues,
      labels: sampleLabels,
      hovertext: sampleText,
      type: "pie",
      title: "Top Samples"
    }];

    let pieLayout = {
      height: 600,
      width: 800,
      showlegend: true
    };

    Plotly.newPlot("pie", pieTrace, pieLayout);
  });
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).


}



// 


function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
