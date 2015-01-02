// ==========================================================================
// Project:   Contacts.Group
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals Contacts */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Contacts.Group = SC.Record.extend(
/** @scope Contacts.Group.prototype */ {

  // TODO: Add your own code here.

  name: SC.Record.attr(String),
  // Each group has many contacts

  contacts: SC.Record.toMany('Contacts.Contact' , {inverse: 'group'})

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('contacts');