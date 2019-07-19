import { createGlobalStyle } from "styled-components";

const IconFontStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1563415080822'); /* IE9 */
  src: url('./iconfont.eot?t=1563415080822#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAT0AAsAAAAACYgAAASmAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDKgqGMIU3ATYCJAMUCwwABCAFhG0HRRs4CMiegW0bm64yWbpUvqVbUy2C7/e+23PLy8v9Kd3lq/TmGlWi6LLU8UgsCiTOEWMRpgtPhv9t+ZRLuA4uervoBhZlAKKNrEu/FrisMhbdNkDAK/geIPAB/T+X07urbIPND5TLWIvGWDSpF2AcUEB7Px8Lw7hASpTTCM9PQV/hzfsJNEM9CG7XNncDF4UzLBAfGFoEXEoGpYcWenXXMreIr6Dq02fhRQB8iT8f/0BmLiQ1c8Y+eFUjBeU/nZ7nQuPs4zwPESBczgZpERlbgEK8a3W8AKXhLZBmJDs4A/SuLbFUOOh5rt3O4wNFV+H3/uU1FCFLRMdRjIFwESn8dPIFuTIQOgFlEHQylLmISHhNc2mYxH/iMXCIS46bFCPSgptLP4945tlwd882jB+JH7ERVituNndbLJjRVobxgSlzxDWazUY8jdnsCT9064YVSO8+pgh4YVAv0QHECLRo17DhsmA8QYyHDcXYzrXg0zrEeEIgeGQIMAUSc9b4Y/xcv+7ZRDfR12Aaz5I2GJP4cbM7ZIYWeS8lSM8ZH1BaNEpnCwyjfwk/Tq4AUsaTNimeXcWv8l8VYlq/fnXA6mB+XX+v9k7evP+42SNhgymw74hgb34uDB99gvkxvmpP4CZLg8VGHGEFrrs5YsHOWTJ2JvptthZacdjcfdacjhh5v15HWLOPaQFSuBXeuHFsj6GgKi+8cmWhBVAog0Qu1lqgekiPHxs3pa8bOv+sZqxw3TrhWJcL7VgIXMggkYtXANdU3bXE6mukh11cZZWXtmHCSjFTanP4Mz13Kj9N4HiZqknCGff+SFN54dMBBHch2P9PSNynuAhwxt3lLh2SNrmghsYxunL2lLSojPGRvXtF4rXO092qz5yJysyodpuXWucGz1XbZ5f0cZrrXv31M+aFX/SD5IcvVW52mw+f3/X4d9Ge/P8b0z+onLLG9Cr3ae7Zc7vpC5venpPkYloUFWaHOGc96XoY8ZB/tIfzN3DwRwy8pN4I9QnqYxDUz0BkkY06bVPkrLwQcds03/w3F9urHAbEHotprBliVIfXyJTVaFssAeBHAL9nerV/8ZV7z2+sOFkZUQ9c74OKYUJb0zLZYp3BRwA3N22C/GKG3VEIMJ7aDgmjF30X/Df7jv0x2wZ6Fn9zQQr4gX1JhPPmYoCmBP8VIVn4pxISa4opdoy16JW+QI9Wbzh/CUU0DX+mODPuL6OaJ2cTevM5JCMWIestoYWwBdXAEXR659Bsqls8MIsFiTKKDZMZhClbIJnwHbIpl9BCuAfVgnfQmQqC5mH4rjmwEgNXsaSII6WoeDjKSDRqyjNzcJLbSdKDlSK2KI7pOMnqGR+akZpejdWRapJdYoJ+CJ3JcRRKsRoVWssOI5VKDaplNXJSwqXKOE5bmJZGtZ0pVaJRAdgtLJIIhySFEhsOxZDQUKPCxhy49v5OJNpgSiJsT1WDE0di6TGtozKkSiegdQo1qepROusNQcvE4VD8IApLQwVVCxtJ6YY1UNr2XnIkCU4q2YSgVqE0rh5FVaRur1K9x03QOOvVSJGjRI1OeyVS01KRnAm7CytEQjHjoNcyagAAAAA=') format('woff2'),
  url('./iconfont.woff?t=1563415080822') format('woff'),
  url('./iconfont.ttf?t=1563415080822') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1563415080822#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-fangdajing:before {
  content: "\\e617";
}

.icon-Aa:before {
  content: "\\e636";
}

.icon-bi:before {
  content: "\\e618";
}

.icon-spin:before {
  content: "\\e606";
}
`
export default IconFontStyle


