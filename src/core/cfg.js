/*
 * Copyright (c) 2022 RethinkDNS and its authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
/* eslint-disabled */
// eslint, no import-assert: github.com/eslint/eslint/discussions/15305
// 使用 import.meta.url 来精确定位文件位置，不受运行环境影响
const configUrl = new URL("../u6-basicconfig.json", import.meta.url);
const filetagUrl = new URL("../u6-filetag.json", import.meta.url);

const rawConfig = await Deno.readTextFile(configUrl);
const rawFiletag = await Deno.readTextFile(filetagUrl);

const conf = JSON.parse(rawConfig);
const filetag = JSON.parse(rawFiletag);
// nodejs.org/docs/latest-v22.x/api/esm.html#json-modules

export function timestamp() {
    return u6cfg.timestamp;
}

export function tdNodeCount() {
    return u6cfg.nodecount;
}

export function tdParts() {
  return u6cfg.tdparts;
}

export function tdCodec6() {
  return u6cfg.useCodec6;
}

export function orig() {
  return u6cfg;
}

export function filetag() {
  return u6filetag;
}

export function tdmd5() {
  return u6cfg.tdmd5;
}

export function rdmd5() {
  return u6cfg.rdmd5;
}
