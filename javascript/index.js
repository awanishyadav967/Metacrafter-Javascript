
let nftsArray = [];


function mintNFT(name, eyeColor, shirtType, bling) {

  const newNFT = {
    name: name,
    eyeColor: eyeColor,
    shirtType: shirtType,
    bling: bling
  };


  nftsArray.push(newNFT);
}


function listNFTs() {

  nftsArray.forEach((nft, index) => {
    console.log(`NFT ${index + 1}:`);
    console.log("Name: " + nft.name);
    console.log("Eye Color: " + nft.eyeColor);
    console.log("Shirt Type: " + nft.shirtType);
    console.log("Bling: " + nft.bling);
    console.log("-------------");
  });
}


function getTotalSupply() {
  return nftsArray.length;
}


mintNFT("NFT1", "Blue", "T-Shirt", "Gold Chain");
mintNFT("NFT2", "Green", "Hoodie", "Diamond Ring");


listNFTs();

const totalSupply = getTotalSupply();
console.log("Total NFTs Minted: " + totalSupply);
