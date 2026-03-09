### 1️⃣ What is the difference between `var`, `let`, and `const`?

**Answer:** Here is a simple breakdown of how they work:

* 🔓 **`var`:** We use this to declare a variable. Its value can be changed, updated, or even declared again. It also has a hoisting issue—if we `console.log()` it before declaring, it doesn't give an error (just shows `undefined`).
* 🔄 **`let`:** This is very useful in modern JavaScript! If we declare a variable with `let`, we can change or update its value later, but we **cannot** re-declare the exact same variable again.
* 🔒 **`const`:** We should use `const` for fixed values. Once we declare a variable with `const`, we cannot change, update, or re-declare it. It is strictly locked!


- 2️⃣ What is the spread operator (...)?
**Answer:** The spread operator (`...`) is used to unpack or spread out elements from an array or an object. It helps to easily copy data from one array or object to another. ✨

- 3️⃣ What is the difference between map(), filter(), and forEach()?
**Answer:** Here is the simple difference:
* 🗺️ **`map()`:** It is used to change or modify array elements. It always returns a totally new array.
* 🔍 **`filter()`:** It is used to find specific data using a condition. It returns a new array with only the matching items.
* 🏃‍♂️ **`forEach()`:** It simply runs a function for every single item in an array. It does not return a new array.

- 4️⃣ What is an arrow function?
**Answer:** An arrow function is a shorter and easier way to write a function in JavaScript. Instead of using the `function` keyword, we write it using the `=>` symbol. 🏹

- 5️⃣ What are template literals?
**Answer:** Template literals make it easy to write multi-line strings. Instead of using normal quotes (`''` or `""`) and adding strings with the `+` sign, we use backticks (`` ` ``). We can also put variables directly inside the text using `${}`. 📝