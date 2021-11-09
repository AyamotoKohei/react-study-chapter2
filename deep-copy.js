const patty = {
  name: 'Patty Rabbit',
  email: 'patty@maple.com',
  address: { town: 'Maple Town' },
};

// 強引な手段で DeepCopy を行う
const rolley = JSON.parse(JSON.stringify(patty));
rolley.name = 'Rolley Cocker';
rolley.email = 'rolley@palm.town';
rolley.address.town = 'Palm Town';

console.log(patty);