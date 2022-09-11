// Type Alias
type Point = {
    x: number,
    y: number
}

let center: Point = {
    x: 0,
    y: 0,
}

let unit: Point = {
    x: 0,
    y: 0,
}

// Now, instead of having to copy inline types again and again, Typescript allows us to define and reuse types by using a type alias.

// The general syntax for creating a type alias is to use that type keyword, followed by the name you want to give the type here recalling at point, then the assignment operator, followed by anything that can be used in a type annotation.

// Now, once we have the type alias created, we can use it in any of our type annotations so we can replace what we had in line previously by the name of the type alias.

// Now using a type alias has two advantages. One, it allows us to name our intent. So our intent for these objects is to represent a point in space and that is represented by the name of the type.

// Second, it allows us to remove duplication, resulting in greater government inability in the long run.

