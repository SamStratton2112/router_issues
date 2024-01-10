import {Link} from "react-router-dom";

const initialFoods = ['burrito', 'salad', 'sushi', 'pasta'];
function FoodNav({food = initialFoods}){
    return(
        <ul>
            {food.map(food=>(
                <li key={food}>
                    <Link to={`/food/${food}`}> Show me {food}</Link>
                </li>
            ))}
            {/* will be redirected */}
            <li><Link to='/dfiodfcgvhjk'>Broken Link</Link></li>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/admin'>Admin</Link></li>
            <li><Link to='/contact'>Contact</Link></li>

        </ul>
    )
}

export default FoodNav;