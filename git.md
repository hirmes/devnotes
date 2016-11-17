# git 

## Working with Locally Started Projects

### Starting a project

```bash
$ mkdir projectname
$ cd projectname
```
	
add .gitignore file

```bash
$ nano .gitignore
```
	
contents of file should be:

	.gitignore
	.DS_Store
	.AppleDouble
	.LSOverride

	# Icon must end with two \r
	Icon


	# Thumbnails
	._*

finally:

```bash
$ git init
```

### Commit

```bash
$ git add .
$ git commit -m "Message"
```

or just

```bash
$ git commit -a -m "Message"
```

### Push to remote (github)

First time only (set up link to remote):

```bash
$ git remote add origin https://github.com/hirmes/[PROJECTNAME].git
```

If error, redo with u/p

Every time:	

```bash
$ git push -u origin master
```

(`gitgo` is now an alias for the above, added to `.bash_profile`)

### Pull from repo and ignore local changes

```bash
$ git reset --hard HEAD
$ git pull
```
	
### Go back to last commit (deleting all non-commited changes):

```bash
$ git reset --hard HASH_OF_LAST_COMMIT
```


## Working with Projects from Other Sources

### Starting / Cloning a Project

```bash
$ git clone https://github.com/USERNAME/REPOSITORY.git
```

### Updating

If you have *not made any local changes* and want your local copy to be the newest version available on the server:

`$ git pull`

## Other Stuff

### List remotes

`$ git remote -v`

