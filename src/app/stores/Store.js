/**
 * Copyright 2015-present Greg Hurrell. All rights reserved.
 * Licensed under the terms of the MIT license.
 *
 * @flow
 */

'use strict';

import {EventEmitter} from 'events';

import Dispatcher from '../Dispatcher';

export default class Store extends EventEmitter {
  constructor() {
    super();
    this.dispatchToken = Dispatcher.register(this.handleDispatch.bind(this));
  }

  handleDispatch(payload: Object) { // eslint-disable-line no-unused-vars
    throw new Error(
      this.constructor.name + ' does not implement handleDispatch'
    );
  }

  waitFor(...tokens) {
    Dispatcher.waitFor(tokens);
  }
}
