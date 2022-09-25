

// getUsers: (req, res) => {
//     const { name } = req.query;


//     if (name) {
//         const filtered = [];

//         users.forEach(((value) => {
//             if  (value.name === name) {
//                 filtered.push(value);
//             }
//         }));

//         return res.status(200).json({
//             message: "get all users",
//             data: filtered,
//         });
//     }
//     return res.status(200).json({
//         message: "get all users",
//         data: users,
//     });
// }

const users = [

    {
  
      fullname: "jono martono",
  
      username: "John",
  
      addres: "senopati"
  
    },
  
    {
  
      fullname: "samsudin nasution",
  
      username: "Smith",
  
      addres: "sukabumi"
  
    },
  
    {
  
      fullname: "charlie abdul",
  
      username: "Chris",
  
      addres: "cilegon"
  
    },
  
    {
  
      fullname: "jajang kumron",
  
      username: "Jack",
  
      addres: "pancoran"
  
    }
  
  ];
  
  
  const usersController = {
    // get users
    getAllusers: (req, res) => {
      const { name } = req.query;
  
      if (name) {
        const filtered = [];
  
        employeeData.forEach((value) => {
          if (value.name == name) {
            filtered.push(value);
          }
        });
  
        return res.status(200).json({
          message: "Get All users",
          data: filtered,
        });
      }
      return res.status(200).json({
        message: "Get All users",
        data: users,
      });
    },
  
    // create users
    createNewusers: (req, res) => {
      let newusers = {
        ...req.body,
        id: users[users.length - 1].id + 1,
      };
  
      users.push(newusers);
  
      return res.status(200).json({
        message: "users Added",
        data: users[users.length - 1],
      });
    },
  
    // get users by id
    getusersById: (req, res) => {
      for (let users of users) {
        if (users.id == req.params.id) {
          return res.status(200).json({
            message: "Get users by ID",
            data: users,
          });
        }
      }
      return res.status(404).json({
        message: "users not found",
      });
    },
  
    // delete users
    deleteusersById: (req, res) => {
      const { id } = req.params;
  
      for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            users.splice(i, 1);
          return res.status(200).json({
            message: "users Deleted",
          });
        }
      }
  
      return res.status(404).json({
        message: "users not found",
      });
    },
  
    // edit users
    editusersById: (req, res) => {
      const { id } = req.params;
  
      for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            users[i] = {
            ...users[i],
            ...req.body,
            
          };
  
          return res.status(200).json({
            message: "users edited",
            data: users[i],
          });
        }
      }
  
      return res.status(404).json({
        message: "users not found",
      });
    },
  };
  

