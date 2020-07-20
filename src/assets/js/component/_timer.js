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
  goal.setMinutes(24);
  goal.setSeconds(59);

  const recalc = () => {
    const counter = countdown(goal);
    const time = `${counter[0]}:${counter[1]}`;
    document.querySelector('[data-js ="time"]').textContent = time;
    if (counter >= 0) {
      // eslint-disable-next-line no-use-before-define
      refresh();
    }
  };

  const refresh = () => {
    // eslint-disable-next-line no-use-before-define
    setTimeout(recalc, 1000);
  };

  recalc();
};
export default timer;
