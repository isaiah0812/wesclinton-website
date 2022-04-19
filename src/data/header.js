import music from './music.json';

const header = {
  coreyArnell: {
    name: "Excellent",
    image: "/excellentcover.jpg",
    url: "/music",
    project: music.find(project => project.id === "excellent"),
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
