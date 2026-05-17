---
layout: foss4guk2016
title: "FOSS4G UK 2016: HXL Hack Briefing Notes"
---

## HXL Hack at FOSS4G UK 2016 - Briefing Notes ##
For (often-messy) real-world data, you can find 862 HXL-tagged datasets at [HDX](https://data.humdata.org/search?q=&ext_page_size=25&sort=metadata_modified+desc&tags=hxl#dataset-filter-start) — some of those are more-or-less complex. Many of those datasets contain humanitarian admin codes called "p-codes", which typically don't correspond to ISO codes below the country level, but you can find the underlying map data here: [https://data.humdata.org/cods](https://data.humdata.org/cods).

For simpler, canned sample data (which often fits better onto slides for a short workshop), we have some public data samples in a Public HXL data shared Google Drive folder. Some of those are a bit old, but a good starting point for beginners is [¡Hola, HXL!](https://docs.google.com/spreadsheets/d/1ytPD-f4a8CbNKTfMS3EqZOpBo9LWCk_NDKxJCgmpXA8/edit?usp=sharing), a Hello, World! based an extremely simplified example of a humanitarian 3W (who-what-where) activity list.

* [HXL Public Data Google Drive](https://drive.google.com/folderview?id=0B-v0ZsXcKCfafnRNUGFzQjZrS3JGQWQzQUhCWEhPWnl4Q3RNYWZBczF3MTR5ZmkxLVNCM2M)
* [Burundi Map](https://beta.proxy.hxlstandard.org/data/map?default_country=BDI&pcode_tag=%23adm1%2Bcode&count-tags01=adm1%2Bname%2Cadm1%2Bcode&default_country=BDI&filter01=count&pcode_tag=&url=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2Fd%2F1JFiTOZIs6JUjtFWOsgk0v_Qzf4-rd8iQgrcMwiLlCUo%2Fedit)


There are several main use cases for HXL:

* Validation (driven by a simple schema which is itself encoded in HXL).
* Cleaning.
* Appending multiple source files, and/or joining datasets horizontally (using shared keys).
* Filtering (e.g. extracting data for just one organisation or subnational area on the fly).
* Aggregation/reporting.
* Visualisation.

You can see examples of many of these at work in HDX's new prototype humanitarian map explorer (which uses HXL-tagged data) and in the Guinea infection prevention and control data from last summer and fall.  If Simon Johnson from the British Red Cross is around, he might also want to share links to some of the HXL work he's done for the global shelter cluster.

The online HXL services are still in alpha (mainly due to a lack of user-friendly design and documentation - they actually perform reliably). You can try them out at
[https://proxy.hxlstandard.org](https://proxy.hxlstandard.org).

The HXL Proxy also contains tools for automatically tagging non-HXL datasets on the fly, and we use it extensively behind the scenes within the Humanitarian Data Exchange (it brings a lot of database-like functionality to datasets without requiring a database, or even hosting on the same server).

I'm happy to help with any questions you have about the HXL Proxy. To get started, here's a map of a 3W for Burundi, generated with a few mouse clicks: [Burundi map](https://beta.proxy.hxlstandard.org/data/map?default_country=BDI&pcode_tag=%23adm1%2Bcode&count-tags01=adm1%2Bname%2Cadm1%2Bcode&default_country=BDI&filter01=count&pcode_tag=&url=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2Fd%2F1JFiTOZIs6JUjtFWOsgk0v_Qzf4-rd8iQgrcMwiLlCUo%2Fedit).

[Folder for tagged examples](https://t.co/BnX2j0sNdA)

