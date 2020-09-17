# create-wp-local
**create-wp-local** is a Node.js CLI module based on the [WPinstaller](https://www.npmjs.com/package/wpinstaller) module.

This module let you install easily WordPress CMS sites on your local PHP dev environment such as XAMPP, Wamp or MAMP.

## Installation
This module can be installed globally only

### Install globally
```sh
$ npm install -g create-wp-local
```

## Usage
### globally
Enter to your htdocs folder 
```sh
$ cd htdocs
```

Open your terminal and run `create-wp-local` command following your site name
```sh
$ create-wp-local my-wp-site
```

Or with npx
```sh
$ npx create-wp-local my-wp-site
```

Once you will run the `create-wp-local` command, a prompt configuration will be displayed in the terminal

####  Prompt config questions

| Input | Description | Default |
| ------ | ------ | ------ |
| Site language | The language that the site will be displayed | EN |
| Database | The name of the database you want to use with WordPress. **Database name is required! - If the database does not exist in your Database Service ( MySQL or MariaDB ) it will created automatically for you according to the Database name you will supply** |  |
| User | Your database username such as root | `root` |
| User password | Your database password, no password required for root |  |
| Port | [Wikipedia](https://en.wikipedia.org/wiki/Port_(computer_networking)#firstHeading) | `8080` |
| Host | You should be able to get this info from your web host | `localhost` |
| Prefix | If you want to run multiple WordPress installations in a single database | `wp_` |
| Site title | Your WordPress site title | Simple site title |
| Admin username | The username will be used for log in after the installation  | admin |
| Admin password | The site admin password | 123456 |
| Admin email | The site admin email address | admin@wp.com |


After a successful installation you will be able to access your site at:
~~~
e.g http://localhost:8080/my-wp-site
~~~

## License
MIT