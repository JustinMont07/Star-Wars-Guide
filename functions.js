/* Functions for the Star Wars Guide */

/* Function to create a card for a movie */
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

/* Function to create a card for a user review*/
function makeReviewCard(title, review, rating) {
  //Main Div
  var newDiv = document.createElement("div");
  newDiv.setAttribute("class", "col mb-4 d-flex justify-content-center");
  //Card
  var newCard = document.createElement("div");
  newCard.setAttribute("class", "card");
  newCard.setAttribute("style", "width: 18rem;");
  //Card Header
  var newCardTitle = document.createElement("div");
  newCardTitle.setAttribute("class", "card-header");
  newCardTitle.innerHTML = title;
  //Card body
  var newCardBody = document.createElement("div");
  newCardBody.setAttribute("class", "card-body");
  //Card title
  var newCardRating = document.createElement("h5");
  newCardRating.setAttribute("class", "card-title");
  newCardRating.innerHTML = rating;
  //Card text
  var newCardText = document.createElement("p");
  newCardText.setAttribute("class", "card-text");
  newCardText.innerHTML = review;
  //Append all the elements to the card
  newCardBody.appendChild(newCardTitle);
  newCardBody.appendChild(newCardRating);
  newCardBody.appendChild(newCardText);
  newCard.appendChild(newCardBody);
  newDiv.appendChild(newCard);
  return newDiv;
}

/* Gives user a guide based on their filters */
function getGuide(order, detail) {
  //Release order basic list
  var releaseBasic = [
    "Star Wars: Episode IV – A New Hope",
    "Star Wars: Episode V – The Empire Strikes Back",
    "Star Wars: Episode VI – Return of the Jedi",
    "Star Wars: Episode I – The Phantom Menace",
    "Star Wars: Episode II – Attack of the Clones",
    "Star Wars: Episode III – Revenge of the Sith",
    "Star Wars: The Clone Wars (Animated movie)",
    "Star Wars: The Clone Wars (TV Series) (Optional) <a href='https://thecantina.starwarsnewsnet.com/index.php?threads/the-clone-wars-essential-episodes.57020/'>Guide for essential episodes only</a>",
    "Star Wars: Episode VII – The Force Awakens",
    "Rogue One: A Star Wars Story",
    "Star Wars: Episode VIII – The Last Jedi",
    "Solo: A Star Wars Story",
    "Star Wars: Episode IX – The Rise of Skywalker",
  ];
  //Chronological order basic list
  var chronologicalBasic = [
    "Episode I – The Phantom Menace",
    "Episode II – Attack of the Clones",
    "The Clone Wars (Animated movie)",
    "Star Wars: The Clone Wars (TV Series) (Optional) <a href='https://thecantina.starwarsnewsnet.com/index.php?threads/the-clone-wars-essential-episodes.57020/'>Guide for essential episodes only</a>",
    "Episode III – Revenge of the Sith",
    "Solo: A Star Wars Story",
    "Rogue One: A Star Wars Story",
    "Episode IV – A New Hope",
    "Episode V – The Empire Strikes Back",
    "Episode VI – Return of the Jedi",
    "Episode VII – The Force Awakens",
    "Episode VIII – The Last Jedi",
    "Episode IX – The Rise of Skywalker",
  ];

  //Release order detailed list
  var releaseDetailed = [
    "Star Wars: Episode IV – A New Hope",
    "Star Wars: Episode V – The Empire Strikes Back",
    "Star Wars: Episode VI – Return of the Jedi",
    "Star Wars: Episode I – The Phantom Menace",
    "Star Wars: Episode II – Attack of the Clones",
    "Star Wars: Episode III – Revenge of the Sith",
    "Star Wars: The Clone Wars (Animated movie)",
    "Star Wars: The Clone Wars (TV Series)",
    "Star Wars: Episode VII – The Force Awakens",
    "Rogue One: A Star Wars Story",
    "Star Wars: Rebels (TV Series)",
    "Star Wars: Episode VIII – The Last Jedi",
    "Thrawn (Book)",
    "Solo: A Star Wars Story",
    "Thrawn: Alliances (Book)",
    "Star Wars: Episode IX – The Rise of Skywalker",
    "Star Wars: Resistance (TV Series)",
    "The Mandalorian (TV Series)",
    "Thrawn: Treason (Book)",
    "Star Wars: The Bad Batch (TV Series)",
    "The Book of Boba Fett (TV Series)",
    "Obi-Wan Kenobi (TV Series)",
    "Andor (TV Series)",
    "Tales of the Jedi (TV Series)",
    "Ahsoka (TV Series)",
    "The High Republic (Book Series) <a href = 'https://www.reddit.com/r/Highrepublic/wiki/media/readingorder/mainstory/'> I recommend this guide for the reading order</a>",
    "The Acolyte (TV Series)",
    "Star Wars: Skeleton Crew (TV Series)",
  ];

  //Chronological order detailed list
  var chronologicalDetailed = [
    "The High Republic (Book Series) <a href = 'https://www.reddit.com/r/Highrepublic/wiki/media/readingorder/mainstory/'> I recommend this guide for the reading order</a>",
    "Tales of the Jedi (TV Series)",
    "Star Wars: Episode I – The Phantom Menace",
    "Star Wars: Episode II – Attack of the Clones",
    "Star Wars: The Clone Wars (Animated movie)",
    "Star Wars: The Clone Wars (TV Series)",
    "Star Wars: Episode III – Revenge of the Sith",
    "Star Wars: The Bad Batch (TV Series)",
    "Obi-Wan Kenobi (TV Series)",
    "Solo: A Star Wars Story",
    "Thrawn (Book)",
    "Solo: A Star Wars Story",
    "Star Wars Rebels (TV Series)",
    "Thrawn: Alliances (Book)",
    "Thrawn: Treason (Book)",
    "Andor (TV Series)",
    "Rogue One: A Star Wars Story",
    "Star Wars: Episode IV – A New Hope",
    "Star Wars: Episode V – The Empire Strikes Back",
    "Star Wars: Episode VI – Return of the Jedi",
    "The Mandalorian Season 1 and 2 (TV Series)",
    "The Book of Boba Fett (TV Series)",
    "Ahsoka (TV Series)",
    "The Madalorian Season 3 (TV Series)",
    "Star Wars: Resistance (TV Series)",
    "Star Wars: Episode VII – The Force Awakens",
    "Star Wars: Episode VIII – The Last Jedi",
    "Star Wars: Episode IX – The Rise of Skywalker",
  ];

  //Machete order
  var machete = [
    "Star Wars: Episode IV – A New Hope",
    "Star Wars: Episode V – The Empire Strikes Back",
    "Star Wars: Episode I – The Phantom Menace (Not included in this order but this is where it should be watched if you would like)",
    "Star Wars: Episode II – Attack of the Clones",
    "Star Wars: Episode III – Revenge of the Sith",
    "Star Wars: Episode VI – Return of the Jedi",
  ];

  var array = [];
  var div = document.createElement("div");
  var p = document.createElement("p");
  p.setAttribute("class", "description");
  var h = document.createElement("h2");

  var list = document.createElement("ol");
  list.setAttribute("class", "list-group list-group-numbered list-group-flush");
  if (order == "3") {
    array = machete;
    h.innerHTML = "Machete Order";
    h.setAttribute("class", "subheader londrina-shadow-regular red");
    p.innerHTML =
      "This order was created by the fans as a way to watch the Star Wars movies that focuses on Luke Skywalker's story and skips The Phantom Menace. The order is designed to preserve surpirses and plot twists. I do not recommend this for first-time viewers as you don't get the full story and it does not include the sequel trilogy. <span class='badge text-bg-info'>Note: There is only one way to watch in this order</span>";
  } else if (detail == "3") {
    h.innerHTML = "Nerd";
    h.setAttribute("class", "subheader londrina-shadow-regular red");
    p.innerHTML =
      "You are a true fan of Star Wars! You don't need a guide! And lets be honest, there is way to much to cover here!";
  } else if (order == "1") {
    if (detail == "1") {
      array = releaseBasic;
      h.innerHTML = "Release Order - The Basics";
      h.setAttribute("class", "subheader londrina-shadow-regular blue");
      p.innerHTML =
        "This is the order I recommend for beginners! It follows how Star Wars was originally released, starting with the iconic original trilogy before exploring the prequels and sequels. This keeps major twists intact and lets you experience the saga as it unfolded. The Clone Wars Series is optional but adds depth to the prequels. A great way to see why Star Wars became a phenomenon!";
    } else if (detail == "2") {
      array = releaseDetailed;
      h.innerHTML = "Release Order - In-Depth";
      h.setAttribute("class", "subheader londrina-shadow-regular green");
      p.innerHTML =
        "This order follows the films, shows and some books as they were released. While it offers historical context, it can feel disjointed and harder to follow, with key story elements revealed out of order. I don’t recommend this for a smooth viewing experience.";
    }
  } else if (order == "2") {
    if (detail == "1") {
      array = chronologicalBasic;
      h.innerHTML = "Chronological Order - The Basics";
      h.setAttribute("class", "subheader londrina-shadow-regular blue");
      p.innerHTML =
        "Experience Star Wars as the story unfolds, from the rise of the Sith to the fall of the Empire and beyond. This order follows the in-universe timeline, making for a smooth narrative flow. The Clone Wars is optional but adds depth to Anakin’s journey. Perfect for first-time viewers or those wanting a seamless saga experience!";
    }
    if (detail == "2") {
      array = chronologicalDetailed;
      h.innerHTML = "Chronological Order - In-Depth";
      h.setAttribute("class", "subheader londrina-shadow-regular green");
      p.innerHTML =
        "This order follows the entire Star Wars saga from start to finish, including films, TV shows, and books. It provides a comprehensive understanding of the story, with character development, plot points, and key events laid out in the sequence they occur in the galaxy. This is ideal for anyone who wants to experience the full depth of the Star Wars universe and connect all the dots across the different media in a reasonable amount.";
    }
  }

  for (var i = 0; i < array.length; i++) {
    var listItem = document.createElement("li");
    listItem.setAttribute("class", "list-group-item");
    listItem.innerHTML = array[i];
    list.appendChild(listItem);
  }
  div.appendChild(h);
  div.appendChild(p);
  div.appendChild(list);
  return div;
}
