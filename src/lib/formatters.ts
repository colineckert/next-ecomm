const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  minimumFractionDigits: 0,
});

export function formatCurrency(value: number): string {
  return CURRENCY_FORMATTER.format(value);
}

const NUMBER_FORMATTER = new Intl.NumberFormat("en-US");

export function formatNumber(value: number): string {
  return NUMBER_FORMATTER.format(value);
}
