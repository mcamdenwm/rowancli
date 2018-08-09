# Rowan CLI

This is a simple CLI utility which allows you to execute Rowanscript against arbitrary data.

## Installing

Rowan CLI implements a `postinstall` script which creates a symlink for `rws.js` in `/usr/local/bin`. All you have to do is install dependencies:

```
    ~/Downloads/rowancli/ $ yarn
```
    
## Usage

    <stream> | rws ./prog.json
    rws "{}" ./prog.json

## Example

Pull the version of swagger from `api-docs/latest`

    swagger-version.json
    [":prop", "version"]

    curl https://dev.workmarket.com/api-docs/latest | rws swagger-version.json
    ... 
    2.0
