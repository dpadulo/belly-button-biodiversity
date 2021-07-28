![Screengrab](https://github.com/dpadulo/belly-button-biodiversity/blob/main/BellyGrab.png)

The goal of this project was to build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

The web-based analysis can process and diplay the following data:

Uses the D3 library to read in samples.json.

Creates a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

Uses sample_values as the values for the bar chart.

Uses otu_ids as the labels for the bar chart.

Uses otu_labels as the hovertext for the chart.

Creates a bubble chart that displays each sample.

Uses otu_ids for the x values.

Uses sample_values for the y values.

Uses sample_values for the marker size.

Uses otu_ids for the marker colors.

Uses otu_labels for the text values.

Displays the sample metadata, i.e., an individual's demographic information.

Displays each key-value pair from the metadata JSON object somewhere on the page.

Updates all of the plots any time that a new sample is selected.
