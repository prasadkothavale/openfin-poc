function generateLink(redirect) {
    let protocol = window.location.protocol == 'https:' ? 'fins:' : 'fin:'
    let deepLink = `${protocol}//${window.location.host}/app.json?\$\$${redirect}`
    setClipboardText(deepLink)
}

function setClipboardText(text){
    var id = "mycustom-clipboard-textarea-hidden-id";
    var existsTextarea = document.getElementById(id);

    if(!existsTextarea){
        console.log("Creating textarea");
        var textarea = document.createElement("textarea");
        textarea.id = id;
        // Place in top-left corner of screen regardless of scroll position.
        textarea.style.position = 'fixed';
        textarea.style.top = 0;
        textarea.style.left = 0;

        // Ensure it has a small width and height. Setting to 1px / 1em
        // doesn't work as this gives a negative w/h on some browsers.
        textarea.style.width = '1px';
        textarea.style.height = '1px';

        // We don't need padding, reducing the size if it does flash render.
        textarea.style.padding = 0;

        // Clean up any borders.
        textarea.style.border = 'none';
        textarea.style.outline = 'none';
        textarea.style.boxShadow = 'none';

        // Avoid flash of white box if rendered for any reason.
        textarea.style.background = 'transparent';
        document.querySelector("body").appendChild(textarea);
        console.log("The textarea now exists :)");
        existsTextarea = document.getElementById(id);
    }else{
        console.log("The textarea already exists :3")
    }

    existsTextarea.value = text;
    existsTextarea.select();

    try {
        var status = document.execCommand('copy');
        if(!status){
            showNotification("Cannot copy deep link");
        }else{
            showNotification("Deep link copied to clipboard. Open it in browser of other machine having OpenFin installed");
        }
    } catch (err) {
        showNotification('Unable to copy deep link');
    }
}


function showNotification(message) {
    var _message = message || "no message passed";
    var notification = new fin.desktop.Notification({
        url: "/notification.html",
        message: "some initial message",
        onClick: function () {
            console.log("clicked");
        },
        onClose: function () {
            console.log("closed");
        },
        onDismiss: function () {
            console.log("dismissed");
        },
        onError: function (reason) {
            console.log("error: " + reason);
        },
        onMessage: function (message) {
            console.log("message: ", message);
            notification.sendMessage("I sent the message '" + message + "'");
        },
        onShow: function () {
            console.log("notification shown :", notification);
            notification.sendMessage(message);
        }
    });
}
