###IMPORTANT:
You must create a file called `api.config.json` (see `api.sample.config.json`) in `server/src` with contents:

    {
      "key": "YOUR_API_KEY_HERE",
      "secret": "YOUR_API_SECRET_HERE"
    }

## Run (after `npm install` in both `client` and `server`:
- `node index.js` inside `server/src`.
- Navigate to `http://localhost:3000/` in your browser.
- Run `webpack` in `client/src` to build after changes.
