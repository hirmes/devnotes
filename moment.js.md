# moment.js

## Convert

### Seconds → hh:mm:ss

```javascript
let timeString = moment().startOf('day')
					.seconds(numberOfSeconds)
					.format('H:mm:ss');
```

### hh:mm:ss → Seconds

```javascript
let numberOfSeconds = moment.duration(durationString, "HH:mm:ss").asSeconds();
```

