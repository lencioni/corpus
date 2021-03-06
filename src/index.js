/**
 * Copyright 2015-present Greg Hurrell. All rights reserved.
 * Licensed under the terms of the MIT license.
 *
 * @flow
 */

'use strict';

import React from 'react';
import Corpus from './app/components/Corpus.react';

const root = document.getElementById('app-root');
React.render(<Corpus />, root);
