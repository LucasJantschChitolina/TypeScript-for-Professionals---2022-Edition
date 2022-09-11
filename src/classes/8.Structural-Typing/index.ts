type User = { id: string}
type Product = { id: string}

let user: User = {id: 'user-98ahsdca'}
let product: Product = {id: 'product-18o273bcos'}

// String type scripts type system is structural. It does not care about the names of the types. What this means is that the user and the product have the same type compatibility. 

// This means that you can assign a user to a product or a product of the user because they have the same structure.

user = product;
product = user;

// Another example

type Point2D = {x: number, y: number};
type Point3D = {x: number, y: number, z: number};

let point2D = {x: 0, y: 10};
let point3D = {x: 0, y: 10, z: 20};

// An additional feature of the typescript structural type system is that extra information is OK. What this means is that we can assign a point 3D to a point 2D because a point 3D does have the members that are required to appoint 2D which is X and Y.

// Extra info ok
point2D = point3D
function takesPoint2D(point: Point2D) {/** ... */}

// Now, because of point, 3D contains all the information that is required by applying type 2D, we can actually invoke this function with the point 3D without any compile time errors.

takesPoint2D(point3D)

// This is also called Duck Typing
// That is, if it walks like a duck and quacks like a duck, then it must be a duck.

// Error: missing info
point3D = point2D
function takesPoint3D(point: Point3D) {/** ... */}
takesPoint3D(point2D)