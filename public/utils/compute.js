const removeAnnotation = (subject) => {
  const openParen = '(';
  const firstParen = subject.indexOf(openParen);
  return firstParen === -1 ? subject : subject.slice(0, firstParen);
}


const getAnnotation = (subject) => {
  const openParen = '(';
  const closeParen = ')';
  const firstParen = subject.indexOf(openParen);
  const lastParen = subject.indexOf(closeParen);

  return (firstParen < 0
    ? ""
    : lastParen < 0
      ? subject.slice(firstParen)
      : subject.slice(firstParen, lastParen + 1));
};


// console.log(removeAnnotation("cuarto (nm)"));
// console.log(removeAnnotation("determinado (adj)"));
// console.log(removeAnnotation("source, fountain "));


