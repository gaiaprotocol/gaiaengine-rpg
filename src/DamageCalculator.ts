class DamageCalculator {
  public calculateDamage(level: number): number {
    return 5 * level;
  }
}

export default new DamageCalculator();
