export function formatIndianPrice (price) {
    let rupee = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    })
    return rupee.format(price)
} 