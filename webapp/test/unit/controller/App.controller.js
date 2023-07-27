/*global QUnit*/

sap.ui.define([
	"exampleui5/controller/App.controller"
], function (Controller) {
	"use strict";

	QUnit.module("App Controller");

	QUnit.test("I should test the App controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});
	QUnit.test("I send a Message its ok", function (assert) {
		var oAppController = new Controller();
		oAppController.sendMessage(1);
		assert.ok(oAppController);
	});

});
