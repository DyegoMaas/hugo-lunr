#!/usr/bin/env node
var hugolunr = require('../');
var indexer = new hugolunr();
indexer.setInput('d:\\projects\\blog\\content\\posts\\**');
indexer.setOutput('faq.json');
indexer.setIncludeFuture(false)
indexer.index();
