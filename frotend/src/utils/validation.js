export const validation = (value)=>{

    console.log(value)

    const error = {}

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if(value?.email?.length === 0){
        error.email = "Email should not be empty"
    }
    else if(!emailRegex?.test(value?.email)){
        error.email = "Please Enter Valid Email"
    }
    else
    {
        error.email = ""
    }

    if(value?.password?.length === 0){
        error.password = "password should not be empty"
    }
    else if(value?.password?.length < 8 ){
        error.password = "Paaword should min 8 character"
    }
    else
    {
        error.password = ""
    }
    return error
}

