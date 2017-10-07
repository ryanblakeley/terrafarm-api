# Terrafarm Remote Config

These instructions are for setting up the directory in which this README is located.

## User
Login to the server as the `git` user. This is the user responsible for deployment.

## Move to directory
```
cd /srv/repo/api.git
```

## Set Ownership
```
sudo chown -R `whoami`:`id -gn` /srv/repo/api.git
```

## Init Repo
```
git init --bare
```

## Hooks
```
cd hooks

vi post-receive
```
#### post-receive
Write and save these two lines in the `post-receive` file.
```
#!/bin/sh
git --work-tree=/srv/www/api --git-dir=/srv/repo/api.git checkout -f
```

## Set Permission
```
chmod +x post-receive
```

