import Card from '../_core-ui/Card';
import MealItem from './MealItem/MealItem';

import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Tuscany Crepe',
    description: 'Chicken breast with mushrooms, tomatoes, roasted almonds, provolone, feta and pesto.',
    price: 14.95,
    image: 'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1200,height=1200,format=jpeg,quality=50/https://doordash-static.s3.amazonaws.com/media/photos/1d5c22b1-e77e-413f-9b29-3e9eb39b613a-retina-large.jpg'
  },
  {
    id: 'm2',
    name: 'Crepevine Club',
    description: 'Freshly grilled chicken breast on sourdough with crisp bacon, avocado, lettuce, tomatoes, and mayo.',
    price: 16.95,
    image: 'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1200,height=1200,format=jpeg,quality=50/https://doordash-static.s3.amazonaws.com/media/photos/137616b9-2018-46ae-8e8a-07d0860926a8-retina-large-jpeg'
  },
  {
    id: 'm3',
    name: 'Alba',
    description: 'Strawberries, bananas, nutella, and chocolate sauce.',
    price: 9.50,
    image: ''
  },
  {
    id: 'm4',
    name: 'Santa Fe Crepe',
    description: 'Chicken apple sausage with scrambled eggs, green onions, provolone, and salsa fresca.',
    price: 14.50,
    image: 'https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=1200,height=1200,format=jpeg,quality=50/https://doordash-static.s3.amazonaws.com/media/photos/6b49d039-a681-46bc-bb1f-757d5713b622-retina-large.jpg'
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal =>
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price} />
  );


  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section >
  )
};

export default AvailableMeals;