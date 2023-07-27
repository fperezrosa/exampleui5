sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast, MessageBox) {
        "use strict";

        return Controller.extend("exampleui5.controller.App", {
            onInit: function () {
                MessageBox.information("everything is OK");
            },
            sendMessage: function (param) {
                if (param) {
                    MessageToast.show("everything is OK");
                } else {
                    MessageToast.show("bad");
                }
            }
        });
    });
