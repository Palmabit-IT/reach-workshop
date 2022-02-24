import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [accAlice, accBob] = await stdlib.newTestAccounts(2, startingBalance);

console.log('Hello, Alice and Bob!');

console.log('Launching...');
const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

console.log('Starting backends...');


const getBalance = async (who) =>
  stdlib.formatCurrency(await stdlib.balanceOf(who), 4);

await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    amount: stdlib.parseCurrency(25),
    password: 1234,
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    getPassword: () => 12345
  }),
]);

const balanceAlice = await getBalance(accAlice);
const balanceBob = await getBalance(accBob);

console.log(`Alice: ${balanceAlice}.`);
console.log(`Bob: ${balanceBob}.`);