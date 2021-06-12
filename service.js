const _GetRandomPerson = ()=>{
    return new Promise((resolve,reject)=>{
        $.ajax({
            type: "get",
            url: "https://randomuser.me/api/",
            success: function (response) {
                resolve(response.results[0])
            },
            error: function  (errorMsg) {
                reject(errorMsg)
            }

        })
    })
}
