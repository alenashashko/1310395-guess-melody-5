const AVATAR_URL = `https://api.adorable.io/avatars/128`;

export default [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `blues`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `jazz`
      },
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
        genre: `rock`
      }
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Eminem`,
      src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`
    },
    answers: [
      {
        artist: `Eminem`,
        picture: `${AVATAR_URL}/${Math.random()}`
      },
      {
        artist: `Oxxxymiron`,
        picture: `${AVATAR_URL}/${Math.random()}`
      },
      {
        artist: `Kanye West`,
        picture: `${AVATAR_URL}/${Math.random()}`
      }
    ]
  }
];
