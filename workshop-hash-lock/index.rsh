'reach 0.1';

/*
This program involves two parties: the payer sending the funds and the receiver of those funds. By tradition, we'll call the first 'Alice' and the second 'Bob'. You might like to use other names, like 'Sender' and 'Receiver'.13
Alice starts off knowing the amount she wants to send and the secret password.14
Bob starts off like Jon Snow and knows nothing.15
Alice doesn't learn anything during the execution of the program, but Bob learns the password.16
Alice transfers funds at the beginning of the program and Bob receives those funds at the end, after he learns the password.17
*/


/*
// Alice publishes the password and pays the amount
// Bob publishes the password
// The consensus ensures it's the right password and pays Bob
*/
export const main = Reach.App(() => {
  const A = Participant('Alice', {
    amount: UInt,
    password: UInt
  });
  const B = Participant('Bob', {
    getPassword: Fun([], UInt),
  });
  
  init();
  
  A.only(() => {
    const password = declassify(interact.password);
    const amount = declassify(interact.amount);
  });
  A.publish(password, amount)
    .pay(amount);

  // The first one to publish deploys the contract
  commit();

  B.only(() => {
    const pass = declassify(interact.getPassword());
    assume( password == pass );
  });
  
  // The second one to publish always attaches
  B.publish(pass);
  require( password == pass );

  transfer(amount).to(B);
  
  commit();

  // write your program here
  exit();
});
