import styles from './Description.module.css';
import {Component} from 'react';
    let RecipeTitle = "White Chocolate Blueberry Oatmeal Cookies"
    let ShortRecipeDesc = "The most delicious, chewy blueberry oatmeal cookies with sweet white chocolate and coconut in every bite. These easy blueberry oatmeal cookies are made with coconut oil for double the coconut flavor and seriously taste like a fresh blueberry muffin.";

const RecipeAuthor = () =>{
    let authorLink = "https://www.ambitiouskitchen.com/";
    let authorPhoto = "https://www.ambitiouskitchen.com/wp-content/uploads/2020/12/ak-mini-bio-2a-1-708x515.jpg";
    let authorName = "Monique Volz";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} 
           alt = {authorName}
           className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Ambitious Kitchen</a> 
           </div>
        </div>
     );
 };
 class RecipeDescription extends Component{
    render () {
        return (
            <div> 
            <div>
               <h1>{RecipeTitle}</h1>
               <p>{ShortRecipeDesc}</p>
            </div>
            <RecipeAuthor />
         </div>
        );
    }
 }
 export default RecipeDescription;