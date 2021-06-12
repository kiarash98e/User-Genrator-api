function addBox ({
    name,email,phoneNumber,avatar,location
}) {
    $("#main-wrapper").append(`
    <div class="box rounded col-12 col-md-4 mt-3 justify-content-center align-items-center">
        <div class="col-12 justify-content-center align-items-center">
            <img class="w-100 h-100 rounded-circle" 
            src=${avatar}> 
        </div>
        <div class="col-12 d-flex flex-column align-items-center justify-content-between">
            <div class="name-text">${name}</div>
            <div class="mt-2">${email}</div>
            <div class="mt-2">${phoneNumber}</div>
            <div class="mt-2">
                <i class="fas fa-map-marker-alt"></i>
                <span class="text-muted ml-2">${location}</span>
            </div>
        </div>
    </div>
    `)
}