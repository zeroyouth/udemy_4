//음식요약
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>맛있는 음식을 당신에게 배달해드립니다.</h2>
      <p>
        당신이 좋아하는 음식을 주문 가능한 음식에서 선택하세요.
        그리고 집에서 맛있는 점심 또는 저녁을 즐기시기 바랍니다.
      </p>
      <p>
        저희 모든 음식들은 제 시간에 최상품의 재료로 만들어지고 경험 많은 셰프에 의해 만들어진답니다!
      </p>
    </section>
  );
};

export default MealsSummary;