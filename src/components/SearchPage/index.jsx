import React, { useState, useRef } from "react";
import { SearchCard } from "./SearchCard";

const users = [
  {
    login: "lunar",
    id: 6843218,
    node_id: "MDEyOk9yZ2FuaXphdGlvbjY4NDMyMTg=",
    avatar_url: "https://avatars.githubusercontent.com/u/6843218?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lunar",
    html_url: "https://github.com/lunar",
    followers_url: "https://api.github.com/users/lunar/followers",
    following_url: "https://api.github.com/users/lunar/following{/other_user}",
    gists_url: "https://api.github.com/users/lunar/gists{/gist_id}",
    starred_url: "https://api.github.com/users/lunar/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/lunar/subscriptions",
    organizations_url: "https://api.github.com/users/lunar/orgs",
    repos_url: "https://api.github.com/users/lunar/repos",
    events_url: "https://api.github.com/users/lunar/events{/privacy}",
    received_events_url: "https://api.github.com/users/lunar/received_events",
    type: "Organization",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "geekinglcq",
    id: 9047780,
    node_id: "MDQ6VXNlcjkwNDc3ODA=",
    avatar_url: "https://avatars.githubusercontent.com/u/9047780?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/geekinglcq",
    html_url: "https://github.com/geekinglcq",
    followers_url: "https://api.github.com/users/geekinglcq/followers",
    following_url:
      "https://api.github.com/users/geekinglcq/following{/other_user}",
    gists_url: "https://api.github.com/users/geekinglcq/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/geekinglcq/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/geekinglcq/subscriptions",
    organizations_url: "https://api.github.com/users/geekinglcq/orgs",
    repos_url: "https://api.github.com/users/geekinglcq/repos",
    events_url: "https://api.github.com/users/geekinglcq/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/geekinglcq/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "lunaruan",
    id: 2735514,
    node_id: "MDQ6VXNlcjI3MzU1MTQ=",
    avatar_url: "https://avatars.githubusercontent.com/u/2735514?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lunaruan",
    html_url: "https://github.com/lunaruan",
    followers_url: "https://api.github.com/users/lunaruan/followers",
    following_url:
      "https://api.github.com/users/lunaruan/following{/other_user}",
    gists_url: "https://api.github.com/users/lunaruan/gists{/gist_id}",
    starred_url: "https://api.github.com/users/lunaruan/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/lunaruan/subscriptions",
    organizations_url: "https://api.github.com/users/lunaruan/orgs",
    repos_url: "https://api.github.com/users/lunaruan/repos",
    events_url: "https://api.github.com/users/lunaruan/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/lunaruan/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "lunarthegrey",
    id: 8747426,
    node_id: "MDQ6VXNlcjg3NDc0MjY=",
    avatar_url: "https://avatars.githubusercontent.com/u/8747426?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lunarthegrey",
    html_url: "https://github.com/lunarthegrey",
    followers_url: "https://api.github.com/users/lunarthegrey/followers",
    following_url:
      "https://api.github.com/users/lunarthegrey/following{/other_user}",
    gists_url: "https://api.github.com/users/lunarthegrey/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/lunarthegrey/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/lunarthegrey/subscriptions",
    organizations_url: "https://api.github.com/users/lunarthegrey/orgs",
    repos_url: "https://api.github.com/users/lunarthegrey/repos",
    events_url: "https://api.github.com/users/lunarthegrey/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/lunarthegrey/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "LunarWatcher",
    id: 29489988,
    node_id: "MDQ6VXNlcjI5NDg5OTg4",
    avatar_url: "https://avatars.githubusercontent.com/u/29489988?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/LunarWatcher",
    html_url: "https://github.com/LunarWatcher",
    followers_url: "https://api.github.com/users/LunarWatcher/followers",
    following_url:
      "https://api.github.com/users/LunarWatcher/following{/other_user}",
    gists_url: "https://api.github.com/users/LunarWatcher/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/LunarWatcher/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/LunarWatcher/subscriptions",
    organizations_url: "https://api.github.com/users/LunarWatcher/orgs",
    repos_url: "https://api.github.com/users/LunarWatcher/repos",
    events_url: "https://api.github.com/users/LunarWatcher/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/LunarWatcher/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "lunaryorn",
    id: 224922,
    node_id: "MDQ6VXNlcjIyNDkyMg==",
    avatar_url: "https://avatars.githubusercontent.com/u/224922?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lunaryorn",
    html_url: "https://github.com/lunaryorn",
    followers_url: "https://api.github.com/users/lunaryorn/followers",
    following_url:
      "https://api.github.com/users/lunaryorn/following{/other_user}",
    gists_url: "https://api.github.com/users/lunaryorn/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/lunaryorn/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/lunaryorn/subscriptions",
    organizations_url: "https://api.github.com/users/lunaryorn/orgs",
    repos_url: "https://api.github.com/users/lunaryorn/repos",
    events_url: "https://api.github.com/users/lunaryorn/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/lunaryorn/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "Lunarixus",
    id: 35746622,
    node_id: "MDQ6VXNlcjM1NzQ2NjIy",
    avatar_url: "https://avatars.githubusercontent.com/u/35746622?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Lunarixus",
    html_url: "https://github.com/Lunarixus",
    followers_url: "https://api.github.com/users/Lunarixus/followers",
    following_url:
      "https://api.github.com/users/Lunarixus/following{/other_user}",
    gists_url: "https://api.github.com/users/Lunarixus/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/Lunarixus/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/Lunarixus/subscriptions",
    organizations_url: "https://api.github.com/users/Lunarixus/orgs",
    repos_url: "https://api.github.com/users/Lunarixus/repos",
    events_url: "https://api.github.com/users/Lunarixus/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/Lunarixus/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "lunardog",
    id: 367876,
    node_id: "MDQ6VXNlcjM2Nzg3Ng==",
    avatar_url: "https://avatars.githubusercontent.com/u/367876?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lunardog",
    html_url: "https://github.com/lunardog",
    followers_url: "https://api.github.com/users/lunardog/followers",
    following_url:
      "https://api.github.com/users/lunardog/following{/other_user}",
    gists_url: "https://api.github.com/users/lunardog/gists{/gist_id}",
    starred_url: "https://api.github.com/users/lunardog/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/lunardog/subscriptions",
    organizations_url: "https://api.github.com/users/lunardog/orgs",
    repos_url: "https://api.github.com/users/lunardog/repos",
    events_url: "https://api.github.com/users/lunardog/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/lunardog/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "lunarca",
    id: 1014360,
    node_id: "MDQ6VXNlcjEwMTQzNjA=",
    avatar_url: "https://avatars.githubusercontent.com/u/1014360?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lunarca",
    html_url: "https://github.com/lunarca",
    followers_url: "https://api.github.com/users/lunarca/followers",
    following_url:
      "https://api.github.com/users/lunarca/following{/other_user}",
    gists_url: "https://api.github.com/users/lunarca/gists{/gist_id}",
    starred_url: "https://api.github.com/users/lunarca/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/lunarca/subscriptions",
    organizations_url: "https://api.github.com/users/lunarca/orgs",
    repos_url: "https://api.github.com/users/lunarca/repos",
    events_url: "https://api.github.com/users/lunarca/events{/privacy}",
    received_events_url: "https://api.github.com/users/lunarca/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "lunaroyster",
    id: 6189367,
    node_id: "MDQ6VXNlcjYxODkzNjc=",
    avatar_url: "https://avatars.githubusercontent.com/u/6189367?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lunaroyster",
    html_url: "https://github.com/lunaroyster",
    followers_url: "https://api.github.com/users/lunaroyster/followers",
    following_url:
      "https://api.github.com/users/lunaroyster/following{/other_user}",
    gists_url: "https://api.github.com/users/lunaroyster/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/lunaroyster/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/lunaroyster/subscriptions",
    organizations_url: "https://api.github.com/users/lunaroyster/orgs",
    repos_url: "https://api.github.com/users/lunaroyster/repos",
    events_url: "https://api.github.com/users/lunaroyster/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/lunaroyster/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "lunarok",
    id: 1303626,
    node_id: "MDQ6VXNlcjEzMDM2MjY=",
    avatar_url: "https://avatars.githubusercontent.com/u/1303626?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lunarok",
    html_url: "https://github.com/lunarok",
    followers_url: "https://api.github.com/users/lunarok/followers",
    following_url:
      "https://api.github.com/users/lunarok/following{/other_user}",
    gists_url: "https://api.github.com/users/lunarok/gists{/gist_id}",
    starred_url: "https://api.github.com/users/lunarok/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/lunarok/subscriptions",
    organizations_url: "https://api.github.com/users/lunarok/orgs",
    repos_url: "https://api.github.com/users/lunarok/repos",
    events_url: "https://api.github.com/users/lunarok/events{/privacy}",
    received_events_url: "https://api.github.com/users/lunarok/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "LunarFlash",
    id: 2666657,
    node_id: "MDQ6VXNlcjI2NjY2NTc=",
    avatar_url: "https://avatars.githubusercontent.com/u/2666657?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/LunarFlash",
    html_url: "https://github.com/LunarFlash",
    followers_url: "https://api.github.com/users/LunarFlash/followers",
    following_url:
      "https://api.github.com/users/LunarFlash/following{/other_user}",
    gists_url: "https://api.github.com/users/LunarFlash/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/LunarFlash/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/LunarFlash/subscriptions",
    organizations_url: "https://api.github.com/users/LunarFlash/orgs",
    repos_url: "https://api.github.com/users/LunarFlash/repos",
    events_url: "https://api.github.com/users/LunarFlash/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/LunarFlash/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "lunarscents",
    id: 45254522,
    node_id: "MDQ6VXNlcjQ1MjU0NTIy",
    avatar_url: "https://avatars.githubusercontent.com/u/45254522?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lunarscents",
    html_url: "https://github.com/lunarscents",
    followers_url: "https://api.github.com/users/lunarscents/followers",
    following_url:
      "https://api.github.com/users/lunarscents/following{/other_user}",
    gists_url: "https://api.github.com/users/lunarscents/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/lunarscents/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/lunarscents/subscriptions",
    organizations_url: "https://api.github.com/users/lunarscents/orgs",
    repos_url: "https://api.github.com/users/lunarscents/repos",
    events_url: "https://api.github.com/users/lunarscents/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/lunarscents/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "Lunarequest",
    id: 30698906,
    node_id: "MDQ6VXNlcjMwNjk4OTA2",
    avatar_url: "https://avatars.githubusercontent.com/u/30698906?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Lunarequest",
    html_url: "https://github.com/Lunarequest",
    followers_url: "https://api.github.com/users/Lunarequest/followers",
    following_url:
      "https://api.github.com/users/Lunarequest/following{/other_user}",
    gists_url: "https://api.github.com/users/Lunarequest/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/Lunarequest/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/Lunarequest/subscriptions",
    organizations_url: "https://api.github.com/users/Lunarequest/orgs",
    repos_url: "https://api.github.com/users/Lunarequest/repos",
    events_url: "https://api.github.com/users/Lunarequest/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/Lunarequest/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "lunaris",
    id: 163793,
    node_id: "MDQ6VXNlcjE2Mzc5Mw==",
    avatar_url: "https://avatars.githubusercontent.com/u/163793?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lunaris",
    html_url: "https://github.com/lunaris",
    followers_url: "https://api.github.com/users/lunaris/followers",
    following_url:
      "https://api.github.com/users/lunaris/following{/other_user}",
    gists_url: "https://api.github.com/users/lunaris/gists{/gist_id}",
    starred_url: "https://api.github.com/users/lunaris/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/lunaris/subscriptions",
    organizations_url: "https://api.github.com/users/lunaris/orgs",
    repos_url: "https://api.github.com/users/lunaris/repos",
    events_url: "https://api.github.com/users/lunaris/events{/privacy}",
    received_events_url: "https://api.github.com/users/lunaris/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "lunarcon",
    id: 50039563,
    node_id: "MDQ6VXNlcjUwMDM5NTYz",
    avatar_url: "https://avatars.githubusercontent.com/u/50039563?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lunarcon",
    html_url: "https://github.com/lunarcon",
    followers_url: "https://api.github.com/users/lunarcon/followers",
    following_url:
      "https://api.github.com/users/lunarcon/following{/other_user}",
    gists_url: "https://api.github.com/users/lunarcon/gists{/gist_id}",
    starred_url: "https://api.github.com/users/lunarcon/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/lunarcon/subscriptions",
    organizations_url: "https://api.github.com/users/lunarcon/orgs",
    repos_url: "https://api.github.com/users/lunarcon/repos",
    events_url: "https://api.github.com/users/lunarcon/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/lunarcon/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "OoLunar",
    id: 46751150,
    node_id: "MDQ6VXNlcjQ2NzUxMTUw",
    avatar_url: "https://avatars.githubusercontent.com/u/46751150?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/OoLunar",
    html_url: "https://github.com/OoLunar",
    followers_url: "https://api.github.com/users/OoLunar/followers",
    following_url:
      "https://api.github.com/users/OoLunar/following{/other_user}",
    gists_url: "https://api.github.com/users/OoLunar/gists{/gist_id}",
    starred_url: "https://api.github.com/users/OoLunar/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/OoLunar/subscriptions",
    organizations_url: "https://api.github.com/users/OoLunar/orgs",
    repos_url: "https://api.github.com/users/OoLunar/repos",
    events_url: "https://api.github.com/users/OoLunar/events{/privacy}",
    received_events_url: "https://api.github.com/users/OoLunar/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "LunaRyuko",
    id: 10626859,
    node_id: "MDQ6VXNlcjEwNjI2ODU5",
    avatar_url: "https://avatars.githubusercontent.com/u/10626859?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/LunaRyuko",
    html_url: "https://github.com/LunaRyuko",
    followers_url: "https://api.github.com/users/LunaRyuko/followers",
    following_url:
      "https://api.github.com/users/LunaRyuko/following{/other_user}",
    gists_url: "https://api.github.com/users/LunaRyuko/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/LunaRyuko/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/LunaRyuko/subscriptions",
    organizations_url: "https://api.github.com/users/LunaRyuko/orgs",
    repos_url: "https://api.github.com/users/LunaRyuko/repos",
    events_url: "https://api.github.com/users/LunaRyuko/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/LunaRyuko/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "LunaRibeiro",
    id: 86332474,
    node_id: "MDQ6VXNlcjg2MzMyNDc0",
    avatar_url: "https://avatars.githubusercontent.com/u/86332474?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/LunaRibeiro",
    html_url: "https://github.com/LunaRibeiro",
    followers_url: "https://api.github.com/users/LunaRibeiro/followers",
    following_url:
      "https://api.github.com/users/LunaRibeiro/following{/other_user}",
    gists_url: "https://api.github.com/users/LunaRibeiro/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/LunaRibeiro/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/LunaRibeiro/subscriptions",
    organizations_url: "https://api.github.com/users/LunaRibeiro/orgs",
    repos_url: "https://api.github.com/users/LunaRibeiro/repos",
    events_url: "https://api.github.com/users/LunaRibeiro/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/LunaRibeiro/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "Lunarsong",
    id: 1496942,
    node_id: "MDQ6VXNlcjE0OTY5NDI=",
    avatar_url: "https://avatars.githubusercontent.com/u/1496942?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/Lunarsong",
    html_url: "https://github.com/Lunarsong",
    followers_url: "https://api.github.com/users/Lunarsong/followers",
    following_url:
      "https://api.github.com/users/Lunarsong/following{/other_user}",
    gists_url: "https://api.github.com/users/Lunarsong/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/Lunarsong/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/Lunarsong/subscriptions",
    organizations_url: "https://api.github.com/users/Lunarsong/orgs",
    repos_url: "https://api.github.com/users/Lunarsong/repos",
    events_url: "https://api.github.com/users/Lunarsong/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/Lunarsong/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "LunarArcanus",
    id: 6930828,
    node_id: "MDQ6VXNlcjY5MzA4Mjg=",
    avatar_url: "https://avatars.githubusercontent.com/u/6930828?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/LunarArcanus",
    html_url: "https://github.com/LunarArcanus",
    followers_url: "https://api.github.com/users/LunarArcanus/followers",
    following_url:
      "https://api.github.com/users/LunarArcanus/following{/other_user}",
    gists_url: "https://api.github.com/users/LunarArcanus/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/LunarArcanus/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/LunarArcanus/subscriptions",
    organizations_url: "https://api.github.com/users/LunarArcanus/orgs",
    repos_url: "https://api.github.com/users/LunarArcanus/repos",
    events_url: "https://api.github.com/users/LunarArcanus/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/LunarArcanus/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "LunarLambda",
    id: 38919842,
    node_id: "MDQ6VXNlcjM4OTE5ODQy",
    avatar_url: "https://avatars.githubusercontent.com/u/38919842?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/LunarLambda",
    html_url: "https://github.com/LunarLambda",
    followers_url: "https://api.github.com/users/LunarLambda/followers",
    following_url:
      "https://api.github.com/users/LunarLambda/following{/other_user}",
    gists_url: "https://api.github.com/users/LunarLambda/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/LunarLambda/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/LunarLambda/subscriptions",
    organizations_url: "https://api.github.com/users/LunarLambda/orgs",
    repos_url: "https://api.github.com/users/LunarLambda/repos",
    events_url: "https://api.github.com/users/LunarLambda/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/LunarLambda/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "lunar-mining",
    id: 32396078,
    node_id: "MDQ6VXNlcjMyMzk2MDc4",
    avatar_url: "https://avatars.githubusercontent.com/u/32396078?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lunar-mining",
    html_url: "https://github.com/lunar-mining",
    followers_url: "https://api.github.com/users/lunar-mining/followers",
    following_url:
      "https://api.github.com/users/lunar-mining/following{/other_user}",
    gists_url: "https://api.github.com/users/lunar-mining/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/lunar-mining/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/lunar-mining/subscriptions",
    organizations_url: "https://api.github.com/users/lunar-mining/orgs",
    repos_url: "https://api.github.com/users/lunar-mining/repos",
    events_url: "https://api.github.com/users/lunar-mining/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/lunar-mining/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "lunarskid",
    id: 59777379,
    node_id: "MDQ6VXNlcjU5Nzc3Mzc5",
    avatar_url: "https://avatars.githubusercontent.com/u/59777379?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lunarskid",
    html_url: "https://github.com/lunarskid",
    followers_url: "https://api.github.com/users/lunarskid/followers",
    following_url:
      "https://api.github.com/users/lunarskid/following{/other_user}",
    gists_url: "https://api.github.com/users/lunarskid/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/lunarskid/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/lunarskid/subscriptions",
    organizations_url: "https://api.github.com/users/lunarskid/orgs",
    repos_url: "https://api.github.com/users/lunarskid/repos",
    events_url: "https://api.github.com/users/lunarskid/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/lunarskid/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "lunarmayor",
    id: 1727625,
    node_id: "MDQ6VXNlcjE3Mjc2MjU=",
    avatar_url: "https://avatars.githubusercontent.com/u/1727625?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lunarmayor",
    html_url: "https://github.com/lunarmayor",
    followers_url: "https://api.github.com/users/lunarmayor/followers",
    following_url:
      "https://api.github.com/users/lunarmayor/following{/other_user}",
    gists_url: "https://api.github.com/users/lunarmayor/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/lunarmayor/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/lunarmayor/subscriptions",
    organizations_url: "https://api.github.com/users/lunarmayor/orgs",
    repos_url: "https://api.github.com/users/lunarmayor/repos",
    events_url: "https://api.github.com/users/lunarmayor/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/lunarmayor/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "LunarDevelopment",
    id: 10709555,
    node_id: "MDQ6VXNlcjEwNzA5NTU1",
    avatar_url: "https://avatars.githubusercontent.com/u/10709555?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/LunarDevelopment",
    html_url: "https://github.com/LunarDevelopment",
    followers_url: "https://api.github.com/users/LunarDevelopment/followers",
    following_url:
      "https://api.github.com/users/LunarDevelopment/following{/other_user}",
    gists_url: "https://api.github.com/users/LunarDevelopment/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/LunarDevelopment/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/LunarDevelopment/subscriptions",
    organizations_url: "https://api.github.com/users/LunarDevelopment/orgs",
    repos_url: "https://api.github.com/users/LunarDevelopment/repos",
    events_url:
      "https://api.github.com/users/LunarDevelopment/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/LunarDevelopment/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "nightlunar",
    id: 65230153,
    node_id: "MDQ6VXNlcjY1MjMwMTUz",
    avatar_url: "https://avatars.githubusercontent.com/u/65230153?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/nightlunar",
    html_url: "https://github.com/nightlunar",
    followers_url: "https://api.github.com/users/nightlunar/followers",
    following_url:
      "https://api.github.com/users/nightlunar/following{/other_user}",
    gists_url: "https://api.github.com/users/nightlunar/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/nightlunar/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/nightlunar/subscriptions",
    organizations_url: "https://api.github.com/users/nightlunar/orgs",
    repos_url: "https://api.github.com/users/nightlunar/repos",
    events_url: "https://api.github.com/users/nightlunar/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/nightlunar/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "jasonblewis",
    id: 129165,
    node_id: "MDQ6VXNlcjEyOTE2NQ==",
    avatar_url: "https://avatars.githubusercontent.com/u/129165?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/jasonblewis",
    html_url: "https://github.com/jasonblewis",
    followers_url: "https://api.github.com/users/jasonblewis/followers",
    following_url:
      "https://api.github.com/users/jasonblewis/following{/other_user}",
    gists_url: "https://api.github.com/users/jasonblewis/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/jasonblewis/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/jasonblewis/subscriptions",
    organizations_url: "https://api.github.com/users/jasonblewis/orgs",
    repos_url: "https://api.github.com/users/jasonblewis/repos",
    events_url: "https://api.github.com/users/jasonblewis/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/jasonblewis/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "lunarised",
    id: 18286813,
    node_id: "MDQ6VXNlcjE4Mjg2ODEz",
    avatar_url: "https://avatars.githubusercontent.com/u/18286813?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/lunarised",
    html_url: "https://github.com/lunarised",
    followers_url: "https://api.github.com/users/lunarised/followers",
    following_url:
      "https://api.github.com/users/lunarised/following{/other_user}",
    gists_url: "https://api.github.com/users/lunarised/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/lunarised/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/lunarised/subscriptions",
    organizations_url: "https://api.github.com/users/lunarised/orgs",
    repos_url: "https://api.github.com/users/lunarised/repos",
    events_url: "https://api.github.com/users/lunarised/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/lunarised/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
  {
    login: "SmilyOrg",
    id: 1451391,
    node_id: "MDQ6VXNlcjE0NTEzOTE=",
    avatar_url: "https://avatars.githubusercontent.com/u/1451391?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/SmilyOrg",
    html_url: "https://github.com/SmilyOrg",
    followers_url: "https://api.github.com/users/SmilyOrg/followers",
    following_url:
      "https://api.github.com/users/SmilyOrg/following{/other_user}",
    gists_url: "https://api.github.com/users/SmilyOrg/gists{/gist_id}",
    starred_url: "https://api.github.com/users/SmilyOrg/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/SmilyOrg/subscriptions",
    organizations_url: "https://api.github.com/users/SmilyOrg/orgs",
    repos_url: "https://api.github.com/users/SmilyOrg/repos",
    events_url: "https://api.github.com/users/SmilyOrg/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/SmilyOrg/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
];

const SearchPage = () => {
  // const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");
  const [timer, setTimer] = useState(null);
  const inputRef = useRef();

  // useEffect(() => {
  //   setValue(localStorage.getItem("searchInputText"));
  //   const fetchData = () => {
  //     if (value && value.length > 2) {
  //       fetch(`http://api.github.com/search/users?q=${value}`)
  //         .then((response) => {
  //           if (!response.ok) {
  //             throw new Error(`error - status is ${response.status}`);
  //           }
  //           return response.json();
  //         })
  //         .then((actualData) => setUsers(actualData.items))
  //         .catch((err) => {
  //           console.log(err.message);
  //         });
  //     } else if (value.length < 2) {
  //       setUsers([]);
  //     }
  //   };
  //   fetchData(value);
  //   inputRef.current.focus();
  // }, [value]);

  const onSearchInput = (e) => {
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      setValue(e.target.value);
      // fetchData(e.target.value);
      localStorage.setItem("searchInputText", e.target.value);
    }, 700);
    setTimer(newTimer);
  };

  return (
    <>
      <h1>Search GitHub user</h1>
      <input
        type="text"
        onChange={(e) => {
          onSearchInput(e);
        }}
        ref={inputRef}
        defaultValue={value}
        placeholder="Enter GitHub username..."
      />

      {Array.isArray(users) && users.length ? (
        users.map((user) => (
          <SearchCard
            key={user.id}
            image={user.avatar_url}
            login={user.login}
            url={user.url}
          />
        ))
      ) : (
        <div>
          <p> No data... </p>
        </div>
      )}
    </>
  );
};

export default SearchPage;
