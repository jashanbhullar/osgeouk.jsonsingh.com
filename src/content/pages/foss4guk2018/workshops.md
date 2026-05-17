---
layout: foss4guk2018
title: "FOSS4G UK 2018: Workshops"
---

<!-- complied with pandoc workshops.md -s -o workshops.html -->

## [FOSS4G UK 2018](/foss4guk2018/) : Workshops

|Title| Main Presenter | Room |
|-----|-------------|-------------|
|[pgRouting, PostGIS and QGIS](workshops.html#pgrouting-postgis-and-qgis)| Ross McDonald | Workspace |
|[Creating Web Maps using OpenLayers](workshops.html#creating-web-maps-using-openlayers)| Matt Walker & Thomas Gratier | Hub Space |
|[Data Visualisation with QGIS](workshops.html#data-visualisation-with-qgis)| Tom Armitage | Workspace |
|[An Introduction to Processing Satellite Imagery ](workshops.html#an-introduction-to-processing-satellite-imagery )| Alastair Graham | Hub Space |
|[Getting Started with Git and GitHub](workshops.html#getting-started-with-git-and-github)| Jo Cook | Boardroom |
|[Postgres and PostGIS](workshops.html#postgres-and-postgis)| Jorge Sanz | Workspace |
|[Introduction to D3.js and Leaflet](workshops.html#introduction-to-d3js-and-leaflet)| John McCrae | Workspace |
|[Introduction to GeoNetwork](workshops.html#introduction-to-geonetwork)| Joana Simoes | Boardroom |
|[How to Contribute to GeoTools and GeoServer](workshops.html#how-to-contribute-to-geotools-and-geoserver)| Ian Turton | Hub Space |

- - -

### pgRouting, PostGIS and QGIS

**Ross McDonald, Angus Council**

**Thurs 11:00 - 13:00, Complexity: Intermediate**

How to build a routable network with pgRouting, PostGIS and QGIS and solve some simple routing problems.

Downloads at [http://mixedbredie.github.io/pgrouting-workshop/](http://mixedbredie.github.io/pgrouting-workshop/).

**Recommended Experience:** Basic understanding of PostGIS and QGIS.

**Requirements:** Installed PostgreSQL database with PostGIS and pgRouting extensions. Installed QGIS with pgRouting Layer plugin.

- - -

### Creating Web Maps using OpenLayers

**Matt Walker, Astun Technology & Thomas Gratier, WebGeoDataVore**

**Thurs 11:00 - 13:00, Complexity: Beginner**

OpenLayers makes it easy to put a dynamic map in any web page. It can display map tiles, vector data and markers loaded from any source. This workshop provides a comprehensive overview of OpenLayers as a web mapping solution.

**Recommended Experience:** Basic web development
 
**Requirements:**

- A laptop with [Node](https://nodejs.org/) v6 or higher
- Download the latest version of openlayers-workshop-en.zip from [workshop release](https://github.com/openlayers/workshop/releases)
- Extract the zip, change into the `openlayers-workshop-en` directory and install the dependencies by opening a command prompt or terminal window and running:
    `npm install`

For further information see [http://openlayers.org/workshop/en/](http://openlayers.org/workshop/en/) 

- - -

### Data Visualisation with QGIS

**Tom Armitage, EDINA, University of Edinburgh**

**Thurs 14:00 - 16:00,  Complexity: Intermediate**

This workshop will show you how to use some of the more advanced cartographic functions of QGIS to represent a range of location-based datasets with their attribute information. To do this we will look at proportional symbols, 3D representation and temporal changes. We’ll also use Draw Effects and Blend modes to create visualisations with more impact.

**Recommended Experience:** A beginner level knowledge of QGIS  

**Requirements:** 

- A laptop with QGIS 2.18 installed, the instructions are for PC but they should work on Mac and Linux.
- It would be helpful to install the following plugins: QuickMapServices, OpenLayers, TimeManager, QGIS2ThreeJS.
- Data will be provided on a USB memory stick.

- - -

### An Introduction to Processing Satellite Imagery 

**Alastair Graham, Geoger Ltd.**

**Thurs 14:00 - 16:00, Complexity: Beginner**

Following a brief introduction to the main aspects of satellite remote sensing, the workshop will allow attendees to answer a real world question, using a mix of two different types of open satellite data. By the end of the workshops the attendees should have a basic understanding of how to search for data, and interrogate an image to investigate changes in agricultural landcover over a growing season. Any updates to the workshop will be posted here [http://geoger.co.uk/2018/02/24/foss4guk-workshop-details/](http://geoger.co.uk/2018/02/24/foss4guk-workshop-details/) and submitted to the FOSS4G:UK webpage. 

**Requirements:** 

Software:  Attendees will need to have a working copy of QGIS with the Semi Automatic Classification plugin and Zonal Statistics installed and enabled. 

Data: Attendees will need to download the data for the workshop beforehand. This will be placed in the following folder before the conference - [https://goo.gl/uhcdcx](https://goo.gl/uhcdcx).

- - -

### Getting Started with Git and GitHub

**Jo Cook, Astun Technology**

**Fri 11:00 - 12:30, Complexity: Beginner**

Getting going with Git and GitHub.How to use Git and GitHub to commit and submit pull requests to code repositories, either minor documentation fixes or more major fixes using Pull Requests. An introduction to other repositories such as GitLab, and how integration with online documentation hubs such as ReadTheDocs works, so you can submit fixes to those too. 

**Recommended Experience:** Basic computing skills, ability to follow instructions

**Requirements:** A GitHub Username, Git installed, a good text editor (not wordpad or notepad. See [link to online workshop](https://archaeogeek.github.io/gettingstartedwithgit/intro/) for more details. 

- - -

### Postgres and PostGIS

**Jorge Sanz, Carto**

**Fri 11:30 - 12:30, Complexity: Intermediate**

This workshop will be compelling for current PostGIS users that want to go beyond the most basic usage. With live exercises covering how to perform interesting analysis which leverage advanced and powerful techniques:

- Do you know about geospatial index operators? 
- Have you ever used window functions like lag or dense_rank? 
- Do you know how to speed up your queries with indexes over functions? 
- Have you ever used LATERAL?
- Have you ever subdivided your polygons to accelerate point-in-polygon counts?
- Have you ever used CLUSTER?

If you answered **no** to three or more of these questions this workshop may be for you.

**Recommended Experience:** Basic SQL knowledge  

**Requirements:** We'll use a full cloud-based approach, so just a modern desktop browser will be enough. 

[Workshop materials](https://github.com/CartoDB/carto-workshop/tree/180309-foss4g-uk)

- - -

### Introduction to D3.js and Leaflet

**John McCrae, 1Spatial**

**Fri 13:30 - 15:30, Complexity: Beginner**

A fun introduction to D3.js and Leaflet - In this workshop we will build a mapping application that uses the D3.js library to enhance your data with visualizations. We will attempt to shed some light on the dark art of D3.js and look at how it interacts with Leaflet. D3.js is a lot of fun and has a vast amount of visualization potential, it uses web standards, so is very accessible and is a logical pairing for Leaflet. We will use NodeJS and MongoDB to complete the stack and at the end of the workshop you will have working code and a mapping application running on a live URL.

**Recommended Experience:** A little prior knowledge of HTML and JavaScript

**Requirements:** A working Internet connection. Bring your own laptop. Install Git, Node.js and create free accounts for Heroku and mLab (Mongo host) - please feel free to connect if you need any assistance - see you there!

- - -

### Introduction to GeoNetwork

**Joana Simoes, Geocat**

**Fri 13:30 - 15:30, Complexity: Beginner**

The workshop will focus on the first steps for the implementation of a GeoNetwork opensource based catalog to serve and access geospatial data in a Spatial Data Infrastructure.

More specifically, attendees will learn how-to create metadata using standards based templates (e.g.: ISO19115/19119), how to implement a basic workflow for metadata publication using roles, and how to configure the harvesting of spatial data resources from remote servers.

**Recommended Experience:** No specific skills are required, although some basic knowledge of metadata and OGC web services is recommended.

**Requirements:** There are no specific requirements, as users will access Geonetwork from a cloud instance, using a browser.

- - -

### How to Contribute to GeoTools and GeoServer

**Ian Turton, Astun Technology**

**Fri 14:30 - 15:30, Complexity: Beginner**

This workshop will introduce users to contributing to the GeoTools and GeoServer projects. It assumes that you are a Java developer and are used to compiling and debugging Java code. You will need to have installed git (see [https://www.atlassian.com/git/tutorials/install-git](https://www.atlassian.com/git/tutorials/install-git) for details on how to do this). As an existing Java developer, you will already have an IDE installed and Java 8 (either Oracles or OpenJDK).

The workshop will take you through the process of forking the git repositories, creating a branch, building the projects and testing them. Before looking at how to debug an issue, create a unit test and a fix for your issue and finally how to publish that fix and get it incorporated into the main project.

If this workshop fires you up then come along to the code sprint on Saturday to put these ideas into action.

**Recommended Experience:** Java Development

**Requirements:** Bring your own laptop 

<!-- template

|[title](#title)| Presenter | Thurs 11am - 1pm | Workspace

### title

**presentor**

**Workshop (2 hours) / Complexity: Intermediate**

**Recommended Experience:**

**Requirements:**

-->

