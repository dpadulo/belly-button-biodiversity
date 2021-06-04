let url = 'StarterCode/Data/samples.json'
// Extract json data
d3.json(url).then(function(data){
    console.log(data)

    let names = data.names

    names.forEach(d=>{
        d3.select('#selDataset').append('option').text(d).property('value',d)
    })
  
    // Retrieve sample values
    let values = data.samples[0].sample_values.slice(0, 10).reverse()
  
    // Just retrieve top 10 OTU ids for the plot OTU and reverse. 
    let ids = data.samples[0].otu_ids.slice(0, 10).map(d => `OTU ${d}`)
        
    // Top 10 labels for the plot
    let labels = data.samples[0].otu_labels.slice(0,10)
   
    // Make trace for the plot
    let trace = {
        x: values,
        y: ids,
        text: labels,
        type:"bar",
        orientation: "h",
    }
  
    // Connect trace data 
    let plotData = [trace]

    // Create bar plot
    Plotly.newPlot('bar',plotData)
      
    // Static bubble chart

    let bubbleValues = data.samples[0].sample_values
    let bubbleIds = data.samples[0].otu_ids
    let bubbleLabels = data.samples[0].otu_labels

    // Create trace for plot
    let traceBubble = {
      x: bubbleIds,
      y: bubbleValues,
      mode: "markers",
      marker: {
          size: bubbleValues,
          color: bubbleIds
      },
      text: bubbleLabels
  
      }
        
      // Connect trace data
      var dataBubble = [traceBubble];

    let layoutBubble = {
      xaxis: { title: "OTU ID"}
    };  
        
      // Create bubble plot
      Plotly.newPlot('bubble', dataBubble, layoutBubble);
  
      // Static Demographics
      let demographicsID = data.metadata[0].id
      let demographicsEthnicity = data.metadata[0].ethnicity
      let demographicsGender = data.metadata[0].gender
      let demographicsAge = data.metadata[0].age
      let demographicsLocation = data.metadata[0].location
      let demographicsBBtype = data.metadata[0].bbtype
      let demographicsWfreq = data.metadata[0].wfreq
      let table = d3.select('tbody')
      let row = table.append('tr')
      let cell = row.append('td')
      cell.text(`id: ${demographicsID}`)
      let row2 = table.append('tr')
      let cell2 = row2.append('td')
      cell2.text(`ethnicity: ${demographicsEthnicity}`)
      let row3 = table.append('tr')
      let cell3 = row3.append('td')
      cell3.text(`gender: ${demographicsGender}`)
      let row4 = table.append('tr')
      let cell4 = row4.append('td')
      cell4.text(`age: ${demographicsAge}`)
      let row5 = table.append('tr')
      let cell5 = row5.append('td')
      cell5.text(`location: ${demographicsLocation}`)
      let row6 = table.append('tr')
      let cell6 = row6.append('td')
      cell6.text(`bbtype: ${demographicsBBtype}`)
      let row7 = table.append('tr')
      let cell7 = row7.append('td')
      cell7.text('wfreq: ${demographicsWfreq}')

      // Static Gauge
  
      let dataGauge = [
        {
          value: demographicsWfreq,
          title: { text: "Belly Button Washing Frequency: Scrubs per week", font: { size: 24 } },
          type: "indicator",
          mode: "gauge+number",
          gauge: { 
            axis: { range: [null, 9], tickwidth: 1, tickcolor: "blue" },
            bar: { color: "#404040"},
            bgcolor: "white",
            borderwidth: 2,
            bordercolor: "#404040",
            steps: [
              { range: [0, 1], color: "#cfc357" },
              { range: [1, 2], color: "#dfe0a4" },
              { range: [2, 3], color: "#7aebdf" },
              { range: [3, 4], color: "#8dd6d9" },
              { range: [4, 5], color: "#00FA9A" },
              { range: [5, 6], color: "#00FF7F" },
              { range: [6, 7], color: "#3CB371" },
              { range: [7, 8], color: "#2E8B57" },
              { range: [8, 9], color: "#006400" },
            ],
          }             
        } 
      ];
        
      let layoutGauge = {
        width: 700, 
        height: 600, 
        margin: { t: 20, b: 40, l:100, r:100 }, 
        paper_bgcolor: "white",
        font: { color: "#404040", family: "Times New Roman" }
      };

      // Create Gauge plot
      Plotly.newPlot("gauge", dataGauge, layoutGauge);
  })

// read json file to retrieve data
d3.json(url).then(function(data){

    let input = d3.select('#selDataset')
    input.on('change',function(){

        // Dynamic Bar Chart
        let newText = d3.event.target.value;
        let values2 = data.samples.filter(d=> d.id == newText)[0].sample_values.slice(0,10).reverse()
        let ids2 = data.samples.filter(d=> d.id == newText)[0].otu_ids.slice(0,10).map(d => `OTU ${d}`)
        let labels2 = data.samples.filter(d=> d.id == newText)[0].otu_labels.slice(0,10)

        // Create trace for plot
        let trace2 = {
            x: values2,
            y: ids2,
            type: 'bar',
            text: labels2,
            orientation: 'h'
        }

        // Connect trace data
        let plotData2 = [trace2]

        // Create the dynamic bar chart
        Plotly.newPlot('bar', plotData2)

        // Dynamic Bubble Chart
        let bubbleValues2 = data.samples.filter(d=> d.id == newText)[0].sample_values
        let bubbleIds2 = data.samples.filter(d=> d.id == newText)[0].otu_ids
        let bubbleLabels2 = data.samples.filter(d=> d.id == newText)[0].otu_labels

        let traceBubble2 = {
            x: bubbleIds2,
            y: bubbleValues2,
            text: bubbleLabels2,
            mode: 'markers',
            marker: {
                size: bubbleValues2,
                color: bubbleIds2
            }
        }

        // Connect trace data
        var dataBubble2 = [traceBubble2];
        
        let layoutBubble2 = {
          xaxis: { title: "OTU ID"}
        };  

        // Create dynamic Bubble Chart
        Plotly.newPlot('bubble', dataBubble2, layoutBubble2);

        // Dynamic Demographics

        let demographicsID = data.metadata.filter(d=> d.id == newText)[0].id
        let demographicsEthnicity = data.metadata.filter(d=> d.id == newText)[0].ethnicity
        let demographicsGender = data.metadata.filter(d=> d.id == newText)[0].gender
        let demographicsAge = data.metadata.filter(d=> d.id == newText)[0].age
        let demographicsLocation = data.metadata.filter(d=> d.id == newText)[0].location
        let demographicsBBtype = data.metadata.filter(d=> d.id == newText)[0].bbtype
        let demographicsWfreq = data.metadata.filter(d=> d.id == newText)[0].wfreq
        let table = d3.select('tbody')

        table.html('')
        let row = table.append('tr')
        let cell = row.append('td')
        cell.text(`id: ${demographicsID}`)
        let row2 = table.append('tr')
        let cell2 = row2.append('td')
        cell2.text(`ethnicity: ${demographicsEthnicity}`)
        let row3 = table.append('tr')
        let cell3 = row3.append('td')
        cell3.text(`gender: ${demographicsGender}`)
        let row4 = table.append('tr')
        let cell4 = row4.append('td')
        cell4.text(`age: ${demographicsAge}`)
        let row5 = table.append('tr')
        let cell5 = row5.append('td')
        cell5.text(`location: ${demographicsLocation}`)
        let row6 = table.append('tr')
        let cell6 = row6.append('td')
        cell6.text(`bbtype: ${demographicsBBtype}`)
        let row7 = table.append('tr')
        let cell7 = row7.append('td')
        cell7.text('wfreq: ${demographicsWfreq}')

        // Static Gauge
        let dataGauge = [
            {
            domain: { x: [0, 1], y: [0, 1] },
            value: demographicsWfreq,
            title: { text: "Belly Button Washing Frequency: Scrubs per week", font: { size: 24 } },
            type: "indicator",
            mode: "gauge+number",
            gauge: { 
                axis: { range: [null, 9], tickwidth: 1, tickcolor: "blue" },
                bar: { color: "#404040"},
                bgcolor: "white",
                borderwidth: 2,
                bordercolor: "#404040",
                steps: [
                { range: [0, 1], color: "#cfc357" },
                { range: [1, 2], color: "#dfe0a4" },
                { range: [2, 3], color: "#7aebdf" },
                { range: [3, 4], color: "#8dd6d9" },
                { range: [4, 5], color: "#00FA9A" },
                { range: [5, 6], color: "#00FF7F" },
                { range: [6, 7], color: "#3CB371" },
                { range: [7, 8], color: "#2E8B57" },
                { range: [8, 9], color: "#006400" },
                ],
            }             
            } 
          ];
          
          let layoutGauge = { 
            width: 700, 
            height: 600, 
            margin: { t: 20, b: 40, l:100, r:100 }, 
            paper_bgcolor: "white",
            font: { color: "#404040", family: "Times New Roman" }
          };
  
          // Create the Gauge plot
          Plotly.newPlot("gauge", dataGauge, layoutGauge);
    })
})
