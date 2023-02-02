module.exports = function toReadable (number) {
    const digits1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
        'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
        'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const digits2 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty',
        'seventy', 'eighty', 'ninety'];
    
    let result = ''
    
    if ( number === 0 ) result = digits1[0]
    if ( number > 99 ) {
        result += (digits1[Math.trunc(number / 100)] + ' hundred ');
        number %= 100;
    }
    if ( number < 100 && number > 19 ) {
        result += digits2[Math.trunc(number / 10)].concat(' ');
        number %= 10;
    }
    if ( number > 0 ) result += digits1[number];

    return result.trim();
}