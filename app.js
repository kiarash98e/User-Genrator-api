setInterval(()=>{
    
    _GetRandomPerson()
    .then((person) =>{
        console.log(person)
        addBox({
            name:`${person.name.first} ${person.name.last}`,
            email:person.email,
            phoneNumber:person.phone,
            location:`${person.location.country} ${person.location.city}`,
            avatar:person.picture.large,
        })
    })
    .catch((err) =>{
        console.log(err)
    })
},1000)