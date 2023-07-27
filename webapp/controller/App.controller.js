sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("exampleui5.controller.App", {
            onInit: function () {
                MessageToast.show("everything is OK");
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
