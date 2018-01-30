# serverless-plugin-stringify-variables
Serverless plugin that stringifies nested environment variables.

## Why use it?
Serverless by default doesn't allow environment variables to be nested objects. If you want to group your variables, or have more complex data srtructures for various stages, this helps to organise them in a meaningful way.

## How it works
You can use objects as environment variables:

```json
{
  "COMPLEX_VARIABLE": {
    "url": "url",
    "database_name": "name"
  },
  "STRAIGHTFORWARD_VARIABLE": "just a normal value"
}
```

They will get stringified before deployment, and you can then require them in your code:

```js
const COMPLEX_VARIABLE = json.parse(process.env.COMPLEX_VARIABLE);
```
