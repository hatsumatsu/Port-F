# ⛵ Port F

A Wordpress Starter Theme


### Deployment via Github Actions

````yaml
# /.github/workflows/main.yml

on:
  push:
    branches:
      - main

jobs:
  deploy:
    name: Deploy
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Deploy
      uses: Dylan700/sftp-upload-action@latest
      with:
        server: ${{secrets.SFTP_HOST}}
        username: ${{secrets.SFTP_USER}}
        password: ${{secrets.SFTP_PASSWORD}}
        port: 22
        uploads: |
          ./ => /var/www/html/wp-content/themes/Port-F
        ignore: |
          **/.*
          readme*
          package*.json
          webpack*.js
          gruntfile.js
          **/Thumbs.db
          node_modules
          dploy*
          *.code-*
          postcss.config.js
        delete: 'true'

````
