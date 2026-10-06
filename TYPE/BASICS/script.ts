// You dont always have to annotate the data type of a variable
// For example if you declare and init a variable it will automatically assume
// the data type based on the given value

// assumes number
let sales = 123_456_789;

// asumes string
let course = `TypeScript`;

//assumes boolean
let check = true;

// if you just declare without initializing it assumes type: any
let level;

// any represents any type of value which means it can be set to any data type
// but it goes against the purpose of type script, so its best to use it as little as possible
level = 1;
level = 'a';