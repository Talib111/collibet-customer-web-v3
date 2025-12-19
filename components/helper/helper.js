// ═════════║ 1 THIS FUNCTION RETURNS THE ROUNDED VALUE FROM PERCENTAGE  ║══════════════//
export const FIND_VALUE_FROM_PERCENTAGE = (
    total,
    percentage,
    roundoffCount
) => {
    const value = (total * percentage) / 100;
    return parseFloat(value.toFixed(roundoffCount));
}

// ══════════║ 2 THIS FUNCTION RETURNS THE ROUNDED PERCENTAGE FROM VALUE  ║══════════════//
export const FIND_PERCENTAGE_FROM_VALUE = (
    total,
    value,
    roundoffCount
) => {
    const percentage = (value / total) * 100;
    return parseFloat(percentage.toFixed(roundoffCount));
}

// ══════════║ 3 THIS FUNCTION RETURNS THE TOTAL FROM PERCENTAGE AND VALUE  ║══════════════//
export const FIND_TOTAL_FROM_VALUE_AND_PERCENTAGE = (
    value,
    percentage,
    roundoffCount
) => {
    const total = (value * 100) / percentage;
    return parseFloat(total.toFixed(roundoffCount));
}

