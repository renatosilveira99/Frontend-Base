const px2vw = (size: number, width = window.innerWidth): string =>
  `${(size / width) * 100}vw`;

export default px2vw;
