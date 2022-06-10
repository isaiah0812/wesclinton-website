import music from './music.json';

const header = {
  coreyArnell: {
    name: "Beet Tape",
    image: "/beettape.jpg",
    url: "/music",
    project: music.find(project => project.id === "beet-tape"),
    callToAction: "Listen Now"
  },
  wesClinton: {
    name: "The Wes Tape",
    image: "/westapecover.jpg",
    url: "/music",
    project: music.find(project => project.id === "the-wes-tape"),
    callToAction: "$hake Dat Ass"
  }
}

export default header;
