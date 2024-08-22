import { countries as long_countries } from "./09_day_starter/data/countries_data.js"

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

// Level 1
console.log(" ** Level 1 **")

// Q.1
console.log("\nQ.1 - Definitions")
console.log("forEach: loops over all the items in an array and applies a callback function with the item as argument")
console.log("    map: creates a new array, where each item is mapped to another value based on the callback function")
console.log(" filter: applies a callback function to each item and creates a new array containing the items for which the callback function returned true")
console.log(" reduce: applies a callback function to an accumulator successively, for each item")


// Q.2
const print = (item) => console.log(item);
const toUpper = (item) => item.toUpperCase();
const stringLength = (item) => item.length;
const square = (n) => n * n;
const productPrice = (p) => p.price;
const landCountries = (str) => str.includes("land");
const sixLetterString = (str) => stringLength(str) === 6;
const sixLetterPlusString = (str) => stringLength(str) >= 6;
const eightLetterPlusString = (str) => stringLength(str) >= 8;
const startsWithE = (item) => item.startsWith("E");
const hasPrice = (p) => !isNaN(parseFloat(p.price));
const sumReducer = (acc, cur) => acc + cur;
const euConcatenation = (sentence, country) => country != "IceLand" ? sentence + ", " + country : sentence + ", and " + country + " are north European countries"
const isNorway = (country) => country === "Norway";
const isRussia = (country) => country === "Russia";


print("\nQ.2 - Functions")
print(print.name + " = " + print.toString())
print(toUpper.name + " = " + toUpper.toString())
print(stringLength.name + " = " + stringLength.toString())
print(square.name + " = " + square.toString())
print(productPrice.name + " = " + productPrice.toString())
print(landCountries.name + " = " + landCountries.toString())
print(sixLetterString.name + " = " + sixLetterString.toString())
print(sixLetterPlusString.name + " = " + sixLetterPlusString.toString())
print(eightLetterPlusString.name + " = " + eightLetterPlusString.toString())
print(startsWithE.name + " = " + startsWithE.toString())
print(hasPrice.name + " = " + hasPrice.toString())
print(sumReducer.name + " = " + sumReducer.toString())
print(euConcatenation.name + " = " + euConcatenation.toString())
print(isNorway.name + " = " + isNorway.toString())
print(isRussia.name + " = " + isRussia.toString())


// Q.3
print("\nQ.3 - Countries")
countries.forEach(print)

// Q.4
print("\nQ.4 - Names")
names.forEach(print)

// Q.5
print("\nQ.5 - Numbers")
numbers.forEach(print)

// Q.6
print("\nQ.6 - Uppercase countries")
countries.map(toUpper).forEach(print)

// Q.7
print("\nQ.7 - Countries length")
countries.map(stringLength).forEach(print)

// Q.8
print("\nQ.8 - Square numbers")
numbers.map(square).forEach(print)

// Q.9
print("\nQ.9 - Uppercase names")
names.map(toUpper).forEach(print)

// Q.10
print("\nQ.10 - Product prices")
products.map(productPrice).forEach(print)

// Q.11
print("\nQ.11 - 'land' countries")
countries.filter(landCountries).forEach(print)

// Q.12
print("\nQ.12 - 6-letter countries")
countries.filter(sixLetterString).forEach(print)

// Q.13
print("\nQ.13 - 6-letter+ countries")
countries.filter(sixLetterPlusString).forEach(print)

// Q.14
print("\nQ.14 - Countries that start with E")
countries.filter(startsWithE).forEach(print)

// Q.15
print("\nQ.15 - Products with prices")
products.filter(hasPrice).forEach(print)

// Q.16
print("\nQ.16 - getStringLists")
function getStringLists(array) { return array.filter((item) => typeof item === "string") };
print(getStringLists.toString())

// Q.17
print("\nQ.17 - Number sum")
print(numbers.reduce(sumReducer, 0))

// Q.18
print("\nQ.18 - Country concatenation")
print(countries.reduce(euConcatenation, "Estonia"))

// Q.19
print("\nQ.19 - Definitions 2")
print("'some' returns true if at least one of the items in the array returns true for the given callback.")
print("'every' returns true if all of the items in the array return true or, inversely, returns false if at least one of the items in the array returns false for the given callback.")

// Q.20
print("\nQ.20 - Has 8-letter+ countries")
print(countries.some(eightLetterPlusString))

// Q.21
print("\nQ.21 - All countries have 'land'")
print(countries.every(landCountries))

// Q.22
print("\nQ.22 - Definitions 3")
print("'find' returns the first item for which the callback function returns true")
print("'findIndex' returns the index of the first item for which the callback function returns true")

// Q.23
print("\nQ.23 - First 6-letter country")
print(countries.find(sixLetterString))

// Q.24
print("\nQ.24 - Index of first 6-letter country")
print(countries.findIndex(sixLetterString))

// Q.25
print("\nQ.25 - Index of 'Norway'")
print(countries.findIndex(isNorway))

// Q.26
print("\nQ.26 - Index of 'Russia'")
print(countries.findIndex(isRussia))


// Level 2
console.log("\n\n ** Level 2 **")

// Q.1
print("\nQ.1 - Total product price")
print(products.filter(hasPrice).map(productPrice).reduce(sumReducer, 0))

// Q.2
print("\nQ.2 - Total product price (reduce only)")
print(products.reduce((acc, cur) => hasPrice(cur) ? cur.price + acc : acc, 0))

// Q.3
print("\nQ.3 - categorizeCountries")
function categorizeCountries(array, pattern) { return array.filter((country) => country.includes(pattern)); }
print(categorizeCountries.toString())

// Q.4
print("\nQ.4 - I don't understand")

// Q.5
print("\nQ.5 - getFirstTenCountries")

const firstN = (n) => (_, index) => index < n;

function getFirstTenCountries(array) { return array.filter(firstN(10)) }
print(getFirstTenCountries.toString())

// Q.6
print("\nQ.6 - getLastTenCountries")

const lastN = (n) => (_, index, arr) => index >= arr.length - n;

function getLastTenCountries(array) { return array.filter(lastN(10)) }
print(getLastTenCountries.toString())

// Q.7
print("\nQ.7 - I don't understand")


// Level 3
console.log("\n\n ** Level 3 **")

// Q.1
print("\nQ.1 - Sorting countries")
long_countries.sort((a, b) => a.population - b.population)
long_countries.sort((a, b) => a.capital > b.capital ? 1 : -1)
long_countries.sort((a, b) => a.name > b.name ? 1 : -1)

// Q.2
print("\nQ.2 - Most spoken languages")
function mostSpokenLanguages(array, num) {
    const languages = new Array(...(new Set(array.reduce((acc, cur) => acc.concat(cur.languages), [])))).map(language => { return { language: language, count: 0 } })

    languages.forEach(obj => obj.count = array.filter(country => country.languages.includes(obj.language)).length)
    return languages.sort((a, b) => b.count - a.count).filter(firstN(num))
}
mostSpokenLanguages(long_countries, 3).forEach(print)

// Q.3
print("\nQ.3 - Most populated languages")
function mostPopulatedCountries(array, num) {
    return array.sort((a, b) => b.population - a.population).filter(firstN(num)).map(country => { return { country: country.name, population: country.population } })
}
mostPopulatedCountries(long_countries, 3).forEach(print)

// Q.4
print("\nQ.4 - Statistics")
class Statistics {
    data;
    constructor(data) {
        // data.sort();
        this.data = data;
    }

    count() {
        return this.data.length
    }

    sum() {
        return this.data.reduce(sumReducer, 0);
    }

    min() {
        return this.data.reduce((min, cur) => cur < min ? cur : min, Infinity)
        return this.data[0]
    }

    max() {
        return this.data.reduce((max, cur) => cur > max ? cur : max, -Infinity)
        return this.data[this.count() - 1]
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        return this.sum() / this.count();
    }

    median() {
        return [...this.data].sort()[Math.floor(this.count() / 2)]
    }

    mode() {
        const counts = {}
        this.data.forEach(n => Object.keys(counts).includes(n.toString()) ? counts[n] += 1 : counts[n] = 1)
        return Object.entries(counts).map(([n, count]) => { return { mode: n, count: count } }).reduce((max, cur) => cur.count > max.count ? cur : max, { count: -Infinity })
    }


    var() {
        const mean = this.mean()
        return this.data.reduce((acc, cur) => acc + square(cur - mean), 0) / (this.count() - 1)
    }

    std() {
        return Math.sqrt(this.var())
    }

    freqDist() {
        const counts = {}
        this.data.forEach(n => Object.keys(counts).includes(n.toString()) ? counts[n] += 1 : counts[n] = 1)

        return Object.entries(counts).map(([n, count]) => { return {value: n, freq: (count/this.count())} }).sort((a, b) => b.freq - a.freq)
    }

    describe() {
        console.log('Count:', statistics.count()) // 25
        console.log('Sum: ', statistics.sum()) // 744
        console.log('Min: ', statistics.min()) // 24
        console.log('Max: ', statistics.max()) // 38
        console.log('Range: ', statistics.range()) // 14
        console.log('Mean: ', statistics.mean()) // 29.76
        console.log('Median: ', statistics.median()) // 29
        console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
        console.log('Variance: ', statistics.var().toFixed(3)) // 18.273
        console.log('Standard Deviation: ', statistics.std().toFixed(3)) // 4.275
        console.log('Frequency Distribution: ', statistics.freqDist())
    }
}

const statistics = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
statistics.describe()
