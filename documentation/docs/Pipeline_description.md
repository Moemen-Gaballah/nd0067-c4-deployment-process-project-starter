# Pipeline description

## Github
A developer first creates repository on GitHub, puts the code and commits it.
Repository is connected to CircleCi and fired whenever a developer pushes a change to the connected repository.

## CircleCi
The *.circleci/config.yml* file needs to be in the root folder so that CircleCi can read it and perform its two main tasks: build and deploy for both the backend and frontend.

An example pipeline diagram is shown in the file Pipeline.drawio.png.