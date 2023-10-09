
##  Crowd Funding
Crowdfunding is a way of raising money to finance projects and businesses. It enables fundraisers to collect
money from a large number of people via online platforms.Crowdfunding is most often used by startup companies
or growing businesses via online platforms.


    
## Frontend Setup 

Get the code by either cloning this repository using git. Open the terminal and run this command for cloning.

```bash
 git clone git@bitbucket.org:stackinfinite/crowdfunding-fe.git
```

## Go to the project directory
Open the terminal and run this command to go to project directory.
```bash
cd crowdfunding-fe
```



## Installation

In order to run this application you need to npm install.

```bash
  npm install
```
    
    
## Run the app
```bash
  npm run dev
```
    
##  Getting Started

The app should now be up and running at 

```bash
 http://localhost:3000
```

    
---
## Backend Setup

For development, you will need Node.js in your environement.

```bash
 $ sudo apt install nodejs
```

Get the code by cloning this repository using git

```bash
git clone git@bitbucket.org:stackinfinite-gpt/crowdfunding-be.git
```

## Go the the project directory
Open the terminal and run this command to go to project directory.

```bash
cd crowdfunding-be
```


## Set up .env file

```bash
  npm install
```


## Docker Installation on Ubuntu


1. First, install the prerequisites required to add an additional repository over HTTPS and update the software package list:


```bash
$ sudo apt install apt-transport
```

2. Use the next curl command to bring in the repository's GPG encryption key:

```bash
$ curl -fsSL ubuntu/gpg | sudo apt-key add -
```

3. To your machine, add the following Docker APT repository:

```bash
$ sudo add-apt-repository "deb [arch=amd64]
```

## Steps for Installing Docker:

1. Open the terminal on Ubuntu.

2. Remove any Docker files that are running in the system, using the following command:

```bash
$ sudo apt-get remove docker docker-engine docker.io
```

After entering the above command, you will need to enter the password of the root and press enter.

3. Check if the system is up-to-date using the following command:

```bash
$ sudo apt-get update
```

4. Install Docker using the following command:

```bash
$ sudo apt install docker.io
```

You’ll then get a prompt asking you to choose between y/n - choose y

5. Install all the dependency packages using the following command:

```bash
$ sudo snap install docker
```

6. Before testing Docker, check the version installed using the following command:

```bash
$ docker --version
```

7. Pull an image from the Docker hub using the following command:

```bash
$ sudo docker run hello-world
```

8. Check if the docker image has been pulled and is present in your system using the following command:

```bash
$ sudo docker images
```

9. To check for containers in a running state, use the following command:

```bash
$ sudo docker ps
```


## To run the project

docker compose up