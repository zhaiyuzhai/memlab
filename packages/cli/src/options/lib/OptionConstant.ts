/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @oncall web_perf_infra
 */

import {constant, setInternalValue} from '@memlab/core';

const optionNames = {
  APP: 'app',
  BASELINE: 'baseline',
  CONTINUS_TEST: 'ContinuousTest',
  DEVICE: 'device',
  DISABLE_WEB_SECURITY: 'disable-web-security',
  DISABLE_XVFB: 'disable-xvfb',
  ENGINE: 'engine',
  FINAL: 'final',
  FULL: 'full',
  HEADFUL: 'headful',
  HELP: 'help',
  IGNORE_LEAK_CLUSTER_SIZE_BELOW: 'ignore-leak-cluster-size-below',
  INTERACTION: 'interaction',
  LEAK_FILTER: 'leak-filter',
  LOCAL_PUPPETEER: 'local-puppeteer',
  LOG_SCRIPT: 'log-script',
  ML_CLUSTERING: 'ml-clustering',
  ML_CLUSTERING_MAX_DF: 'ml-clustering-max-df',
  ML_LINKAGE_MAX_DIST: 'ml-linkage-max-dist',
  NODE_ID: 'node-id',
  REWRITE_JS: 'rewrite-js',
  RUN_MODE: 'run-mode',
  RUN_NUM: 'run-num',
  SAVE_TRACE_AS_UNCLASSIFIED_CLUSTER: 'save-trace-as-unclassified-cluster',
  SC: 'sc',
  SCENARIO: 'scenario',
  SILENT: 'silent',
  SKIP_EXTRA_OP: 'skip-extra-op',
  SKIP_EXTRA_OPS: 'skip-extra-ops',
  SKIP_GC: 'skip-gc',
  SKIP_SCREENSHOT: 'skip-screenshot',
  SKIP_SCROLL: 'skip-scroll',
  SKIP_SNAPSHOT: 'skip-snapshot',
  SKIP_WARMUP: 'skip-warmup',
  SNAPSHOT: 'snapshot',
  SNAPSHOT_DIR: 'snapshot-dir',
  TARGET: 'target',
  TRACE_ALL_OBJECTS: 'trace-all-objects',
  TRACE_OBJECT_SIZE_ABOVE: 'trace-object-size-above',
  USER_AGENT: 'user-agent',
  VERBOSE: 'verbose',
  WORK_DIR: 'work-dir',
  DEBUG: 'debug',
};

const optionShortcuts = {
  H: 'h',
  S: 's',
  V: 'v',
};

const optionConstants = {
  optionNames,
  optionShortcuts,
};
export type OptionConstants = typeof optionConstants;
export default setInternalValue(
  optionConstants,
  __filename,
  constant.internalDir,
);
