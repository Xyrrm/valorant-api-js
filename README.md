# Valorant Asset API Wrapper

A library to interact with valorant-api.com

## Installation

```
npm i valorant-api-js
```

## How to Use?

Example:

```javascript
const Client = require("valorant-api-js");

(async () => {
  let config = {
    language: "en-US",
  };

  let client = new Client(config); // Create a Client

  let allAgents = await client.getAgents(); // request all agents data

  console.log(allAgents); // see all agents data in console log
})();
```

# Documentation

## Client

```javascript
const Client = require("valorant-api-com");
const client = new Client(config); // config is optional
```

### Client Properties

- language

### Client Methods

- request(endpoint)
- getAgents(uuid)
- getPlayableAgents()
- getBuddies(uuid)
- getBundles(uuid)
- getCompetitiveTiers(uuid)
- getContentTiers(uuid)
- getContracts(uuid)
- getCurrency(uuid)
- getGamemodes(uuid)
- getGear(uuid)
- getEvents(uuid)
- getEquippables(uuid)
- getMaps(uuid)
- getMissions(uuid)
- getObjectives(uuid)
- getPlayerCards(uuid)
- getPlayerTitles(uuid)
- getSeasons(uuid)
- getSprays(uuid)
- getSkins(uuid)
- getSkinLevels(uuid)
- getSkinChromas(uuid)
- getThemes(uuid)
- getWeapons(uuid)
- getVersion()

# License

MIT License

Copyright (c) 2021 Vanxh.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
