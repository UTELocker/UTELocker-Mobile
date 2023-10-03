
export const formatNumber = (number) => {
    // format 100,000,000
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}