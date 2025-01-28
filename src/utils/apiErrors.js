class apiErrors extends Error{
//creating a constructor to handle the error and then later overwriting it. 
//We are doing this because we want to have a default error message.
    constructor(
        statusCode,
        message="Something went wrong",
        error=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.success=false
        this.errors=errors
        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }

    }
}
export {apiErrors}  