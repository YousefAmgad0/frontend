const user = {
  isLoggedIn: false,
  login() {
    this.isLoggedIn = true;
  },
  logout() {
    this.isLoggedIn = false;
  },
};
const admin = Object.create(user);
admin.role = "admin";
admin.permissions = [];
admin.addPermission = function (permission) {
  this.permissions.push(permission);
};
admin.addPermission("delete_user");
const guest = Object.create(user);
guest.role = "guest";
guest.permissions = [];

admin.login();
console.log(admin.isLoggedIn);

guest.login();
console.log(guest.isLoggedIn);

console.log(admin.permissions);
console.log(guest.permissions);
