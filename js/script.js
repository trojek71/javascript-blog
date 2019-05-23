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
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

 
 
 
 
  const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles';

  function generateTitleLinks(){

    /* [DONE] remove contents of titleList */
     const titleList = document.querySelector(optTitleListSelector);
     console.log('remove contents of titleList: ' , titleList);
     titleList.innerHTML = '';
    

     /* [IN PROGRESS] for each article */
      const articles = document.querySelectorAll(optArticleSelector);
      console.log('for each article: ' , articles);
      
      for(let article of articles){
       document.querySelector(optArticleSelector);
       
      /* get the article id */
      const articleId = article.getAttribute('id');
       console.log('get the article id: ' , articleId);
       
       /* find the title element */
       const articleTitle = article.querySelector(optTitleSelector).innerHTML;
       console.log('Article title  ' , articleTitle);
      /* get the title from the title element */
      
      /* create HTML of the link */
  
      /* insert link into titleList */
  
      }   
  }
  
  generateTitleLinks();
  