import React from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: '초밥',
    description: '신선한 생선살과 따근한 밥의 조화',
    price: 22.99,
  },
  {
    id: 'm2',
    name: '타코',
    description: '바삭한 타코 맛보세요',
    price: 16.5,
  },
  {
    id: 'm3',
    name: '햄버거',
    description: '참깨빵 위에 순살 고기 패티 두 장..',
    price: 12.99,
  },
  {
    id: 'm4',
    name: '샐러드볼',
    description: '건강한 음식을 찾으신다면 선택하세요',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;