const { app, BrowserWindow, screen, ipcMain  } = require('electron')
const url = require("url");
const path = require("path");
require('electron-reload')(__dirname);
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

let mainWindow

function createWindow() {
    app.commandLine.appendSwitch('enable-features', 'SharedArrayBuffer')
    
    var mainScreen = screen.getPrimaryDisplay();
    var dimensions = mainScreen.size;
    mainWindow = new BrowserWindow({
        width: dimensions.width,
        height: dimensions.height,
        webPreferences: {
            nodeIntegration: true,
            devTools: true,
            preload: path.join(__dirname, 'preload.js')
        },
        frame: false,
        titleBarStyle: 'hidden',
        transparent: true
    })

    // Enable SharedArrayBuffer
    mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
        details.responseHeaders['Cross-Origin-Opener-Policy'] = ['same-origin'];
        details.responseHeaders['Cross-Origin-Embedder-Policy'] = ['require-corp'];
        callback({ responseHeaders: details.responseHeaders });
    });

    mainWindow.maximize();

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, `/docs/index.html`),
            protocol: "file:",
            slashes: true
        })
    );

    mainWindow.on('closed', function () {
        mainWindow = null
    });

    ipcMain.on('set-meeting', (event, meeting) => {
        emailSummary(meeting)
    })

    mainWindow.webContents.on("did-fail-load", function () {
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, `/docs/index.html`),
                protocol: "file:",
                slashes: true
            })
        );
    });
}
async function emailSummary(meetingId) {
    const response = await fetch('https://bsysummary-hicsxm6moa-uc.a.run.app', {
        method: 'post',
        body: JSON.stringify({
            "summary": "SpaceX launched its mega rocket Starship but lost both the booster and the spacecraft in a pair of explosions minutes into Saturday’s test flight.The rocketship reached space following liftoff from South Texas before communication suddenly was lost. SpaceX officials said it appears the ship’s self-destruct system blew it up over the Gulf of Mexico. SpaceX launched its mega rocket Starship but lost both the booster and the spacecraft in a pair of explosions minutes into Saturday’s test flight.The rocketship reached space following liftoff from South Texas before communication suddenly was lost. SpaceX officials said it appears the ship’s self-destruct system blew it up over the Gulf of Mexico. “The real topping on the cake today, that successful liftoff,” said SpaceX commentator John Insprucker, noting that all 33 booster engines fired as designed, unlike last time. The booster also separated seamlessly from the spaceship, which reached an altitude of 92 miles (148 kilometers). “The real topping on the cake today, that successful liftoff,” said SpaceX commentator John Insprucker, noting that all 33 booster engines fired as designed, unlike last time. The booster also separated seamlessly from the spaceship, which reached an altitude of 92 miles (148 kilometers). “The real topping on the cake today, that successful liftoff,” said SpaceX commentator John Insprucker, noting that all 33 booster engines fired as designed, unlike last time. The booster also separated seamlessly from the spaceship, which reached an altitude of 92 miles (148 kilometers). “The real topping on the cake today, that successful liftoff,” said SpaceX commentator John Insprucker, noting that all 33 booster engines fired as designed, unlike last time. The booster also separated seamlessly from the spaceship, which reached an altitude of 92 miles (148 kilometers). “Today’s test is an opportunity to learn — then fly again,” noted NASA Administrator Bill Nelson via X, formerly known as Twitter. Starship is 34 feet (10 meters) taller than NASA’s Saturn V rocket which carried men to the moon more than a half-century ago, and 75 feet (23 meters) taller than NASA’s Space Launch System rocket that flew around the moon and back, without a crew, last year. And it’s got approximately double the liftoff thrust.Like before, nothing of value was aboard Starship for the trial run.Once Starship is proven, Musk plans to use the fully reusable mega rockets to launch satellites into orbit around Earth and equipment and people to the moon, and eventually, to Mars. SpaceX had been aiming for an altitude of 150 miles (240 kilometers), just high enough to send the bullet-shaped spacecraft around the globe before ditching into the Pacific near Hawaii about 1 1/2 hours after liftoff, short of a full orbit.Following April's flight demo, SpaceX made dozens of improvements to the rocket as well as the launch pad. The Federal Aviation Administration cleared the rocket for flight on Wednesday, after confirming that all safety and environmental concerns had been met.After Saturday's launch, the FAA said no injuries or public damage had been reported and that an investigation was underway to determine what went wrong. SpaceX cannot launch another Starship until the review is complete and corrections made, the FAA added.NASA is counting on Starship to land astronauts on the moon by the end of 2025 or shortly thereafter. The space agency awarded SpaceX a $3 billion contract to make it happen, by transferring astronauts from its Orion capsule to Starship in lunar orbit before heading down to the surface.",
            "emails": ["beshoyhanna@outlook.com"]
        }),
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    console.log(data);
}
app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
    if (mainWindow === null) createWindow()
})
