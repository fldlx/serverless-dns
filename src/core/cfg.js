/*
 * Copyright (c) 2022 RethinkDNS and its authors.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

// 1. 精确定位文件位置
const configUrl = new URL("../u6-basicconfig.json", import.meta.url);
const filetagUrl = new URL("../u6-filetag.json", import.meta.url);

// 2. 使用同步读取确保变量立即初始化
const rawConfig = Deno.readTextFileSync(configUrl);
const rawFiletag = Deno.readTextFileSync(filetagUrl);

const u6cfg = JSON.parse(rawConfig);
const u6filetag = JSON.parse(rawFiletag);

export function timestamp() {
    return u6cfg.blocklist_stamp || "0";
}

export function tdNodeCount() {
    return u6cfg.max_dns_questions || 1;
}

export function tdParts() {
  return u6cfg.tdparts || 0;
}

export function tdCodec6() {
  return u6cfg.useCodec6 || false;
}

export function orig() {
  return u6cfg;
}

export function filetag() {
  return u6filetag;
}

export function tdmd5() {
  return u6cfg.tdmd5 || "";
}

export function rdmd5() {
  return u6cfg.rdmd5 || "";
}

console.log("Current Upstream URL:", Deno.env.get("UPSTREAM_DNS_URL"));
