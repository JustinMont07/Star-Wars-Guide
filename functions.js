function makeMovieCard(img, title, review) {
  //Top div of the card
  var newCard = document.createElement("div");
  newCard.setAttribute("class", "card mb-4");
  newCard.setAttribute("style", "max-width: 540px");
  //Row div
  var newRow = document.createElement("div");
  newRow.setAttribute("class", "row g-0");
  //The image
  var newImgDiv = document.createElement("div");
  newImgDiv.setAttribute(
    "class",
    "col-md-4 d-flex justify-content-center align-items-center"
  );
  var newImg = document.createElement("img");
  newImg.setAttribute("src", img);
  newImg.setAttribute("class", "img-fluid rounded-start");
  newImg.setAttribute("alt", "The cover art for " + title);
  newImgDiv.appendChild(newImg);

  //The card body
  var newCardBody = document.createElement("div");

  newCardBody.setAttribute("class", "col-md-8");
  var newCardBodyInner = document.createElement("div");
  newCardBodyInner.setAttribute("class", "card-body");
  var newCardTitle = document.createElement("h5");
  newCardTitle.setAttribute("class", "card-title");
  newCardTitle.innerHTML = title;
  var newCardText = document.createElement("p");
  newCardText.setAttribute("class", "card-text");
  newCardText.innerHTML = review;
  newCardBodyInner.appendChild(newCardTitle);
  newCardBodyInner.appendChild(newCardText);
  newCardBody.appendChild(newCardBodyInner);

  //Append all the elements to the card
  newRow.appendChild(newImgDiv);
  newRow.appendChild(newCardBody);
  newCard.appendChild(newRow);
  return newCard;
}
