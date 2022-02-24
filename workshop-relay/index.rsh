'reach 0.1';

export const main = Reach.App(() => {
  const A = Participant('Alice', {
    amount: UInt,
    getRelay: Fun([], Address)
  });
  const R = Participant('Relay', {
    getBob: Fun([], Address)
  });
  init();

  A.only(() => {
    const amount = declassify(interact.amount);
    const relayAddress = declassify(interact.getRelay())
  });
  
  A.publish(amount, relayAddress)
    .pay(amount)

  R.set(relayAddress)

  commit();

  R.only(() => { 
    const bob = declassify(interact.getBob())
  })
  R.publish(bob);

  transfer(amount).to(bob);

  commit();

  exit();
});