// extracting common styles from expenseitem, expeses, to card.js
// now this card will act as a shell/container for other elements
// we can easily wrap htmp elemtn but to use custom component 0 we have to use props in card and use props.children
//children is a reserved name - value of this is the content in {} 


import './Card.css';

function Card(props){
    // to add multiple classnames in Card component whether in expenseItem or directyl in the func we nee to create a constant and pass as props

    const classes = 'card ' + props.className;
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;