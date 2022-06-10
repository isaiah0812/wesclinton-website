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
    name: "Fre$h Veggies",
    image: "/freshveggies.jpg",
    url: "/music",
    project: music.find(project => project.id === "fresh-veggies"),
    callToAction: "$hake Dat Ass"
  }
}

export default header;
