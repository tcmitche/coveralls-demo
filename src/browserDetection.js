'use strict';

function isItSafe(browserName, version) {
  if (browserName === 'chrome' || browserName === 'firefox') {
    return "You'll be just fine."
  }
  if (browserName === 'safari') {
    return "You're probably OK."
  }
  if (browserName === 'ie') {
    if (version && version > 10) {
      return "Interesting choice, but yeah you're still ok."
    } else {
      return "It's dangerous to go alone, take this! http://browsehappy.com/"
    }
  }
  if (browserName === 'edge') {
    return "You'll be just fine Mr. Gates."
  }
  if (browserName === 'opera') {
    return "I bet you use Linux."
  }
  if (browserName === 'lynx') {
    return "Retro, nice."
  }
  if (browserName === 'dolphin') {
    return "Is that a thing?"
  }
  if (browserName === 'curl') {
    return "l33t!"
  }
  if (browserName === 'conquerer') {
    return "You are the 1%"
  }
  return "I've never heard of that browser before o.O"
}
