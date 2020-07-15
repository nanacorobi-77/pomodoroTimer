const timer = () => {
  const countdown = (due) => {
    /**
     * 現在時刻
     * @type {Object}
     */
    const now = new Date();

    /**
     * 設定した未来の時間から今の時間を引いた数
     * @type {}
     */
    const rest = due.getTime() - now.getTime();
    const sec = Math.floor(rest / 1000) % 60;
    const min = Math.floor(rest / 1000 / 60) % 60;
    const count = [min, sec];

    return count;
  };

  const goal = new Date();
  goal.setMinutes(59);
  goal.setSeconds(59);

  console.log(countdown(goal));

  const counter = countdown(goal);
  const time = `${counter[0]}:${counter[1]}`;
  console.log(time);
  // document.querySelector('[data-js="carousel_next"]')
  console.log(document.getElementById('time'));

  document.querySelector('[data-js ="time"]').textContent = time;
};
export default timer;
