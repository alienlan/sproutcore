// ==========================================================================
// Project:   Contacts.contactsController
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals Contacts */

/** @class

  (Document Your Controller Here)

  @extends SC.ArrayController
*/
Contacts.contactsController = SC.ArrayController.create(
/** @scope Contacts.contactsController.prototype */ {

  // TODO: Add your own code here.

  contentBinding: 'Contacts.groupController.contacts'

});
