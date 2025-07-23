class Account {
  acc_id;
  acc_Name;
  acc_amount;
  constructor(id, name, amount) {
    this.acc_id = id;
    this.acc_Name = name;
    this.acc_amount = amount;
  }
  deposit_Amount(amount) {
    this.acc_amount += amount;
  }
  withdrawl_Amount(amount) {
    if (this.acc_amount >= amount) {
      this.acc_amount -= amount;
    } else {
      console.log("insufficient balance .withdrawal failed.");
    }
  }
  show_account_info() {
    console.log(
      `account Details:id:${this.acc_id},Name:${this.acc_Name},balance:${this.acc_amount}`
    );
  }
}

let a1 = new Account("101", "naveen", 100);
let a2 = new Account("101", "naveen", 100);

a1.deposit_Amount(200);
console.log(a1.acc_amount);

a1.withdrawl_Amount(300);
console.log(a1.acc_amount);

a1.show_account_info();
