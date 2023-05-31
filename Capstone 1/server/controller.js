module.exports = {

    getFact: (req, res) => {
        const Fact = ["Napoleon Was Once Attacked By a Horde of Bunnies", "Lyndon B. Johnson Gave Interviews From the Bathroom", "Ketchup Was Sold in the 1830s as Medicine", "President Abraham Lincoln is in the Wrestling Hall of Fame", "John Adams and Thomas Jefferson Died on the Same Day", "U.S. President Zachary Taylor Overdosed On Cherries", "Calvin Coolidge Owned a Pair of Lions"];
      
        let randomIndex = Math.floor(Math.random() * Fact.length);
        let randomFact = Fact[randomIndex];
      
        res.status(200).send(randomFact);
    },

    addSignin: (req, res) => {
        console.log(req)
        res.status(200)
    }
}