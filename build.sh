#!/usr/bin/env bash

rm -rf assemble.zip
zip -v assemble.zip service_worker.js manifest.json images/closeOthers?*.png
