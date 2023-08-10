import { writable, derived } from 'svelte/store';

type LyricLines = {
  words: string
}

export type lyricInfo = {
    artist: string,
    title: string,
    lines: LyricLines[],
}

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
let lyricInfoInit: lyricInfo[] = [];
export const lyricData = writable(lyricInfoInit);


export const artistList = derived(lyricData, ($lyricData) => {
  let artistArray: string[] = []
  if ($lyricData) {
    $lyricData.forEach((lyrics) => {
      artistArray.push(lyrics.artist)
    })
  }
  return artistArray
});

export const titleList = derived(lyricData, ($lyricData) => {
  let songArray: string[] = []
  if ($lyricData) {
    $lyricData.forEach((lyrics) => {
      songArray.push(lyrics.title)
    })
  }
  return songArray
});