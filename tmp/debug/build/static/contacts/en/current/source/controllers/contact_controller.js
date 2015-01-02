// ==========================================================================
// Project:   Contacts.contactController
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals Contacts */

/** @class

  (Document Your Controller Here)

  @extends SC.ObjectController
*/
Contacts.contactController = SC.ObjectController.create(
/** @scope Contacts.contactController.prototype */ {

  // TODO: Add your own code here.

  contentBinding: 'Contacts.contactsController.selection'

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('contacts');