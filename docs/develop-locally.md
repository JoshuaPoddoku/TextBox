# Set up TextBox locally

Follow these guidelines for getting TextBox locally on your system. This is highly recommended if you want to be contributing regularly.

Some of the contribution workflows such as previewing pages for the guide or coding challenges, debugging, and fixing bugs in the codebase requires you to have TextBox running locally.

## Fork the repository on GitHub

['Forking'](https://help.github.com/articles/about-forks/) is a step where you get your own copy of TextBox's main repository (a.k.a _repo_) on GitHub.

This is essential, because this way you are able to work on your copy of TextBox on GitHub, or download it for working locally. Later, you will be able to request changes to be pulled into the main repository via a pull request.

> **ProTip:**
> The main repository at `https://github.com/JoshuaPoddoku/TextBox` is often referred to as `upstream` repository.
> Your fork at `https://github.com/YOUR_USER_NAME/TextBox` is often referred to as `origin` repository.

**Follow these steps to fork the `https://github.com/JoshuaPoddoku/TextBox` repository:**

1. Go to the TextBox repository on GitHub: <https://github.com/JoshuaPoddoku/TextBox>
2. Click the "Fork" Button in the upper right hand corner of the interface ([More Details Here](https://help.github.com/articles/fork-a-repo/))
3. After the repository has been forked, you will be taken to your copy of the TextBox at `https://github.com/YOUR_USER_NAME/TextBox`

![GIF - How to fork TextBox on Github](/docs/images/github/how-to-fork-TextBox.gif)

## Preparing the development environment

Once you have the prerequisites installed, you need to prepare your development environment. This is common for many development workflows, and you will need to do this only once.

**Follow these steps to get your development environment ready:**

1. Install [Git](https://git-scm.com/) or your favorite Git client, if you haven't already. Update to the latest version, the one that came bundled with your OS may be outdated.

2. (Optional but recommended) [Setup an SSH Key](https://help.github.com/articles/generating-an-ssh-key/) for GitHub.

3. Install a code editor of your choice.

    We highly recommend using [VS Code](https://code.visualstudio.com/) or [Atom](https://atom.io/). These are some great free and open source code editors.

4. Setup linting for your code editor.

    You should have [ESLint running in your editor](http://eslint.org/docs/user-guide/integrations.html), and it will highlight anything doesn't conform to [TextBox's JavaScript Style Guide](http://forum.TextBox.org/t/free-code-camp-javascript-style-guide/19121).

    > Please do not ignore any linting errors. They are meant to **help** you and to ensure a clean and simple code base.

## Clone your copy of TextBox

['Cloning'](https://help.github.com/articles/cloning-a-repository/) is a step where you **download** a copy of a repository that is either owned by you or someone else from a `remote` location. In your case, this remote location is your `fork` of TextBox's repository, that should be available at `https://github.com/YOUR_USER_NAME/TextBox`.

Run these commands on your local machine:

1. Open a Terminal / Command Prompt / Bash Shell in your projects directory

    _i.e.: `/yourprojectdirectory/`_

2. Clone your fork of TextBox, replacing `YOUR_USER_NAME` with your GitHub Username

    ```shell
    git clone https://github.com/YOUR_USER_NAME/TextBox.git
    ```

This will download the entire TextBox repository to your projects directory.

## Setup a `upstream` to the main repository

Now that you have downloaded a copy of your fork, you will need to setup an `upstream`.

As mentioned earlier, the main repository at `https://github.com/JoshuaPoddoku/TextBox` is often referred to as `upstream` repository. Your fork at `https://github.com/YOUR_USER_NAME/TextBox` is often referred to as `origin` repository.

You need to point your local clone to the `upstream` in addition to the `origin`. This is so that you can sync changes from the main repository. This way you do not have to go through forking and cloning again and again.

1. Change directory to the new TextBox directory:

    ```shell
    cd TextBox
    ```

2. Add a remote to the main TextBox repository:

    ```shell
    git remote add upstream https://github.com/JoshuaPoddoku/TextBox.git
    ```

3. Check the configuration looks good to you:

    ```shell
        git remote -v
    ```

    The output should be something like below:

    ```shell
        origin    https://github.com/YOUR_USER_NAME/TextBox.git (fetch)
        origin    https://github.com/YOUR_USER_NAME/TextBox.git (push)
        upstream    https://github.com/JoshuaPoddoku/TextBox.git (fetch)
        upstream    https://github.com/JoshuaPoddoku/TextBox.git (push)
    ```
## Quick commands reference when working locally

[Here is a quick reference](/docs/README.md) to a list of commands that you may need locally from time to time:

## Making changes to your clone of TextBox locally

Next, you can make changes to files, and commit your changes.

Follow these steps:

1. Check that you are on the `master` branch

    ```shell
    git status
    ```

    You should get a output like this:

    ```shell
    On branch master
    Your branch is up-to-date with 'origin/master'.

    nothing to commit, working directory clean
    ```

    If you are not on master or your working directory is not clean, resolve any outstanding files/commits and checkout `master`:

    ```shell
    git checkout master
    ```

2. Next, you would want to **sync the lastest changes for `master` branch** from the main repository of TextBox.

    **Note:** If you have any outstanding pull-request that you made from the `master` branch of your fork previously, you will lose them. You should get it merged by a moderator, prior following this. To avoid this, you should always work on a branch.

    Its recommended that you do this as often as possible, to avoid conflicts later:

    ```shell
    git fetch upstream
    ```

    Now, you want to do a hard reset with the copy on the TextBox master:

    ```shell
    git reset --hard upstream/master
    ```

    Push this branch back to your origin, to have a clean history on your fork on GitHub:

    ```shell
    git push origin master --force
    ```

3. Next, you will have to create a fresh new branch.

    Working on a separate branch for every single issue, helps you keep your local work copy clean. You should never work on the `master`. This will soil your copy of TextBox and you may have to start over with a fresh clone or fork.

    Check that you are on `master` as explained previously, and branch off from there:

    ```shell
    git checkout -b fix/update-guide-for-xyz
    ```

    Your branch name should start with a `fix/`, `feat/`, etc. Avoid, using issue no.s in branches. Keep them short, meaningful and unique.

    Some examples of good branch names are:

    ```md
    fix/update-challenges-for-react
    fix/update-guide-for-html-css
    fix/platform-bug-sign-in-issues
    feat/add-guide-article-for-javascript
    translate/add-spanish-basic-html
    ```

4. Next, you can work on the editing pages and working on the code in your favorite text editor.

5. Once you are happy with the changes you should optionally run TextBox locally to preview the changes.

6. Make sure you fix any errors, and check the formating of your changes. We have style guide for the Guide articles and Coding challenges.

7. Next, check and confirm the files you are updating

    ```shell
    git status
    ```

    This should show a list of `unstaged` files that you have edited.

    ```shell
    On branch feat/documentation
    Your branch is up to date with 'upstream/feat/documentation'.

    Changes not staged for commit:
    (use "git add/rm <file>..." to update what will be committed)
    (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   CONTRIBUTING.md
        modified:   docs/README.md
        modified:   docs/how-to-setup-TextBox-locally.md
        modified:   docs/how-to-work-on-guide-articles.md
    ...
    ```

8. Stage the changes and make a commit.

    In this step you should only mark files that you have edited, or added. You can perform a reset, and resolve files that you did not intend to change.

    ```shell
    git add path/to/my/changed/file.ext
    ```

    Or, alternatively you can add all the `unstaged` files to the staging area:

    ```shell
    git add .
    ```

    Only the files that were moved to the staging area will added when you make a commit.

    ```shell
    git status
    ```

    Output:
    ```shell
    On branch feat/documentation
    Your branch is up to date with 'upstream/feat/documentation'.

    Changes to be committed:
    (use "git reset HEAD <file>..." to unstage)

        modified:   CONTRIBUTING.md
        modified:   docs/README.md
        modified:   docs/how-to-setup-TextBox-locally.md
        modified:   docs/how-to-work-on-guide-articles.md
    ```

    Now, you can commit your changes with a short message like so:

    ```shell
    git commit -m "fix: my short commit message"
    ```

    Some examples:

    ```md
    fix: update guide article for Java - for loop
    feat: add guide article for alexa skills
    ```

    Optional:

    We highly recommend making a conventional commit message. This is a good practice that you will see on some of the popular Open Source repositories. As a developer, this encourages you to follow standard practices.

    Some examples of conventional commit messages are:

    ```md
    fix: update HTML guide article
    fix: update build scripts for Travis-CI
    feat: add article for JavaScript hoisting
    docs: update contributing guidelines
    ```

    Keep these short, not more than 50 characters. You can always add additional information in the description of the commit message.

    This does not take any additional time than a unconventional message like 'update file' or 'add index.md'

    You can learn more about why you should use conventional commits [here](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits).

9. If you realise that you need to edit a file or update the commit message after making a commit you can do so after editing the files with:

    ```shell
    git commit --amend
    ```

    This will open up a default, text editor like `nano` or `vi` where you can edit the commit message title and add/edit description.

10. Next, you can push your changes to your fork.

    ```shell
    git push origin branch/name-here
    ```

## Proposing a Pull Request (PR)

1. Once the edits have been committed, you will be prompted to create a pull request on your fork's GitHub Page.

    ![Image - Compare pull request prompt on GitHub](/docs/images/github/compare-pull-request-prompt.png)

2. By default, all pull requests should be against the TextBox main repo, `master` branch.

    Make sure that your Base Fork is set to JoshuaPoddoku/TextBox when raising a Pull Request.

    ![Image - Comparing forks when making a pull request](/docs/images/github/comparing-forks-for-pull-request.png)

3. Submit the pull request from your branch to TextBox's `master` branch.

4. In the body of your PR include a more detailed summary of the changes you made and why.

    - You will be presented with a pull request template. This is a checklist that you should have followed before opening the pull request.

    - Fill in the details as they seem fit you. This information will be reviewed and decide whether or not, your pull request is going to be accepted.

    - If the PR is meant to fix an existing bug/issue then, at the end of
      your PR's description, append the keyword `closes` and #xxxx (where xxxx
      is the issue number). Example: `closes #1337`. This tells GitHub to
      automatically close the existing issue, if the PR is accepted and merged.

5. Indicate if you have tested on a local copy of the site or not.

    This is very important when you are making changes that are not copy editing markdown files. For example, changes to CSS or JavaScript code, etc.

### Troubleshooting

If the app launches but you are encountering errors with the UI itself, for example if fonts are not being loaded or if the code editor is not displaying properly, you may try the following troubleshooting steps at least once:

```shell
# Remove all installed node modules
rm -rf node_modules ./**/node_modules

# Reinstall npm packages
npm install

# Bootstrap the project
npm run bootstrap

# Seed the database
npm run seed

# Re-start the application
npm run develop
```
