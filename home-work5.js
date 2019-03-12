// 1 (3 points)
function sampleFunc () {
    console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
}
function modificator ( func ) {
    return func.bind(null, "test", "sample")
}
testFunc = modificator( sampleFunc )
testFunc()



// 2 (4 points)
function sampleFunc () {
    console.info ( `Symbols in my code: ${arguments.callee + 0}` )
}
function modificator ( func ) {
    func.valueOf = function () {
        return  func.toString().length
    }
}
modificator( sampleFunc )
sampleFunc()



// 3 (5 points)
function testArguments () {
    function generateError ( numArgs ) {
        if ( arguments.length ) {
            var err = new Error ( "Invalid arguments" )
            err.name = "Application:"
            err.stack = `Function needs 3 arguments, but only ${numArgs} present`
            throw err
        }
    }
    try {
        arguments.length >= 3 ? null : generateError ( arguments.length )
    }
    catch ( err ) {
        console.error ( `${err.name}: ${err.message}\n${err.stack}` )
    }
}
testArguments ( "Google" )
