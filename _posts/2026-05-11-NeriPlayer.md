---
layout: mypost
title: 安卓音乐聚合播放器 QQ/网易云/B站/Youtube Music支持下载搜索导入歌单
categories: [安卓软件]
---

安卓音乐聚合播放器 QQ/网易云/B站/Youtube Music支持下载搜索导入歌单                                                         

原生 Android 多源音频播放器、支持安卓手机 平板 车机待测试，应该也是支持的。
项目采用原生 Android 开发，当前支持 Android 9 (API 28) 及以上设备， 围绕「多源探索、在线播放、本地可控」持续迭代。
如何选择版本？
大部分用户请下载 arm64-v8a 版本
老旧手机（32位系统）请下载 armeabi-v7a
x86 / x86_64 仅供模拟器或英特尔设备或 Chromebook 使用，普通用户无需下载

下载地址：

链接: https://yun.139.com/shareweb/#/w/i/2v3EdKFjasKkz  提取码:fq79  

链接2：https://pan.quark.cn/s/c74c85d30cd0

NeriPlayer 是一个基于 Jetpack Compose + Media3 的原生 Android 音频播放器。当前实现重点不是构建公共云端服务，而是在用户已具备第三方平台账号能力的前提下，整合 网易云音乐、Bilibili 与 YouTube Music 的 在线内容，并提供 流媒体缓存、应用内下载、本地导入、本地歌单管理、 可选 GitHub 私有仓库同步 等能力。


账号即能力：通过用户在第三方平台的合法授权，启用在线播放、 搜索、歌单访问等能力。
默认本地存储：播放缓存、下载文件、歌单、历史记录、设置与授权 信息默认保存在设备本地。
可选自有仓库同步：可将歌单、收藏和历史等元数据同步到用户自己 的 GitHub 私有仓库。
核心特性 / Key Features
多源探索与播放：Explore 页当前支持网易云精选歌单与 YouTube Music 歌单浏览，并提供 网易云 / Bilibili / YouTube Music 搜索入口。
分层搜索能力：页面搜索与播放页元数据补全是两套链路。 Explore 使用 网易云 / Bilibili / YouTube Music； SearchManager 用 网易云 / QQ 音乐 补全封面、歌词与曲目信息。
基于 Media3 的自定义播放管理层： PlayerManager 负责音源解析、播放队列、随机/循环、状态持久化、 失败重试与恢复。
可配置流媒体缓存：播放器使用 SimpleCache + LRU 做音频缓存， 默认上限为 1 GB，支持在设置中手动清理缓存。
应用内下载与本地播放：支持将在线音源下载到应用专属目录， 同步保存歌词与封面，并在应用内查看进度、管理已下载歌曲。
本地音频导入与扫描：支持系统 VIEW / SEND / SEND_MULTIPLE 的 audio/*，可从外部分享/打开音频后导入；也支持扫描设备本地音频。
GitHub 私有仓库同步：可选同步本地歌单、收藏歌单、最近播放与 删除记录，使用 WorkManager 进行延迟与周期同步。
开发者模式与调试工具：设置页连续点击版本号 7 次 后， 底栏会出现独立 Debug 页，内含 YouTube / Bili / Netease / Search API 探针、普通日志与崩溃日志查看器。
音频反应式动态背景：在 Android 13+ 的 Now Playing 页面， 可选启用基于 RuntimeShader 的音频反应式背景效果。
本地备份与恢复：支持本地歌单与收藏数据的 JSON 导入/导出， 用于设备迁移或手工备份。
一起听：支持创建房间或加入他人房间，实现 WebSocket 实时同步播放状态、独立房间权限控制（房主/听众）及房主离线检测。
平台现状 / Platform Status
网易云音乐：登录、搜索、精选歌单/专辑访问、播放、下载、歌词补全。
Bilibili：登录、搜索、收藏夹访问、分 P 转音频播放、下载。
YouTube Music：登录、歌单浏览与详情、播放、下载；Explore 中已 注册为搜索源。
QQ 音乐：当前仅用于播放页元数据/歌词补全，未实现登录、播放与库页。


