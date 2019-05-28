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
  optTitleListSelector = '.titles';

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
      
      
    /* [IN PROGRESS] create HTML of the link */
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
