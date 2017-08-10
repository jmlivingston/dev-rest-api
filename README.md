# DEV REST API

## Summary

Watches multiple JSON files and concatenates them into a single db.json file to be served by json-server. This provides an easy way to add APIs on the fly since json-server will only look at a single file.

> **Important** The file must contain an array. The property name will be used as the API name.

### Installation

```bash
`npm install`
```

### Run

```bash
`npm start`
```

## Resources

[json-server](https://github.com/typicode/json-server)