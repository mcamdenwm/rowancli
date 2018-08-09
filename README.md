# Rowan CLI

This is a simple CLI utility which allows you to execute Rowanscript against arbitrary data.

## Usage

    <stream> | rws ./prog.json
    rws "{}" ./prog.json

## Example

Pull the version of swagger from `api-docs/latest`

    swagger-version.json
    ["prop", "version"]

    curl https://dev.workmarket.com/api-docs/latest | rws swagger-version.json
    ... 
    2.0
