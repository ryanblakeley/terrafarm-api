# Terrafarm Remote Config

These instructions are for setting up the directory in which this README is located.

## Move to directory
```
cd /srv/www/db
```

## Set Ownership
```
sudo chown -R `whoami`:`id -gn` /srv/www/db
```

## Install
Once source code has been pushed and forwarded to this directory from our git hook,
we need to manually run our installation. This could be automated in the future.

Install postgres and postgis according to [this guide][1].

Install sqitch.

```bash
sudo apt-get update
sudo apt-get install sqitch
```

## Environment Config
Copy the example configs to a new `.env` file.
```bash
cp sqitch.config.example sqitch.config
vi sqitch.config
```
Manually enter any missing environment config values. Check [here][./.env] or
ask another developer.

## Build
Builds are manually executed. This could be automated in the future. It is good
practice to run tests before building.
```
npm run test
npm run build
```

## Start
Run the app start script.
```
npm run start
```

[1]: http://trac.osgeo.org/postgis/wiki/UsersWikiPostGIS23UbuntuPGSQL96Apt
[2]: https://postgis.net/docs/postgis_installation.html
