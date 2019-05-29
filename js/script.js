'use strict';
function titleClickHandler(event){
  const clickedElement = this;

  console.log('clickedElement (with plus): ' + clickedElement);


  event.preventDefault();


  /* [DONE] remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }
  /* [DONE] add class 'active' to the clicked link */
  clickedElement.classList.add('active');

  /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.active');

  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }


  /* [DONE] get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href');
  console.log(' href atribute (with plus): ' + articleSelector);

  /* [DONE] find the correct article using the selector (value of 'href' attribute) */
  const  targetArticle = document.querySelector(articleSelector);
  console.log('find correct article (with plus): ' + targetArticle);

  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');
}


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list';

function generateTitleLinks(){

  /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  console.log('remove contents of titleList: ' , titleList);
  titleList.innerHTML = '';


  /* [DONE] for each article */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('for each article: ' , articles);

  let html = '';

  for(let article of articles){
    document.querySelector(optArticleSelector);

    /* [DONE] get the article id */
    const articleId = article.getAttribute('id');
    console.log('get the article id: ' , articleId);

    /* [DONE] find the title element AND get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log('Article title Add ' , articleTitle);


    /* [DONE] create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('create HTML of the link ' , linkHTML);
    /* insert link into titleList */
    html = html + linkHTML;
    console.log('content of html ' , html);
  }
  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');
  console.log('zawartość stałej links: ' ,links);
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();

function generateTags(){
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('find all articles ' , articles);
  /* [DONE] START LOOP: for every article: */
  for(let article of articles){
    document.querySelector(optArticleSelector);
    /* [DONE] find tags wrapper */
    const articles = article.querySelectorAll(optArticleTagsSelector);
    console.log('for each article: ' , articles);


    /* make html variable with empty string */
    let html = '';
    /* [DONE] get tags from data-tags attribute */
    const articleTags = article.getAttribute('data-tags');
    console.log(' data-tags atribute (with plus): ' + articleTags);
    /* split tags into array */
    const articleTagsArray = articleTags.split(' ');
    /* START LOOP: for each tag */
    for(let tag of articleTagsArray){
      document.querySelector(articleTagsArray);
      console.log(' START LOOP: for each tag:' , articleTagsArray)
      /* generate HTML of the link */
      const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      console.log('create HTML of the link ' , linkHTML);
      /* add generated code to html variable */
      html = html + linkHTML;
      console.log('content of html ' , html);
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    articles.innerHTML = html;
    console.log('content of html ' , html);
  /* END LOOP: for every article: */
  }
}
generateTags();

function tagClickHandler(event){
  /* prevent default action for this event */

  /* make new constant named "clickedElement" and give it the value of "this" */

  /* make a new constant "href" and read the attribute "href" of the clicked element */

  /* make a new constant "tag" and extract tag from the "href" constant */

  /* find all tag links with class active */

  /* START LOOP: for each active tag link */

    /* remove class active */

  /* END LOOP: for each active tag link */

  /* find all tag links with "href" attribute equal to the "href" constant */

  /* START LOOP: for each found tag link */

    /* add class active */

  /* END LOOP: for each found tag link */

  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags(){
  /* find all links to tags */

  /* START LOOP: for each link */

    /* add tagClickHandler as event listener for that link */

  /* END LOOP: for each link */
}

addClickListenersToTags();
