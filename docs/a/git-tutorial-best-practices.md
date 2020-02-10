---
type: article
title: 'Git Tutorial and Best Practices'
chapter: 3. Tools of the trade
weight: 0
published: true
meta:
  - name: description
    content: Learn why you need Git and how to use it like a pro right from the start.
---

## Why do I need versioning?

Apart from your editor I think version control is the most important tool in your programming toolbox. A version control software like Git logs changes to the code you write. So, for example, if something breaks, you can travel back in time and get the working code back. Or you may have deleted code because you thought it was no longer needed – and suddenly need it again: no problem with version control.

You can jump to any point in the history of your project at any time. I can't stress enough how many times versioning has saved my me or made my life easier.

When combined with a provider like GitHub, versioning even makes backups more or less unnecessary: your code automatically ends up in the cloud. Even if your code is never released and only used by you: You'll save yourself an incredible amount of time by not having to back up your code all the time and having every piece of code you've ever written available right away.

## Team development only works with Git

In addition, versioning makes it possible for several programmers to work together on one codebase, so you will have to work with it anyway if you don't want to code in your ivory tower forever.

With Git, multiple programmers can even work on the same file without overwriting each other's changes; Git automatically takes care of merging all changes together, and really only complains when there's a conflict between two changes, for example when two people have changed the same line of code.

## Here's how it works

The whole thing works as follows: your code is in a "repository", which is nothing more than a folder where all files are monitored by Git. In addition to your local folder, there's a "remote" or "origin" folder that contains not only the current state, but the entire history of your code.

When you've made changes, you can group those in a "commit" and record them as a point in your code's history, along with a description of the changes. You will always be working in a specific "branch".

Your repository has several branches, such as a develop branch, which is used for development, and a master branch, which reflects the current live version of your project.

When you develop a new feature, you create a new feature branch from the develop branch, where you can build, test, and finalize the change before merging it back into the develop branch.

If you've finished building several features using this principle and merged them into your develop branch, you may want to make a release and publish a new version of your project: to do this, integrate all the commits from the develop branch into the master branch, again using a simple "merge" command.

This workflow has many advantages: you can work on a new feature without affecting the live version of your product. You can always experiment and throw away a feature without having to clean up any code. You can hotfix the live version without having to incorporate all the changes that might be already developed, but that you still don't want to include in the live version.

Even if you don't really see the point of this system yet, *I recommend that you just adopt this workflow exactly as it is*; in time you will understand why all these little things make so much sense.

## The most important commands

Even though you've integrated Git into modern editors these days and can use it through a graphical interface, it makes sense to know the most important commands:

- `git clone $url` creates a local copy of the repository in the folder `./$url`
- `git pull` brings your local repository up to date (fetches new commits to your machine, such as those made by others in the branch in the meantime)
- `git checkout dev` changes the active branch to "dev"
- `git checkout -b feature/name` creates a new branch named "feature/name" (based on your currently checked out branch)
- `git status` shows you in which branch you are and which files have been changed
- `git add .` all modified files will be staged ("selected" for the next commit)
- `git commit -m "commit message"` creates a commit with the message "commit message"
- `git push` uploads all local commits to the remote origin
- `git merge feature/name` integrates all commits from the branch "feature/name" into your active branch

## Merge vs. Rebase

If you want to merge commits from one branch into another, you can basically do it with a merge, and you can do it in all directions. When you're done with a feature branch, you can merge the changes back into the develop branch.

Alternatively you can also merge the develop branch into an older feature branch that may have been lying around for a while and does not have all the changes that are now in the develop branch.

In this case, the alternative is to "rebase" the changes into your feature branch without creating a merge commit. This has the advantage of not cluttering your git history with unnecessary merge commits, but the disadvantage is that you can't just push, but have to do a `--force` push, which rewrites your branch history, which can cause problems when others are working on the same branch.

The discussion whether to merge or rebase is a popular one, with good arguments on both sides. For my part, I'm in Team Merge - because I prefer to play it safe when in doubt and don't mind a few merge commits in the git history.

## A few extra tips

- There are [excellent conventions](https://chris.beams.io/posts/git-commit/) for writing commit messages that you should follow
- Try to make as many commits as possible, as small as possible, with changes that are related
- Every project should always have at least one dev and one master branch
- Always work in feature branches to keep your dev and master clean

## Links

- [Official Documentation](https://git-scm.com/doc)
- [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Good provider with CI/CD: GitLab](https://about.gitlab.com/)
- [The default open source provider: GitHub](https://github.com/)

<img src="https://vg09.met.vgwort.de/na/c7a1ad80ce654792aaa43c7d546d83d0" width="1" height="1" alt="">
