# Getting Started

1. Install ruby version `2.x.x`  
	 Check version: `$ ruby --version`

2. Install Bundler:
	`$ gem install bundler`

3. Go `cd` into repo. Checkout to required branch. (`master` if user/org page, `gh-pages` if project page)

4. Create `Gemfile` with contents:  
	```ruby
	source 'https://rubygems.org'
	gem 'github-pages', group: :jekyll_plugins
	```

5. Install gh-pages specific dependencies.  
	`$ bundle install`

6. Generate new site.
	`$ bundle exec jekyll new . --force`

7. Run locally:
	`$ bundle exec jekyll serve`  
	See it live on `http://localhost:4000`

# Updating GitHub pages gem

Any **one** of the following:

```sh
$ bundle update github-pages
$ bundle update
$ gem update github-pages
```

# Configuring Jekyll

# Links

* [Windows specific](https://jekyllrb.com/docs/windows/#installation) when it'll be required. =P