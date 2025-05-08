{
    // Problem 1
    function formatString(input: string, toUpper?: boolean): string {
        if (toUpper === true) {
            return input.toUpperCase();
        }
        else if (toUpper === false) {
            return input.toLowerCase();
        }
        else {
            return input.toUpperCase();
        }
    }

    // console.log(formatString("Hello"));
    // console.log(formatString("Hello", true));   
    // console.log(formatString("Hello", false));  


    // problem 2
    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        const filterItem = items.filter(item => item.rating >= 4);
        return filterItem;
    }

    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ];

    // filterByRating(books);
    // console.log(filterByRating(books));

    // problem 4
    class Vehicle {
        private make: string;
        private year: number;

        constructor(make: string, year: number) {
            this.make = make;
            this.year = year;
        }

        getInfo() {
            console.log(`Make: ${this.make}, Year: ${this.year}`);
        }
    }

    class Car extends Vehicle {
        private model: string;

        constructor(make: string, year: number, model: string) {
            super(make, year);
            this.model = model;
        }
        getModel() {
            console.log(`Model: ${this.model}`);
        }
    }

    // const myCar = new Car("Toyota", 2020, "Corolla");
    // myCar.getInfo(); 
    // myCar.getModel(); 


    // problem 5
    function processValue(value: string | number): number {
        if (typeof value === 'string') {
            return value.length;
        }
        else {
            return value * 2;
        }
    }

    // console.log(processValue("hello")); 
    // console.log(processValue(10)); 


    // problem 6
    interface Product {
        name: string;
        price: number;
    }

    function getMostExpensiveProduct(products: Product[]) {
        if (products.length > 0) {
            const priceList = products.map(product => product.price);
            const highestPrice = Math.max(...priceList)

            const highestPriceProduct = products.find(product => product.price === highestPrice)
            return highestPriceProduct;
        }
        else {
            return null
        }
    }

    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];

    // console.log(getMostExpensiveProduct(products));


    // problem 7
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
    }

    function getDayType(day: Day): string {
        if (day === Day.Saturday || day === Day.Sunday) {
            return 'Weekend'
        }
        else {
            return 'Weekday'
        }
    }

    console.log(getDayType(Day.Monday));  // Output: "Weekday"
    console.log(getDayType(Day.Sunday));  // Output: "Weekend"


    // Problem 8
    async function squareAsync(n: number): Promise<number> {
        return new Promise((resolve, reject) => {
            if (n >= 0) {
                setTimeout(() => {
                    resolve(n * n);
                }, 1000)
            }
            else {
                reject(new Error('Negative number is not allowed'));
            }
        })
    }

    // squareAsync(4).then(console.log); 
    // squareAsync(-3).catch(console.error);    
}