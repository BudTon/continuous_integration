const cashback = {
    regular: {
        bonus: 1000,
        percent: 1,
    },
    silver: {
        bonus: 10000,
        percent: 2,
    },
    gold: {
        bonus: 100000,
        percent: 5,
    },
}

export default function calculateCashback(amount) {
    if (amount >= cashback.gold.bonus) {
        return Math.ceil(amount * cashback.gold.percent / 100)
    }
    if (amount >= cashback.silver.bonus) {
        return Math.ceil(amount * cashback.silver.percent / 100)
    }
    if (amount >= cashback.regular.bonus) {
        return Math.ceil(amount * cashback.regular.percent / 100)
    }
    return 0;
}