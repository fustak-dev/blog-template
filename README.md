# Blog Template

This is the official blog template for Fustak.

## Getting Started

### Install Fustak CLI

Install the **Fustak CLI** by running the following command in your terminal:

  ```bash
  curl -L https://cli.fustak.dev/install | sh 
  ```

Run **fustak --help** to get more information and verify that it works correctly.

Register to the Fustak server by running the register command:

```bash
fustak register 
```

- This will create a new account on the Fustak server.
- This will save your PRIVATE token in the file ".token" inside the ".fustak" folder for use by the CLI. Don't share it with anyone.
- This will return the URL of your project.

### Download the template

Download the template by running the following command in your terminal:

```bash
fustak template https://github.com/fustak-dev/blog-template.git blog
```

It will create a new folder called **blog** with the template inside.

### Install the dependencies

Install the dependencies by running the following command in your terminal:

```bash
pnpm install
```

Or

```bash
npm install
```

### Create the databases

Create the blog tables:

```bash
fustak migration src/migrations/20230711_create_blog_up.sql
```

Create the user tables:

```bash
fustak migration src/migrations/20230711_create_user_up.sql
```

By default, the user is **admin** with password **admin**.

You can change the password by executing the following command:

```bash
fustak shell
```

Then you have to execute the following query:

```sql
UPDATE user SET password='__YOUR_PASSWORD__' WHERE username='admin' AND password='admin'
```

### Deploy the project

Deploy the project by running the following command in your terminal:

```bash
fustak deploy
```

It will deploy the project to the Fustak server.

### Admin token

The admin token is used to save your post. You can get it by running the following command:

```bash
fustak token blog.post.service 
```

You have to add it to the **src/pages/admin/blog/posts/constants.js** file. Replace the **ADMIN_TOKEN** value with the new one.

```js
export const TOKEN = "__ADMIN_TOKEN__";
```

Deploy the pages:

```bash
fustak pages
```

This time you must deploy the pages as it is the only thing that has changed.

## Usage

### Visit the blog

To go to the blog, you need to run the following command:

```bash
fustak url
```

This will show the URL of the project. Please, open it in your preferred browser.

By default, were are redirecting the root path to the blog. You can change this behaviour by editing the file **src/pages/index/index.page.js**.

You will see a **"Hello World!"** blog post. You can edit, delete, or create a new one in the admin area.

### Login to the admin area

To login to the admin area, you need to go to the URL of the project and add **/0/admin** at the end.

For example, if the URL of the project is **https&ZeroWidthSpace;://000000.fustak.dev**, you need to go to **https&ZeroWidthSpace;://000000.fustak.dev/0/admin**.

Remember that you can get the URL of the project by running the following command:

```bash
fustak url
```

Remember that the default user is **admin** with password **admin**. If you have changed the password, you need to use the new one. We strongly recommend changing the password.

### Create a new blog post

To create a new blog post, go to the admin area and click on the **"Create New Post"** button.

It will redirect you to the **"Create Post"** page. Where you will find all the information about how to create a new blog post and a list of all the available features.

![Create Post](/create-post.webp)

To save the post, you need to click on the **"Save"** button or use the shortcut **Ctrl+S** (**Cmd** on macOS).

There is no autosave feature. To activate it, you need to click on the **Switch** field or use the shortcut **Ctrl+Shift+S** (**Cmd** on macOS).

A new post always is saved as a draft. To publish it, you hav to go to the admin area **Posts** page and click on the **"Publish"** button.

### Edit a blog post

To edit a blog post, go to the admin area **Posts** page and click on the **"Edit"** button or the **"Title"** link.

It will redirect you to the **"Edit Post"** page. Where you will be able to edit the content of the post.

Remember that you can save it using the **"Save"** button or the shortcut **Ctrl+S** (**Cmd** on macOS). Or activate the autosave feature using the **Switch** field or the shortcut **Ctrl+Shift+S** (**Cmd** on macOS).

### Delete a blog post

To delete a blog post, go to the admin area **Posts** page and click on the **"Delete"** button. This is a soft delete, so you can restore it later if you want to.

### Restore a blog post

To restore a blog post, you have to use a simple query.

First you have to access the database shell:

```bash
fustak shell
```

Then you have to execute the following query:

```sql
UPDATE blog_post SET deleted=0 WHERE id='__POST_ID__'
```

To get the **\_\_POST_ID__**, you have to check it using this query:

```sql
SELECT * FROM blog_post WHERE deleted=1
```

### Create a new user

To create a new user, you need execute a query adding a username and a password. 

Like this:

```sql
INSERT INTO user (username, password) VALUES ('__USERNAME__', '__PASSWORD__')
```

The password is not encrypted, so you must use a unique one for this site. We strongly recommend using a password manager.

### Edit a user

To edit a user, you need to execute a query by adding a username or a password.

Like this to add a new password:

```sql
UPDATE user SET password='__PASSWORD__' WHERE username='__USERNAME__'
```

Like this to add a new username:

```sql
UPDATE user SET username='__USERNAME__' WHERE username='__USERNAME__'
```

### Delete a user

To delete a user, you need execute a query:

```sql
DELETE FROM user WHERE username='__USERNAME__'
```

### Logout

To logout, you need to go to the admin area and click on the **"Logout"** button at the top menu.

## Tips

Tips to improve your experience with the template.

### Watcher

We recommend to use Watchexec as you can see in the Makefile provided with the template.

#### Install Watchexec

Check the in [official documentation](https://github.com/watchexec/watchexec/blob/main/doc/packages.md) your package manager or other [options](https://github.com/watchexec/watchexec#install) to install it.


| Platform | Distributor | Package name | Status | Install command |
|:-|:-|:-:|:-:|-:|
| Linux | Alpine | [`watchexec`](https://pkgs.alpinelinux.org/packages?name=watchexec) | testing | `apk add watchexec` |
| Linux | ALT Sisyphus | [`watchexec`](https://packages.altlinux.org/en/sisyphus/srpms/watchexec/) | outdated | `apt-get install watchexec` |
| Linux | APT repo | [`watchexec-cli`](https://apt.cli.rs) | unofficial | `apt install watchexec-cli` |
| Linux | Arch | [`watchexec`](https://archlinux.org/packages/community/x86_64/watchexec/) | official | `pacman -S watchexec` |
| Linux | Gentoo GURU | [`watchexec`](https://gpo.zugaina.org/Overlays/guru/app-misc/watchexec) | unofficial | `emerge -av watchexec` |
| Linux | LiGurOS | [`watchexec`](https://gitlab.com/liguros/liguros-repo/-/tree/stable/app-misc/watchexec) | official | `emerge -av watchexec` |
| Linux | Manjaro | [`watchexec`](https://software.manjaro.org/package/watchexec) | official | `pamac install watchexec` |
| Linux | Nix | [`watchexec`](https://search.nixos.org/packages?query=watchexec) | official | `nix-shell -p watchexec` |
| Linux | openSUSE | [`watchexec`](https://software.opensuse.org/package/watchexec) | official | `zypper install watchexec` |
| Linux | Parabola | [`watchexec`](https://www.parabola.nu/packages/?q=watchexec) | official | `pacman -S watchexec` |
| Linux | Void | [`watchexec`](https://github.com/void-linux/void-packages/tree/master/srcpkgs/watchexec) | official | `xbps-install watchexec` |
| MacOS | Homebrew | [`watchexec`](https://formulae.brew.sh/formula/watchexec) | official | `brew install watchexec` |
| _Any_ | Crates.io | [`watchexec-cli`](https://crates.io/crates/watchexec-cli) | first-party | `cargo install --locked watchexec-cli` |
| _Any_ | Binstall | [`watchexec-cli`](https://crates.io/crates/watchexec-cli) | first-party | `cargo binstall watchexec-cli` |
| _Any_ | Webi | [`watchexec`](https://webinstall.dev/watchexec/) | third-party | varies (see webpage) |

#### Usage

To use it, you need to run the following command in your terminal:

```bash
make watch-pages
```

Or you can run the following command:

```bash
make watch-deploy
```

---

Visit [https://fustak.dev](https://fustak.dev) to get more information about Fustak.
