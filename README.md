# mattermost-integrations

## build
```
$ docker-compose up -d
```

* this builds the mattermost client running on `localhost:8065`
* also starts the integration app server (nodejs app) on port 3033

### Make updates to the integrations app
```
docker-compose up -d --no-deps --build integrations
```
