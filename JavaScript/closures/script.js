/*
createBankAccount(initialBalance) بحيث ترجع Object فيه 3 Methods:
- deposit(amount) تزود الرصيد.
- withdraw(amount) تخصم من الرصيد بشرط إن الرصيد كافي.
- getBalance() ترجع الرصيد الحالي.
الشروط:
- balance يفضل Private داخل الـ Closure.
- ممنوع الوصول إلى balance مباشرة من خارج الـ Function.
- كل Account جديد يكون مستقل عن الحسابات التانية.
*/

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount <= 0) {
        return "Invalid deposit amount";
      }

      balance += amount;
      return balance;
    },

    withdraw(amount) {
      if (amount <= 0) {
        return "Invalid withdrawal amount";
      }

      if (amount > balance) {
        return "Insufficient balance";
      }

      balance -= amount;
      return balance;
    },

    getBalance() {
      return balance;
    }
  };
}

// Create accounts
const acc1 = createBankAccount(500);
const acc2 = createBankAccount(1000);

// Account 1
console.log(acc1.getBalance()); // 500
console.log(acc1.deposit(200)); // 700
console.log(acc1.withdraw(100)); // 600

// Account 2
console.log(acc2.getBalance()); // 1000
