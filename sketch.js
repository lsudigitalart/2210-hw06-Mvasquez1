let barrel, trees, monMove, gb, shootingStars, blueSky, monkeyL, monToy, sun, screamingMonkey, deadTrees, monScared, deadLand;
// var monkey1 = [];
// var index = 0;

function preload() {
  screamingMonkey = loadImage("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9db7e68c-6ea2-44ec-9cbf-0943e8dbb786/d6ir1tw-40ec842b-b806-4f4d-8c97-9d04e6cb7bd4.jpg/v1/fill/w_1024,h_686,q_75,strp/screaming_monkey_by_phantomhivelen_d6ir1tw-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Njg2IiwicGF0aCI6IlwvZlwvOWRiN2U2OGMtNmVhMi00NGVjLTljYmYtMDk0M2U4ZGJiNzg2XC9kNmlyMXR3LTQwZWM4NDJiLWI4MDYtNGY0ZC04Yzk3LTlkMDRlNmNiN2JkNC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.L8QcsrNQAD42aeKiCTN1Hkv4bt1fVh0g46tNeiKJi-I");
  deadTrees = loadImage("https://image.cnbcfm.com/api/v1/image/106975234-1636936362963-gettyimages-1228062683-AFP_1WJ4KX.jpeg?v=1636936106");
  monScared = loadImage("https://media.tenor.com/fmfjuTk7k8gAAAAM/monkey-monkey-scared.gif");
  
  
  monkeyL = loadImage("https://images.foxtv.com/static.fox5atlanta.com/www.fox5atlanta.com/content/uploads/2024/01/1280/720/monkey-8106216_1280.jpg?ve=1&tl=1");
  trees = loadImage("https://i.natgeofe.com/n/6ef19f2a-1cf9-4c0a-9760-cbac719036d2/AdamKuehl_33-7037152c-84-399185.jpg");
  barrel = loadImage("ofmonkeys.png");
  monMove = loadImage("https://media.tenor.com/E_6bB3MgpVsAAAAM/monkey-sleep-cute-monkey.gif");
  bar = loadImage("https://preview.redd.it/donkey-kong-barrels-v0-6mvks2ktzk0a1.png?auto=webp&s=ed1dfc93273fbf0eca42ff957dddc740e43f4092");
  gb = loadImage("https://media.tenor.com/Jg8v962BbwgAAAAi/golden-gold.gif");
  monToy = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVBSPsnpy_oa9kKjKhcdloGeWwOyfVVLbV7w&s");
  blueSky = loadImage("https://images.squarespace-cdn.com/content/v1/5d8fc40ed3f19b71ebb703a6/1698174233089-UX53RDNGYJ990ZM9ETC2/Blue+Sky+App+Photo.png");
  shootingStars = loadImage("https://cdn.mos.cms.futurecdn.net/dVeMzgbQBqrsRFtZAQY6J8.jpg");
  sun = loadImage("https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-the-sun-shows-its-majestic-face-png-image_11910423.png");
  deadLand = loadImage("https://c8.alamy.com/comp/FA1MRT/desert-and-destroyed-land-with-dried-mud-through-global-warming-and-FA1MRT.jpg");
}

function setup() {
  createCanvas(600, 500);
  rand = round(random(2));
} 

function draw() { 
   
 
  if(rand == 0)
  {
    image(blueSky, 0, 0, 600, 500);
    image(sun, 0,10,170,170);
    image(trees, 0, 310, 700, 200);
    image(barrel, 200, 400, 50, 50);
    image(monToy, 430, 400, 50, 50);
    image(bar, 280, 400, 100, 100);
    image(monkeyL, 0,400, 100, 100)
    image(monMove, 500, 400, 100, 100);
    image(gb, 300, 350, 50, 50);
  } else if (rand == 1)
  {
    image(shootingStars, 0, 0, 600, 500);
    tint(100,60);
    image(sun, 0,10,170,170);
    noTint();
    image(deadTrees, 0, 310, 700, 200);
    image(screamingMonkey, 0,400, 100, 100);
    image(monScared, 500, 400, 100, 100);
  }else 
  {
    image(deadLand, 0, 0, 600, 500);

  }
 
  //https://editor.p5js.org/NicolasTilly/sketches/TfD4jqH1F
  //issue 1 banana 
  //issue 2 changing image based on framecount
  //if setup//rand = round(random()) (rand){} = 2 death, if rand = 1 life, rand = 3 nothingness

}