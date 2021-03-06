const employeeController = require('../controllers/employee.controller');
const { requestValidator } = require('../middlewares');
module.exports = function(app) {
    app.get("/employer/api/v1/employees/:id", employeeController.findOne)
    app.get("/employer/api/v1/employees", employeeController.findAll)
    app.put("/employer/api/v1/employees/:id", [requestValidator.validateEmployeeRequest], employeeController.update)
    app.delete("/employer/api/v1/employees/:id", employeeController.delete)
    app.post("/employer/api/v1/employees", [requestValidator.validateEmployeeRequest], employeeController.create)
}