
## Edit this with your own values and run it from   ######### ##
## command line for a quick way to get started.     ######### ##

heroku                          \
    addons:create               \
    heroku-postgresql:hobby-dev \
    --version=12                \
    --app  "hn6"                \
    --name "dab-hn6"