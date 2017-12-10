# 🤖 Robot Tourist

Robotically takes screenshots of the URLs you provide.

## Usage

| Task                 | Command       |
| :------------------- | :------------ |
| Install dependencies | `npm install` |
| Run it               | `npm start`   |

```
npm go
```

## Configuration

Add a list of URLs and titles to `data.js`. Names may not have spaces.

Sample:

```
[
  {
    name: "Reddit",
    url: "http://reddit.com"
  },
  {
    name: "DesignerNews",
    url: "http://designernews.co"
  },
  {
    name: "HackerNews",
    url: "http://news.ycombinator.com"
  }
]
```

## Dependencies

* Puppeteer
* Node 8.9+
