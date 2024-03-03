export const formatTitle = (str) => {
    str = str.replace(/-/g, ' ')
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str
}

export const discountedAmout = (price, discountPercentage) => {
    const newAmount = Math.round(price - (price * discountPercentage / 100))
    return newAmount
}