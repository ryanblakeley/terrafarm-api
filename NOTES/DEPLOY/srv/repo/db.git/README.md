# Terrafarm Remote Config

These instructions are for setting up the directory in which this README is located.

## User
Login to the server as the `git` user. This is the user responsible for deployment.

## Move to directory
```
cd /srv/repo/db.git
```

## Set Ownership
```
sudo chown -R `whoami`:`id -gn` /srv/repo/db.git
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
git --work-tree=/srv/www/db --git-dir=/srv/repo/db.git checkout -f
```

## Set Permission
```
chmod +x post-receive
```

