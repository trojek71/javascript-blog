'use strict';
/* eslint-disable no-unused-vars  */
/* global Handlebars */

const templates = {
  articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML),
  authorLink: Handlebars.compile(document.querySelector('#template-author-link').innerHTML),
  tagsLink: Handlebars.compile(document.querySelector('#template-tags-link').innerHTML),
  tagCloudLink: Handlebars.compile(document.querySelector('#template-tags-cloud-link').innerHTML),
  authorListLink: Handlebars.compile(document.querySelector('#template-author-list-link').innerHTML),

};



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
  console.log('find correct article (with plus): ' , targetArticle);

  /* [DONE] add class 'active' to the correct article */

  targetArticle.classList.add('active');
}


const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles',
  optArticleTagsSelector = '.post-tags .list',
  optCloudClassPrefix = 'tag-size-',
  optCloudClassCount = 6,
  optAuthorsListSelector = '.author',
  optArticleAuthorSelector = '.post-author';

function generateTitleLinks(customSelector = ''){

  /* [DONE] remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);
  console.log('remove contents of titleList: ' , titleList);
  titleList.innerHTML = '';


  /* [DONE] for each article */
  const articles = document.querySelectorAll(optArticleSelector + customSelector);
  console.log('for each article: ' , articles);
  console.log('wartość customSelector', customSelector);
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
    //const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    //console.log('create HTML of the link ' , linkHTML);
    const linkHTMLData = {id: articleId, title: articleTitle};
    const linkHTML = templates.articleLink(linkHTMLData);


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

function calculateTagsParams(tags){
  const params = {max:0,min:9999};
  for (let tag in tags){
    console.log(tag + ' is used ' + tags[tag] + ' times');
    params.max = tags[tag] > params.max ? tags[tag] : params.max;
    params.min = tags[tag] < params.min ? tags[tag] : params.min;
  }
  return params;
}

function calculateTagClass(count,params){
  const classNumber = Math.floor( ( (count - params.min) / (params.max - params.min) ) * optCloudClassCount + 1 );
  return  optCloudClassPrefix + classNumber;
}


/*function calculateAuthorsParams(allAuthors){
  const params = {max:0,min:9999};
  for (let articleAuthor in allAuthors){
    console.log(articleAuthor + ' is used ' + allAuthors[articleAuthor] + ' times');
    params.max = allAuthors[articleAuthor] > params.max ? allAuthors[articleAuthor] : params.max;
    params.min = allAuthors[articleAuthor] < params.min ? allAuthors[articleAuthor] : params.min;
  }
  return params;
} */

/*function calculateAuthorClass(count,params){
  const classNumber = Math.floor( ( (count - params.min) / (params.max - params.min) ) * optCloudClassCount + 1 );
  return  optCloudClassPrefix + classNumber;
}*/



function generateTags(){
  /* [NEW] create a new variable allTags with an empty array */
  let allTags={};

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
      //console.log(' START LOOP: for each tag:' , articleTagsArray)
      /* generate HTML of the link */
      //const linkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
      //console.log('create HTML of the link ' , linkHTML);
      const linkHTMLData = {id: tag, title: tag};
      const linkHTML = templates.tagsLink(linkHTMLData);

      /* add generated code to html variable */
      html = html + linkHTML;
      console.log('content of html ' , html);
      /* [NEW] check if this link is NOT already in allTags */
      if(!allTags.hasOwnProperty(tag)){
        /* [NEW] add generated code to allTags array */
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
    /* END LOOP: for each tag */
    }
    /* insert HTML of all the links into the tags wrapper */
    article.querySelector('.list').innerHTML = html;
    console.log('insert HTML of all the links into the tags wrapper ' , html);
    /* END LOOP: for every article: */
  }

  /* [NEW] find list of tags in right column */
  const tagList = document.querySelector('.tags');
  console.log('TagList_______________________',tagList);
  /* [NEW] add html from allTags to tagList */
  //console.log('lista i liczba TAGow', allTags);
  /* [NEW] create variable for all links HTM code*/
  const tagsParams = calculateTagsParams(allTags);
  console.log('tagsParams:', tagsParams);
  //let allTagsHTML = '';
  const allTagsData = {tags: []};



  /* [NEW] start loop: for each tag in allTags:*/
  for (let tag in allTags){
    //allTagsHTML += '<li><a href="#">'+ tag + '</a>' + ' (' + allTags[tag] + ')' + '</li>' ;
    const tagLinkHTML = calculateTagClass(allTags[tag],tagsParams)  ;
    console.log('tagLinkHTM:', tagLinkHTML);
    //allTagsHTML += '<li><a ' +  'class='+ '"'+ tagLinkHTML+ '"' +'href="'+'#tag-' +  tag  +'"' + '>' + tag + '</a>'  + ' '+'</li>' ;
    //console.log('allTagsHTML VALUE :', allTagsHTML);
    //tagClickHandler(event);
    //const linkHTMLData = {id: tag, title: tag};
    //const allTagsHTML = templates.tagCloudLink(linkHTMLData);
    //console.log('ALLLLLLLLLLLLLLallTagsHTML VALUE :', allTagsHTML);
    allTagsData.tags.push({
      tag: tag,
      count: allTags[tag],
      className: calculateTagClass(allTags[tag], tagsParams)
    });
  }

  //tagList.innerHTML = allTagsHTML;
  tagList.innerHTML = templates.tagCloudLink(allTagsData);
  console.log('????????????????:', tagList.innerHTML);
}


generateTags();


function tagClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;


  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(' href atribute of clicked element (tags) ' , href);
  /* make a new constant "author" and extract tag from the "href" constant */
  const tag = href.replace('#tag-', '');
  console.log('tag from href  ' , tag);
  /* find all tag links with class active */
  const activeTags = document.querySelectorAll('a.active[href^="#tag-"]');
  console.log(' all tagLinks from href  ' , activeTags);
  /* START LOOP: for each active tag link */
  for(let activeTag of activeTags){
  /* remove class active */
    activeTag.classList.remove('active');
  /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const allTagLinks = document.querySelectorAll('a[href = "'+ href+'"]');
  /* START LOOP: for each found tag link */
  for (let allTagLink of allTagLinks){
  /* add class active */
    allTagLink.classList.add('active');
  /* END LOOP: for each found tag link */
  }
  /* execute function "generateTitleLinks" with article selector as argument */
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags(){
  /* find all links to tags */
  const linkTags = document.querySelectorAll('.post-tags a, .tags a');
  console.log(' link tag  ' , linkTags);
  /* START LOOP: for each link */
  for (let linkTag of linkTags ){
  /* add tagClickHandler as event listener for that link */
    linkTag.addEventListener('click',tagClickHandler);
  /* END LOOP: for each link */
  }
}

addClickListenersToTags();

function generateAuthors(){
  /* [NEW] create a new variable allAuthors with an empty array */
  let allAuthors = {};
  /* find all articles */
  const articles = document.querySelectorAll(optArticleSelector);
  console.log('find all articles ' , articles);
  /* [DONE] START LOOP: for every article: */
  for(let article of articles){
    document.querySelector(optArticleSelector);
    /* [DONE] find tags wrapper */
    const articles = article.querySelectorAll(optAuthorsListSelector);
    console.log('for each article: ' , articles);
    /* make html variable with empty string */
    let html = '';

    /* [DONE] get authors from data-author attribute */
    const articleAuthor = article.getAttribute('data-author');
    console.log(' data-author atribute (with plus): ' + articleAuthor);
    /* generate HTML of the link */
    //const linkHTML = '<p><a href="' + articleAuthor +'">'+ articleAuthor +'</a></p>';
    //console.log('create HTML of the link ' , linkHTML);
    const linkHTMLData = {id: articleAuthor, title: articleAuthor};
    const linkHTML = templates.authorLink(linkHTMLData);




    /* add generated code to html variable */
    html = html + linkHTML;
    console.log('content of html ' , html);
    /* [NEW] check if this link is NOT already in allAuthors */
    if(!allAuthors.hasOwnProperty(articleAuthor)){

      allAuthors[articleAuthor] = 1;
    } else {
      allAuthors[articleAuthor]++;
    }
    console.log('ALLLLL AUTHORSSSSSSS',allAuthors);
    /* END LOOP: for each author */
    /* insert HTML of all the links into the allAuthors wrapper */
    article.querySelector('.post-author').innerHTML = html;
  /* END LOOP: for every article: */
  }
  const authorList = document.querySelector('.authors ');
  console.log('Lista Autorów_________________',authorList);
  const authorsParams = calculateTagsParams(allAuthors);
  console.log('authorsParmas:', authorsParams);
  let allAuthorsHTML = '';
  const allAuthorsData = {AuthorsAll:[]};

  for (let articleAuthor in allAuthors){
    const authorLinkHTML = calculateTagClass(allAuthors[articleAuthor],authorsParams)  ;
    //console.log('authorLinkHTML:', authorLinkHTML);
    //allAuthorsHTML += '<li><a ' +'href="' +  articleAuthor  +'"' + '>' + articleAuthor + '</a>'  + ' (' + allAuthors[articleAuthor]+ ')' +' '+'</li>' ;
    //console.log('allAuthorsHTML VALUE :', allAuthorsHTML);


    allAuthorsData.AuthorsAll.push({
      articleAuthor: articleAuthor,
      count: allAuthors[articleAuthor],
      className: calculateTagClass(allAuthors[articleAuthor], authorsParams)


    });

  }
    authorList.innerHTML=templates.authorListLink(allAuthorsData);
    console.log('wygenerowane linki autorów:',authorList.innerHTML);
    console.log('dane do  linków autorów:',allAuthorsData);

  //authorList.innerHTML=allAuthorsHTML;

}
generateAuthors();


function authorClickHandler(event){
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;


  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute('href');
  console.log(' href atribute of clicked element- Authors: ' , href);

  /* find all author links with class active */
  const activeAuthors = document.querySelectorAll('.active');
  console.log(' all authorLinks from href  ' , activeAuthors);
  /* START LOOP: for each active author link */
  for(let activeAuthor of activeAuthors){
  /* remove class active */
    activeAuthor.classList.remove('active');
    /* END LOOP: for each active author  link */

    /* find all author  links with "href" attribute equal to the "href" constant */
    const allAuthorLinks = document.querySelectorAll('a[href = "'+ href+'"]');
    /* START LOOP: for each found author link */
    for (let allAuthorLink of allAuthorLinks){
    /* add class active */
      allAuthorLink.classList.add('active');
      /* END LOOP: for each found author link */
    }
    /* execute function "generateTitleLinks" with author selector as argument */
    generateTitleLinks('[data-author="' + href + '"]');
  }
}

function addClickListenersToAuthors(){
  /* find all links to tags */
  const linkAuthors = document.querySelectorAll('.authors a,.post-author a');
  console.log(' link Authors  ' , linkAuthors);
  /* START LOOP: for each link */
  for (let linkAuthor of linkAuthors ){
  /* add tagClickHandler as event listener for that link */
    linkAuthor.addEventListener('click',authorClickHandler);
  /* END LOOP: for each link */
  }
}
addClickListenersToAuthors();

//.post-author a



