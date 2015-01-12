// ==========================================================================
// Project:   Contacts.Contact Fixtures
// Copyright: @2014 My Company, Inc.
// ==========================================================================
/*globals Contacts */

sc_require('models/contact_model');

Contacts.Contact.FIXTURES = [

  // TODO: Add your data fixtures here.
  // All fixture records must have a unique primary key (default 'guid').  See 
  // the example below.

  {

    guid: 'Brian',
    firstName: 'Brian',
    lastName: 'Mintun',
    telNumber: '8313322407',
    description: 'This is my contact!',
    group: 'family'

  },

  {

    guid: 'Claire',
    firstName: 'Claire',
    lastName: 'Mintun',
    telNumber: '7073254725',
    description: 'Wife',
    group: 'family'


  },

  {

    guid: 'Fred',
    firstName: 'Fred',
    lastName: 'Jones',
    telNumber: '8314496685',
    description: 'Freddy!',
    group: 'school'


  },

  {

    guid: 'Rachita',
    firstName: 'Rachita',
    lastName: 'Shetty',
    telNumber: '9049998888',
    description: 'Rachita',
    group: 'school'


  }

  


];
