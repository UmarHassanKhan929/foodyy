import React from 'react'
import style from './recipe.module.css'
const Recipe =({title,calories,image,cautions,dietlabels,ingredients,url}) => {
    
    
    return (
        <div className={style.recipe}>
            <div className={style.titlebox}>
                <h3>{title}</h3>
                <p> <em> Calories</em> - {calories} kcal</p>
                
                <hr />
                <div>
                        <ul>Diet Labels:
                            {dietlabels.map(d => (
                                <li>{d}</li>
                            ))}
                        </ul>

                </div>

                    <div>
                        <ul>Cautions:
                            {cautions.map(cauc => (
                                <li>{cauc}</li>
                            ))}
                        </ul>

                    </div>

                    <div>
                        <ul>Ingredients:
                            {ingredients.map(ingi => (
                                <li>{ingi.text}</li>
                                ))}
                        </ul>

                    </div>
                <hr />
                <div className={style.center}>
                    
                    <a href={url} target="_blank" rel="noreferrer"><h6>How to make it ?</h6></a>
                </div>
                <hr />
            </div>
            <div>
                <img src={image} alt={title} className/>
            </div>

            <div>

            </div>
        </div>
    )
}

export default Recipe
