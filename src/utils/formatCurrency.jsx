const CURRENCY_FORMATTER = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
});

export function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number);
}
