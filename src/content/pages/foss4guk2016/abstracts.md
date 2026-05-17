---
layout: foss4guk2016
title: "FOSS4G UK 2016: Abstracts"
---
## [FOSS4G UK 2016](/foss4guk2016/) : Abstracts

###  A gentle introduction to GeoDjango and Openlayers 3

**Anusha Chickermane Atlantic Geomatics Ltd.**

**Workshop (half day) / Target Audience: People new to web-mapping**

The aim of this workshop is to show how GeoDjango and Openlayers can be used together to create beautiful and interactive web mapping applications using vector data, and to understand the rationale and implications of using this method to develop mapping websites.

Description: In this workshop, participants will build a web application displaying road accident data for different counties.  The workshop will start with a brief presentation on django and geodjango, and the pros/cons of using this approach. We will then proceed to the coding section of the workshop where all participants will create a django website. They will use bootstrap, openlayers and django templates to create beautiful user interfaces, use geodjango's widgets and forms to create and save new vector data, and use geodjango's admin page to manage the data. 

Materials Provided: Paper and electronic copies of detailed handouts to be used during the lecture portions of the workshop, and a github link containing the code used in the workshop.

Presenter Bio: I am a Senior Software Developer for Atlantic Geomatics, a surveying company where I design and develop GIS mapping solutions using Python, Django, PostgreSQL, PostGIS and AngularJS as Scrummaster of a team of 3. I have 4 years of experience working on successful projects using Java, Javascript and Python. I have a MSc. in Cybersecurity and a MSc. in Computer Science, and a professional membership with the British Computing Society.

* [Slides](https://github.com/anushamc/foss4guk-django-openlayers/raw/master/presentation/GeoDjango%20and%20Openlayers%203.pptx)
* [Material](https://github.com/anushamc/foss4guk-django-openlayers/)

###  A GI Node for the Environment

**Matt Debont JNCC**

**Presentation**

The volume of spatial data being produced has grown exponentially within recent years, with the European Sentinel satellite program alone expected to produce 8TB of data per day once it is fully operational. However, knowing how to access, process and analyse this data can be more of a challenge. The Joint Nature Conservation Committee (JNCC) is working to develop automated processing chains to extract ecologically relevant data products from multiple sources, including Sentinel 2 and Landsat 8 as well as services to deliver these as multi-annual time series via a node providing storage, processing and visualisation.
  
This node will provide a single point for government agencies and the general public to access this data and consists of a number of open-source technologies. This includes PostgreSQL/PostGIS to store our spatial data and Geoserver to provide visualisation along with a number of applications to deliver API’s to access the data in a convenient manner.  

We have developed a number of Vagrant and Ansible scripts describing our infrastructure, allowing us to tailor our solution to suit a range of environments and configurations. Alongside this infrastructure we are working on a number of applications to work with our node to share data, derive new products and visualise the output. This talk will discuss the current state of our developments, some of our current processing chains and derived products, issues we have encountered so far and where we plan to go from here.

###  A machine learning approach to roof shape classification

**Isabel Sargent Ordnance Survey / David Holland Ordnance Survey**

**Presentation**

The automatic classification of roof shape from remotely sensed data has a number of applications including improving automatic 3D building modelling, rapid visualisation of large built areas and insurance risk modelling. To date, most roof shape classification work has used approaches based on defined rules and heuristics to model the shape of the roof. By contrast, in our work, we follow a different approach - one based on the observation that skilled humans don't follow rules but rather simply 'see' what the shape of a roof is. This approach, using machine learning methods, learns a mapping from input data to the output class label. Starting with a large area DSM and building polygons, OpenCV was used within Python to extract the heights of the DSM falling on building roofs. These roof surface models were then normalised using rotation, scaling and interpolation so that every roof was represented by a standard length vector of values. This vector was then suitable for use as input to machine learning algorithms in the Python libraries scikit-learn and neon to build models that predict the roof shape from the normalised roof surface models. Tests were performed to determine the best architecture for the prediction model and it was found that the complexity of this architecture depended on the classification problem being posed. Work continues into understanding the best outcome for different customer use cases and in building approaches that are robust to changes in input data.

### BRIN indexes on geospatial database

**Giuseppe Broccolo 2ndQuadrant**

**Presentation**

BRINs (Block Range INdexes) are one of the major new features introduced with PostgreSQL 9.5. They allow you to directly select just blocks of table pages needed for queries execution, resulting on smaller indexes that can be easily contained in memory and that require less maintenance than the existing ones.
These features make BRIN particularly suitable for very large tables, and more in general for query with a low-selectivity that would be executed preferring a sequential scan of all tables' blocks instead of using indexes.
In this talk I will present how BRIN indexes can be used on geographical database based on PostgreSQL and its spatial extensions, showing how they can perform with a large amount of data such as LiDAR surveys.

* [Slides](http://goo.gl/fDfYeO)

### Bulk processing, data sharing and visualization of Sentinel-derived products

**Giulio Pagan Airbus Defence and Space / Thomas Lankester Airbus Defence and Space**

**Presentation**

Airbus Defence & Space is implementing the Airbus Processing Cloud (APC). The APC is a virtualised processing environment that is designed to support bulk production of EO-derived products, particularly from data acquired by the new Sentinel-1 and Sentinel-2 instruments.
 
Utilising the UK Collaborative Ground Segment as the mechanism for accessing Sentinel data, the APC brings the processing to the data and standardizes the associated metadata, according to the INSPIRE recommendations, as per the ISO 19115-2 (2009) extensions for imagery and gridded data. 
 
The virtualised processing relies on a scalable, privately hosted cloud. The execution of individual processing steps is handled by specialized workers and task queues, with the overarching production orchestrated by a dedicated workflow engine.
 
The products are then distributed by GetGeo, a generic Airbus Defence & Space framework which provides integrated and interoperable (OGC) visualization, catalogue and data sharing services.
 
The products generated by the APC will be relevant in a range of thematic contexts, examples include change detection for environmental monitoring, forestry monitoring, surface movement monitoring and monitoring of crop condition. Products will have utility and relevance in the UK, European and global contexts.
 
Taking the monitoring of crop condition as an example, Airbus Defence & Space is working in partnership with the South African National Space Agency (SANSA) to develop an operational workflow to generate wide area, routine observations of crop condition to support improved land management and mitigation of food security threats in South Africa. The APC is being used for the routine generation of a suite of biophysical parameters (e.g. LAI, FAPAR, FCover, FBrown etc) from dense time series of optical satellite observations (DMC, SPOT, Sentinel-2). These biophysical parameters, along with the corresponding reflectance channels, provide the EO inputs to an integrated crop model developed by SANSA. The integrated crop model generates a range of products including active/inactive parcels, estimates of above ground biomass and dynamic observations of crop condition. A customised implementation of the GetGeo framework enables the graphical visualisation of the biophysical parameter time series at the field parcel level. The work is funded by the UKSA through its International Partnership Space Programme.
 
This presentation provides a high level description of the APC concept and its application in an operational context using the crop condition service as an example. The presentation is thus intended to demonstrate Airbus Defence & Space's initiative in combining GIS and BIG Data technologies for the exploitation of large volumes of EO data.

### Delivering low cost spatial infrastructure in the cloud

**Meghana Garg UK Power Network / Pascal Coulon SCISYS**

**Presentation**

UK Power Networks (UKPN) is the distribution network operator for electricity covering South East England, the East of England and London. UKPN is leading in a number of projects involving low carbon generated electricity from renewable energy sources. Key to enabling the low carbon electricity generation is the Distributed Generation Mapping Platform, a web based mapping solution enabling external stakeholders and low carbon electricity providers to manage and request access to the power grid.
 
In partnership with the IT provider SCISYS, UKPN commissioned the implementation of the new DG Mapping Platform. The proposed solution needed to support dynamic and increasing customer demand through a scalable and low cost platform. As a part of the architecture design, SCISYS identified opportunities to apply governance to enforce the key principles of an Open Architecture. The use of Open Standards has for instance enabled UKPN to consume external data feeds removing the need for internal hosting.
The use of Open Source products and decoupling has also further reduced vendor lock-in, enabling a more flexible approach to product upgrade as requirements and technologies evolved. This is for instance the use of an Open Source spatial stack integrated with Drupal CMS. 
 
UKPN is now enabled with a scalable and interoperable spatial platform; allowing sharing of data across different business entities within the group. Cost benefit analysis demonstrated that UKPN has achieved the desired scalability and extensibility for a low initial investment. SCISYS ‘agile delivery approach and continuous stakeholder engagement further improved on the returns delivered.

### Don't be afraid to commit

**Jo Cook Astun Technology**

**Workshop (2 hours) / Target Audience: Beginners**

This workshop will aim to help beginners with the technologies and workflows they need to get started with committing to open source projects, with a focus on documentation and GitHub

### Earning your support instead of buying it

**Ian Turton Astun Technology**

**Presentation**

More organisations are moving to use FOSS4G software to cover shrinking
budgets. It is very appealing to an organization’s leaders to ditch their current
proprietary software solution with the attendant saving on per user licences
and on-going maintenance costs. Obviously, if you switched to FOSS4G to get
better features and scalability you should consider buying a support contract
from one of the many vendors that offer them, these companies support many
of the core developers directly. This way you get all the advantages of open
source, prompt support and often the chance to ask for new features. However,
if you (or your boss) are looking to save money then you are moving from a
cash economy to a gift economy. In a gift culture you need to build up your
“capital” before attempting to take too much out.
For example, you’ve downloaded the software and installed it, and all looks
good. Then disaster hits, you have a demo for the CIO and something isn’t
working; Time to hit the user list, the developer list, stack exchange. Why can’t
you get an answer? Remember just because your issue is urgent to you the
developers might be in the middle of a new release or adding a new feature
and have much more important (or fun) things to do with their time. They will
notice they have never seen your name before on the list, or on Stack
Exchange that you have a reputation in the low single digits – thus you are a
newbie. There’s no harm in that but wouldn’t it be better to have got that out
of the way before your emergency. You could have built up your reputation by
asking some questions earlier – especially questions like “what can I do to
help?” or “I found an unclear paragraph in the install instructions, how do I fix it
for you?” on a mailing list. On Stack Exchange you can build reputation by
asking good questions and by answering other people’s questions.
Once you’ve banked some capital there are still good and bad ways of asking a
question. Developers are busy people (the GeoTools users list has 20-30
messages a day for example) no one has time to read all of them closely. If you
use a poor subject (e.g. “Help!!!!”) or don’t provide a clear description of the
problem (e.g. “it crashes, your software sucks”) then the odds of being ignored
are huge. It can be tempting once you have found a helpful (or friendly)
developer to keep emailing them directly, but this is likely to lead a polite(ish)
reminder to keep to the list so that everyone can benefit or silence.
This talk will attempt to show how to be a better open source citizen and get a
better answer than RTFM or STFW when your project is stuck and the demo is
the next day. 

### Finding Road Gradients With Open Source Data and Tools

**Dave Barter Nautoguide Ltd.**

**Presentation**

Road gradient markers are incredibly useful. They tell us where the "steepness" is and can be used to deter drivers in ice weather or encourage fanatical cyclists to seek out yet another hill. Dave Barter has started a journey attempting to use open source tools and data to find these gradients in the UK and add them to the map. His talk will cover how to load and analyse raster and vector height data. How to write POSTGRES/PostGIS code to find the gradients and how to construct a simple plugin in QGIS to view them.

* [Slides](https://github.com/nautoguide/gradient_markers)

### From 2.5D to 4D Exploring other dimensions

**Nicholas Duggan Garsdale Design Ltd**

**Presentation**

Demonstrating how 2.5D, 3D & 4D are used in Urban Planning and how it is achieved using open source. 
This will cover QGIS 2.5D renderer (using z values), Cesiumjs & 2.5D with Time Manager.  

* [Slides](http://bit.ly/FOSS4GUK)

### Geo4All - Empowering Communities for a better world 

**Suchith Anand University of Nottingham**

**Presentation**

This presentation will introduce the Geo4All initiative and show how universities, government organisations, SMEs , NGOs in the UK can be part of this excellent OSGeo initiative with the mission for making geospatial education and opportunities accessible to all.

### GeoFire — Realtime location queries with Firebase

**Sebastian Ovide Ordnance Survey (Geovation)**

**Workshop (2 hours) / Target Audience: Developers with appreciation of JS.**

We'll write a serverless web app using Firebase as backend and GeoFire to store and retrieve data within a given geographic area. Even if it could be done using PostGIS, using Firebase will allow us to write an app that can scale painlessly without any development work involved.

### Getting started with Openlayers

**Thomas Gratier WebGeoDataVore**

**Workshop (half day) / Target Audience: Beginners looking for introduction to OpenLayers. They should be able to use a text editor, a browser and knowing basic use of command line.**

This workshop will introduce by the example how to begin with OpenLayers 3. It will go through how to create you first map, use various available layers, manage interactions on the map and use vector data with the styles.
Along, you will learn where and how to use Openlayers resources when you need to go further.

* [Presentation](http://labs.webgeodatavore.com/workshop-openlayers-3-foss4g-uk-2016/)
* [Workshop content (presentation and samples)](http://labs.webgeodatavore.com/workshop-openlayers-3-foss4g-uk-2016/openlayers-workshop.zip) with [sources](https://github.com/webgeodatavore/workshop/tree/ol3-foss4g-uk-2016)

### GOST - Go implementation of OGC SensorThings API

**Bert Temme Geodan**

**Presentation**

The OGC (Open Geospatial Consortium) SensorThings API is an OGC candidate standard for providing an open and unified way to interconnect IoT devices, data, and applications over the Web. The SensorThings API is an open standard, builds on Web protocols and the OGC Sensor Web Enablement standards, and applies an easy-to-use REST-like style. 

This presentation will dive deep in the journey of building GOST: an OGC SensorThing compatible server programmed in Go. It will bring you up to speed with the world of IOT and OGC, using a practical, demo-first approach.

https://github.com/geodan/gost

* [Slides](http://slides.com/bertt/gost_foss4guk)


### How to draw a polygon

**Charles Kennelly Esri UK**

**Presentation**

A quest to simplify the process of capturing and maintaining geographic data, to the level where anyone can do it, lead to some fundamental questions about the basics of a GIS interface. This presentation and talk will explore the issues and proposed solution via demonstration

### How to teach QGIS

**Ant Scott Astun Technology**

**Presentation**

This presentation will look at the design and implementation of QGIS training, aiming to help course designers maximise learning for trainees within the constraints they are operating within. A number of different models for teaching QGIS (to people both with and without GIS experience) will be reviewed, trying to identify factors which can improve learning outcomes and some which can hinder them. There will be recommendations for resources, structural approaches, and course curricula. Ant will draw on five years of experience running training on QGIS, covering UK local government, commercial organisations, and humanitarian organisations, from two hour workshops to three day courses.

* [Slides](https://drive.google.com/file/d/0B4W_Kvx6vYhTVFk2eEhzRTBDRUU/view?usp=sharing)


###  Humanitarian Hack with HXL

**Ant Scott MapAction**

**Code Sprint / Hackathon**

HXL (Humanitarian Exchange Language) has been released this year - a new standard, 'designed to improve information sharing during a humanitarian crisis without adding extra reporting burdens'. It uses a controlled but extensible set of hashtags, added as the first column of a spreadsheet, to classify data. MapAction is proposing a hack to develop ways of using this to support data discovery and usage for spatial data, including, for example, integrating with QGIS, and making use of CKAN. 

HXL has been developed with the support of UNOCHA (The United Nations Office for the Coordination of Humanitarian Affairs). OCHA also manage HDX (Humanitarian Data Exchange), used to support the work of humanitarian organisations both during crises and at other times. Limited work has been done with HXL to date but it is seen as an important means of allowing shared data to be re-used effectively. HDX uses CKAN as its back end, and is open source - the code is on Github. MapAction, who provide maps to support humanitarian response, are also developing their own data and products repository, also using CKAN and linked to HXL.

Like all standards, HXL is only going to be useful when tools support it - so the hack could explore ways in which HXL data could be integrated into humanitarian data workflows, for example through automated default tag-driven styling in QGIS, or metadata creation in CKAN. Possible outputs could be one or more of requirements definitions, proposed integration architecture, simple prototype.

http://hxlstandard.org/

### Improving Open Source GIS Workflow with a SLD Editor

**Robert Ward SciSys**

**Presentation**

Delivering GIS solutions with open source software is getting very simple; the complexity of configuration is continually being reduced from the user/developer.  However there is one area of Open Source GIS that has not kept up with these productivity advances and that is the configuration of Styled Layer Descriptors (SLD).  Experimenting with any SLD settings, especially the labelling, takes a long time in GeoServer to see the results. The scenario of using a text editor, uploading the file to GeoServer, viewing data in the new style and repeating until the correct result is achieved is not quick and not modern. 

To solve this problem SCISYS has developed a desktop SLD Editor with a graphical user interface that displays the style in real-time as style attributes are changed.  The application integrates with GeoServer to allow styles to be downloaded, edited and uploaded. Other implemented features include the support for vendor options, function and filter editors as well the import of commercial map documents and conversion to SLD files.

SCISYS would like to make this application available as an open source project and is keen to determine the level of interest.

This talk will look at how the application came about and the design decisions made.  The basic features of the editor will be outlined and examples of how the application framework allows advanced functionality to be developed to increase productivity.  Brief mention will be made about how the application is tested to ensure SLD data is presented and updated correctly.

A demonstration of the framework implemented to allow the import and conversion of commercial map document layer styles into SLD files will be presented.

It has become apparent whilst developing the application that several OSGeo projects and OGC standards would benefit from a focus on the SLD standard and these will be discussed.

The talk will conclude with an outline of the future roadmap for the application and discuss approaches to making the SLD Editor open source.

### Introduction to GeoServer

**Ian Turton Astun Technology**

**Workshop (2 hours) / Target Audience: Novices**

This workshop will cover how to install a local copy of GeoServer and take you through the steps required to produce your first web map. We will take a selection of Ordnance Survey OpenData (tm) and the provided SLD styles and produce a pretty map that you can use as a base map at home.

* [Workshop notes](https://gitlab.com/ijturton/foss4guk-workshop)

### Loading OS MasterMap, OS OpenData and other OS GML datasets using Loader

**Aileen Heal Astun Technology / Matt Walker Astun Technology**

**Workshop (half day) / Target Audience: people interested in loading OS datasets into PostgreSQL.**

A workshop going through how to use loader to load OS MasterMap, OS OpenData and other OS GML datasets into PostgreSQL/PostGIS. 
The workshop will use the portable GIS. 

* [Workshop notes](http://aileenh.github.io/usingloader.html)

### Local Government working towards Scotland-wide spatial data

**Ilona Kemeling Kemeling Consulting Limited / Dimitrios Michelakis The Improvement Service**

**Presentation**

Availability of good quality and up-to-date spatial data for Scotland is essential for efficient running of the country as well as ongoing growth of our national technology sector. Many mobile and desktop apps use location and require spatial data to show context and background information.  The general public are already using these applications as are growing numbers of public and third sector organisations.  In addition, trends in BIM, web-mapping, open-data and big-data are creating further demand for good quality and up-to-date spatial datasets, authorised by local government. 
Local authorities in Scotland, as elsewhere, are struggling to meet expectations on service delivery and a time of severe funding constraints. At the same time initiatives like the EU INSPIRE Directive are increasing pressure on already overstretched information managers. The Improvement Service is developing a Spatial Hub on behalf of Scottish local government. A unique collective approach will provide national (Scottish) datasets of local government spatial data, which will be consistent, optimised and standardised across the country.  This will meet Scottish local government’s obligations under the EU INSPIRE Directive, allow a consistent approach to open data and deliver significant benefits to both the public and private sector. We work closely together with the 32 Local Authorities, the two National Parks and our key partners, such as the Scottish Government and Ordnance Survey.
In June this year we are launching the Spatial Hub which is entirely built on open source software, including CKAN, Wordpress, Geoserver, PostGIS and Python. An important role is played by the spatial data custodians, often GIS-officers for the Local Authorities and National Parks. For them, the Spatial Hub provides an online portal to upload their most up-to-date spatial datasets, and to find and receive technical support and feedback on data improvement. In addition the Spatial Hub is open to developers who are looking for spatial data to integrate in their mobile or desktop application. And finally, the Spatial Hub allows any online member of the public to inspect and view spatial data, either in simple online web-maps or their GIS software, such as ArcGIS or QGIS. 
The use of existing open-source components enabled us to develop the Spatial Hub with very limited additional code. The functionality has been defined by spatial data users, rather than IT specialists. We aim to monitor take-up very closely and will continue to improve and adapt the functionality of the Spatial Hub to the needs of the users. The presentation will consist of a short introduction on the development project and methodology, a live demonstration of the Spatial Hub, and an in-depth discussion of the technical configuration of the open-source components.

### Making Maps in R

**Barry Rowlingson Medical School, Lancaster University**

**Workshop (half day) / Target Audience: R users from beginner level up**

The R statistical software system now has, alongside its GIS functions, lots of add-on packages for making maps - perhaps too many, with overlapping functionality and varying syntax. This workshop will be in three parts: first, I'll introduce as many of the mapping packages as I can, then you will have time to play with them, and finally we'll discuss the pros and cons of them all, to see if a single perfect mapping package could be derived or synthesized from the ones available. The session will cover web mapping as well as static and animated maps produced directly in R. 

### Making Pretty Web Maps

**Ian Turton Astun Technology**

**Presentation**

Web maps needn't be dull and this talk will show you how you can take your
cartographic skills from the desktop GIS to the web using SLD and GeoServer.

The initial part of the talk will introduce
desktop tools such as QGIS and UDig and how they can help novices get started
with styling maps. 

Moving beyond the basics it will continue with a look at the use of functions to
modify the features being drawn. 
It will include an in depth look at
how to control the placement of labels to enhance the readability of the map
especially when using tile caching to speed up map service. 

The talk will finish
with a discussion of using GeoServer's composite and blending modes to provide
pretty effects that can enhance your web mapping.

### Making the most of Leaflet with Plugins

**James Milner Ordnance Survey**

**Presentation**

Leaflet aim's to be light weight. As such sometimes it misses out on functionality we see in other mapping frameworks. This talk looks to see how we can get the most out of Leaflet through the power that its open source plugins provide. Examining specific, common operations such as Geocoders, Geoprocessing and Drawing we will take a look at examples for each and how to make the most out of the functionality available. It will also take a look at the limitations and implications of using such frameworks.

* [Slides](http://slides.com/jamesmilner/leaflet-plugins/)

### Managing National Load MasterMap and Maintaining History

**Aileen Heal Astun Technology**

**Presentation**

Talk discussion how to load MasterMap CoU data and techniques for maintaining history.
Discusses how Astun Technology maintains its National Load of OS MasterMap using CoU data for its Astun Data Services.
Also describes potential methods for maintaining change history.

* [Slides](http://www.slideshare.net/AileenHealneeRomeril/foss4-guk2016-aileenheal)

### Mapping the of Heritage of Dartmoor National Park

**Matt Travis Dartmoor National Park**

**Presentation**

Dartmoor is one of the most important sites for Bronze Age archaeology in Western Europe and contains over 8,000 historic features reflecting human activity in the area for over 3,550 years. Dartmoor is also home to some very special wildlife and contains species which are of international importance. 
The Heritage Trails Application has been funded by the HLF as part of the Moor than meets the eye project to help the public discover and better understand the abundance of archaeology and wildlife that Dartmoor has to offer through this web map application:
http://maps.moorthanmeetstheeye.org/heritagetrails/
As well as the usual ability to add layers this application also lets users plot their own trails, add photos of features or wildlife and easily share this information with others. 
It is built on an open source stack of PostGIS, Geoserver and Open Layers 3. The intention is for the internal processing of new trails, photos, etc to be managed within in QGIS. This is possible due to QGIS’s ability to link well with other software. 
The presentation will detail the purpose of the application, the technology behind it and a live presentation of what it can do. 

### Migrating to Open Source GIS - Case study

**Saber Razmjooei Lutra Consulting**

**Presentation**

With public sector budget cuts, Open Source GIS is an attractive way to save money. But migrating away from proprietary software has its own challenges. In this case study, we will present technical problems we faced to migrate the Newcastle City Council to Open Source GIS.

* [Slides](https://github.com/saberraz/presentations/blob/master/foss4guk_migration-to-osgis_june_2016/foss4guk_migration-to-osgis_june_2016.pdf?raw=true)

### Now you see it: open software for processing open satellite data

**Alastair Graham Geoger Ltd**

**Presentation**

This presentation provides an overview of a series of available FOSS software tools used for scientific satellite image processing. It will use open data from the US Landsat and EU Sentinel platforms as a base from which to discuss a potential processing workflow using tools such as gdal, arcsi and others. The presentation will also reference work undertaken for Defra, an organisation looking to implement these datasets and FOSS for the benefit of its employees.

* [Slides](http://ow.ly/UHIu301BfHJ)

### Open Collaboration and the Price of Butter

**Andrea Ross Eclipse Foundation**

**Presentation**

The problems we face as a species are far more complex than potential solutions offered by any single vendor’s products. They are more complex than any nation’s initiatives. To get there, we are going to need to work together closely and across so many national, company, technology domain, and community borders. What role do open communities have to play in solving the tough problems facing society?

This talk will examine a bit about how open communities work. It will talk about passion, purpose, governance, enabling technologies, enabling legal constructs, giving, taking, being open, being welcoming, the need for limits, and more.

And what does this all have to do with the price of butter?!

### Open-Source goodies for Local Government

**Simon Miles Royal Borough of Windsor and Maidenhead**

**Presentation**

A look at the Open-Source tools and software used by Windsor and Maidenhead Borough Council in delivering GIS and data integration.

* [Slides](https://github.com/geosmiles/presentations/blob/master/Foss4g%20uk.pdf)

### Processing marine DTM’s - like a boss!

**Sam Franklin LR Senergy**

**Presentation**

LR Senergy presents a case study of combining FOSS4G tools to create an end-to-end workflow for processing “as-supplied” XYZ datasets that represent marine digital terrain models (DTM) that have been acquired from marine surveys.
This paper describes LR Senergy “XYZ Bathymetry Processor”, which combines geospatial Python libraries with command line tools such as GDAL/OGR and GMT (Generic Mapping Tools), amongst others. The workflow outputs a suite of derived datasets such as contours, seabed gradient, gradient-hazard zones and a composite colour-relief hill-shaded GeoTIFF, all ready for further analysis by geophysicists and geotechnical engineers.
Although aimed at bathymetry datasets, the tool can scale-out to any application where 3-column gridded XYZ file types are used, e.g. for LiDAR or onshore topographic DTM.
The “XYZ Bathymetry Processor” represents an alternative approach using open-source technology to overcome limitations of common “Industry standard” approaches, aimed at increasing processing efficiency and improving overall control and quality of image-rendering.
The paper describes some of the approaches taken to overcome challenges of innovating with FOSS4G tools in the enterprise-dominated, marine energy sector where there is limited awareness to open source geospatial technology.

* [Slides](http://slides.com/garethgrewcock/foss4guk-marine-dtm#/)


### QGIS Code Sprint

**Saber Razmjooei QGIS Community / Tom Chadwin QGIS Community**

**Code Sprint**

The session will be an unstructured code sprint day to help UK users contributing to QGIS. The topics will be mainly around documentation, bug reporting, confirming bugs and bug fixing (the later requires C++/python knowledge).
Participants are required to set up the development environment beforehand. We will run short presentation and introduction at the beginning of the day to familiarise the participants with the work-flow and set some targets to achieve for the group, e.g. number of bugs confirmed, number of Pull Requests, etc.
All the work will be directly related to the QGIS project, but participants can work on some of the popular plugins e.g. (qgis2web) too.
There is no coding skills requirement for the day but prior knowledge with GitHub will help.
Martin Dobias, one of the QGIS core developers will be present to assist during the code sprint.  Tom Chadwin, a QGIS plugin developer who recently started contributing to the core project will be joining in person or remotely to help with documentation and plugins. Saber Razmjooei, will help with bug hunting and reporting workflow. Other power users and plugin developers from UK QGIS community will be also around to help.


### qgis2web: webmaps without code

**Tom Chadwin Northumberland National Park**

**Workshop (2 hours) / Target Audience: QGIS users**

Learn to make webmaps from your QGIS projects without ever touching any code, and without any server-side software. Learn how to style vector data, and even create 2.5d webmaps.

* [Slides](https://tomchadwin.github.io/foss4guk2016/talk/qgis2web.html)

### roadNet: a tale of QGIS, automatic feature updating and repositories in the cloud

**John Stevenson thinkWhere**

**Presentation**

This presentation describes the technologies behind the development of the roadNet QGIS plugin that are of wider interest to FOSS4G users and developers.

Three technologies are discussed:

  1) Spatialite is used to store geospatial, tabular and styling data in a single database file. 
  2) An EditHandler class connects the signals emitted by vector layers during editing, e.g. featureAdded, to functions that check and update various database tables.
  3) A continuous integration pipeline using GitHub, Shippable, Docker and Amazon Web Services automatically packages roadNet into a repository in the cloud to allow easy testing of features as they are developed.

roadNET is a QGIS plugin for managing street gazetteer data.  In addition to the roads' geometries, it holds information on their names, ownership and maintenance.  roadNet simplifies data entry by automatically updating the database features are digitised, including modifying their geometries where they overlap other features.

### SaaSy maps - Using django-tenants and geodjango to provide webGIS Software-as-a-Service (SaaS)

**Anusha Chickermane Atlantic Geomatics Ltd.**

**Workshop (half day) / Target Audience: People with a limited understanding of how django and openlayers work.**


Aim: The aim of this workshop is to demonstrate how to create a semi-isolated multi-tenant architecture using django-tenants+postgresql, and then build on top of it using geodjango+postgis+openlayers to provide individualised web mapping services to different clients. It will also take a brief look at the performance and security implications of this approach.

Requirements: Windows/Linux/Mac laptop with administrative permissions, internet connection, Postgres 9.4, PostGIS 2.2, Python 3.5, Django 1.8 and GeoDjango prerequisites (https://docs.djangoproject.com/en/1.9/ref/contrib/gis/install/). 

Description: In this workshop, participants will build a multi-tenant web application displaying road accident data for different counties, with a different url and dataset for each county.  The workshop will start with a brief presentation on django, django-tenants and geodjango, and the pros/cons of this approach. We will then proceed to the coding section of the workshop where all participants will code a multi-tenant django website, load it with OS and road-accident data-sets, and view the different county websites. 

Materials Provided: Paper and electronic copies of detailed handouts to be used during the lecture portions of the workshop and github link containing the code used in the workshop.

Presenter Bio: I am a Senior Software Developer for Atlantic Geomatics, a surveying company where I design and develop GIS mapping solutions using Python, Django, PostgreSQL, PostGIS and AngularJS as Scrummaster of a team of 3. I have 4 years of experience working on successful projects using Java, Javascript and Python. I have a MSc. in Cybersecurity and a MSc. in Computer Science, and a professional membership with the British Computing Society.

* [Presentation](https://github.com/anushamc/foss4guk-django-tenants/raw/master/SaaSy%20maps.pptx)
* [Material](https://github.com/anushamc/foss4guk-django-tenants)


### Species distribution modelling using open data

**Thomas Starnes Amphibian and Reptile Conservation**

**Presentation**

Advances in species distribution modelling are providing valuable insight into the distribution and habitat requirements of rare and widespread species. Models are data hungry, but open data supplied through the National Biodiversity Network and Open Government Licence remote sensed data are opening up a world of new possibilities.

### The Hard Thing About Hard Geo Things

**James Milner Ordnance Survey**

**Presentation**

As spatial data sets have become larger, aggregated faster and from a wider variety of sources, processing large spatial datasets has become a challenge. 
Attendees will learn about what causes geospatial operations to be intrinsically complex. We will lay the foundations of algorithmic complexity in plain English and then go on to show how this manifests itself across various GIS operations.

As I'm sure many attendees will have experienced, many GIS operations can take comparatively long time to complete, especially with traditional desktop GIS techniques. The talk will look to examine how in the modern world of machine data and high volume social media we can tackle increasingly large datasets through techniques such as improved algorithms, spatial indexing and process parallelization. We will also examine how some of these techniques have been implemented in open source geospatial projects. 

### The need for National level strategy for Open Principles in Geospatial

**Suchith Anand University of Nottingham**

**Workshop (half day) / Target Audience: Representatives from  central government, local authorities, academics, industry, SMEs , NGOs etc in the UK**

Open principles are now implemented by the UK Government and delivering huge cost savings for government. Open source GIS software will help the local authorities and various government departments in reducing huge licence fee costs for proprietary software and the UK Government and taxpayers as a whole will benefit from cost efficiencies, reduce the cost of lock-in to suppliers and products. This is especially important for future IT investments (for example Cloud Computing) , so that more options are explored and choices available.

So it important that we have OSGeo UK chapter take this role to bring together  nationally. This half day session is aimed at bringing together OSGeo UK Chapter and representatives from  central government, local authorities, academics, industry, SMEs, NGOs etc in the UK and put forward and support National level strategy for Open Principles in Geospatial in the UK.

### There is no such thing as a free lunch

**Steven Feldman KnowWhere Consulting**

**Presentation**

On being an open source citizen
Have you ever wondered?
- Why do people write software for nothing?
- How do those volunteers earn a living?
- How do those companies pay wages?
- How much did it cost to put this event on?
- Is there really such as thing as a free beer let alone free software?
- Is there any obligation on me as a user of open source software to contribute?
- How can I contribute to open source if I am not a developer?

This talk will explore the open source business model and the motivations of individuals, organisations and businesses that contribute to open source projects. It will hopefully prompt a discussion on what might be reasonably expected of users of open source software.

* [Slides](https://drive.google.com/open?id=1nxybzM5JqKxGLgxQzy3cOYnbeG2smw1F7Cx2qBGYJ9k)

### qgis2web: the code behind webmaps without code

**Tom Chadwin Northumberland National Park**

**Presentation**

The story of qgis2web, a QGIS plugin which turns your projects into Leaflet or OpenLayers 3 webmaps, this has been my first encounter with Python, the QGIS API, Leaflet, OpenLayers 3, GDAL, Qt, Github, and Travis. If I can do it, anyone can...

### Turning data into information using Open Source tools

**Tim Martin Ordnance Survey / Ed Watts Ordnance Survey**

**Workshop (half day) / Target Audience: Beginners/Intermediate some knowledge of HTML/Javascript would be useful**

This workshop will walk through how to turn data about GP surgeries from Health and Social Care Information Centre (HSCIC) into information. 
Attendees will use a range of desktop and web open source technologies to create a "Find My Nearest GP Surgery". 

Step 1: Attendees will learn how they could use NodeJS to geocode the original data
Step 2: Use QGIS to visualise the data on a map by creating a choropleth map
Step 3: Upload the data to CartoDB and create a visualisation that can be shared.
Step 4: Use Leaflet to visualise the data from CartoDB
Step 5: Using a variety of Leaflet plugins to improve performance and usability of the map
Step 6: Add a gazetteer search using Twitter's Typeahead search library
Step 7: Include geoprocessing functions from the TurfJS library to allow users to find their nearest surgery.
Step 8: Add C3 charting library to display statistics of the data.

### Using Blender for 3d and animated mapping

**Steven Kay thinkWhere**

**Presentation**

Blender is a free and open source tool for 3d modelling, rendering and animation. In this talk, Steven Kay from thinkWhere shows some of the creative possibilities it offers in cartography and spatial visualisation, when used alongside QGIS, SAGA GIS and using Open Data. 

### Using OS network datasets with pgRouting

**Ross McDonald Angus Council**

**Presentation**

A talk about using OS road network datasets with pgRouting and a comparison of functionality provided with each dataset.  I will also highlight the differences in building valid network topologies and difficulties presented with different load methods and data structure.  I will use real world examples of how it was applied at Angus Council in an accessibility study and a resource allocation project.  I will present some of the optimisations I made to improve both performance of the network algorithms and the QGIS pgRouting Layer plugin.

* [Slides](http://ghost.mixedbredie.net/foss4g-uk-2016)

### Using Python and Jupyter Notebooks for Geographical Data Munging

**Rob Blackwell Cranfield University**

**Presentation**

The Large Atmospheric Research Aircraft is a modified BAe 146-301 that flies low level over the sea collecting scientific data. The operator needs detailed information about the location and height of surface hazards to mitigate the risk of a collision.

My MSc thesis project is all about using UK Hydrographic Office data and earth observation imagery to accurately chart wind turbines, petrochemical platforms and meteorological masts.

I have to process a lot of unstructured data. I'll talk a bit about the project and use it as a vehicle for demonstrating Vagrant, Python, Jupyter and various open source, data science and GIS libraries.

### Using to pgRouting to determine service location and allocate resources

Ross McDonald Angus Council

**Tim Martin / Ian Bennett Ordnance Survey**

**Workshop (2 hours) / Target Audience: Beginner to intermediate QGIS and PostGIS users**

An introductory workshop to using pgRouting, the routing extension to PostgreSQL. The participants with be lead through the basics of installing PostGIS and pgRouting in a PostgreSQL database and optimising the PostgreSQL database for spatial data.  They will load Ordnance Survey road network data (either OS Open Roads or the yet-to-be-released OS Highways layer) and build a network topology using pgRouting tools.  An introduction to the basics of routing across the network will follow using both the QGIS pgRouting Layer plugin and SQL in PgAdmin.  We will then use some real world service or facility locations together with pgRouting functions (shortest path, driving distance and alphashapes) to determine optimal location of new services.
The workshop material will be made available before hand as a virtual machine image (or run off the OSGeo LIVE image?) so that everyone has the same user experience with minimised configuration required.  Network and service location data will be provided.  Notes will be published in a follow along / copy and paste format and will be available online, installed locally and as hard copy.

### Visualising Arts and Humanities Data in QGIS

**Tom Armitage EDINA, University of Edinburgh / Ross McDonald Angus Council**

**Workshop (2 hours) / Target Audience: Beginner to intermediate QGIS users, but also of interest to experts with little experience of the plugins used.**

A QGIS workshop to introduce users to a range of data visualisation plugins. A geoparsed biography will be the core dataset which will be manipulated in a range of ways to produce interesting views of the data.

Plugins used: Heatmap, QuickMapServices, MMQGIS, QGIS2ThreeJS, TimeManager

The workshop will take the participants through the process of creating point data from a csv file; overlaying it on a Stamen OSM basemap; visualising it as a heatmap; spatially joining it to polygonal demographic data; create a hexagonal grid to sample the data; create 3D skyscraper diagram from the joined datasets; and finally, use the TimeManager plugin to view how the point distribution varies over time.

The final outputs will be a 3D model and viewer as a webpage created in QGIS2ThreeJS and an animated heat map as an mp4 movie made using TimeManager. 

Printed handouts with instructions can be provided; the data used can be downloaded from ShareGeo ahead of the workshop.

* [Data and Workbook](http://bit.ly/VizArtFOSS4GUK16)

### What OpenLayers can do for you? Usages and ecosystem

**Thomas Gratier WebGeoDataVore**

**Presentation**

OpenLayers 3 is more and more mature and is a widely adopted solution for web mapping. We will review some real usages of the library and will also help you discover the ecosystem around like plugins and other related libraries. We intend to give an overview of the library possibilities instead of focusing on some particular features.

* [Slides](http://labs.webgeodatavore.com/presentation-openlayers-foss4g-uk-2016/) with [sources](https://github.com/ThomasG77/foss4g-uk-2016-openlayers-presentation)

### What time is it? It's Maptime!

**Charley Glynn Maptime Southampton & Ordnance Survey**

**Presentation**

Maptime is an open learning environment for all levels and degrees of knowledge, offering intentional educational support for the beginner. There are now ~100 local chapters worldwide with five in the UK; including Southampton! 

This presentation will explain more about Maptime with a focus on what we do here in Southampton. What is it? Who's it for? Why attend? 

I would also like to highlight the benefits of not only attending a Maptime but also organising a local chapter and how it supports the FOSS community. We now have lots of great open software and lovely free data but often the missing piece is the knowledge and/or finding the time. Maptime sessions provide both and are a fantastic way to learn/teach/socialise/map!

There is a focus on the beginner and there is no jargon or selling at Maptime. Some people are experts and some people are just getting started, but all of us are learning, so why not do it together?

For more information see: http://maptime.io/about/

* [Slides](https://goo.gl/ms8Uxx)

### Can Open and Closed Play Nicely Together?

**Gary Gale what3words**

**Presentation**

In an ideal world bandwidth will be infinite, every espresso will be a good espresso and we won’t have to worry about getting open and closed to work together. I have first hand experience that the first two wishes are not true and I’m working on how to get the third wish to happen.

This talk will cover what I’ve learned in far too many years about trying to get open and closed to play nicely together, be that open data or open source; about how far we’ve come as an industry, what the pitfalls are and I’ll also try and steer away from any controversial views on open licensing.

### Open Source Geo at Defra - a shopping list

**Steve Wilkinson JNCC / Steven Feldman Astun Technology**

**Presentation**

In 2015 Defra commissioned a Geographic Information technology strategy and design to support the evolving use of geography across a network of over 20 operating bodies, increased need for data sharing within Defra and public access to OpenData at a time of intense pressure on budgets and resources. Subsequently, a team at the Joint Nature Conservation Committee built a series of prototypes to validate the design proposals.

This talk will summarise the strategy and high level design proposed and will share the experiences of JNCC in building prototypes based on open source geo technologies. In particular we will focus on some of the ‘things we need’ to fill the gaps in the technology/application stack - these gaps could be an opportunity for open source developers in the UK.



