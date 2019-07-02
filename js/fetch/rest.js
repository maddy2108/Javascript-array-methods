
window.onload = function () {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            console.log(res);
            return res.json()
        }).then((json) => {
            console.log(json);
            document.getElementById('table').innerHTML = `
            
         <table class="table table-bordered">
          <thead>
           <tr>
           <th>Name</th>
           <th>UserName</th>
           <th>Email</th>
           <th>Address</th>
           </tr>
          </thead>
          <tbody>
            ${json.map(val => {
                return (
                    `<tr>
                        <td>${val.name}</td>
                        <td>${val.username}</td>
                        <td>${val.email}</td>
                        <td><p>
                        ${val.address.street}
                        </p>
                        <p>
                        ${val.address.suite}
                        </p>
                        <p>
                        ${val.address.zipcode}
                        </p>
                        </td>
                    </tr>`
                )
            })}
            
          </tbody>
         </table>
        
        
        `
        
        })

    


    

}
