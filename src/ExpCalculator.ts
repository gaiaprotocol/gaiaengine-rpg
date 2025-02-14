class ExpCalculator {
  public calculateTotalExpNeeded(level: number): number {
    let totalExp = 0;
    for (let i = 1; i <= level; i += 1) {
      totalExp += 10 * (i - 1) * (i - 1) * i;
    }
    return totalExp;
  }
}

export default new ExpCalculator();
