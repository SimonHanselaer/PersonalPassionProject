const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let url
if (process.env.NODE_ENV === 'DEV') {
    url = 'http://localhost:8080/'
} else {
    url = `file://${process.cwd()}/dist/index.html`
}

// const psList = require("ps-list");

// (async () => {
//     console.log(await psList()) => [{ pid: 3213, name: 'node', cmd: 'node test.js', ppid: 1, uid: 501, cpu: 0.1, memory: 1.5 }, …]
// })();

// const desktopCapturer = require('electron');

// desktopCapturer.getSources({ types: ['window', 'screen'] }).then(async sources => {
//     console.log(sources);
// });

// desktopCapturer.getSources(
//     {
//         types: ["window", "screen"]
//     },
//     function (error, sources) {
//         for (let source of sources) {
//             console.log("Name: " + source.name);
//         }
//     }
// );

app.on('ready', () => {
    let window = new BrowserWindow({ width: 800, height: 600 })
    window.loadURL(url)
})