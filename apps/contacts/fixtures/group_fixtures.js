// ==========================================================================
// Project:   Contacts.Group Fixtures
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals Contacts */

sc_require('models/group_model');

Contacts.Group.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  {
  guid: 'family',
  name: 'Family',
  contacts: ['Brian','Claire']
  },

  {
    guid: 'work',
    name: 'Work',
    contacts: ['Brian']

  },

  {
    guid: 'school',
    name: 'School',
    contacts: ['Brian','Fred','Rachita']

  }

];
