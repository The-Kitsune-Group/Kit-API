# Kit-API

Backend for Kit which connects it to a database running MongoDB.

![GitHub commit activity](https://img.shields.io/github/commit-activity/m/The-Kitsune-Group/Kit-API)

## Prerequisites

In order to run this API, you'll need a few things set up. Arguably the most important requirement is [Docker](https://www.docker.com/) installed on your system. After that, it's just a matter of integrating it into your local [Kit](https://github.com/The-Kitsune-Group/Kit) install by pulling the image and running it. This happens automatically, should you use the default Compose config. You'll need to create a .env file in the base directory containing a few environment variables in order to configure the API, listed here:
- ``API_PORT``: the (publicly exposed) port on which the API is listening
- ``MONGODB_USER``: the database user
- ``MONGODB_PASS``: the database password
- ``MONGODB_PORT``: the port, on which the database is listening
