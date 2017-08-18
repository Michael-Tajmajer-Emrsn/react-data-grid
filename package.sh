#!/bin/bash
cd packages
tar -zcf react-data-grid.tar.gz react-data-grid/ --exclude react-data-grid/.vscode
tar -zcf react-data-grid-addons.tar.gz react-data-grid-addons/ --exclude react-data-grid-addons/node_modules --exclude react-data-grid-addons/.vscode
cp -f *.tar.gz /mnt/c/_Thing_WrkStn_V14Development/XSrc/NpmPack
cd ..
