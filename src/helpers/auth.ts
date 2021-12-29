function verifyWho(token:string){

    console.log("from moddleware", token)


}

module.exports = {
    verifyWho:verifyWho
}