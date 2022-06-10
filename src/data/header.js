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
    name: "My Ppl",
    image: "/myppl.jpg",
    url: "/music",
    project: music.find(project => project.id === "my-ppl"),
    callToAction: "$hake Dat Ass"
  }
}

export default header;
