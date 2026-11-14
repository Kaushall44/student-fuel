export type Combo = { id:string; name:string; price:number; items:string; tag?:string; image:string; description:string };
export const combos: Combo[] = [
 {id:'student-mini',name:'Student Mini',price:99,items:'12 Pc Momo + Coffee',tag:'STUDENT FAVOURITE',image:'https://images.unsplash.com/photo-1563240927-9d6f5c6c1c2a?auto=format&fit=crop&w=900&q=85',description:'A little break, a lot of happiness. Twelve pieces of momos with a coffee.'},
 {id:'masti-combo',name:'Masti Combo',price:119,items:'10 Pc Momo + Small Fries',image:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=85',description:'Momo moments meet crispy fries. Made for your snack cravings.'},
 {id:'friends-combo',name:'Friends Combo',price:149,items:'Mini Pizza + Coffee',image:'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=900&q=85',tag:'GOOD TO SHARE',description:'A mini pizza and coffee pairing for your catch-up plans.'},
 {id:'full-pet-combo',name:'Full Pet Combo',price:149,items:'2 Burger + Fries + Coffee',image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',description:'Two burgers, fries and coffee. Come hungry, leave happy.'},
 {id:'momo-lover',name:'Momo Lover',price:169,items:'12 Pc Momo + Fries + Coffee',image:'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85',tag:'BEST VALUE',description:'The full snack line-up for serious momo fans.'},
 {id:'2-friends-combo',name:'2 Friends Combo',price:199,items:'12 Pc Momo + 2 Coffee + Fries',image:'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=900&q=85',tag:'FOR TWO',description:'Good food tastes better together. A combo made for two.'}
];
