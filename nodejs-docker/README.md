# Node.js Review

## Events

- event-driven, asynchronous run-time
- runtime - implements event loop. allows node to push intensive operations off to a separate thread. this is how it’s non-blocking
- good for things with high throughput
- need to know how events and callbacks work
- process global → process.on(’exit’, callback) → called on exit event
- can create our own events

```jsx
const eventEmitter = new EventEmitter();
eventEmitter.on('lunch', () => {
  console.log('yum');
});
eventEmitter.emit('lunch');
eventEmitter.emit('lunch');
```

## File System

- gives you access to file system
- can do this in a blocking/non-blocking way
- `readFile`, `readFileSync`
- with async, pass a callback to be called
- or promise based:

```jsx
const { readFile } = require('fs').promises;

// can do it like this if you're on the latest node
const file = await readFile('./hello.txt', 'utf8');

// otherwise, wrap in async
async function hello() {
  const file = await readFile('./hello.txt', 'utf8');
}
```

## Modules

- javascript file that exports its code
- many are built-in (`fs`)
- import using common-js `require`
- node.js added support for ES modules (import/export)
- most use require still, but use ESM for new stuff
- use npm for other packages

# Docker Notes

- it’s a way to package software to run on any hardware
- **Dockerfile** - blueprint for building a docker image
- **Image** - template for running docker containers, immutable snapshot, can be uploaded to registries, can spawn multiple containers
- ********\*\*********Container********\*\********* - running process of an image (ex. node app)
- ********\*\*\*\*********Kubernetes********\*\*\*\********* - used to scale containers to an infinite workload
- point of docker - able to recreate environments

## Installation and Tooling

- install docker desktop
- `docker ps` → gives list of all running processes on a system
- install docker ext.

## Dockerfile

- each command/row in the dockerfile is a layer. For efficiency, Docker will try to cache each layer if nothing has changed.
- install dependencies first so they can be cached

## To Run

- `docker build -t emily/name:1.0 .`
- `docker images` → get ID
- `docker run <tag>`
- We exposed a port in our container. Need to forward this to one on our machine.
- `docker run -p 5000:8080`

## Volumes

- When you stop a container, all of the data inside of it will be lost
- There might be times when you want to persist/share data across multiple containers. Do this with volumes
- A volume is a dedicated folder on the host machine, inside folder, container can create files that can be added to multiple containers
- `docker volume create shared-stuff`
- `docker run --mount source=shared-stuff,target=/stuff`

## Troubleshooting

- `docker exec`
- each process should be its own container (smaller)
- to run multiple containers, use docker compose
