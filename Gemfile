  source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.1.4'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '~> 3.7'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
# gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby
gem 'jquery-rails'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'
#gem for uploading
gem 'carrierwave', '~> 1.0'
gem 'mini_magick', '~> 4.7.0'
gem 'rmagick'
gem 'carrierwave-imageoptimizer'
gem 'rails-assets-jcrop', source: 'https://rails-assets.org'
gem 'fog', '~> 1.40.0'
#lightslider
gem 'light_gallery_rails', git: 'https://github.com/stNicolaas/light-gallery-rails.git'
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

#simple_for_for
gem 'simple_form'

#Faker
gem 'faker', :git => 'https://github.com/stympy/faker.git', :branch => 'master'

#date picker gem
gem 'jquery-ui-rails', '5.0.5'
#time picker gem
gem 'bootstrap-sass', '3.2.0.2'
gem 'momentjs-rails', '>= 2.9.0'
gem 'bootstrap3-datetimepicker-rails', '~> 4.17.47'
#Yelp gem
gem 'yelp', require: 'yelp'

#In other to use omniauth google this gem have to be at 1.3.1
gem 'omniauth-oauth2', '~> 1.3.1'
#facebook omniauth
gem 'omniauth-facebook'

#google omniaauth
gem "omniauth-google-oauth2", "~> 0.2.1"
#dotenv
gem 'dotenv'

gem 'will_paginate', '~> 3.1.0'

gem 'cropper-rails'
group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  # Adds support for Capybara system testing and selenium driver
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
