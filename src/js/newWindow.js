document.addEventListener('DOMContentLoaded', function () {
    // Uses a Try/Catch to find out if the code is running in Openfin

    try {
        fin.desktop.main(function () {
            fin.desktop.System.getVersion(function (v) {
                console.log("version == ", v);
                // document.querySelector("#version").innerHTML = "Runtime version: " + String(v);
            }, function () {
                console.log("Failed to get the version...");
            });

            // addEventToEditBtn();

        })
    } catch (err) {
        alert("NO OPENFIN ");
    }
});

/* function addEventToEditBtn() {
	var editBtns = document.querySelectorAll('.openWindowBtn');
	for (var editbtn of editBtns) {
		editbtn.addEventListener('click', function (e) {
			e.preventDefault();
			var win = new ExternalWindow().then(function (win) {
				console.log(win);
				win.addEventListener("close-requested", function () {
					win.close(true, function () {
						console.log("window closed");
					}, function (err) {
						console.log("error while closing window :  ", err);

					});
				});
			});
		});
	}
} */

// function handleEditBtnClick() {
//     // e.preventDefault();
//     var win = new ExternalWindow().then(function (win) {
//         console.log(win);
//         win.addEventListener("close-requested", function () {
//             win.close(true, function () {
//                 console.log("window closed");
//             }, function (err) {
//                 console.log("error while closing window :  ", err);
//
//             });
//         });
//     });
// }

// CREATE EXTERNAL WINDOW
// ExternalWindow = function () {
//
//     var windowConfig = {
//         alwaysOnTop: false,
//         autoShow: true,
//         cornerRounding: {
//             width: 25,
//             height: 30
//         },
//         defaultCentered: false,
//         defaultHeight: 500,
//         defaultLeft: 700,
//         defaultTop: 50,
//         defaultWidth: 600,
//         frame: true,
//         hideOnClose: false,
//         icon: "/icon.ico",
//         maxHeight: -1,
//         maximizable: false,
//         maxWidth: -1,
//         minHeight: 0,
//         minimizable: true,
//         minWidth: 0,
//         name: "window 1",
//         opacity: 1,
//         resizable: true,
//         resizeRegion: {
//             size: 2, //The size in pixels (Default: 2),
//             bottomRightCorner: 4 //The size in pixels of an additional
//             //square resizable region located at the
//             //bottom right corner of a
//             //frameless window. (Default: 4)
//         },
//         showTaskbarIcon: true,
//         saveWindowState: true,
//         /*taskbarIcon: The URL of an icon to be shown on the desktop. Support formats: Portable Network Graphic (PNG); Size: 256 x 256 Default: The parent application's applicationIcon */
//         taskbarIcon: "/icon.ico",
//         /* state: A string that sets the window to be "minimized", "maximized", or "normal" on creation. Default: "normal" */
//         state: "normal",
//         /* The URL of the window. Default: "about:blank" */
//         url: "/window.html"
//     };
//
//     var me = this;
//
//
//     return new Promise(function (resolve, reject) {
//         var initCallback = function () {
//             console.log("initializing window...")
//             resolve(this);
//         };
//         var onIntFail = function () {
//             console.log("Initialization failed.")
//         };
//
//         try {
//             fin.desktop.main(function () {
//                 me.window = new fin.desktop.Window(windowConfig, initCallback, onIntFail);
//             })
//         } catch (err) {
//             console.log("Error: ", err);
//             reject(err)
//         }
//
//     });
// };
//

// -------- OPEN STOCK DETAILS -------------
StockDetailsWindow = function (query) {

    var windowConfig = {
        alwaysOnTop: false,
        autoShow: true,
        defaultCentered: false,
        defaultHeight: 700,
        defaultLeft: 25,
        defaultTop: 25,
        defaultWidth: 600,
        frame: true,
        hideOnClose: false,
        icon: "http://diylogodesigns.com/blog/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background-768x768.png",
        maxHeight: -1,
        maximizable: false,
        maxWidth: -1,
        minHeight: 0,
        minimizable: true,
        minWidth: 0,
        name: query,
        opacity: 1,
        resizable: true,
        resizeRegion: {
            size: 2, //The size in pixels (Default: 2),
            bottomRightCorner: 4 //The size in pixels of an additional
            //square resizable region located at the
            //bottom right corner of a
            //frameless window. (Default: 4)
        },
        showTaskbarIcon: true,
        saveWindowState: true,
        /*taskbarIcon: The URL of an icon to be shown on the desktop. Support formats: Portable Network Graphic (PNG); Size: 256 x 256 Default: The parent application's applicationIcon */
        taskbarIcon: "http://diylogodesigns.com/blog/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background-768x768.png",
        /* state: A string that sets the window to be "minimized", "maximized", or "normal" on creation. Default: "normal" */
        state: "normal",
        /* The URL of the window. Default: "about:blank" */
        url: `https://www.google.com/search?q=${query}&tbm=fin`
    };

    var me = this;


    return new Promise(function (resolve, reject) {
        var initCallback = function () {
            console.log("initializing window...")
            resolve(this);
        };
        var onIntFail = function () {
            console.log("Initialization failed.")
        };

        try {
            fin.desktop.main(function () {
                me.window = new fin.desktop.Window(windowConfig, initCallback, onIntFail);
            })
        } catch (err) {
            console.log("Error: ", err);
            reject(err)
        }

    });
};
