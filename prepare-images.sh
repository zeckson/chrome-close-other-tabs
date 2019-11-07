#!/usr/bin/env bash

cd images || exit

imagemin closeOthers.png > closeOthers-optimized.png

magick closeOthers-optimized.png[16x16] closeOthers16.png
magick closeOthers-optimized.png[32x32] closeOthers32.png
magick closeOthers-optimized.png[48x48] closeOthers48.png
magick closeOthers-optimized.png[128x128] closeOthers128.png

rm closeOthers-optimized.png
